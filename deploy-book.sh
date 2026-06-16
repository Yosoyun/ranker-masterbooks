#!/usr/bin/env bash
# Add or update a masterbook on the ranker-masterbooks site.
# PDFs are NOT committed — they go to the 'pdfs' GitHub Release (keeps Pages + git lean).
#
# Usage:  ./deploy-book.sh <book-slug> [source-dir]
#   e.g.  ./deploy-book.sh matrix-masterbook "../automate x/matrix-masterbook"
#
# After running: add a <div class="book ..."> card to index.html, then commit & push.
set -euo pipefail
SLUG="${1:?usage: ./deploy-book.sh <book-slug> [source-dir]}"
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="${2:-$REPO_DIR/../automate x/$SLUG}"
BASE="https://github.com/Yosoyun/ranker-masterbooks/releases/download/pdfs"

[ -d "$SRC" ] || { echo "source not found: $SRC"; exit 1; }

# 1. copy the book in — no PDFs, no node_modules / scratch
rsync -a --delete \
  --exclude 'node_modules' --exclude '_gen' --exclude '*.pdf' \
  --exclude 'tools/_problems.html' --exclude 'tools/_solutions.html' \
  --exclude '.DS_Store' --exclude '*.log' \
  "$SRC/" "$REPO_DIR/$SLUG/"

# 2. upload its PDFs to the shared 'pdfs' release (stable URLs)
shopt -s nullglob
for pdf in "$SRC"/*.pdf; do gh release upload pdfs "$pdf" --clobber; done

# 3. rewrite the copied book's cover PDF links → release URLs
for pdf in "$SRC"/*.pdf; do
  n="$(basename "$pdf")"
  sed -i '' "s|href=\"$n\"|href=\"$BASE/$n\"|g" "$REPO_DIR/$SLUG/app.js"
done

echo "✓ $SLUG copied (PDFs → release '$BASE')."
echo "  Next: add a card to index.html, then: git add -A && git commit && git push"

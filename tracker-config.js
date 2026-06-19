/* ============================================================
   Ranker's Masterbooks — student tracking config
   ------------------------------------------------------------
   Paste your Supabase project URL and ANON (public) key below,
   then set enabled:true. Until then the books still work fully —
   feedback + the student growth panel run locally with no network.
   The ANON key is safe to publish (Row-Level Security only allows
   INSERT). The teacher dashboard uses your SERVICE key, which you
   paste into the dashboard once and is NEVER stored in this file.
   ============================================================ */
window.TRACKER = {
  url:     "https://YOUR-PROJECT.supabase.co",   // <-- paste your Project URL
  anonKey: "YOUR-ANON-PUBLIC-KEY",               // <-- paste your anon public key
  enabled: false                                  // <-- set true once the two above are filled
};

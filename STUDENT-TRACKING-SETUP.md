# Student Tracking — Setup (≈10 minutes, one time)

Give your students the normal book links. Each student signs in once with **their name + a class code you choose** (e.g. `JEE25`). As they solve and rate problems, their **progress, understanding, confidence and satisfaction** are recorded, and they get a personal **“My growth”** panel. You watch everything from the **Teacher Dashboard**.

Until you do the steps below, the books still work perfectly — feedback and the growth panel just run **on the student’s device only** (nothing is sent anywhere). Doing the steps “turns on” central recording.

---

## 1. Create a free Supabase project
1. Go to **https://supabase.com** → sign in (GitHub or email) → **New project**.
2. Name it (e.g. `masterbooks`), set a database password (save it), pick a region near your students, **Create**. Wait ~1 min.

## 2. Create the table (paste this SQL)
Left sidebar → **SQL Editor** → **New query** → paste and **Run**:

```sql
create table if not exists events (
  id          bigint generated always as identity primary key,
  device_id   text not null,
  name        text not null,
  class_code  text not null,
  book        text not null,
  problem_id  text,
  theme       text,
  kind        text not null,   -- signin | view | solved | unsolved | understood | confidence | satisfaction | topic_confidence
  value       numeric,         -- rating (1–5) or 0/1 for "got it"
  note        text,
  created_at  timestamptz default now()
);
create index if not exists events_class_idx on events (class_code, created_at);

-- Row-Level Security: the public (anon) key may INSERT only — it can never read students' data.
alter table events enable row level security;
create policy "anon can insert" on events for insert to anon with check (true);
```

## 3. Copy your keys
Left sidebar → **Project Settings → API**:
- **Project URL** → e.g. `https://abcd1234.supabase.co`
- **`anon` `public`** key (long string) — safe to publish.
- **`service_role`** key (secret) — for the dashboard only; never share or commit it.

## 4. Turn it on
Edit **`tracker-config.js`** (in this repo root) and fill in:
```js
window.TRACKER = {
  url:     "https://abcd1234.supabase.co",  // your Project URL
  anonKey: "eyJ…",                          // your anon public key
  enabled: true                              // flip to true
};
```
Commit & push (or just tell me the two values and I’ll paste them and push for you). That’s it — every book now records to your project.

---

## Using the Teacher Dashboard
Open **`/teacher/`** on the live site:
**https://yosoyun.github.io/ranker-masterbooks/teacher/**

1. Paste your **Project URL** and **service_role key** (stored only in your browser — open it on your own device).
2. **Load data.** You’ll see, per student: problems solved, **got-it %**, **confidence**, **satisfaction**, the topic they **need help** with most, last active, and their written notes. Filter by **class code** or **book**; click a column to sort; click a row for their notes.

Refresh anytime to pull the latest.

---

## What students see
- A one-time **sign-in** (name + class code).
- On every problem: **“Did you get it? 👍/🤔”** and a **confidence ★1–5**.
- A floating **“📈 My growth”** (their solved count, got-it rate, average confidence, and the topic to focus on next) and a **“✓ Check-in”** (satisfaction + topic confidence + an optional note). A gentle check-in also pops up after sustained activity.

## Privacy
Only **first name + class code** are collected (no email/PII needed) — good practice for minors. The public key can only *write*; reading requires your secret key, which lives solely in your browser. You can wipe all data anytime in Supabase (Table editor → `events` → delete rows) or rotate keys in Project Settings.

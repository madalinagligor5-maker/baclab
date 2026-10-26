-- BacLab — schema Supabase (Faza 2: conturi, sincronizare, plăți). Faza 1 rulează local-first, fără server.
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  display_name text,
  exam_date date,
  minutes int not null default 20 check (minutes in (10, 20, 30)),
  created_at timestamptz not null default now()
);

create table public.card_state (
  user_id uuid not null references auth.users on delete cascade,
  item_id text not null,
  ease real not null,
  interval int not null,
  reps int not null,
  lapses int not null,
  due date not null,
  last smallint not null check (last between 0 and 3),
  first_seen date not null,
  last_seen date not null,
  count int not null default 1,
  primary key (user_id, item_id)
);

create table public.attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  item_id text not null,
  chapter text not null,
  correct boolean not null,
  grade smallint not null check (grade between 0 and 3),
  day date not null,
  created_at timestamptz not null default now()
);
create index attempts_user_day on public.attempts (user_id, day);

create table public.sim_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  paper_id text not null,
  points numeric not null,
  total numeric not null,
  nota numeric not null,
  by_chapter jsonb not null default '{}',
  finished_at timestamptz not null default now()
);

create table public.entitlements (
  user_id uuid primary key references auth.users on delete cascade,
  plan text not null check (plan in ('lunar', 'pana-la-bac')),
  valid_until timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  updated_at timestamptz not null default now()
);

create or replace function public.is_premium(uid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.entitlements e
    where e.user_id = uid and (e.valid_until is null or e.valid_until > now())
  );
$$;

alter table public.profiles enable row level security;
alter table public.card_state enable row level security;
alter table public.attempts enable row level security;
alter table public.sim_runs enable row level security;
alter table public.entitlements enable row level security;

create policy "profil propriu" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "carduri proprii" on public.card_state for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "încercări proprii" on public.attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "simulări proprii" on public.sim_runs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
-- entitlements: doar citire pentru utilizator; scrierea se face din webhook-ul Stripe (service role)
create policy "drept propriu (citire)" on public.entitlements for select using (auth.uid() = user_id);

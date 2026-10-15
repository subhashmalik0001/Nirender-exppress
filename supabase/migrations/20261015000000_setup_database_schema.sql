-- Migration: Complete database schema for Narindra Express (qssgwytrtpyxukjypfxy)
-- Includes: orders, products, categories tables, RLS policies, indexes, and realtime publication

-- 1. ORDERS TABLE
create table if not exists public.orders (
  id text primary key,
  customer_name text not null,
  phone text not null,
  alt_phone text,
  email text,
  address text not null,
  city text,
  state text,
  pincode text,
  payment_method text default 'Cash on Delivery (COD)',
  items jsonb not null default '[]'::jsonb,
  items_text text,
  subtotal numeric default 0,
  delivery_charge numeric default 50,
  total numeric not null,
  status text not null default 'PROCESSING',
  email_status text default 'PENDING',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. PRODUCTS TABLE
create table if not exists public.products (
  id text primary key,
  name text not null,
  category text not null,
  category_name text not null,
  subcategory text,
  brand text not null,
  original_price numeric not null,
  discounted_price numeric not null,
  rating numeric default 5.0,
  reviews_count integer default 0,
  image text not null,
  description text,
  specs jsonb default '{}'::jsonb,
  in_stock boolean default true,
  quantity integer default 10,
  featured boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. CATEGORIES TABLE
create table if not exists public.categories (
  id text primary key,
  name text not null,
  image text,
  subcategories jsonb default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security (RLS)
alter table public.orders enable row level security;
alter table public.products enable row level security;
alter table public.categories enable row level security;

-- Policies for public.orders
drop policy if exists "Allow all on orders" on public.orders;
create policy "Allow all on orders" on public.orders
for all to anon, authenticated using (true) with check (true);

-- Policies for public.products
drop policy if exists "Allow all on products" on public.products;
create policy "Allow all on products" on public.products
for all to anon, authenticated using (true) with check (true);

-- Policies for public.categories
drop policy if exists "Allow all on categories" on public.categories;
create policy "Allow all on categories" on public.categories
for all to anon, authenticated using (true) with check (true);

-- Indexes for high performance queries
create index if not exists idx_orders_created_at on public.orders (created_at desc);
create index if not exists idx_products_category on public.products (category);
create index if not exists idx_products_brand on public.products (brand);
create index if not exists idx_products_created_at on public.products (created_at desc);

-- Realtime replication
alter publication supabase_realtime add table public.products;
alter publication supabase_realtime add table public.orders;
alter publication supabase_realtime add table public.categories;

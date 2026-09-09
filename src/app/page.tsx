import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const lifecycle = [
  "Pending",
  "Assigned",
  "Picked Up",
  "In Transit",
  "Delivered",
];

const modules = [
  {
    title: "Users & roles",
    text: "Email/phone registration, OTP verification, password reset, and RBAC for Customer, Dispatcher, Driver, Admin and Super Admin.",
  },
  {
    title: "Profile & addresses",
    text: "Manage personal info, address book and saved locations for faster shipment creation.",
  },
  {
    title: "Shipment creation",
    text: "Capture pickup, delivery, package details, weight and dimensions in one order form.",
  },
  {
    title: "Tracking",
    text: "Auto-generated tracking numbers with public lookup and full movement history.",
  },
  {
    title: "Pricing engine",
    text: "Automatic cost from distance and weight, with admin-editable rules per shipment type.",
  },
  {
    title: "Payments & invoices",
    text: "Stripe checkout, Cash on Delivery, payment confirmation and automatic invoice records.",
  },
];

const shipmentTypes = [
  { name: "Same-day", detail: "Priority local delivery for urgent packages." },
  { name: "Express", detail: "Faster intercity shipping with premium rates." },
  { name: "Standard", detail: "Balanced everyday delivery for regular volume." },
  { name: "Scheduled", detail: "Plan pickup/delivery for a chosen time window." },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main overflow-hidden rounded-[1.5rem] hero-panel text-white">
          <div className="grid gap-8 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-12 lg:p-14">
            <div>
              <p className="kicker fade-up text-[var(--mint)]">Vettore Logistics MVP</p>
              <h1 className="heading fade-up fade-up-1 mt-4 text-[clamp(2.3rem,6vw,4.2rem)]">
                Create shipments, track orders and run delivery operations
              </h1>
              <p className="fade-up fade-up-2 mt-5 max-w-xl text-base text-white/80 md:text-lg">
                Phase 1 platform for accounts, order lifecycle, pricing, payments and admin overview — built for web on Vercel, Render and Supabase.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/register" className="btn btn-mint">
                  Register to ship
                </Link>
                <Link href="/tracking" className="btn btn-ghost-light">
                  Open tracking
                </Link>
              </div>
            </div>

            <div className="rounded-[1.15rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">Quick track</p>
              <p className="mt-2 text-sm text-white/80">Use a tracking number from any created shipment.</p>
              <Link href="/tracking" className="btn btn-mint mt-5 w-full">
                Go to tracking page
              </Link>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/55">Shipment types</p>
                  <p className="mt-1 text-xl font-semibold">4</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/55">User roles</p>
                  <p className="mt-1 text-xl font-semibold">5</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/55">Order statuses</p>
                  <p className="mt-1 text-xl font-semibold">6</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/55">Payment modes</p>
                  <p className="mt-1 text-xl font-semibold">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-main">
          <p className="kicker">Order lifecycle</p>
          <h2 className="heading mt-3 text-2xl md:text-3xl">Status flow used in the MVP</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {lifecycle.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[var(--navy)] shadow-sm ring-1 ring-[var(--line)]">
                  {index + 1}. {step}
                </span>
                {index < lifecycle.length - 1 && <span className="text-[var(--muted)]">→</span>}
              </div>
            ))}
            <span className="rounded-lg bg-[var(--sand)] px-3 py-2 text-sm font-semibold text-[var(--navy)] ring-1 ring-[var(--line)]">
              Cancelled (when needed)
            </span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <p className="kicker">MVP modules</p>
          <h2 className="heading mt-3 max-w-2xl text-3xl md:text-4xl">Everything required for Phase 1 launch</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
              <article key={item.title} className="panel p-5 md:p-6">
                <h3 className="heading text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-main grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.25rem] bg-[var(--navy)] p-7 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--mint)]">Shipment types</p>
            <h2 className="heading mt-3 text-3xl">Choose how each package moves</h2>
            <p className="mt-3 text-sm text-white/70">
              Customers select a type during shipment creation. Pricing rules apply automatically per type.
            </p>
            <Link href="/services" className="btn btn-mint mt-6">
              View services
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {shipmentTypes.map((item) => (
              <article key={item.name} className="panel p-5">
                <h3 className="heading text-lg">{item.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-main panel overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-[var(--line)] p-7 md:border-b-0 md:border-r md:p-8">
              <p className="kicker">Pricing</p>
              <h2 className="heading mt-3 text-2xl md:text-3xl">Distance + weight calculation</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Quote formula: base fee + (km × per-km rate) + (kg × per-kg rate), with a minimum fee. Admins can edit rules.
              </p>
              <Link href="/pricing" className="btn btn-outline mt-5">
                Pricing details
              </Link>
            </div>
            <div className="bg-[var(--sand)] p-7 md:p-8">
              <p className="kicker">Payments</p>
              <h2 className="heading mt-3 text-2xl md:text-3xl">Stripe and Cash on Delivery</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li>• Online card checkout with Stripe</li>
                <li>• COD option for eligible orders</li>
                <li>• Automatic invoice generation after payment</li>
              </ul>
              <Link href="/register" className="btn btn-primary mt-5">
                Start with an account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-main">
          <p className="kicker">Roles</p>
          <h2 className="heading mt-3 text-3xl">Who uses the platform</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Customer", "Dispatcher", "Driver", "Admin", "Super Admin"].map((role) => (
              <div key={role} className="panel px-4 py-5 text-center">
                <p className="heading text-base">{role}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="btn btn-primary">
              Admin dashboard
            </Link>
            <Link href="/about" className="btn btn-outline">
              About the MVP
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

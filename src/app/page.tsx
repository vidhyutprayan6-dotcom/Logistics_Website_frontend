import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const stats = [
  { label: "Cities covered", value: "40+" },
  { label: "Shipments / month", value: "12k" },
  { label: "On-time rate", value: "98%" },
  { label: "Support", value: "24/7" },
];

const capabilities = [
  {
    tag: "Operations",
    title: "Create shipments in minutes",
    text: "Pickup, delivery, package details and pricing — one clear flow for every order.",
    href: "/register",
  },
  {
    tag: "Visibility",
    title: "Track every movement",
    text: "Auto-generated tracking IDs with full status history from pending to delivered.",
    href: "/tracking",
  },
  {
    tag: "Control",
    title: "Price with confidence",
    text: "Distance and weight rules that stay transparent for customers and dispatchers.",
    href: "/pricing",
  },
];

const services = [
  {
    title: "Same-day delivery",
    subtitle: "When speed is non-negotiable",
    points: ["Local priority routing", "Dispatcher assignment", "Live status updates"],
  },
  {
    title: "Express & standard",
    subtitle: "Balanced cost and reliability",
    points: ["Intercity lanes", "Predictable SLAs", "Invoice-ready checkout"],
  },
  {
    title: "Scheduled delivery",
    subtitle: "Plan ahead without chaos",
    points: ["Choose pickup windows", "Confirm recipient details", "Reduce failed attempts"],
  },
  {
    title: "Business accounts",
    subtitle: "Built for recurring volume",
    points: ["Role-based access", "Order overview", "Admin dashboard insights"],
  },
];

export default function Home() {
  return (
    <SiteShell>
      {/* Hero — brand first, one composition, full-bleed visual */}
      <section className="hero-visual relative min-h-[88vh] text-white">
        <div className="container-main flex min-h-[88vh] flex-col justify-end pb-14 pt-24 md:justify-center md:pb-20">
          <p className="eyebrow reveal text-white/70">Vettore Logistics</p>
          <h1 className="display reveal reveal-delay-1 mt-5 max-w-4xl text-[clamp(2.8rem,9vw,6.6rem)]">
            There is more
            <br />
            than meets the eye
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Smart logistics for clear shipping, dependable tracking and operations that feel effortless.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-accent">
              Start shipping
            </Link>
            <Link href="/tracking" className="btn btn-ghost border-white/40 text-white">
              Track a parcel
            </Link>
          </div>
        </div>
      </section>

      {/* Split value props — Wink style */}
      <section className="section-pad">
        <div className="container-main grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.8rem] bg-white p-8 soft-shadow md:p-10">
            <p className="eyebrow">Valuable delivery</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Clear websites for moving goods</h2>
            <p className="mt-4 text-[var(--muted)]">
              We present your logistics flow with force and clarity. No clutter. No noise. Just a product people understand instantly.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium">
              <li>Shipment creation</li>
              <li>Public tracking</li>
              <li>Role-ready dashboards</li>
            </ul>
          </article>
          <article className="rounded-[1.8rem] bg-[var(--ink)] p-8 text-white md:p-10">
            <p className="eyebrow text-white/50">Smart logistics</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Systems that pay for themselves</h2>
            <p className="mt-4 text-white/70">
              Pricing, payments and lifecycle status updates work together so teams spend less time chasing updates and more time delivering.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-white/90">
              <li>Distance + weight pricing</li>
              <li>Stripe checkout & COD</li>
              <li>Order lifecycle control</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Stats marquee */}
      <section className="overflow-hidden border-y border-[var(--line)] bg-white py-6">
        <div className="marquee-track gap-10 px-4">
          {[...stats, ...stats, ...stats, ...stats].map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="flex items-baseline gap-3 whitespace-nowrap">
              <span className="display text-3xl">{item.value}</span>
              <span className="text-sm text-[var(--muted)]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-pad">
        <div className="container-main grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Why Vettore</p>
            <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4.6rem)]">
              Built for people,
              <br />
              not for chaos
            </h2>
          </div>
          <p className="max-w-md text-[var(--muted)] md:pb-2">
            We digitize, automate and clarify logistics workflows so your team always has the right tools — simple, fast and human.
          </p>
        </div>
        <div className="container-main mt-10">
          <Link href="/about" className="btn btn-primary">
            More about us
          </Link>
        </div>
      </section>

      {/* Case-style capability rows */}
      <section className="border-t border-[var(--line)] bg-white section-pad">
        <div className="container-main flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Product</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">See what is possible</h2>
          </div>
          <Link href="/services" className="hidden text-sm font-semibold underline underline-offset-4 md:inline">
            View all services
          </Link>
        </div>

        <div className="container-main mt-10 space-y-4">
          {capabilities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group grid gap-4 rounded-[1.5rem] border border-[var(--line)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-[var(--paper)] md:grid-cols-[140px_1.2fr_1fr_auto] md:items-center md:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{item.tag}</span>
              <h3 className="display text-2xl md:text-3xl">{item.title}</h3>
              <p className="text-sm text-[var(--muted)] md:text-base">{item.text}</p>
              <span className="text-2xl transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services accordion-like cards */}
      <section className="section-pad">
        <div className="container-main">
          <p className="eyebrow">Services</p>
          <h2 className="display mt-3 max-w-2xl text-3xl md:text-5xl">Shipping options that stay clear</h2>
        </div>
        <div className="container-main mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-[1.5rem] border border-[var(--line)] bg-white p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--muted)]">0{index + 1}</p>
                  <h3 className="display mt-2 text-2xl md:text-3xl">{service.title}</h3>
                  <p className="mt-2 text-[var(--muted)]">{service.subtitle}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--paper-2)] text-xl">+</span>
              </div>
              <ul className="mt-6 space-y-2 border-t border-[var(--line)] pt-5 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-[var(--accent)]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-[var(--line)] bg-[var(--ink)] text-white section-pad">
        <div className="container-main">
          <p className="eyebrow text-white/50">Through their eyes</p>
          <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">Trusted by teams who need logistics without friction</h2>
        </div>
        <div className="container-main mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              quote: "Vettore made our dispatch board readable for the first time. Status updates finally feel consistent.",
              name: "Giulia R.",
              role: "Operations lead",
            },
            {
              quote: "Customers stop calling for updates because tracking is clear. That alone paid for the switch.",
              name: "Marco T.",
              role: "Customer success",
            },
            {
              quote: "Pricing is transparent and checkout is fast. Our drivers and admins use the same language.",
              name: "Elena B.",
              role: "Founder",
            },
          ].map((item) => (
            <blockquote key={item.name} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-6">
              <p className="text-lg leading-relaxed text-white/90">“{item.quote}”</p>
              <footer className="mt-6 text-sm text-white/60">
                <span className="font-semibold text-white">{item.name}</span> · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-main overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#111,#2a2a2a_55%,#ff4d1a)] p-8 text-white md:p-14">
          <p className="eyebrow text-white/60">Ready when you are</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)]">
            Let’s make logistics feel simple again
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Create an account, ship your first order, and track it end to end — all from one responsive platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-light">
              Create account
            </Link>
            <Link href="/contact" className="btn btn-ghost border-white/35 text-white">
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

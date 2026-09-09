import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main">
          <p className="eyebrow">About</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.5rem,7vw,5rem)]">
            A logistics MVP
            <br />
            built for launch
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Vettore is a Phase 1 logistics platform covering user accounts, shipment creation, order lifecycle, tracking, pricing, payments and admin control.
          </p>
        </div>
        <div className="container-main mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Users", "Registration, OTP, password reset, profiles, addresses and RBAC roles."],
            ["Orders", "Create shipments, choose delivery type, update status and prepare proof of delivery."],
            ["Operations", "Track parcels, calculate prices, collect payments and monitor KPIs."],
          ].map(([title, text]) => (
            <article key={title} className="lined-card p-7">
              <h2 className="display text-2xl">{title}</h2>
              <p className="mt-3 text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
        <div className="container-main mt-12 overflow-hidden rounded-[2rem] bg-[var(--ink)] p-8 text-white md:p-12">
          <h2 className="display max-w-3xl text-3xl md:text-5xl">Aligned to the client MVP plan</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Real-time GPS fleet optimization and mobile apps are out of Phase 1 scope. This release focuses on the core platform needed to go live.
          </p>
          <Link href="/contact" className="btn btn-accent mt-8">
            Discuss requirements
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

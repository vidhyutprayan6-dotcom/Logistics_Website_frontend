import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main max-w-3xl">
          <p className="kicker">About</p>
          <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">About the Vettore Logistics MVP</h1>
          <p className="mt-4 text-[var(--muted)]">
            Vettore is a Phase 1 logistics platform focused on the features required to launch: user accounts, shipment workflows, tracking, pricing, payments and admin monitoring.
          </p>
        </div>

        <div className="container-main mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "In scope",
              text: "Auth, RBAC, profiles, shipment creation, lifecycle, tracking IDs, distance/weight pricing, Stripe/COD, invoices, admin stats, responsive web UI.",
            },
            {
              title: "Out of scope (Phase 1)",
              text: "Live GPS fleet tracking, route optimization, native mobile apps, multi-warehouse inventory and advanced notification providers.",
            },
            {
              title: "Stack",
              text: "Frontend on Vercel, backend API on Render, database on Supabase, JWT authentication and Stripe for MVP payments.",
            },
          ].map((item) => (
            <article key={item.title} className="panel p-6">
              <h2 className="heading text-xl">{item.title}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="container-main mt-8">
          <Link href="/contact" className="btn btn-primary">
            Contact the team
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

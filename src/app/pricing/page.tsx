import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const tiers = [
  { name: "Same-day", note: "Highest urgency rates" },
  { name: "Express", note: "Premium intercity rates" },
  { name: "Standard", note: "Balanced default rates" },
  { name: "Scheduled", note: "Planned delivery rates" },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main max-w-3xl">
          <p className="kicker">Pricing</p>
          <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Distance and weight based pricing</h1>
          <p className="mt-4 text-[var(--muted)]">
            Each shipment type has its own base fee, per-km rate, per-kg rate and minimum fee. Final quotes are generated during order creation.
          </p>
        </div>

        <div className="container-main mt-8 panel p-6 md:p-8">
          <h2 className="heading text-xl">Quote formula</h2>
          <p className="mt-3 rounded-xl bg-[var(--sky)] px-4 py-3 font-mono text-sm text-[var(--navy)]">
            max(minFee, baseFee + distanceKm × perKmRate + weightKg × perKgRate)
          </p>
        </div>

        <div className="container-main mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <article key={tier.name} className="panel p-5">
              <h3 className="heading text-lg">{tier.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{tier.note}</p>
            </article>
          ))}
        </div>

        <div className="container-main mt-6 panel p-6">
          <h2 className="heading text-xl">Payments in MVP</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)] md:grid-cols-3">
            <li>• Stripe card checkout</li>
            <li>• Cash on Delivery</li>
            <li>• Automatic invoices</li>
          </ul>
        </div>

        <div className="container-main mt-8 flex flex-wrap gap-3">
          <Link href="/register" className="btn btn-primary">
            Register and get quotes
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

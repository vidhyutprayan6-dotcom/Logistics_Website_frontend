import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const tiers = [
  { name: "Same Day", hint: "Urgent local", points: ["Highest base fee", "Highest per-km rate", "Best for city urgency"] },
  { name: "Express", hint: "Fast intercity", points: ["Premium distance rate", "Faster handling", "Strong for business parcels"], featured: true },
  { name: "Standard", hint: "Everyday shipping", points: ["Lowest entry pricing", "Weight-based add-on", "Reliable default option"] },
  { name: "Scheduled", hint: "Planned delivery", points: ["Timed pickup support", "Balanced rates", "Fewer failed attempts"] },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,7vw,4.8rem)]">
            Distance and weight
            <br />
            based pricing
          </h1>
          <p className="mt-5 text-lg text-[var(--muted)]">
            Cost = base fee + distance rate + weight rate, with a minimum fee per shipment type. Admins can edit rules.
          </p>
        </div>
        <div className="container-main mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[var(--radius-lg)] p-7 ${tier.featured ? "bg-[var(--ink)] text-white" : "lined-card"}`}
            >
              <p className={`eyebrow ${tier.featured ? "text-white/50" : ""}`}>{tier.hint}</p>
              <h2 className="display mt-3 text-3xl">{tier.name}</h2>
              <p className="mt-4 font-semibold text-[var(--accent)]">Base + km + kg</p>
              <ul className={`mt-6 space-y-2 text-sm ${tier.featured ? "text-white/75" : "text-[var(--muted)]"}`}>
                {tier.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="container-main mt-10 soft-card p-6 md:p-8">
          <h3 className="display text-2xl">Payment options in MVP</h3>
          <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)] md:grid-cols-3">
            <li>• Online card payment via Stripe</li>
            <li>• Cash on Delivery (COD)</li>
            <li>• Automatic invoice generation</li>
          </ul>
        </div>
        <div className="container-main mt-10 flex flex-wrap gap-3">
          <Link href="/register" className="btn btn-dark">
            Get a quote in checkout
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Ask about business pricing
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

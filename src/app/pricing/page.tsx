import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const tiers = [
  {
    name: "Same Day",
    hint: "Urgent local",
    base: "from €18",
    points: ["Higher base fee", "Priority distance rate", "Best for city urgency"],
  },
  {
    name: "Express",
    hint: "Fast intercity",
    base: "from €12",
    points: ["Balanced premium", "Faster SLA", "Ideal for business parcels"],
    featured: true,
  },
  {
    name: "Standard",
    hint: "Everyday value",
    base: "from €8",
    points: ["Lowest entry price", "Reliable transit", "Perfect for regular volume"],
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="display mt-4 text-[clamp(2.6rem,8vw,5rem)]">Transparent by design</h1>
          <p className="mt-5 text-lg text-[var(--muted)]">
            Final price = base fee + distance + weight, with a clear minimum. No hidden multipliers in the MVP flow.
          </p>
        </div>

        <div className="container-main mt-12 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[1.6rem] p-7 md:p-8 ${
                tier.featured ? "bg-[var(--ink)] text-white" : "border border-[var(--line)] bg-white"
              }`}
            >
              <p className={`eyebrow ${tier.featured ? "text-white/50" : ""}`}>{tier.hint}</p>
              <h2 className="display mt-3 text-3xl">{tier.name}</h2>
              <p className={`mt-4 text-2xl font-semibold ${tier.featured ? "text-[var(--accent)]" : "text-[var(--accent)]"}`}>
                {tier.base}
              </p>
              <ul className={`mt-6 space-y-2 text-sm ${tier.featured ? "text-white/75" : "text-[var(--muted)]"}`}>
                {tier.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="container-main mt-10 flex flex-wrap gap-3">
          <Link href="/register" className="btn btn-primary">
            Get a live quote
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Ask about volume pricing
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

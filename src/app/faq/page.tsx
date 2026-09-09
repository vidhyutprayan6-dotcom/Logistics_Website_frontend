import { SiteShell } from "@/components/SiteShell";

const faqs = [
  {
    q: "Which features are included in Phase 1 MVP?",
    a: "User accounts with OTP, roles, profile and addresses, shipment creation, order lifecycle, tracking numbers, distance/weight pricing, Stripe + COD payments, invoices and an admin dashboard.",
  },
  {
    q: "How do I track a shipment?",
    a: "Use the Tracking page with the auto-generated tracking number created when the order is placed.",
  },
  {
    q: "Which shipment types are supported?",
    a: "Same-day, express, standard and scheduled delivery.",
  },
  {
    q: "How is pricing calculated?",
    a: "Automatic calculation from base fee + distance rate + weight rate, with a minimum fee. Admins can edit pricing rules.",
  },
  {
    q: "What payment methods are available?",
    a: "Online card payment through Stripe and Cash on Delivery. Paid orders can generate invoices automatically.",
  },
  {
    q: "What is out of scope for Phase 1?",
    a: "Real-time GPS tracking, route optimization, SMS/push providers and native mobile apps are planned for later phases.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,7vw,4.8rem)]">
            MVP questions,
            <br />
            clear answers
          </h1>
          <div className="mt-10 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group lined-card p-5 open:soft-card open:border-transparent">
                <summary className="cursor-pointer list-none display text-xl marker:content-none">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="plus group-open:open">+</span>
                  </div>
                </summary>
                <p className="mt-4 text-[var(--muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

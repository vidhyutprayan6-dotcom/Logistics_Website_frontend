import { SiteShell } from "@/components/SiteShell";

const faqs = [
  {
    q: "What is included in the Phase 1 MVP?",
    a: "User registration/login with OTP, roles, profiles and addresses, shipment creation, shipment types, order lifecycle, tracking numbers and history, distance/weight pricing, Stripe + COD payments, invoices and admin dashboard.",
  },
  {
    q: "How does tracking work?",
    a: "Every order gets a unique tracking number. Anyone can look it up on the Tracking page and see status history events.",
  },
  {
    q: "Which shipment types are available?",
    a: "Same-day, express, standard and scheduled delivery.",
  },
  {
    q: "How is price calculated?",
    a: "Base fee + distance fee + weight fee, with a minimum fee. Pricing rules are configurable by admins.",
  },
  {
    q: "Which payments are supported?",
    a: "Stripe card payments and Cash on Delivery. Invoices can be generated automatically.",
  },
  {
    q: "What is not included yet?",
    a: "Live GPS fleet tracking, route optimization, native mobile apps and advanced SMS/push providers are outside Phase 1.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main max-w-3xl">
          <p className="kicker">FAQ</p>
          <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">Frequently asked questions</h1>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="panel p-5">
                <summary className="cursor-pointer list-none heading text-lg">{item.q}</summary>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

import { SiteShell } from "@/components/SiteShell";

const faqs = [
  {
    q: "How do I track a shipment?",
    a: "Open Tracking, enter your VT tracking number, and review the full status history.",
  },
  {
    q: "Which payment methods are supported?",
    a: "Card payments via Stripe and Cash on Delivery for eligible orders in the MVP.",
  },
  {
    q: "Can dispatchers and drivers use the same platform?",
    a: "Yes. Role-based access supports customer, dispatcher, driver, admin and super admin.",
  },
  {
    q: "How is shipping cost calculated?",
    a: "Base fee + distance rate + weight rate, with a minimum fee per shipment type.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="display mt-4 text-[clamp(2.6rem,8vw,5rem)]">Answers, without the fog</h1>
          <div className="mt-10 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[1.3rem] border border-[var(--line)] bg-white p-5 open:soft-shadow">
                <summary className="cursor-pointer list-none display text-xl marker:content-none">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-2xl text-[var(--muted)] transition group-open:rotate-45">+</span>
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

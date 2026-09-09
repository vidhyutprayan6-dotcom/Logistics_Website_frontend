import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const services = [
  {
    title: "Same-day",
    copy: "Local priority delivery for urgent packages that cannot wait until tomorrow.",
    items: ["Dispatcher assignment", "Fast status transitions", "Recipient confirmation"],
  },
  {
    title: "Express",
    copy: "Accelerated intercity lanes when speed matters more than lowest cost.",
    items: ["Priority handling", "Shorter transit windows", "Transparent pricing"],
  },
  {
    title: "Standard",
    copy: "Reliable everyday shipping with balanced price and predictable delivery.",
    items: ["Nationwide coverage", "Clear tracking history", "Invoice-ready flow"],
  },
  {
    title: "Scheduled",
    copy: "Plan pickups and deliveries around your customer’s preferred window.",
    items: ["Future booking", "Fewer failed attempts", "Better customer experience"],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main">
          <p className="eyebrow">Services</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.5rem)]">
            Shipping options
            <br />
            with zero noise
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
            Every service is designed to be understandable in seconds — for customers, dispatchers and drivers.
          </p>
        </div>

        <div className="container-main mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-[1.6rem] border border-[var(--line)] bg-white p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--muted)]">0{index + 1}</span>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  {service.title}
                </span>
              </div>
              <h2 className="display mt-5 text-3xl">{service.title} delivery</h2>
              <p className="mt-3 text-[var(--muted)]">{service.copy}</p>
              <ul className="mt-6 space-y-2 border-t border-[var(--line)] pt-5 text-sm">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="container-main mt-12">
          <Link href="/register" className="btn btn-primary">
            Start with a shipment
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

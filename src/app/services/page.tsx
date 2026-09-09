import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const services = [
  {
    title: "Same-day delivery",
    items: ["Shipment type for urgent local routes", "Higher base and distance rates", "Dispatcher assignment support"],
  },
  {
    title: "Express delivery",
    items: ["Faster intercity option", "Premium pricing rule set", "Priority handling in lifecycle"],
  },
  {
    title: "Standard delivery",
    items: ["Default everyday shipping mode", "Distance + weight pricing", "Full tracking history"],
  },
  {
    title: "Scheduled delivery",
    items: ["Choose planned pickup time", "Reduce failed delivery attempts", "Useful for recurring business needs"],
  },
  {
    title: "Order lifecycle control",
    items: ["Pending to Delivered status chain", "Driver and dispatcher updates", "Cancellation support"],
  },
  {
    title: "Tracking & payments",
    items: ["Unique tracking numbers", "Stripe checkout and COD", "Invoice generation"],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main max-w-3xl">
          <p className="kicker">Services</p>
          <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">MVP delivery and operations services</h1>
          <p className="mt-4 text-[var(--muted)]">
            Service offerings map to Phase 1 requirements: shipment types, lifecycle management, tracking and payments.
          </p>
        </div>
        <div className="container-main mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="panel p-6">
              <h2 className="heading text-xl">{service.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="container-main mt-8">
          <Link href="/register" className="btn btn-primary">
            Create account
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

const services = [
  {
    title: "Same-day delivery",
    copy: "Priority local shipments for urgent packages that must arrive the same day.",
    items: ["Shipment type: same_day", "Higher base and per-km rate", "Fast dispatcher assignment"],
  },
  {
    title: "Express delivery",
    copy: "Accelerated intercity shipping when customers need speed with controlled cost.",
    items: ["Shipment type: express", "Premium distance pricing", "Priority lifecycle handling"],
  },
  {
    title: "Standard delivery",
    copy: "Everyday reliable shipping with balanced pricing for regular parcel volume.",
    items: ["Shipment type: standard", "Distance + weight calculation", "Full tracking history"],
  },
  {
    title: "Scheduled delivery",
    copy: "Book pickup and delivery for a planned time window to reduce failed attempts.",
    items: ["Shipment type: scheduled", "Scheduled pickup datetime", "Customer-friendly planning"],
  },
  {
    title: "Order lifecycle management",
    copy: "Move every shipment through a clear status chain managed by dispatchers and drivers.",
    items: ["Pending → Assigned → Picked Up", "In Transit → Delivered", "Cancelled when required"],
  },
  {
    title: "Tracking & payments",
    copy: "Give customers visibility and flexible payment options from checkout to invoice.",
    items: ["Auto tracking numbers", "Stripe card payments", "Cash on delivery + invoices"],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main">
          <p className="eyebrow">Services</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.2rem)]">
            Logistics services
            <br />
            in the MVP scope
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
            These services map directly to the client requirements: shipment types, lifecycle control, tracking and payments.
          </p>
        </div>

        <div className="container-main mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-[1.6rem] border border-[var(--line)] bg-white p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--muted)]">0{index + 1}</span>
              </div>
              <h2 className="display mt-5 text-3xl">{service.title}</h2>
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
            Create a shipment account
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

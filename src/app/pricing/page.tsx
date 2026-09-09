import { SiteHeader } from "@/components/SiteHeader";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">Pricing</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          Shipment prices are calculated from base fee + distance + weight. Final quote is shown before checkout.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Same Day", "Priority local delivery in hours"],
            ["Express", "Fast intercity shipment"],
            ["Standard", "Balanced speed and price"],
          ].map(([name, desc]) => (
            <article key={name} className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

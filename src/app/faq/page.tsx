import { SiteHeader } from "@/components/SiteHeader";

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">FAQ</h1>
        <div className="mt-6 space-y-5">
          <article>
            <h2 className="font-semibold text-slate-900">How do I track my shipment?</h2>
            <p className="text-slate-600">Use the tracking number on the Tracking page.</p>
          </article>
          <article>
            <h2 className="font-semibold text-slate-900">What payment methods are available?</h2>
            <p className="text-slate-600">Card via Stripe and Cash on Delivery for eligible orders.</p>
          </article>
        </div>
      </main>
    </div>
  );
}

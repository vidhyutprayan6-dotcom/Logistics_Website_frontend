import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="relative isolate overflow-hidden">
        <section className="min-h-[78vh] bg-[linear-gradient(110deg,#0c3d69_5%,#11639f_42%,#4ea3d3_100%)] text-white">
          <div className="container-main flex min-h-[78vh] flex-col justify-center py-16">
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-white/75">Vettore Logistics</p>
            <h1 className="display-font max-w-4xl text-4xl leading-tight md:text-6xl">
              Fast, trackable delivery for every shipment.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              Create shipments, track orders, pay securely, and manage delivery status in one reliable platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register" className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-900">
                Start Shipping
              </Link>
              <Link href="/tracking" className="rounded-md border border-white/60 px-5 py-3 text-sm font-semibold">
                Track Parcel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <section className="container-main py-14">
        <h2 className="display-font text-3xl text-slate-900">Built for MVP launch</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Phase 1 includes user accounts, shipment creation, lifecycle status updates, public tracking, pricing engine,
          Stripe integration, and admin overview APIs.
        </p>
      </section>
    </div>
  );
}

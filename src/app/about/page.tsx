import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">About</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Vettore is a logistics platform focused on dependable fulfillment, transparent tracking, and scalable delivery operations.
        </p>
      </main>
    </div>
  );
}

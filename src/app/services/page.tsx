import { SiteHeader } from "@/components/SiteHeader";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">Services</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          We provide same-day, express, standard, and scheduled delivery with full order lifecycle visibility.
        </p>
      </main>
    </div>
  );
}

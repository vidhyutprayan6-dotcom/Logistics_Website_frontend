import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">Contact</h1>
        <p className="mt-3 text-slate-600">Email: support@vettore.app</p>
        <p className="text-slate-600">Phone: +39 000 000 0000</p>
      </main>
    </div>
  );
}

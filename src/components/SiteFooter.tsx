import Link from "next/link";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="container-main section-pad grid gap-10 md:grid-cols-[1.35fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-white/70">
            Logistics MVP for shipment creation, order lifecycle, tracking, pricing, payments and admin control.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-accent">
              Create account
            </Link>
            <Link href="/contact" className="btn btn-ghost border-white/35 text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-white/45">Pages</p>
          <ul className="mt-4 space-y-3 text-white/80">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/tracking">Tracking</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/45">MVP modules</p>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>Users & roles</li>
            <li>Orders & tracking</li>
            <li>Pricing & payments</li>
            <li>Admin dashboard</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-2 py-5 text-sm text-white/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Vettore Logistics</p>
          <p>Phase 1 MVP · Placeholder logo ready to replace</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--navy)] text-white">
      <div className="container-main section-pad grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Phase 1 logistics MVP: accounts, shipments, lifecycle tracking, distance/weight pricing, Stripe & COD payments, and admin dashboard.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/register" className="btn btn-mint">
              Create account
            </Link>
            <Link href="/tracking" className="btn btn-ghost-light">
              Track shipment
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/tracking">Tracking</Link></li>
            <li><Link href="/dashboard">Admin dashboard</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-2 py-4 text-xs text-white/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Vettore Logistics</p>
          <p>Temporary logo placeholder · Final brand assets can replace Logo component</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink)] text-white">
      <div className="container-main section-pad grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="display text-3xl">Vettore</p>
          <p className="mt-4 max-w-sm text-white/70">
            There is more than meets the eye. Smart logistics for teams that need clarity, speed and control.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-accent">
              Start shipping
            </Link>
            <Link href="/contact" className="btn btn-ghost border-white/30 text-white">
              Talk to us
            </Link>
          </div>
        </div>

        <div>
          <p className="eyebrow text-white/50">Explore</p>
          <ul className="mt-4 space-y-3 text-white/80">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/tracking">Tracking</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/50">Contact</p>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>support@vettore.app</li>
            <li>+39 000 000 0000</li>
            <li>Milan · Rome · Naples</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-2 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vettore Logistics</p>
          <p>Built for people who move goods — not paperwork.</p>
        </div>
      </div>
    </footer>
  );
}

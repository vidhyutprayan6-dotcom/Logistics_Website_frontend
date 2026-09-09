"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tracking", label: "Tracking" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="container-main flex items-center justify-between py-4">
        <Link href="/" className="display-font text-2xl text-slate-900">
          Vettore Logistics
        </Link>
        <nav className="hidden gap-5 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href ? "text-[var(--brand)] font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
            Login
          </Link>
          <Link href="/register" className="rounded-md bg-[var(--brand)] px-3 py-2 text-sm text-white hover:bg-[var(--brand-2)]">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

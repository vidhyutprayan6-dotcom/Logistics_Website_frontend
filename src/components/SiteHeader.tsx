"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/tracking", label: "Tracking" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "bg-[var(--paper)]/92 backdrop-blur-md border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="display text-xl md:text-2xl tracking-tight" onClick={() => setOpen(false)}>
          Vettore
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href ? "font-semibold text-[var(--accent)]" : "text-[var(--ink-soft)] hover:text-[var(--accent)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className="btn btn-ghost px-4 py-2 text-sm">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary text-sm">
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1.5">
            <span className={`h-0.5 bg-[var(--ink)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-[var(--ink)] transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-[var(--ink)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] lg:hidden">
          <div className="container-main flex flex-col gap-1 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/login" onClick={() => setOpen(false)} className="btn btn-ghost">
                Login
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn btn-primary">
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

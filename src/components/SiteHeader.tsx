"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

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
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || open ? "border-b border-[var(--line)] bg-[var(--paper)]/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between py-4 md:py-5">
        <div onClick={() => setOpen(false)}>
          <Logo />
        </div>

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
          <Link href="/register" className="btn btn-dark text-sm">
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className="h-0.5 bg-[var(--ink)]" />
            <span className="h-0.5 bg-[var(--ink)]" />
            <span className="h-0.5 bg-[var(--ink)]" />
          </span>
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
                className="rounded-2xl px-3 py-3 text-base font-medium hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/login" onClick={() => setOpen(false)} className="btn btn-ghost">
                Login
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn btn-dark">
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

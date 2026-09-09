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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open ? "border-b border-[var(--line)] bg-[var(--sky)]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between py-3.5 md:py-4">
        <div onClick={() => setOpen(false)}>
          <Logo />
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href ? "text-[var(--mint-dark)]" : "text-[var(--navy)]/75 hover:text-[var(--navy)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className="btn btn-outline">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary">
            Register
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-0.5 bg-[var(--navy)]" />
            <span className="h-0.5 bg-[var(--navy)]" />
            <span className="h-0.5 bg-[var(--navy)]" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--sky)] lg:hidden">
          <div className="container-main flex flex-col gap-1 py-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 pb-2">
              <Link href="/login" onClick={() => setOpen(false)} className="btn btn-outline">
                Login
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";

const stats = [
  { label: "shipment types", value: "4" },
  { label: "user roles", value: "5" },
  { label: "order statuses", value: "6" },
  { label: "pricing factors", value: "2" },
  { label: "payment options", value: "2" },
];

const featureRows = [
  {
    tag: "Orders",
    title: "Shipment creation",
    text: "Pickup address, delivery address, package details, weight and dimensions in one flow.",
    href: "/register",
  },
  {
    tag: "Tracking",
    title: "Tracking number & history",
    text: "Auto-generated unique tracking IDs with full movement logs from creation to delivery.",
    href: "/tracking",
  },
  {
    tag: "Pricing",
    title: "Distance & weight pricing",
    text: "Automatic cost calculation with admin-editable pricing rules for each shipment type.",
    href: "/pricing",
  },
  {
    tag: "Payments",
    title: "Stripe checkout & COD",
    text: "Online card payments, cash on delivery, and automatic invoice generation.",
    href: "/services",
  },
];

const platformModules = [
  {
    title: "Users & access",
    subtitle: "Registration, login and roles",
    points: [
      "Email & phone registration with OTP verification",
      "Password reset flow",
      "Roles: Customer, Dispatcher, Driver, Admin, Super Admin",
      "Profile, address book and saved locations",
    ],
  },
  {
    title: "Orders & lifecycle",
    subtitle: "From pending to delivered",
    points: [
      "Same-day, express, standard and scheduled delivery",
      "Pending → Assigned → Picked Up → In Transit → Delivered → Cancelled",
      "Dispatcher and driver status updates",
      "Proof of delivery fields ready for signature, photo and receiver name",
    ],
  },
  {
    title: "Tracking & visibility",
    subtitle: "Always know where it is",
    points: [
      "Public tracking lookup page",
      "Unique tracking number on every order",
      "Full shipment movement history",
      "City-level status updates for customers",
    ],
  },
  {
    title: "Admin & operations",
    subtitle: "Control the platform",
    points: [
      "Dashboard for revenue, orders, deliveries and drivers",
      "Order management list and detail views",
      "User role and status management",
      "Responsive layout for mobile, tablet and desktop",
    ],
  },
];

const roles = [
  {
    name: "Customer",
    text: "Create shipments, pay online or with COD, and track every order.",
  },
  {
    name: "Dispatcher",
    text: "Assign drivers and move orders through the delivery lifecycle.",
  },
  {
    name: "Driver",
    text: "Update pickup, transit and delivery status for assigned shipments.",
  },
  {
    name: "Admin",
    text: "Manage users, monitor orders and oversee platform performance.",
  },
];

export default function Home() {
  const [openModule, setOpenModule] = useState(0);

  return (
    <SiteShell>
      <section className="hero-visual relative min-h-[88vh] text-white">
        <div className="container-main flex min-h-[88vh] flex-col justify-end pb-14 pt-24 md:justify-center md:pb-20">
          <p className="eyebrow reveal text-white/70">Vettore Logistics</p>
          <h1 className="display reveal reveal-delay-1 mt-5 max-w-5xl text-[clamp(2.6rem,8.5vw,6.2rem)]">
            Ship, track
            <br />
            and deliver
            <br />
            with clarity
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base text-white/80 md:text-lg">
            A logistics platform for shipment creation, order lifecycle, pricing, payments and real operational control.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-accent">
              Create account
            </Link>
            <Link href="/tracking" className="btn btn-ghost border-white/40 text-white">
              Track shipment
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.8rem] bg-white p-8 soft-shadow md:p-10">
            <p className="eyebrow">For customers</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Create shipments without friction</h2>
            <p className="mt-4 text-[var(--muted)]">
              Register with email or phone, verify with OTP, save addresses, choose a shipment type and get an instant price.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium">
              <li>Shipment creation form</li>
              <li>Same-day, express, standard, scheduled</li>
              <li>Public tracking page</li>
            </ul>
          </article>
          <article className="rounded-[1.8rem] bg-[var(--ink)] p-8 text-white md:p-10">
            <p className="eyebrow text-white/50">For operations</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Run the full order lifecycle</h2>
            <p className="mt-4 text-white/70">
              Dispatchers assign drivers, drivers update status, admins monitor revenue and deliveries from one dashboard.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-white/90">
              <li>Role-based access control</li>
              <li>Order status transitions</li>
              <li>Admin revenue & delivery overview</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--line)] bg-white py-6">
        <div className="marquee-track gap-10 px-4">
          {[...stats, ...stats, ...stats, ...stats].map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="flex items-baseline gap-3 whitespace-nowrap">
              <span className="display text-3xl">{item.value}</span>
              <span className="text-sm text-[var(--muted)]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Platform</p>
            <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4.4rem)]">
              One logistics system
              <br />
              for every role
            </h2>
          </div>
          <p className="max-w-md text-[var(--muted)] md:pb-2">
            From customer registration to admin reporting, Vettore covers the Phase 1 MVP your operations need to launch.
          </p>
        </div>
        <div className="container-main mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <article key={role.name} className="rounded-[1.4rem] border border-[var(--line)] bg-white p-6">
              <h3 className="display text-2xl">{role.name}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{role.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white section-pad">
        <div className="container-main flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Core features</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">What the MVP delivers</h2>
          </div>
          <Link href="/services" className="hidden text-sm font-semibold underline underline-offset-4 md:inline">
            View all services
          </Link>
        </div>

        <div className="container-main mt-10 space-y-4">
          {featureRows.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group grid gap-4 rounded-[1.5rem] border border-[var(--line)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-[var(--paper)] md:grid-cols-[140px_1.1fr_1fr_auto] md:items-center md:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{item.tag}</span>
              <h3 className="display text-2xl md:text-3xl">{item.title}</h3>
              <p className="text-sm text-[var(--muted)] md:text-base">{item.text}</p>
              <span className="text-2xl transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <p className="eyebrow">Modules</p>
          <h2 className="display mt-3 max-w-3xl text-3xl md:text-5xl">Built around your logistics workflow</h2>
        </div>
        <div className="container-main mt-10 space-y-3">
          {platformModules.map((module, index) => {
            const open = openModule === index;
            return (
              <article key={module.title} className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-8"
                  onClick={() => setOpenModule(open ? -1 : index)}
                >
                  <div>
                    <p className="text-xs font-semibold text-[var(--muted)]">0{index + 1}</p>
                    <h3 className="display mt-2 text-2xl md:text-3xl">{module.title}</h3>
                    <p className="mt-2 text-[var(--muted)]">{module.subtitle}</p>
                  </div>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--paper-2)] text-xl transition ${open ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {open && (
                  <ul className="space-y-2 border-t border-[var(--line)] px-6 pb-7 pt-5 text-sm md:px-8">
                    {module.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--ink)] text-white section-pad">
        <div className="container-main">
          <p className="eyebrow text-white/50">Shipment types</p>
          <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">Four delivery modes for every use case</h2>
        </div>
        <div className="container-main mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { name: "Same-day", text: "Priority local delivery when speed is critical." },
            { name: "Express", text: "Faster intercity shipping with premium handling." },
            { name: "Standard", text: "Reliable everyday delivery at balanced cost." },
            { name: "Scheduled", text: "Plan pickup and delivery for a chosen time window." },
          ].map((item) => (
            <article key={item.name} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-6">
              <h3 className="display text-2xl">{item.name}</h3>
              <p className="mt-3 text-sm text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#111,#2a2a2a_55%,#ff4d1a)] p-8 text-white md:p-14">
          <p className="eyebrow text-white/60">Get started</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)]">
            Launch your logistics MVP with the features that matter
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Accounts, shipments, tracking, pricing, Stripe payments and an admin dashboard — ready for Vercel, Render and Supabase.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn btn-light">
              Register now
            </Link>
            <Link href="/contact" className="btn btn-ghost border-white/35 text-white">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

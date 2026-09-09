"use client";

import { FormEvent, useState } from "react";
import { SiteShell } from "@/components/SiteShell";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <div>
            <p className="kicker">Contact</p>
            <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">Contact Vettore Logistics</h1>
            <p className="mt-4 text-[var(--muted)]">
              Reach out about MVP setup: user roles, shipment workflows, pricing rules, payments or dashboard access.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p>support@vettore.app</p>
              <p>+39 000 000 0000</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="panel p-6 md:p-7">
            <div className="grid gap-3 md:grid-cols-2">
              <input className="field" name="name" placeholder="Name *" required />
              <input className="field" type="email" name="email" placeholder="Email *" required />
            </div>
            <select className="field mt-3" name="topic" defaultValue="Shipments">
              <option>Shipments</option>
              <option>Tracking</option>
              <option>Pricing</option>
              <option>Payments</option>
              <option>Admin dashboard</option>
              <option>User roles</option>
            </select>
            <textarea className="field textarea mt-3" name="message" placeholder="Message *" required />
            <button type="submit" className="btn btn-primary mt-4">
              Send message
            </button>
            {sent && <p className="mt-3 text-sm text-emerald-700">Message sent. We will follow up soon.</p>}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

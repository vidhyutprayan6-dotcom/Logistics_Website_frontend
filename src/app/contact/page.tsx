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
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-4 text-[clamp(2.6rem,7vw,4.8rem)]">
              We think
              <br />
              with you
            </h1>
            <p className="mt-5 max-w-md text-lg text-[var(--muted)]">
              Leave your details and we’ll help you choose the right logistics setup for your team.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <p>support@vettore.app</p>
              <p>+39 000 000 0000</p>
              <p>Milan · Rome · Naples</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 soft-shadow md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" name="name" placeholder="Name *" required />
              <input className="field" type="email" name="email" placeholder="Email *" required />
            </div>
            <input className="field mt-4" name="subject" placeholder="Subject" />
            <textarea className="field textarea mt-4" name="message" placeholder="Message *" required />
            <button type="submit" className="btn btn-primary mt-5 w-full md:w-auto">
              Send message
            </button>
            {sent && <p className="mt-4 text-sm text-emerald-700">Thanks — we’ll get back to you soon.</p>}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

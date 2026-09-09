import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main">
          <p className="eyebrow">About</p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.6rem,8vw,5.4rem)]">
            Logistics software
            <br />
            for humans
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Vettore is built around one belief: shipping platforms should feel calm, clear and fast — even when operations are complex.
          </p>
        </div>

        <div className="container-main mt-12 grid gap-4 md:grid-cols-3">
          {[
            { title: "Clarity", text: "Every screen has one job. Customers, drivers and admins never fight the interface." },
            { title: "Speed", text: "Create, assign, track and close deliveries with fewer clicks and fewer handoffs." },
            { title: "Trust", text: "Tracking history, payments and roles stay consistent from first order to proof of delivery." },
          ].map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[var(--line)] bg-white p-7">
              <h2 className="display text-2xl">{item.title}</h2>
              <p className="mt-3 text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="container-main mt-12 overflow-hidden rounded-[2rem] bg-[var(--ink)] p-8 text-white md:p-12">
          <h2 className="display max-w-3xl text-3xl md:text-5xl">There is more than meets the eye</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Behind every simple tracking page is a lifecycle engine, pricing rules, payment flow and role-based control built for real operations.
          </p>
          <Link href="/contact" className="btn btn-accent mt-8">
            Work with us
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

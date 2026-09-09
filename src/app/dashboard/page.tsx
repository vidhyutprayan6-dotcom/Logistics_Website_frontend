"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { API_BASE } from "@/lib/api";

type Stats = {
  totals: {
    orders: number;
    revenue: number;
    deliveries: number;
    activeShipments: number;
    drivers: number;
    users: number;
  };
};

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadStats() {
    setLoading(true);
    setError("");
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setError("Login first to view dashboard.");
      setLoading(false);
      return;
    }
    try {
      const r = await fetch(`${API_BASE}/api/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Unable to load stats");
      setStats(j as Stats);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load stats");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main">
          <p className="eyebrow">Admin dashboard</p>
          <h1 className="display mt-4 text-[clamp(2.4rem,7vw,4.6rem)]">
            Revenue, orders
            <br />
            and deliveries
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Admin and dispatcher overview for orders, revenue, deliveries, active shipments, drivers and users.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={loadStats} className="btn btn-primary" disabled={loading}>
              {loading ? "Loading..." : "Load dashboard"}
            </button>
            <Link href="/login" className="btn btn-ghost">
              Go to login
            </Link>
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          {stats && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(stats.totals).map(([key, value]) => (
                <article key={key} className="rounded-[1.4rem] border border-[var(--line)] bg-white p-6">
                  <p className="eyebrow">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="display mt-3 text-4xl">{String(value)}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

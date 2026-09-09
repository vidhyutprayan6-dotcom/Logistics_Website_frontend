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
      setError("Login required. Use an admin or dispatcher account.");
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
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main">
          <p className="kicker">Admin dashboard</p>
          <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">Revenue, orders, deliveries and drivers</h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            MVP admin overview endpoint for operational KPIs. Login with admin/dispatcher role before loading data.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={loadStats} className="btn btn-primary" disabled={loading}>
              {loading ? "Loading..." : "Load dashboard stats"}
            </button>
            <Link href="/login" className="btn btn-outline">
              Login
            </Link>
          </div>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          {stats && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(stats.totals).map(([key, value]) => (
                <article key={key} className="panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="heading mt-2 text-3xl">{String(value)}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

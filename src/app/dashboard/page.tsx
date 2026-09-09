"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
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
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">Admin Dashboard</h1>
        <p className="mt-2 text-slate-600">Login as dispatcher/admin and click to load stats.</p>
        <button onClick={loadStats} className="mt-4 rounded-md bg-[var(--brand)] px-4 py-2 text-white" disabled={loading}>
          {loading ? "Loading..." : "Load Dashboard"}
        </button>
        {error && <p className="mt-3 text-red-600">{error}</p>}
        {stats && (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(stats.totals).map(([k, v]) => (
              <article key={k} className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm capitalize text-slate-500">{k.replace(/([A-Z])/g, " $1")}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{String(v)}</p>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

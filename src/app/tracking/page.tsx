"use client";

import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { apiFetch } from "@/lib/api";

type TrackingRes = {
  trackingNumber: string;
  status: string;
  pickup: { city: string };
  delivery: { city: string };
  events: { status: string; message: string; locationCity?: string; at: string }[];
};

export default function TrackingPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TrackingRes | null>(null);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setData(null);
    setLoading(true);
    try {
      const res = await apiFetch<TrackingRes>(`/api/tracking/${code.trim().toUpperCase()}`);
      setData(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Tracking failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">Track your shipment</h1>
        <p className="mt-2 text-slate-600">Enter your tracking number (example: VT-XXXXXX-XXXXXX).</p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Tracking number"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-[var(--brand)] px-5 py-3 text-white disabled:opacity-60"
          >
            {loading ? "Checking..." : "Track"}
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {data && (
          <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{data.trackingNumber}</p>
            <h2 className="mt-1 text-xl font-semibold capitalize">{data.status.replaceAll("_", " ")}</h2>
            <p className="mt-1 text-slate-600">
              {data.pickup.city} → {data.delivery.city}
            </p>
            <ul className="mt-5 space-y-3">
              {data.events.map((e, idx) => (
                <li key={`${e.at}-${idx}`} className="border-l-2 border-[var(--brand)] pl-3">
                  <p className="text-sm font-semibold capitalize">{e.status.replaceAll("_", " ")}</p>
                  <p className="text-sm text-slate-600">{e.message}</p>
                  <p className="text-xs text-slate-400">{new Date(e.at).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}

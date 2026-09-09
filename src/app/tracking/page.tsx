"use client";

import { FormEvent, useState } from "react";
import { SiteShell } from "@/components/SiteShell";
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
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main max-w-2xl">
          <p className="kicker">Tracking</p>
          <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">Track shipment by tracking number</h1>
          <p className="mt-4 text-[var(--muted)]">
            Enter the unique tracking ID generated when the shipment was created to view status history.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="VT-XXXXXX-XXXXXX"
              className="field"
              required
            />
            <button type="submit" disabled={loading} className="btn btn-primary shrink-0 disabled:opacity-60">
              {loading ? "Searching..." : "Track"}
            </button>
          </form>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          {data && (
            <section className="panel mt-6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{data.trackingNumber}</p>
              <h2 className="heading mt-2 text-2xl capitalize">{data.status.replaceAll("_", " ")}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {data.pickup.city} → {data.delivery.city}
              </p>
              <ul className="mt-6 space-y-4">
                {data.events.map((event, idx) => (
                  <li key={`${event.at}-${idx}`} className="border-l-2 border-[var(--mint)] pl-4">
                    <p className="text-sm font-semibold capitalize">{event.status.replaceAll("_", " ")}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{event.message}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{new Date(event.at).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

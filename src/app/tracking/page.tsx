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
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main max-w-3xl">
          <p className="eyebrow">Tracking</p>
          <h1 className="display mt-4 text-[clamp(2.6rem,8vw,5rem)]">
            Follow every
            <br />
            movement
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Enter your tracking number and get a clean timeline of where the shipment stands.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="VT-XXXXXX-XXXXXX"
              className="field"
              required
            />
            <button type="submit" disabled={loading} className="btn btn-primary shrink-0 disabled:opacity-60">
              {loading ? "Checking..." : "Track parcel"}
            </button>
          </form>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          {data && (
            <section className="mt-8 rounded-[1.6rem] border border-[var(--line)] bg-white p-6 soft-shadow md:p-8">
              <p className="eyebrow">{data.trackingNumber}</p>
              <h2 className="display mt-2 text-3xl capitalize">{data.status.replaceAll("_", " ")}</h2>
              <p className="mt-2 text-[var(--muted)]">
                {data.pickup.city} → {data.delivery.city}
              </p>
              <ul className="mt-8 space-y-0">
                {data.events.map((event, idx) => (
                  <li key={`${event.at}-${idx}`} className="relative border-l border-[var(--line)] pl-5 pb-6 last:pb-0">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
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

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { apiFetch } from "@/lib/api";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      const res = await apiFetch<{ message: string; otp?: { devCode?: string } }>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ fullName, email, phone, password }),
      });
      setMessage(`${res.message}${res.otp?.devCode ? ` OTP: ${res.otp.devCode}` : ""}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteShell>
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Registration</p>
            <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">Register with email and phone</h1>
            <p className="mt-4 text-[var(--muted)]">
              Create a customer account, verify OTP, then manage profile details, addresses and shipments.
            </p>
          </div>
          <form onSubmit={onSubmit} className="panel p-6 md:p-7">
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="field" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="field mt-3" required />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="field mt-3" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (8+ characters)" className="field mt-3" required />
            <button className="btn btn-primary mt-5 w-full" disabled={loading}>
              {loading ? "Creating..." : "Register"}
            </button>
            {message && <p className="mt-3 text-sm text-emerald-700">{message}</p>}
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            <p className="mt-4 text-sm text-[var(--muted)]">
              Already registered?{" "}
              <Link href="/login" className="font-semibold text-[var(--navy)] underline underline-offset-2">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

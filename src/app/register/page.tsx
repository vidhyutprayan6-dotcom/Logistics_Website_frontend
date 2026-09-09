"use client";

import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { apiFetch } from "@/lib/api";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const res = await apiFetch<{ message: string; otp?: { devCode?: string } }>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ fullName, email, phone, password }),
      });
      setMessage(`${res.message}${res.otp?.devCode ? ` OTP: ${res.otp.devCode}` : ""}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-main py-12">
        <h1 className="display-font text-4xl text-slate-900">Create account</h1>
        <form onSubmit={onSubmit} className="mt-6 max-w-lg space-y-3 rounded-lg border border-slate-200 bg-white p-5">
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="w-full rounded-md border border-slate-300 px-3 py-2" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-md border border-slate-300 px-3 py-2" required />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full rounded-md border border-slate-300 px-3 py-2" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (8+ chars)" className="w-full rounded-md border border-slate-300 px-3 py-2" required />
          <button className="rounded-md bg-[var(--brand)] px-4 py-2 text-white">Register</button>
          {message && <p className="text-sm text-emerald-700">{message}</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </main>
    </div>
  );
}

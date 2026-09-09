"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { apiFetch } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await apiFetch<{ accessToken: string; refreshToken: string }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteShell>
      <section className="section-pad pt-10 md:pt-16">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Login</p>
            <h1 className="display mt-4 text-[clamp(2.6rem,7vw,4.8rem)]">
              Welcome
              <br />
              back
            </h1>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              Access shipments, tracking and admin tools with your account.
            </p>
          </div>

          <form onSubmit={onSubmit} className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 soft-shadow md:p-8">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field mt-2"
              required
            />
            <label className="mt-4 block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field mt-2"
              required
            />
            <button className="btn btn-primary mt-6 w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            <p className="mt-5 text-sm text-[var(--muted)]">
              New here?{" "}
              <Link href="/register" className="font-semibold text-[var(--ink)] underline underline-offset-4">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

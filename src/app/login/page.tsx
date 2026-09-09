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
      <section className="section-pad pt-8 md:pt-12">
        <div className="container-main grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Login</p>
            <h1 className="heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)]">Login with email or phone account</h1>
            <p className="mt-4 text-[var(--muted)]">
              Access role-based features for customers, dispatchers, drivers and admins.
            </p>
          </div>
          <form onSubmit={onSubmit} className="panel p-6 md:p-7">
            <label className="text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="field mt-2" required />
            <label className="mt-4 block text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="field mt-2" required />
            <button className="btn btn-primary mt-5 w-full" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            <p className="mt-4 text-sm text-[var(--muted)]">
              No account yet?{" "}
              <Link href="/register" className="font-semibold text-[var(--navy)] underline underline-offset-2">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

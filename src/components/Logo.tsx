import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/** Temporary brand mark — replace when final logo assets are provided */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const ink = variant === "light" ? "#ffffff" : "#111111";
  const accent = "#ff4f8b";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Vettore Logistics home">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <rect width="38" height="38" rx="12" fill={variant === "light" ? "#1a1a1a" : "#111111"} />
        <path d="M9 24L19 9L29 24H23.2L19 17.4L14.8 24H9Z" fill={accent} />
        <path d="M12 27H26" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="display text-[1.35rem]" style={{ color: ink }}>
        Vettore
      </span>
    </Link>
  );
}

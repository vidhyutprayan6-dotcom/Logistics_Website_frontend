import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/** Temporary brand mark — replace with final logo asset when provided */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "#F4FAFC" : "#0F2744";
  const accent = "#1DBF9A";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Vettore Logistics home">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill={variant === "light" ? "#163A5C" : "#0F2744"} />
        <path d="M8 22.5L18 8.5L28 22.5H22.5L18 16.2L13.5 22.5H8Z" fill={accent} />
        <path d="M11 25.5H25" stroke={color === "#F4FAFC" ? "#F4FAFC" : "#D7E6EF"} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[1.15rem] font-semibold tracking-tight"
          style={{ color: variant === "light" ? "#F4FAFC" : "#0F2744", fontFamily: "var(--font-display)" }}
        >
          Vettore
        </span>
        <span
          className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]"
          style={{ color: variant === "light" ? "rgba(244,250,252,0.65)" : "#5B7388" }}
        >
          Logistics
        </span>
      </span>
    </Link>
  );
}

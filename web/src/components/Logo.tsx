import Link from "next/link";

export function LogoMark({
  className = "h-7 w-7",
  color = "currentColor",
  accent = "#1D9E75",
}: {
  className?: string;
  color?: string;
  accent?: string;
}) {
  // Three overlapping chain-link loops shifted diagonally — "multichain".
  // Middle loop uses the accent color to read as a bridge between two chains.
  return (
    <svg
      className={className}
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="1.5"
        y="8.5"
        width="16"
        height="15"
        rx="5.5"
        stroke={color}
        strokeWidth="2.3"
      />
      <rect
        x="12"
        y="8.5"
        width="16"
        height="15"
        rx="5.5"
        stroke={accent}
        strokeWidth="2.3"
      />
      <rect
        x="22.5"
        y="8.5"
        width="16"
        height="15"
        rx="5.5"
        stroke={color}
        strokeWidth="2.3"
      />
    </svg>
  );
}

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "#ffffff" : "#0F1B2D";
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="ChainFoundry home"
    >
      <LogoMark className="h-[26px] w-[34px] transition group-hover:-translate-y-[1px]" color={color} />
      <span
        className={`font-sans text-[17px] font-semibold tracking-tight ${
          variant === "light" ? "text-white" : "text-ink"
        }`}
      >
        ChainFoundry
      </span>
    </Link>
  );
}

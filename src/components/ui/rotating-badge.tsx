export function RotatingBadge({
  text = "ЗАПИШИТЕСЬ НА ПРИЁМ • ЗАПИШИТЕСЬ НА ПРИЁМ • ",
  href = "#booking",
}: {
  text?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Записаться на приём"
      className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-accent text-cream shadow-lg shadow-accent/20 transition-transform hover:scale-105 sm:h-32 sm:w-32"
    >
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow absolute inset-0 h-full w-full"
      >
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fill="currentColor" fontSize="8.6" letterSpacing="1.5">
          <textPath href="#badge-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    </a>
  );
}

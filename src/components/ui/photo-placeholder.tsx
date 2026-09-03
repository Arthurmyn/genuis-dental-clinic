import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  src?: string;
  rounded?: string;
};

/**
 * Renders a real photo via next/image when `src` is provided.
 * Until then, shows a labelled placeholder so it's obvious what
 * to shoot/upload for this spot.
 */
export function PhotoPlaceholder({
  label,
  className,
  src,
  rounded = "rounded-lg",
}: PhotoPlaceholderProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", rounded, className)}>
        <Image src={src} alt={label} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-accent/30 bg-accent-soft text-center",
        rounded,
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="text-accent/50"
      >
        <path d="M4 8a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .86-.5l.68-1.14A1 1 0 0 1 9.6 4h4.8a1 1 0 0 1 .86.5l.68 1.14a1 1 0 0 0 .86.5H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="13" r="3.2" />
      </svg>
      <span className="max-w-[80%] text-xs font-medium leading-snug text-ink-muted">
        Фото: {label}
      </span>
    </div>
  );
}

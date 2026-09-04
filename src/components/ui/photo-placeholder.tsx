import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  src?: string;
  rounded?: string;
  compact?: boolean;
};

/**
 * Renders a real photo via next/image when `src` is provided.
 * Until then, shows a labelled placeholder so it's obvious what
 * to shoot/upload for this spot. Use `compact` for small slots
 * (avatars, thumbnails) where the label text wouldn't fit.
 */
export function PhotoPlaceholder({
  label,
  className,
  src,
  rounded = "rounded-lg",
  compact = false,
}: PhotoPlaceholderProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", rounded, className)}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      title={`Фото: ${label}`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-ink/15 bg-panel-alt text-center",
        rounded,
        className,
      )}
    >
      <svg
        width={compact ? 16 : 28}
        height={compact ? 16 : 28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="shrink-0 text-ink-muted/60"
      >
        <path d="M4 8a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .86-.5l.68-1.14A1 1 0 0 1 9.6 4h4.8a1 1 0 0 1 .86.5l.68 1.14a1 1 0 0 0 .86.5H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="13" r="3.2" />
      </svg>
      {!compact && (
        <span className="max-w-[80%] text-xs font-medium leading-snug text-ink-muted">
          Фото: {label}
        </span>
      )}
    </div>
  );
}

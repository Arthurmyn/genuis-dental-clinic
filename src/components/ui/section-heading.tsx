import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink/10 bg-panel px-5 py-2 font-ui text-base font-bold uppercase tracking-wide text-ink sm:text-lg",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-lg text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}

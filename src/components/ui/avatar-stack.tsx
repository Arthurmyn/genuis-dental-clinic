const PALETTE = ["#B9C4B2", "#D9CBB0", "#A9BFC4", "#C9AFA3"];

export function AvatarStack({ count = 4 }: { count?: number }) {
  return (
    <div className="flex -space-x-3">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-[10px] font-semibold text-accent-dark"
          style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
          aria-hidden
        />
      ))}
    </div>
  );
}

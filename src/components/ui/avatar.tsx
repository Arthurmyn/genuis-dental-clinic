const PALETTE = [
  { bg: "#DDE6D9", fg: "#2C3E2D" },
  { bg: "#AEEAF5", fg: "#12181A" },
  { bg: "#F3D9C5", fg: "#5A3A22" },
  { bg: "#E4D9F3", fg: "#3B2A5A" },
  { bg: "#F5E6A8", fg: "#5A4B12" },
  { bg: "#D9E4F3", fg: "#1F3A5A" },
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]);
  return letters.join("").toUpperCase() || "?";
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const { bg, fg } = PALETTE[hash(name) % PALETTE.length];

  return (
    <span
      className={className}
      style={{
        backgroundColor: bg,
        color: fg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "0.8rem",
      }}
      aria-hidden
    >
      {initials(name)}
    </span>
  );
}

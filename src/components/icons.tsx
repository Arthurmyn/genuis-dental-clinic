import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ToothIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c-2.2 0-3 1.1-4.3 1.1C6.2 4.1 5 3.4 5 5.5c0 2.7.9 4.9 1.4 7.6.4 2.1.7 5.4 2.1 5.4.9 0 1.1-2.6 1.7-4.1.3-.8.7-1.4 1.8-1.4s1.5.6 1.8 1.4c.6 1.5.8 4.1 1.7 4.1 1.4 0 1.7-3.3 2.1-5.4.5-2.7 1.4-4.9 1.4-7.6 0-2.1-1.2-1.4-2.7-1.4C15 4.1 14.2 3 12 3Z" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v3M12 18v3M4.2 6.2l2 2M17.8 15.8l2 2M3 12h3M18 12h3M4.2 17.8l2-2M17.8 8.2l2-2" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  );
}

export function AlignerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 9.5c2.2-2 5.5-3 8.5-3s6.3 1 8.5 3" />
      <path d="M4.5 12.5c2-1.6 4.9-2.5 7.5-2.5s5.5.9 7.5 2.5" />
      <path d="M6 15.5c1.6-1.1 3.7-1.7 6-1.7s4.4.6 6 1.7" />
    </svg>
  );
}

export function ImplantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h8l-1 5H9L8 3Z" />
      <path d="M9 8v3M15 8v3" />
      <path d="M8.5 11h7l-.6 3.2a2 2 0 0 1-2 1.6h-1.8a2 2 0 0 1-2-1.6L8.5 11Z" />
      <path d="M12 16v5" strokeDasharray="1.6 1.8" />
    </svg>
  );
}

export function KidsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M9 8.2c.6.5 1.3.8 2.1.9M15 8.2c-.6.5-1.3.8-2.1.9" />
      <path d="M6.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v5.5c0 4.5-3 7.4-7 9-4-1.6-7-4.5-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17h16" />
      <path d="m4 17-1-8 4.5 3L12 6l4.5 6L21 9l-1 8" />
    </svg>
  );
}

export function DropIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c3 3.8 5.5 7 5.5 10a5.5 5.5 0 1 1-11 0c0-3 2.5-6.2 5.5-10Z" />
    </svg>
  );
}

export const serviceIcons = {
  tooth: ToothIcon,
  sparkle: SparkleIcon,
  aligner: AlignerIcon,
  implant: ImplantIcon,
  kids: KidsIcon,
  shield: ShieldIcon,
  crown: CrownIcon,
  drop: DropIcon,
};

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8L6.7 20.1l1-6L3.4 9.9l6-.9 2.6-5.5Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V17.5a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

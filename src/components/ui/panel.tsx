import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const padding = {
  default: "p-6 sm:p-10 lg:p-14 xl:p-16",
  tight: "p-6 sm:p-8 lg:p-10",
};

export function Panel({
  children,
  className,
  padding: size = "default",
}: {
  children: ReactNode;
  className?: string;
  padding?: keyof typeof padding;
}) {
  return (
    <div className={cn("rounded-[2rem] bg-panel", padding[size], className)}>{children}</div>
  );
}

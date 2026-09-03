import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const padding = {
  default: "px-5 sm:px-8 lg:px-12",
  narrow: "px-3 sm:px-4 lg:px-6",
};

export function Container({
  children,
  className,
  padding: size = "default",
}: {
  children: ReactNode;
  className?: string;
  padding?: keyof typeof padding;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1760px]", padding[size], className)}>
      {children}
    </div>
  );
}

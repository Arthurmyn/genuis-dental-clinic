import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[2rem] bg-panel p-6 sm:p-10 lg:p-14 xl:p-16", className)}>
      {children}
    </div>
  );
}

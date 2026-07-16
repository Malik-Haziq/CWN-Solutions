import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`badge ${variant === "accent" ? "badge-accent" : ""}`}>
      {children}
    </span>
  );
}

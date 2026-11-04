import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "primary";
  className?: string;
}

const variants = {
  default:
    "bg-surface text-text-secondary border border-border",
  outline:
    "border border-border text-text-secondary hover:bg-surface-hover",
  primary:
    "bg-primary text-white",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors",
      variants[variant],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export default Badge;

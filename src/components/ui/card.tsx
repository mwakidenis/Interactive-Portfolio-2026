import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padded = true,
  hoverable = false,
  ...props
}) => (
  <div
    className={cn(
      "rounded-xl border border-border bg-surface text-text shadow-sm transition-all duration-300",
      hoverable && "hover:shadow-lg hover:border-border-hover -translate-y-1 hover:-translate-y-1",
      padded && "p-6",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;

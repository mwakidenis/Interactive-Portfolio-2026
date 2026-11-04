import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none",
  secondary:
    "bg-secondary text-text-secondary hover:bg-secondary-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none",
  outline:
    "border border-border hover:bg-surface hover:text-text focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none",
  ghost:
    "hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none",
  danger:
    "bg-error text-white hover:bg-error/90 focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  isLoading = false,
  disabled,
  ...props
}) => (
  <button
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 transform active:scale-95",
      variants[variant],
      sizes[size],
      disabled && "opacity-60 pointer-events-none cursor-not-allowed",
      className,
    )}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && (
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )}
    {children}
  </button>
);

export default Button;

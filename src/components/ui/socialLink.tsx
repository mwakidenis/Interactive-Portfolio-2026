import React from "react";
import { cn } from "@/lib/utils";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

export interface SocialLinkProps {
  link: SocialLink;
  size?: number;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  link,
  size = 20,
  className,
}) => {
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={cn(
        "rounded-lg p-2 transition-colors hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1",
        className,
      )}
      style={{ color: "var(--text-muted)" }}
    >
      <Icon size={size} />
    </a>
  );
};

export default SocialLink;

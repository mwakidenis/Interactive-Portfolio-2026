import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  inverse?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  padded = true,
  inverse = false,
  ...props
}) => (
  <section
    className={cn(
      "relative",
      inverse ? "bg-surface text-text-inverse" : "",
      padded && "py-20",
      className,
    )}
    {...props}
  >
    {children}
  </section>
);

export interface AnimateItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "slide" | "scale";
}

export const AnimateItem: React.FC<AnimateItemProps> = ({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}) => {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, delay } },
    },
    slide: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
    },
  };

  return (
    <motion.div
      className={cn("opacity-0", className)}
      initial="hidden"
      animate="visible"
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
};

export const RevealGroup = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence>
    {children}
  </AnimatePresence>
);

export const SectionTitle = ({
  title,
  description,
  className = "",
}: {
  title: string;
  description?: string;
  className?: string;
}) => (
  <div className={cn("text-center mb-12", className)}>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold tracking-tight text-text mb-3"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-text-muted max-w-xl mx-auto"
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default Section;

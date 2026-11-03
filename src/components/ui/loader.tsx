import { motion } from "framer-motion";
import React from "react";

export interface LoaderProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 40, color = "var(--primary)", className }) => (
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      strokeWidth="4"
      strokeLinecap="round"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </motion.svg>
);

export default Loader;

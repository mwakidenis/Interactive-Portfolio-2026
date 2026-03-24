import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input
    className={`px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    {...props}
  />
);

export default Input;

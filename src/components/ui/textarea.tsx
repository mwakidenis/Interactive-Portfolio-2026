import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    className={`px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    {...props}
  />
);

export default Textarea;

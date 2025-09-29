import React from "react";

interface ButtonProps {
  variant?: "save" | "delete" | "update";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}
const variantClass: Record<string, string> = {
  save: "btn btn-primary",
  delete: "btn btn-danger",
  update: "btn btn-warning"
};

function Buttons({
  variant = "save",
  children,
  type = "button",
  className
}: ButtonProps) {
  const autoClass = variantClass[variant] || "btn btn-primary";
  const finalClass = className ? className : autoClass;

  return (
    <button type={type} className={finalClass}>
      {children}
    </button>
  );
}

export default Buttons;

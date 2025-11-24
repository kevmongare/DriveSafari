// components/Button.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#d39b53] focus:ring-opacity-50";

  const variants = {
    primary: "bg-[#d39b53] text-white hover:bg-[#b8863b]",
    secondary: "bg-white text-[#d39b53] border border-[#d39b53] hover:bg-[#d39b53] hover:text-white",
    outline: "border border-gray-600 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
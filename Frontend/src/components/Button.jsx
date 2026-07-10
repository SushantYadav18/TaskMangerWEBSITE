import React from "react";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-200",
  secondary:
    "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm",
  ghost:
    "bg-transparent text-gray-500 hover:text-blue-600",
};

const Button = ({
  children,
  label,
  icon,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
  ...props
}) => {
  const variantClass = buttonVariants[variant] || buttonVariants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variantClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {children || label}
    </button>
  );
};

export default Button;
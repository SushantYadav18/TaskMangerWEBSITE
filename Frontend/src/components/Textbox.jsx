import React from "react";

const Textbox = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  className = "",
  helperText,
  error,
  field,
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...field}
        {...props}
      />
      {(helperText || error) && (
        <p className={`text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Textbox;

"use client";
import React from "react";

type AppButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const AppButton: React.FC<AppButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default AppButton;
"use client";

import { useCallback } from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

// Minimal accessible toggle switch (keyboard + ARIA) styled with tailwind
export function Switch({ checked, onChange }: SwitchProps) {
  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onChange();
      }
    },
    [onChange]
  );
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      onKeyDown={handleKey}
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        checked ? "bg-indigo-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300 ${
          checked ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
}

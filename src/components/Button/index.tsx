"use client";

import Link from "next/link";
import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, href, variant = "primary", className, onClick }: Props) {
  const baseClasses =
    "inline-flex relative overflow-hidden p-px h-12 rounded-full hover:outline-none hover:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50 transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600",
    outline: "border-2 border-gray-600 bg-transparent hover:bg-gray-800",
  };

  const innerClasses = {
    primary:
      "inline-flex justify-center items-center w-full h-full cursor-pointer rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl",
    outline:
      "inline-flex justify-center items-center w-full h-full cursor-pointer rounded-full bg-transparent px-8 py-1 text-sm font-medium text-white",
  };

  const content = (
    <div className={cn(baseClasses, className)}>
      {variant === "primary" && (
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)]" />
      )}
      <span className={innerClasses[variant]}>{children}</span>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick} className="block">
      {content}
    </button>
  );
}

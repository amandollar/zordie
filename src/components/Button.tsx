import React from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };
type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const cn = (
  ...classes: Array<string | false | null | undefined>
): string => classes.filter(Boolean).join(" ");

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm sm:text-base px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:opacity-90",
  secondary: "bg-white text-black border border-gray-300 hover:bg-gray-50",
  outline: "bg-transparent text-black border border-gray-300 hover:bg-gray-50",
  ghost: "bg-transparent text-black hover:bg-gray-50",
  accent: "bg-orange-500 text-white hover:bg-orange-600",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    pill = false,
    fullWidth = false,
    className,
    children,
    leftIcon,
    rightIcon,
    to,
    disabled,
    ...rest
  } = props as any;

  const baseClasses =
    "inline-flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black";
  const rounded = pill ? "rounded-full" : "rounded-md";
  const width = fullWidth ? "w-full" : "";
  const gap = leftIcon || rightIcon ? "gap-2" : "";

  const classes = cn(
    baseClasses,
    rounded,
    width,
    gap,
    sizeStyles[size],
    variantStyles[variant],
    disabled && "opacity-60 pointer-events-none",
    className
  );

  if (to) {
    return (
      <Link
        to={to}
        aria-disabled={disabled ? "true" : undefined}
        className={classes}
        {...(rest as any)}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={classes} {...(rest as any)}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}



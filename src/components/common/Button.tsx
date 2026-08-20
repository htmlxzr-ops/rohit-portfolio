import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/helpers/cn";

type ButtonVariant = "primary" | "outline" | "gold";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  gold: "btn-gold",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn("btn", variantClass[variant], className)} {...props}>
      {children}
    </button>
  );
}

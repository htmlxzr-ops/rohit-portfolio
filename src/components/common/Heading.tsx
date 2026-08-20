import { ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  children: ReactNode;
  as?: HeadingTag;
  gradient?: boolean;
  className?: string;
}

export default function Heading({
  children,
  as: Tag = "h2",
  gradient = false,
  className,
}: HeadingProps) {
  return (
    <Tag className={cn(gradient && "text-gradient", className)}>
      {children}
    </Tag>
  );
}

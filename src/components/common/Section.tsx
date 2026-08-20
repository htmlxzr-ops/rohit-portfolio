import { ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";
import Container from "@/components/common/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  id,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn(className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

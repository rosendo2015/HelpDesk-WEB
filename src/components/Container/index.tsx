import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { containerVariants } from "./containerVariants";

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cn(containerVariants({ size: "md" }), className),
      ...props,
    },
    children,
  );
}

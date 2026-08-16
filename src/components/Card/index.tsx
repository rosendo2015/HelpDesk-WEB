import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { cardVariants } from "./cardVariants";

interface CardProps
  extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
  as = "div",
  variant,
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cn(cardVariants({ variant, size, className }), className),
      ...props,
    },
    children,
  );
}

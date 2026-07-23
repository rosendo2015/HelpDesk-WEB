import React from "react";
import type { VariantProps } from "class-variance-authority";
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
      className: cardVariants({ variant, size, className }),
      ...props,
    },
    children,
  );
}

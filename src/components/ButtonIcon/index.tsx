import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "tailwind-variants";
import { Icon } from "../Icon";
import {
  buttonIconIconVariants,
  buttonIconVariants,
} from "./buttonIconVariants";

interface ButtonIconProps
  extends
    VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function ButtonIcon({
  variant,
  size,
  icon,
  disabled,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={cn(buttonIconVariants({ variant, size, disabled }), className)}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={buttonIconIconVariants({ variant, size, className })}
        />
      )}
    </button>
  );
}

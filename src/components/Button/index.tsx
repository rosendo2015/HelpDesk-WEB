import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "tailwind-variants";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  buttonIconVariants,
  buttonTextVariants,
  buttonVariants,
} from "./buttonVariants";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function Button({
  variant,
  size,
  disabled,

  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ disabled, variant, size }), className)}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={buttonIconVariants({ variant, size: "md" })}
        />
      )}
      <Text variant="text-sm-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}

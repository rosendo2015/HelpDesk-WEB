import React from "react";
import { Icon } from "../Icon";
import type { VariantProps } from "class-variance-authority";
import { buttonIconIconVariants, buttonIconVariants } from "./buttonIconVariants";

interface ButtonIconProps
    extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
};

export function ButtonIcon({
    variant,
    size,
    icon,
    disabled,
    className,
    ...props }: ButtonIconProps) {
    return (
        <button
            className={buttonIconVariants({ variant, size, disabled, className })}
            {...props}
        >
            {icon && <Icon svg={icon} className={buttonIconIconVariants({ variant, size, className })} />}
        </button>
    );
}

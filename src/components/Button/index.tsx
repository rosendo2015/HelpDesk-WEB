import React from "react"
import { Icon } from "../Icon"
import type { VariantProps } from "class-variance-authority"
import { buttonIconVariants, buttonTextVariants, buttonVariants } from "./buttonVariants"
import { Text } from "../Text"

interface ButtonProps extends
    Omit<React.ComponentProps<"button">, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
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
        <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
            {icon && <Icon
                svg={icon}
                className={buttonIconVariants({ variant, size })}
            />}
            <Text variant="text-sm-bold" className={buttonTextVariants({ variant })}>
                {children}
            </Text>
        </button>
    )
}
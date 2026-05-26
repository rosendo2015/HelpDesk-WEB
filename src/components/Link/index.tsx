// Link/index.tsx
import React from "react"
import { Icon } from "../Icon"
import type { VariantProps } from "class-variance-authority"
import { Text } from "../Text"
import clsx from "clsx"
import { linkIconVariants, linkTextVariants, linkVariants } from "./linkVariants"

interface LinkProps extends
    Omit<React.ComponentProps<"a">, "disabled">,
    VariantProps<typeof linkVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
    disabled?: boolean
}

export function Link({
    variant,
    size,
    disabled,
    className,
    children,
    icon,
    ...props
}: LinkProps) {
    return (
        <a
            className={clsx(linkVariants({ variant, size, disabled }), className)}
            aria-disabled={disabled}
            {...props}
        >
            {icon && (
                <Icon
                    svg={icon}
                    className={linkIconVariants({ variant, size })}
                />
            )}
            <Text variant="text-sm-bold" className={linkTextVariants({ variant })}>
                {children}
            </Text>
        </a>
    )
}

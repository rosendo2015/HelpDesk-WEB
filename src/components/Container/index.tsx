import React from "react";
import { containerVariants } from "./containerVariants";
import type { VariantProps } from "class-variance-authority";

interface ContainerProps extends
    VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements,
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
            className: containerVariants({ size: "md", className }),
            ...props
        },
        children
    )
}
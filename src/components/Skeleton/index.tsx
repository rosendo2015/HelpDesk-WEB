import type { VariantProps } from "class-variance-authority";
import { skeletonVariants } from "./skeletonVariants";
import React from "react";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> { }

export function Skeleton({
    rounded,
    className,
    ...props
}: SkeletonProps) {
    return (
        <div className={skeletonVariants({ rounded, className })} {...props} />
    );
}
import { cva } from "class-variance-authority";

export const skeletonVariants = cva("animate-pulse bg-gray-400", {
    variants: {
        rounded: {
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full",
        },
    },
})
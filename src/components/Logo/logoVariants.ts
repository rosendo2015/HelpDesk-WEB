import { cva } from "class-variance-authority";

export const logoStyles = cva("flex items-center justify-center gap-3", {
    variants: {
        size: {
            sm: "gap-2",
            md: "gap-3",
            lg: "gap-4",
        },
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col",
        },
    },
    defaultVariants: {
        size: "md",
        orientation: "horizontal",
    },
});

export const logoImage = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6",
            md: "w-10 h-10",
            lg: "w-14 h-14",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

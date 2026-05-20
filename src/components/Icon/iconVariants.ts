import { cva } from "class-variance-authority";

export const iconVariants = cva("inline-block", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin",
        },
        color: {
            gray: "text-gray-400",
            blue: "text-blue-500",
            red: "text-red-500",
        },
        size: {
            sm: "w-3 h-3",
            md: "w-4 h-4",
            lg: "w-5 h-5",
        },
    },
    defaultVariants: {
        animate: false,
        color: "gray",
        size: "md",
    },
});
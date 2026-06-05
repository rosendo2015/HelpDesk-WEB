import { cva } from "class-variance-authority";

export const adminVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});
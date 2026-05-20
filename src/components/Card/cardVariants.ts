import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg border border-solid border-gray-500 bg-gray-600", {
    variants: {
        size: {
            none: "",
            md: "p-4",
        }
    },
    defaultVariants: {
        size: "none"
    }
})
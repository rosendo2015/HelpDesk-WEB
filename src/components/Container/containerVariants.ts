import { cva } from "class-variance-authority";


export const containerVariants = cva("", {
    variants: {
        size: {
            default: "w-full",
            md: "w-93.75 sm:max-w-170 px-2 ",
        }
    },
    defaultVariants: {
        size: "default"
    }
})
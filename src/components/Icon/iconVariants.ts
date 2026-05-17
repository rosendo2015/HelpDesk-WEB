import { cva } from "class-variance-authority";

export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin"
        }
    },
    defaultVariants: {
        animate: false
    }
})


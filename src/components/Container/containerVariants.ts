import { cva } from "class-variance-authority";


export const containerVariants = cva("mx-auto", {
    variants: {
        size: {
            md: "w-93.75 sm:max-w-170 px-2 ",
        }
    },
    defaultVariants: {
        size: "md"
    }
})
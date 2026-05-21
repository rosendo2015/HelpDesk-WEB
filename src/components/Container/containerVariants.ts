import { cva } from "class-variance-authority";


export const containerVariants = cva("mx-auto border border-gray-300 rounded-lg", {
    variants: {
        size: {
            md: "w-93.75 sm:w-341.5 px-2 ",
        }
    },
    defaultVariants: {
        size: "md"
    }
})
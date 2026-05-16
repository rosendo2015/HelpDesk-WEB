import { cva } from "class-variance-authority"

export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            "text-xl-bold": "text-2xl leading-[33.6px] font-bold",
            "text-lg-bold": "text-xl leading-7 font-bold",
            "heading-md-normal": "text-base leading-5 font-normal",
            "text-sm-regular": "text-sm leading-5 font-normal",
            "text-xs-regular": "text-xs leading-4 font-normal",
            "text-xxs-bold": "text-[10px] leading-4 font-bold"
        }
    },
    defaultVariants: {
        variant: "heading-md-normal"
    }
})

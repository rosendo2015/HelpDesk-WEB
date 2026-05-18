import { cva } from "class-variance-authority";


export const buttonIconVariants = cva("flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-gray-100",
            secondary: "bg-gray-500 hover:bg-gray-400",
            link: "bg-transparent hover:bg-gray-500"
        },
        size: {
            md: "h-10 w-10",
            sm: "h-7 w-7"
        },
        disabled: {
            false: "",
            true: "opacity-50 cursor-not-allowed pointer-events-none",
        }
    },

    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
    }
})

export const buttonIconIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-600",
            secondary: "fill-gray-200 group-hover:fill-gray-100",
            link: "fill-gray-300 group-hover:fill-gray-100"
        },
        size: {
            md: "w-5 h-5",
            sm: "w-3.5 h-3.5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    }
})
import { cva } from "class-variance-authority";

export const tagTimeVariants = cva("flex gap-2 items-center justify-center rounded-full text-xs-bold", {
    variants: {
        variant: {
            "default": "border border-gray-400 hover:bg-gray-500 cursor-pointer",
            "selected": "bg-feedback-progress cursor-pointer",
            "disabled": "border border-gray-400 bg-gray-500 cursor-not-allowed",
        },
        size: {
            "md": "px-3 py-1.5",
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
})

export const tagTimeTextVariants = cva("", {
    variants: {
        variant: {
            "default": "text-gray-100",
            "selected": "text-gray-600",
            "disabled": " text-gray-400",
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

export const tagTimeIconVariants = cva("w-5 h-5", {
    variants: {
        variant: {
            "selected": "fill-gray-600",
        }
    }
})

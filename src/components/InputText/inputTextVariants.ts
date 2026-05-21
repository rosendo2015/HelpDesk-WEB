import { cva } from "class-variance-authority"

export const inputTextVariants = cva(
    "border-b border-solid bg-transparent outline-none flex-1",
    {
        variants: {
            error: {
                true: "border-red-500 focus:border-red-500",
                false: "border-gray-400 focus:border-blue-500"
            }
        },
        defaultVariants: {
            error: false
        }
    }
)

export const labelInputTextVariants = cva(
    "transition-all mt-4",
    {
        variants: {
            error: {
                true: "text-red-500 group-focus-within:text-red-500",
                false: "text-gray-400 group-focus-within:text-blue-500"
            }
        },
        defaultVariants: {
            error: false
        }
    }
)

export const helperTextVariants = cva("text-xs mt-1 flex items-center gap-1", {
    variants: {
        error: {
            true: "text-red-500",
            false: "text-gray-400"
        }
    },
    defaultVariants: {
        error: false
    }
})

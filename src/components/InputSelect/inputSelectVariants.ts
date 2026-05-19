import { cva } from "class-variance-authority";

export const inputSelectVariants = cva(
    "border-b border-solid bg-transparent outline-none w-full flex justify-between items-center cursor-pointer py-2",
    {
        variants: {
            state: {
                default: "border-gray-400 text-gray-400",
                focus: "border-blue-500 text-blue-500",
                error: "border-red-500 text-red-500",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
)
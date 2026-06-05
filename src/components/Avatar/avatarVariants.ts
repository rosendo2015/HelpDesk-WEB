import { cva } from "class-variance-authority";

export const avatarVariants = cva(
    "flex items-center justify-center rounded-full font-bold text-white",
    {
        variants: {
            size: {
                sm: "w-8 h-8 text-sm",
                md: "w-12 h-12 text-base",
                lg: "w-16 h-16 text-lg",
            },
            color: {
                blue: "bg-blue-dark",

            },
        },
        defaultVariants: {
            size: "md",
            color: "blue",
        },
    }
);

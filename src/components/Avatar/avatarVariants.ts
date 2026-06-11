import { cva } from "class-variance-authority";

export const avatarVariants = cva(
    "flex items-center justify-center rounded-full font-bold text-white",
    {
        variants: {
            size: {
                xs: "w-6 h-6 text-xs",
                sm: "w-10 h-10 text-sm",
                md: "w-12 h-12 text-base",
                lg: "w-16 h-16 text-lg",
            },
            color: {
                blue: "bg-blue-dark",

            },
        },
        defaultVariants: {
            size: "sm",
            color: "blue",
        },
    }
);

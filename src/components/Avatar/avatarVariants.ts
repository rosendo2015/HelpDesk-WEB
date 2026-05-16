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
                blue: "bg-blue-500",
                green: "bg-green-500",
                red: "bg-red-500",
                purple: "bg-purple-500",
                yellow: "bg-yellow-500",
                pink: "bg-pink-500",
                indigo: "bg-indigo-500",
                teal: "bg-teal-500",
            },
        },
        defaultVariants: {
            size: "md",
            color: "blue",
        },
    }
);

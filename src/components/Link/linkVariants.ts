// Link/linkVariants.ts
import { cva } from "class-variance-authority";

export const linkVariants = cva(
    "inline-flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "text-blue-600 hover:text-blue-800 underline",
                secondary: "bg-gray-500 text-gray-100 hover:text-gray-200 hover:bg-gray-400",
                tertiary: "bg-blue-dark text-gray-100 hover:text-gray-200 hover:bg-blue-light",
                subtle: "text-gray-400 hover:text-gray-600",
            },
            size: {
                lg: "h-10 text-lg px-2",
                md: "text-sm px-1.5 py-0.5",
                sm: "text-xs px-1 py-0.5",
            },
            disabled: {
                false: "",
                true: "opacity-50 cursor-not-allowed pointer-events-none no-underline",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            disabled: false,
        },
    }
);

export const linkIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-blue-600 group-hover:fill-blue-800",
            secondary: "fill-gray-600 group-hover:fill-gray-800",
            tertiary: "fill-gray-500 group-hover:fill-gray-700",
            subtle: "fill-gray-400 group-hover:fill-gray-600",
        },
        size: {
            lg: "w-6 h-6",
            md: "w-5 h-5",
            sm: "w-3.5 h-3.5",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export const linkTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-blue-600 group-hover:text-blue-800",
            secondary: "text-gray-100 group-hover:text-gray-800",
            tertiary: "text-gray-500 group-hover:text-gray-700",
            subtle: "text-gray-400 group-hover:text-gray-600",
        },
        size: {
            lg: "text-lg",
            md: "text-sm",
            sm: "text-xs",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

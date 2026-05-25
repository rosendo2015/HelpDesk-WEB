import { cva } from "class-variance-authority";

export const authContainer = cva("flex h-screen justify-center items-center relative overflow-hidden", {
    variants: {
        theme: {
            dark: "bg-black",
            light: "bg-gray-100",
        },
    },
    defaultVariants: {
        theme: "dark",
    },
});

export const authBackground = cva("absolute inset-0 bg-cover bg-center opacity-60", {
    variants: {
        blur: {
            none: "",
            sm: "blur-sm",
            md: "blur-md",
        },
    },
    defaultVariants: {
        blur: "md",
    },
});

export const authContent = cva("relative z-10 rounded-lg shadow-lg p-8 w-full max-w-md");
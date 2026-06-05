import { cva } from "class-variance-authority";

export const authContainer = cva("flex h-screen justify-center items-center relative overflow-hidden sm:justify-end sm:items-end", {
    variants: {
        theme: {
            dark: "bg-gray-100",
            light: "bg-gray-600",
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
        blur: "none",
    },
});

export const authContent = cva("h-206 sm:h-[47.825rem] bg-[var(--color-gray-600)] relative z-10 rounded-tl-[1.25rem] px-35 py-12 ");

export const appLayoutVariants = cva(
    "min-h-screen flex",
    {
        variants: {
            role: {
                ADMIN: "bg-gray-100",
                TECNICO: "bg-gray-100",
                CLIENTE: "bg-gray-100",
            },
        },
        defaultVariants: {
            role: "CLIENTE",
        },
    }
)
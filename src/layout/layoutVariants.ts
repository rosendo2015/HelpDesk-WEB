import { cva } from "class-variance-authority";

export const authContainer = cva(
  "flex min-h-screen justify-center items-center relative overflow-hidden sm:justify-end sm:items-end",
  {
    variants: {
      theme: {
        dark: "bg-gray-100",
        light: "bg-gray-600",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  },
);

export const authBackground = cva(
  "absolute inset-0 bg-cover bg-center opacity-60",
  {
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
  },
);

// CORREÇÃO: h-206 → min-h-screen, px-35 → px-10 (classes válidas no Tailwind v4)
export const authContent = cva(
  "min-h-screen sm:min-h-[47.825rem] bg-gray-600 relative z-10 rounded-tl-[1.25rem] px-10 py-12",
);

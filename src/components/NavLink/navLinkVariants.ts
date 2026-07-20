import { cva } from "class-variance-authority";

export const navLinkVariants = cva(
  "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "hover:text-blue-800 underline",
        secondary: "bg-transparent",
        tertiary:
          "bg-blue-dark text-gray-100 hover:text-gray-200 hover:bg-blue-light",
        subtitle: "bg-gray-500 hover:bg-gray-400",
        active: "bg-blue-dark text-white hover:bg-blue-dark", // 🔹 ativo com fundo azul
      },
      size: {
        lg: "h-10 text-lg px-2",
        md: "w-7 h-7 text-sm",
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
  },
);

export const navLinkIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-blue-600 group-hover:fill-blue-800",
      secondary: "fill-gray-600 group-hover:fill-gray-400",
      tertiary: "fill-gray-500 group-hover:fill-gray-700",
      subtitle: "fill-gray-400 group-hover:fill-gray-600",
      active: "fill-white",
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

export const navLinkTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 group-hover:text-blue-800",
      secondary: "text-gray-500 group-hover:text-gray-400",
      tertiary: "text-gray-500 group-hover:text-gray-700",
      subtitle: "text-gray-200 group-hover:text-gray-200",
      active: "text-white",
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

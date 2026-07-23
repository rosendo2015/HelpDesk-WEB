import { cva } from "class-variance-authority";

export const actionLinkVariants = cva(
  "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "hover:text-blue-800 underline",
        secondary: "bg-transparent",
        tertiary: "bg-gray-100 text-gray-100",
        subtitle: "bg-gray-500 hover:bg-gray-400",
      },
      size: {
        lg: "h-10 px-4 text-lg",
        md: "h-8 px-2 py-1 text-sm",
        sm: "w-5 h-5 px-2 text-xs ",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none no-underline",
      },
    },
    defaultVariants: {
      variant: "subtitle",
      size: "md",
      disabled: false,
    },
  },
);

export const actionLinkIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-blue-600 group-hover:fill-blue-800",
      secondary: "fill-gray-600 group-hover:fill-gray-400",
      tertiary: "fill-gray-500 ",
      subtitle: "fill-gray-400 group-hover:fill-gray-600",
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

export const actionLinkTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 group-hover:text-blue-800",
      secondary: "text-gray-500 group-hover:text-gray-400",
      tertiary: "text-gray-500",
      subtitle: "text-gray-200 group-hover:text-gray-200",
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

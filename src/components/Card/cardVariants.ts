import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg border border-solid ", {
  variants: {
    variant: {
      default: "border-gray-500 bg-gray-600",
      bottom: "bg-transparent border-0",
    },
    size: {
      none: "",
      md: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "none",
  },
});

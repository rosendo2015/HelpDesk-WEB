import { tv } from "tailwind-variants";
export const dividerVariants = tv({
  base: "w-full h-px ",
  variants: {
    variant: {
      default: "bg-gray-500",
    },
    orientation: {
      horizontal: "w-full h-px",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

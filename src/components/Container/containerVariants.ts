import { cva } from "class-variance-authority";

export const containerVariants = cva("", {
  variants: {
    size: {
      default: "w-full",
      md: "w-full sm:max-w-[42.5rem] px-2", // ✅ w-93.75 → w-full / max-w-170 → max-w-[42.5rem]
    },
  },
  defaultVariants: {
    size: "default",
  },
});

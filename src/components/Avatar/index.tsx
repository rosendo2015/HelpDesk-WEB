//* src/components/Avatar/index.tsx
import { forwardRef } from "react";
import cn from "classnames";
import { type VariantProps } from "class-variance-authority";
import { avatarVariants } from "./avatarVariants";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  name: string | null;
  className?: string;
}

function getInitials(fullName: string | null): string {
  if (typeof fullName !== "string" || !fullName.trim()) return "";

  const parts = fullName.trim().split(" ");

  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, name, size, color }, ref) => {
    const initials = getInitials(name);

    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size, color }), className)}
      >
        {initials}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";

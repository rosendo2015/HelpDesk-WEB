import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  actionLinkIconVariants,
  actionLinkTextVariants,
  actionLinkVariants,
} from "./actionLinkVariants";

interface ActionLinkProps {
  to?: string;
  variant?: "primary" | "secondary" | "tertiary" | "subtitle";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>["svg"];
  onClick?: () => void;
}

export function ActionLink({
  to = "#",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  children,
  icon,
  onClick,
}: ActionLinkProps) {
  return (
    <a
      href={to}
      onClick={onClick}
      className={clsx(
        actionLinkVariants({ variant, size, disabled }),
        "group",
        className,
      )}
      aria-disabled={disabled}
    >
      {icon && (
        <Icon
          svg={icon}
          className={actionLinkIconVariants({ variant, size })}
        />
      )}
      {children && (
        <Text
          variant="text-sm-bold"
          className={actionLinkTextVariants({ variant })}
        >
          {children}
        </Text>
      )}
    </a>
  );
}

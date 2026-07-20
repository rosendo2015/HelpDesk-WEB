import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { Icon } from "../Icon";
import { Text } from "../Text";
import clsx from "clsx";
import {
  navLinkIconVariants,
  navLinkTextVariants,
  navLinkVariants,
} from "./navLinkVariants";

interface Props extends Omit<NavLinkProps, "className" | "children"> {
  variant?: "primary" | "secondary" | "tertiary" | "subtitle" | "active";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function NavLink({
  to,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  children,
  icon,
  ...props
}: Props) {
  return (
    <RouterNavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        clsx(
          navLinkVariants({
            variant: isActive ? "active" : variant,
            size,
            disabled,
          }),
          "group",
          className,
        )
      }
      aria-disabled={disabled}
    >
      {({ isActive }) => (
        <>
          {icon && (
            <Icon
              svg={icon}
              className={navLinkIconVariants({
                variant: isActive ? "active" : variant,
                size,
              })}
            />
          )}
          {children && (
            <Text
              variant="text-sm-bold"
              className={navLinkTextVariants({
                variant: isActive ? "active" : variant,
              })}
            >
              {children}
            </Text>
          )}
        </>
      )}
    </RouterNavLink>
  );
}

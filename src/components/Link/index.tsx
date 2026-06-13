//Link/index.tsx
import { NavLink, type NavLinkProps } from "react-router-dom"
import { Icon } from "../Icon"
import { Text } from "../Text"
import clsx from "clsx"
import { linkIconVariants, linkTextVariants, linkVariants } from "./linkVariants"

interface LinkProps extends Omit<NavLinkProps, "className" | "children"> {
    variant?: "primary" | "secondary" | "tertiary" | "subtle" | "active"
    size?: "lg" | "md" | "sm"
    disabled?: boolean
    className?: string
    children: React.ReactNode
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export function Link({
    to,
    variant = "primary",
    size = "md",
    disabled = false,
    className,
    children,
    icon,
    ...props
}: LinkProps) {
    return (
        <NavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                clsx(
                    linkVariants({
                        variant: isActive ? "active" : variant,
                        size,
                        disabled,
                    }),
                    "group",
                    className
                )
            }
            aria-disabled={disabled}
        >
            {icon && (
                <Icon
                    svg={icon}
                    className={linkIconVariants({
                        variant: variant,
                        size,
                    })}
                />
            )}
            <Text
                variant="text-sm-bold"
                className={linkTextVariants({
                    variant: variant,
                })}
            >
                {children}
            </Text>
        </NavLink>
    )
}

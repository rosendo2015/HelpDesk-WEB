//Link/index.tsx
import { NavLink, type NavLinkProps } from "react-router-dom"
import { Icon } from "../Icon"
import { Text } from "../Text"
import clsx from "clsx"
import { linkIconVariants, linkTextVariants, linkVariants } from "./linkVariants"

interface LinkProps extends Omit<NavLinkProps, "className" | "children"> {
    variant?: "primary" | "secondary" | "tertiary" | "subtitle" | "active"
    size?: "lg" | "md" | "sm"
    disabled?: boolean
    className?: string
    children?: React.ReactNode
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
            {({ isActive }) => (
                <>
                    {icon && (
                        <Icon
                            svg={icon}
                            className={linkIconVariants({
                                variant: isActive ? "active" : variant,
                                size,
                            })}
                        />
                    )}
                    <Text
                        variant="text-sm-bold"
                        className={linkTextVariants({
                            variant: isActive ? "active" : variant,
                        })}
                    >
                        {children}
                    </Text>
                </>
            )}
        </NavLink>
    )
}


import { Text } from "../Text";
import type { VariantProps } from "class-variance-authority";
import { tagTimeTextVariants, tagTimeVariants, tagTimeIconVariants } from "./tagTimeVariants";
import { Icon } from "../Icon";

interface TagTimeProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof tagTimeVariants> {
    size?: "md";
    children: React.ReactNode;
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export function TagTime({
    variant,
    size,
    className,
    children,
    svg,
    ...props
}: TagTimeProps) {
    return (
        <div className={tagTimeVariants({ variant, className, size, })} {...props}>
            <Text variant={"text-xs-bold"} className={tagTimeTextVariants({ variant })}>{children}</Text>
            {
                variant === "selected" && svg && (
                    <Icon svg={svg} className={tagTimeIconVariants({ variant })} />
                )}
        </div>
    )
}
import { Text } from "../Text";
import type { VariantProps } from "class-variance-authority";
import { tagsTextVariants, tagsVariants, tagsIconVariants } from "./tagsVariants";
import { Icon } from "../Icon";

interface TagsProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof tagsVariants> {
    size?: "md";
    children: React.ReactNode;
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export function Tags({
    variant,
    size,
    className,
    children,
    svg,
    ...props
}: TagsProps) {
    return (
        <div className={tagsVariants({ variant, className, size, })} {...props}>
            {svg && <Icon svg={svg} className={tagsIconVariants({ variant })} />}
            <Text variant={"text-xs-regular"} className={tagsTextVariants({ variant })}>{children}</Text>
        </div>
    )
}
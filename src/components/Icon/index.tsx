import { type VariantProps } from "class-variance-authority";
import { iconVariants } from "./iconVariants";

interface IconProps
    extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>
}

export function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
    return (
        <SvgComponent className={iconVariants({ animate, className })} {...props} />
    )
}
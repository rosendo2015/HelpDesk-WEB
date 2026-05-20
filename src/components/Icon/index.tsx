import { type VariantProps } from "class-variance-authority";
import { iconVariants } from "./iconVariants";

interface IconProps
    extends Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({ svg: SvgComponent, animate, color, size, className, ...props }: IconProps) {
    return (
        <SvgComponent className={iconVariants({ animate, color, size, className })} {...props} />
    );
}

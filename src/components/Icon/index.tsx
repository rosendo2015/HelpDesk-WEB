import type { VariantProps } from "class-variance-authority";
import { cn } from "tailwind-variants";
import { iconVariants } from "./iconVariants";

interface IconProps
  extends
    Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
  svg: SvgComponent,
  animate,
  color,
  size,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={cn(iconVariants({ animate, color, size }), className)}
      {...props}
    />
  );
}

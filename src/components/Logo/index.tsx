import { type VariantProps } from "class-variance-authority";
import LogoIcon from "../../assets/images/Logo_IconLight.svg";
import { Text } from "../Text";
import { logoImage, logoStyles } from "./logoVariants";


interface LogoProps extends VariantProps<typeof logoStyles> {
    color?: string;
    className?: string;
}

export function Logo({ size, orientation, color, className }: LogoProps) {
    return (
        <div className={logoStyles({ size, orientation }) + (className ? ` ${className}` : "")}>
            <img
                className={logoImage({ size })}
                src={LogoIcon}
                alt="Logo HelpDesk"
            />
            <Text
                variant="text-xl-bold"
                className={color ? color : "text-blue-dark"}
            >
                HelpDesk
            </Text>
        </div>
    );
}

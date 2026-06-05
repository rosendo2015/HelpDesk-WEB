import { type VariantProps } from "class-variance-authority";
import LogoIcon from "../../assets/images/Logo_IconLight.svg";
import { Text } from "../Text";
import { logoImage, logoStyles, logoText } from "./logoVariants";

interface LogoProps extends VariantProps<typeof logoStyles>, VariantProps<typeof logoText> {
    className?: string;
    role?: "ADMIN" | "TECNICO" | "CLIENTE";
}

export function Logo({ size, orientation, color, className, role }: LogoProps) {
    return (
        <div className={logoStyles({ size, orientation }) + (className ? ` ${className}` : "")}>
            <img
                className={logoImage({ size })}
                src={LogoIcon}
                alt="Logo HelpDesk"
            />
            <div className="flex flex-col items-start">
                <Text variant="text-xl-bold" className={logoText({ color })}>
                    HelpDesk
                </Text>
                {role && (
                    <Text variant="text-sm-regular" className="text-blue-light">
                        {role}
                    </Text>
                )}
            </div>
        </div>
    );
}

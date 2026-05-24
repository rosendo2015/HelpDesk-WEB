import LogoIcon from "../../assets/images/Logo_IconLight.svg"
import { Text } from "../Text";
export function Logo() {
    return (
        <div className="flex items-center justify-center gap-3">
            <img className="w-10 h-10" src={LogoIcon} alt="logo HelpDesk" />
            <Text variant="text-xl-bold" className="text-[var(--color-blue-dark)]">HelpDesk</Text>
        </div>
    );
}
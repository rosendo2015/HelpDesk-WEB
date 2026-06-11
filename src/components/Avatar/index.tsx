import { type VariantProps } from "class-variance-authority";
import { avatarVariants } from "./avatarVariants";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
    name: string;

}
function getInitials(fullName: string): string {
    if (!fullName) return "";
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
export function Avatar({ name, size, color }: AvatarProps) {
    const initials = getInitials(name);
    return (
        <a
            href="#"
            className={avatarVariants({ size, color })}

        >
            {initials}
        </a>
    );
}

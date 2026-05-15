import React from "react";

type ButtonIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactNode;
};

export function ButtonIcon({ icon, ...rest }: ButtonIconProps) {
    return (
        <button
            {...rest}
            className="p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-sm"
        >
            {icon}
        </button>
    );
}

import React from "react";

type AvatarProps = {
    name: string;
    size?: number; // tamanho opcional, padrão 50px
};

function Avatar({ name, size = 50 }: AvatarProps) {
    const getInitials = (fullName: string): string => {
        if (!fullName) return "";
        const parts = fullName.trim().split(" ");
        if (parts.length === 1) {
            return parts[0][0].toUpperCase();
        }
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    // Paleta fixa de cores do Tailwind
    const colors = [
        "bg-blue-500",
        "bg-green-500",
        "bg-red-500",
        "bg-purple-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-teal-500",
    ];

    // Escolhe uma cor com base no hash do nome
    const pickColor = (str: string): string => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    };

    const bgColor = pickColor(name);

    return (
        <a href="#"
            className={`flex items-center justify-center rounded-full font-bold text-white ${bgColor}`}
            style={{
                width: size,
                height: size,
                fontSize: size / 2.5,
            }}
        >
            {getInitials(name)}
        </a>
    );
}

export default Avatar;

import { Outlet } from "react-router";
import backgroundImage from "../assets/images/Login_Background.png";
import { authBackground, authContainer, authContent } from "./layoutVariants";

export function AuthLayout() {
    return (
        <div className={authContainer()}>
            {/* Imagem de fundo */}
            <div
                className={authBackground()}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* Conteúdo (formulários) */}
            <div className={authContent()}>
                <Outlet />
            </div>
        </div>
    );
}
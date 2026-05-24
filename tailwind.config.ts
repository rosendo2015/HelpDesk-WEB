import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [],


    theme: {
        extend: {
            backgroundImage: {
                "hero": "url('/Login_Background.png')",
            }
        }
    }
}



export default config

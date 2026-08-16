import { cva } from "class-variance-authority";

export const authContainer = cva(
  "flex min-h-screen w-full relative overflow-hidden",
  {
    variants: {
      theme: {
        dark: "bg-gray-100",
        light: "bg-gray-600",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  },
);

export const authBackground = cva(
  "absolute inset-0 bg-cover bg-center opacity-60",
  {
    variants: {
      blur: {
        none: "",
        sm: "blur-sm",
        md: "blur-md",
      },
    },
    defaultVariants: {
      blur: "none",
    },
  },
);

// Painel branco do formulário: ocupa tela toda no mobile,
// largura fixa ancorada à direita no desktop
export const authContent = cva(
  [
    "relative z-10",
    "w-full sm:w-[40rem] mt-[1.5rem]", // mobile 100%, desktop 432px
    "min-h-[100%]", // sempre ocupa a tela toda verticalmente
    "bg-gray-600", // fundo branco (#f9fafa)
    "sm:rounded-tl-[1.25rem]", // borda arredondada só no desktop
    "px-8 py-12", // espaçamento interno
    "flex flex-col justify-center", // centraliza o conteúdo verticalmente
    "ml-auto", // empurra para a direita no desktop
  ].join(" "),
);

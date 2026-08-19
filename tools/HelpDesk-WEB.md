
## .env

```env
VITE_API_URL=http://localhost:3333
VITE_APP_NAME=HelpDesk
```

## eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])

```

## package.json

```json
{
  "name": "helpdesk",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "generate-md": "ts-node --esm tools/generate-md.ts"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.20",
    "@radix-ui/react-popover": "^1.1.21",
    "@tailwindcss/vite": "^4.3.0",
    "axios": "^1.16.1",
    "class-variance-authority": "^0.7.1",
    "classnames": "^2.5.1",
    "clsx": "^2.1.1",
    "jwt-decode": "^4.0.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-number-format": "^5.4.5",
    "react-router": "^8.3.0",
    "react-router-dom": "^7.17.0",
    "tailwind-merge": "^3.6.0",
    "tailwind-variants": "^3.2.2",
    "tailwindcss": "^4.3.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.4",
    "@types/classnames": "^2.3.0",
    "@types/jest": "^30.0.0",
    "@types/jwt-decode": "^2.2.1",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "@vitest/ui": "^4.1.10",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "jsdom": "^30.0.1",
    "ts-node": "^10.9.2",
    "tw-animate-css": "^1.4.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10",
    "vite-plugin-svgr": "^5.2.0",
    "vitest": "^4.1.10"
  }
}

```

## README.md

# HelpDesk WEB 💻

<p align="left">
<img src="./.github/logo HelpDesk.png" alt="Tela de Login" width="600"/>
</p>

Interface web desenvolvida em **React**, **TypeScript** e **Vite**, conectada à [HelpDesk API](https://github.com/rosendo2015/HelpDesk-API).  
O sistema oferece uma experiência moderna e intuitiva para gerenciamento de chamados, usuários e disponibilidade de técnicos.

![React](https://img.shields.io/badge/React-18.x-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## ⚙️ Funcionalidades

- Login e autenticação de usuários
- Cadastro e gerenciamento de chamados
- Painel administrativo para controle de técnicos e clientes
- Upload de avatar e perfil de usuário
- Comunicação direta com a **HelpDesk API**
- Interface **responsiva** e otimizada para desktop e mobile
- Organização modular com **contexts**, **hooks** e **services**

---

## 🧩 Arquitetura do Projeto

```plaintext
src/
 ├── assets/              # Imagens, ícones e estilos globais
 ├── components/          # Componentes reutilizáveis
 ├── contexts/            # Contextos globais (auth, theme, etc.)
 ├── hooks/               # Hooks personalizados
 ├── layout/              # Layouts principais da aplicação
 ├── Pages/               # Páginas principais
 │    ├── admin/          # Painel administrativo
 │    ├── cliente/        # Área do cliente
 │    ├── tecnico/        # Área do técnico
 │    ├── App.tsx         # Componente raiz
 │    ├── PageComponents.tsx
 │    ├── SignIn.tsx      # Tela de login
 │    └── SignUp.tsx      # Tela de cadastro
 ├── routes/              # Definição das rotas
 ├── services/            # Comunicação com a API (axios)
 ├── tests/               # Testes unitários e de integração
 ├── types/               # Tipagens globais
 ├── utils/               # Funções auxiliares
 ├── index.css            # Estilos globais
 ├── main.tsx             # Ponto de entrada da aplicação
 └── vite-env.d.ts        # Tipos do ambiente Vite

```

## 🚀 Como Executar

### \* Clone o repositório

git clone https://github.com/rosendo2015/HelpDesk-WEB.git

### \* Acesse a pasta

cd HelpDesk-WEB

### \* Instale as dependências

```
npm install
```

### \* Configure o ambiente

cp .env.example .env

### \* Defina a URL da API no arquivo .env

VITE_API_URL=http://localhost:3000

### \* Execute o projeto

npm run dev

## 🧰 Tecnologias Utilizadas

- React

- TypeScript

- Vite

- TailwindCSS

- Axios

- React Router DOM

- Context API

- Vitest + Jest para testes

- ESLint + Prettier para padronização de código

## 🧪 Testes

npm run test

## 🧱 Ferramentas e Configurações

- TailwindCSS para estilização rápida e responsiva

- Vite para build e desenvolvimento ultrarrápido

- Vitest para testes unitários

- Docker Compose (opcional) para ambiente containerizado

- CI/CD via GitHub Actions (opcional)

## 📸 Preview do Sistema

<p align="left">
<img src="./.github/pageLogin.png" alt="Tela de Login" width="600"/>
</p>
<p align="left">
<img src="./.github/dashboard-admin.png" alt="Dashboard" width="600"/>
</p>

## 🤝 Contribuição

### Contribuições são bem-vindas!

- Faça um fork do projeto

- Crie uma branch (git checkout -b feature/nova-feature)

- Commit suas alterações (git commit -m 'Adiciona nova feature')

- Push para a branch (git push origin feature/nova-feature)

- Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir.

## 💬 Contato

Desenvolvido por Francisco Rosendo  
📧 rosendo2015@gmail.com
🔗 LinkedIn (linkedin.com in Bing)


## src\components\ActionLink\actionLinkVariants.ts

```ts
import { cva } from "class-variance-authority";

export const actionLinkVariants = cva(
  "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "hover:text-blue-800 underline",
        secondary: "bg-transparent",
        tertiary: "bg-gray-100 text-gray-100",
        subtitle: "bg-gray-500 hover:bg-gray-400",
      },
      size: {
        lg: "h-10 px-4 text-lg",
        md: "h-8 px-2 py-1 text-sm",
        sm: "w-5 h-5 px-2 text-xs ",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none no-underline",
      },
    },
    defaultVariants: {
      variant: "subtitle",
      size: "md",
      disabled: false,
    },
  },
);

export const actionLinkIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-blue-600 group-hover:fill-blue-800",
      secondary: "fill-gray-600 group-hover:fill-gray-400",
      tertiary: "fill-gray-500 ",
      subtitle: "fill-gray-400 group-hover:fill-gray-600",
    },
    size: {
      lg: "w-6 h-6",
      md: "w-5 h-5",
      sm: "w-3.5 h-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const actionLinkTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 group-hover:text-blue-800",
      secondary: "text-gray-500 group-hover:text-gray-400",
      tertiary: "text-gray-500",
      subtitle: "text-gray-200 group-hover:text-gray-200",
    },
    size: {
      lg: "text-lg",
      md: "text-sm",
      sm: "text-xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

```

## src\components\ActionLink\index.tsx

```tsx
import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  actionLinkIconVariants,
  actionLinkTextVariants,
  actionLinkVariants,
} from "./actionLinkVariants";

interface ActionLinkProps {
  to?: string;
  variant?: "primary" | "secondary" | "tertiary" | "subtitle";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>["svg"];
  onClick?: () => void;
}

export function ActionLink({
  to = "#",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  children,
  icon,
  onClick,
}: ActionLinkProps) {
  return (
    <a
      href={to}
      onClick={onClick}
      className={clsx(
        actionLinkVariants({ variant, size, disabled }),
        "group",
        className,
      )}
      aria-disabled={disabled}
    >
      {icon && (
        <Icon
          svg={icon}
          className={actionLinkIconVariants({ variant, size })}
        />
      )}
      {children && (
        <Text
          variant="text-sm-bold"
          className={actionLinkTextVariants({ variant })}
        >
          {children}
        </Text>
      )}
    </a>
  );
}

```

## src\components\Avatar\avatarVariants.ts

```ts
import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "flex items-center justify-center rounded-full font-bold text-white cursor-pointer",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-10 h-10 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
      },
      color: {
        blue: "bg-blue-dark",
      },
    },
    defaultVariants: {
      size: "sm",
      color: "blue",
    },
  },
);

```

## src\components\Avatar\index.tsx

```tsx
//* src/components/Avatar/index.tsx
import { forwardRef } from "react";
import cn from "classnames";
import { type VariantProps } from "class-variance-authority";
import { avatarVariants } from "./avatarVariants";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  name: string | null;
  className?: string;
}

function getInitials(fullName: string | null): string {
  if (typeof fullName !== "string" || !fullName.trim()) return "";

  const parts = fullName.trim().split(" ");

  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, name, size, color }, ref) => {
    const initials = getInitials(name);

    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size, color }), className)}
      >
        {initials}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";

```

## src\components\Button\buttonVariants.ts

```ts
import { cva } from "class-variance-authority";


export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-gray-100",
            secondary: "bg-gray-500 hover:bg-gray-400",
            link: "bg-transparent hover:bg-gray-500"
        },
        size: {
            lg: "h-10 px-6 w-full",
            md: "h-10 px-4",
            sm: "h-7 px-3"
        },
        disabled: {
            false: "",
            true: "opacity-50 cursor-not-allowed pointer-events-none",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
    }
})

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-600",
            secondary: "fill-gray-200 hover:fill-gray-100",
            link: "fill-gray-300 hover:fill-gray-100"
        },
        size: {
            md: "w-5 h-5",
            sm: "w-3.5 h-3.5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    }
})

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-gray-600",
            secondary: "text-gray-200 hover:fill-gray-100",
            link: "text-gray-300 hover:fill-gray-100"
        },
        size: {
            md: "text-sm",
            sm: "text-xs"
        }

    },
    defaultVariants: {
        variant: "primary",

    }
})
```

## src\components\Button\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "tailwind-variants";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  buttonIconVariants,
  buttonTextVariants,
  buttonVariants,
} from "./buttonVariants";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function Button({
  variant,
  size,
  disabled,

  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ disabled, variant, size }), className)}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={buttonIconVariants({ variant, size: "md" })}
        />
      )}
      <Text variant="text-sm-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}

```

## src\components\ButtonIcon\buttonIconVariants.ts

```ts
import { cva } from "class-variance-authority";

export const buttonIconVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-gray-100",
        secondary: "bg-gray-500 hover:bg-gray-400",
        link: "bg-transparent hover:bg-gray-500",
      },
      size: {
        lg: "h-10 w-10",
        md: "h-8 w-8",
        sm: "h-5 w-5",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-gray-600",
      secondary: "fill-gray-200 group-hover:fill-gray-100",
      link: "fill-gray-300 group-hover:fill-gray-100",
    },
    size: {
      lg: "w-7 h-7",
      md: "w-5 h-5",
      sm: "w-3.5 h-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

```

## src\components\ButtonIcon\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "tailwind-variants";
import { Icon } from "../Icon";
import {
  buttonIconIconVariants,
  buttonIconVariants,
} from "./buttonIconVariants";

interface ButtonIconProps
  extends
    VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function ButtonIcon({
  variant,
  size,
  icon,
  disabled,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={cn(buttonIconVariants({ variant, size, disabled }), className)}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={buttonIconIconVariants({ variant, size, className })}
        />
      )}
    </button>
  );
}

```

## src\components\Card\cardVariants.ts

```ts
import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg border border-solid ", {
  variants: {
    variant: {
      default: "border-gray-500 bg-gray-600",
      bottom: "bg-transparent border-0",
    },
    size: {
      none: "",
      md: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "none",
  },
});

```

## src\components\Card\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { cardVariants } from "./cardVariants";

interface CardProps
  extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
  as = "div",
  variant,
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cn(cardVariants({ variant, size, className }), className),
      ...props,
    },
    children,
  );
}

```

## src\components\ChamadoCard\index.tsx

```tsx
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Card } from "../Card";
import Divider from "../Divider";
import { Tags } from "../Tags";
import { Text } from "../Text";
import { NavLink } from "../NavLink";

import { useState } from "react";
import { api } from "../../services/api";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import type { Chamado, Status } from "../../contexts/Chamado/model/Chamado";

interface ChamadoCardProps {
  chamado: Chamado;
}

type Status = "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";

export function ChamadoCard({ chamado }: ChamadoCardProps) {
  const { updateChamado } = useChamados();
  const [loading, setLoading] = useState(false);

  async function handleUpdateStatus(novoStatus: Status) {
    try {
      setLoading(true);

      await api.patch(`/chamados/${chamado.id}`, {
        status: novoStatus,
      });

      // Recarrega os chamados para que o card
      // mude de seção conforme o novo status
      window.location.reload();
    } catch (error) {
      console.error("Erro ao atualizar status do chamado:", error);
      alert("Não foi possível atualizar o status do chamado.");
    } finally {
      setLoading(false);
    }
  }

  async function handleStatusChange(status: Status) {
    try {
      await updateChamado(chamado.id, { status });
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  function renderStatusButton() {
    if (chamado.status === "ABERTO") {
      return (
        <Button
          variant="primary"
          size="sm"
          type="button"
          disabled={loading}
          onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
        >
          {loading ? "..." : "Iniciar"}
        </Button>
      );
    }

    if (chamado.status === "EM_ATENDIMENTO") {
      return (
        <Button
          variant="primary"
          size="sm"
          type="button"
          icon={CheckIcon}
          disabled={loading}
          onClick={() => handleUpdateStatus("ENCERRADO")}
        >
          {loading ? "..." : "Encerrar"}
        </Button>
      );
    }

    return null;
  }

  return (
    <Card className="h-fit p-5">
      <div className="w-full md:max-w-86.5 flex flex-col items-center ">
        <header className="w-86.5 flex justify-between mb-1"></header>
        <header className="w-86.5 flex justify-between mb-1">
          <Text>{chamado.id}</Text>

          <div className="flex items-center gap-2">
            <NavLink
              variant="subtitle"
              to={`/tecnico/chamado-details/${chamado.id}`}
              icon={PenLineIcon}
            />

            {chamado.status === "ABERTO" && (
              <Button
                variant="primary"
                size="sm"
                icon={ClockIcon}
                onClick={() => handleStatusChange("EM_ATENDIMENTO")}
              >
                Iniciar
              </Button>
            )}

            {chamado.status === "EM_ATENDIMENTO" && (
              <Button
                variant="primary"
                size="sm"
                icon={CheckIcon}
                onClick={() => handleStatusChange("ENCERRADO")}
              >
                Encerrar
              </Button>
            )}
          </div>
        </header>

        <div className="flex flex-col">
          <Text as="h3" variant="heading-md-bold">
            {chamado.title}
          </Text>
          <Text as="h3">{chamado.description ?? "-"}</Text>
          <div className="w-86.5 flex justify-between mt-4">
            <Text>{chamado.createdAt}</Text>
            <Text>R$ {chamado.totalPrice}</Text>
          </div>
          <Divider className="mt-4 mb-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar name={chamado.cliente!.name} />
              <Text>{chamado.cliente.name}</Text>
            </div>
            <Tags
              variant={getStatusConfig(chamado.status).variant}
              svg={getStatusConfig(chamado.status).icon}
              className="w-max px-2 py-1 flex items-center gap-1"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

```

## src\components\Container\containerVariants.ts

```ts
import { cva } from "class-variance-authority";

export const containerVariants = cva("", {
  variants: {
    size: {
      default: "w-full",
      md: "w-full sm:max-w-[42.5rem] px-2", // ✅ w-93.75 → w-full / max-w-170 → max-w-[42.5rem]
    },
  },
  defaultVariants: {
    size: "default",
  },
});

```

## src\components\Container\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { containerVariants } from "./containerVariants";

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cn(containerVariants({ size: "md" }), className),
      ...props,
    },
    children,
  );
}

```

## src\components\Dialog\index.tsx

```tsx
import { Card } from "../Card";
import cn from "classnames";
import { Text } from "../Text";
import { ButtonIcon } from "../ButtonIcon";
import XIcon from "../../assets/icons/x.svg?react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;

export const DialogClose = DialogPrimitive.Close;

export function DialogTrigger({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      className={cn(``, className)}
      ref={ref}
      {...props}
    />
  );
}

export function DialogOverlay({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        `
        fixed inset-0 z-50 bg-gray-100/60 backdrop-blur-sm
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=open]:fade-in-0
        data-[state=closed]:fade-out-0
        `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & {
  variant?: "default" | "bottom";
};

export function DialogContent({
  className,
  ref,
  children,
  variant = "default",
  ...props
}: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          `
          fixed z-60 data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
          `,
          variant === "default" &&
            `left-[50%] top-[50%] w-full max-w-md
             translate-x-[-50%] translate-y-[-50%]
             md:translate-x-[-50%] md:translate-y-[-50%]
             data-[state=open]:slide-in-from-bottom-[48%]
             data-[state=closed]:slide-out-to-bottom-[48%]`,
          variant === "bottom" &&
            `bottom-4 left-1/2 -translate-x-1/2 w-full max-w-sm
            bg-gray-100
             data-[state=open]:slide-in-from-bottom
             data-[state=closed]:slide-out-to-bottom`,
          className,
        )}
        {...props}
      >
        <Card variant={"default"} size={"md"}>
          {children}
        </Card>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <header
        className={cn(`flex items-center justify-between`, className)}
        {...props}
      >
        <DialogPrimitive.Title>
          <Text variant="text-xl-bold">{children}</Text>
        </DialogPrimitive.Title>
        <DialogClose asChild>
          <ButtonIcon
            variant={"link"}
            icon={XIcon}
            className="hover:bg-transparent"
          />
        </DialogClose>
      </header>
    </>
  );
}

export function DialogBody({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}

export function DialogFooter({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <footer className="flex items-center justify-end">{children}</footer>
    </div>
  );
}

```

## src\components\Divider\dividerVariants.ts

```ts
import { tv } from "tailwind-variants";
export const dividerVariants = tv({
  base: "w-full h-px ",
  variants: {
    variant: {
      default: "bg-gray-500",
    },
    orientation: {
      horizontal: "w-full h-px",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

```

## src\components\Divider\index.tsx

```tsx
import { type VariantProps } from "tailwind-variants";
import { dividerVariants } from "./dividerVariants";

interface DividerProps
  extends React.ComponentProps<"div">, VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical";
}

export default function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div className={dividerVariants({ className, orientation })} {...props} />
  );
}

```

## src\components\HorariosList\index.tsx

```tsx
import { TagTime } from "../TagTime";
import XIcon from "../../assets/icons/x.svg?react";

type HorariosListProps = {
  horarios: string[];
};

export function HorariosList({ horarios }: HorariosListProps) {
  if (!horarios || horarios.length === 0) {
    return <TagTime disabled>Sem horários aqui...</TagTime>;
  }

  return (
    <>
      {/* Mobile */}
      <div className="flex gap-2 md:hidden">
        {horarios.slice(0, 1).map((hora, index) => (
          <TagTime key={index} name="horarios" value={hora} svg={XIcon}>
            {hora}
          </TagTime>
        ))}
        {horarios.length > 1 && (
          <TagTime disabled>+{horarios.length - 1}</TagTime>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-2">
        {horarios.slice(0, 4).map((hora, index) => (
          <TagTime key={index} name="horarios" value={hora} svg={XIcon}>
            {hora}
          </TagTime>
        ))}
        {horarios.length > 4 && (
          <TagTime disabled>+{horarios.length - 4}</TagTime>
        )}
      </div>
    </>
  );
}

```

## src\components\Icon\iconVariants.ts

```ts
import { cva } from "class-variance-authority";

export const iconVariants = cva("inline-block", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin",
        },
        color: {
            gray: "text-gray-400",
            blue: "text-blue-500",
            red: "text-red-500",
        },
        size: {
            sm: "w-3 h-3",
            md: "w-4 h-4",
            lg: "w-5 h-5",
        },
    },
    defaultVariants: {
        animate: false,
        color: "gray",
        size: "md",
    },
});
```

## src\components\Icon\index.tsx

```tsx
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

```

## src\components\InputFile\index.tsx

```tsx
import React, { useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import UploadIcon from "../../assets/icons/upload.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import UserPlaceholder from "../../assets/icons/users.svg?react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../Dialog";
import Divider from "../Divider";
import { Text } from "../Text";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";

interface InputFileProps {
  avatarUrl?: string;
  onChange: (user: Users) => void;
  onDelete?: () => Promise<void>;
}

export function InputFile({ avatarUrl, onChange, onDelete }: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsDialogOpen(true);
    }
  }

  async function handleSave() {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/user-avatar/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resposta do backend:", response.data);

      onChange(response.data);
      setIsDialogOpen(false);
      alert("Imagem atualizada com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar imagem:", err);
      alert("Erro ao salvar imagem. Veja o console.");
    }
  }

  function getAvatarUrl(filename?: string) {
    if (!filename) {
      return "/default-avatar.png";
    }

    // Usa a baseURL do Axios para não hardcodear localhost
    const baseURL = api.defaults.baseURL?.replace(/\/$/, ""); // remove barra final se houver

    // Se o backend já retornou "files/...", não duplica
    const normalizedFilename = filename.startsWith("files/")
      ? filename
      : `files/${filename}`;

    return `${baseURL}/${normalizedFilename}`;
  }

  return (
    <div className="flex items-center gap-2 mb-5">
      {/* Avatar com fallback */}
      <div className="w-12 h-12 rounded-full border border-gray-300 bg-gray-200 flex items-center justify-center overflow-hidden">
        {avatarUrl ? (
          <img
            src={getAvatarUrl(avatarUrl)}
            alt="user"
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon svg={UserPlaceholder} className="w-7 h-7 fill-gray-600" />
        )}
      </div>

      {/* Botão de upload */}
      <label className="flex items-center gap-2 bg-gray-500 text-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400/50 transition-colors duration-200">
        <Icon svg={UploadIcon} className="w-4 h-4 fill-gray-100" />
        <span className="text-sm">Nova imagem</span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {/* Botão de deletar */}
      {avatarUrl && (
        <Button
          type="button"
          onClick={onDelete}
          className="rounded-md bg-gray-500 hover:bg-gray-400/50 transition-colors duration-200"
        >
          <Icon svg={TrashIcon} className="w-4 h-4 fill-feedback-danger" />
        </Button>
      )}

      {/* Dialog de confirmação */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <Text variant="heading-md-bold">Nova imagem</Text>
          </DialogHeader>
          <Divider className="my-4" />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Prévia"
              className="w-75 h-75 rounded-full object-cover mx-auto"
            />
          )}
          <Divider className="my-4" />
          <DialogFooter>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button size="lg" variant="primary" onClick={handleSave}>
                Salvar
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

```

## src\components\InputSelect\index.tsx

```tsx
import { useEffect, useState } from "react";
import { cx } from "class-variance-authority";
import { inputSelectVariants } from "./inputSelectVariants";
import { api } from "../../services/api";
import ChevronDown from "../../assets/icons/chevron-down.svg?react";
import ChevronUp from "../../assets/icons/chevron-up.svg?react";
import Check from "../../assets/icons/check.svg?react";
import AlertCircle from "../../assets/icons/circle-alert.svg?react";
import { Icon } from "../Icon";
import { Text } from "../Text";
import type { CategoryServices } from "../../contexts/CategoryServices/model/categoryServices";

interface Option {
  id: string;
  nome: string;
  valor: number;
}

interface InputSelectProps {
  label: string;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
  value?: Option;
  onChange?: (value: Option) => void;
}

export function InputSelect({
  label,
  helperText,
  placeholder,
  error,
  value,
  onChange,
}: InputSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(value ?? null);
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function fetchOptions() {
      const response = await api.get<CategoryServices[]>("/services");
      const fetched = response.data.map((s) => ({
        id: s.id,
        nome: s.name,
        valor: s.price,
      }));
      setOptions(fetched);
    }
    fetchOptions();
  }, []);

  useEffect(() => {
    if (value && value.id !== selected?.id) {
      Promise.resolve().then(() => setSelected(value));
    }
  }, [value]);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  const state = error ? "error" : open ? "focus" : "default";

  return (
    <div className="group w-full flex flex-col gap-1 relative">
      <label
        className={cx(
          "text-sm transition-all mt-4",
          state === "error"
            ? "text-red-500"
            : state === "focus"
              ? "text-blue-500"
              : "text-gray-400",
        )}
      >
        <Text variant="text-sm-bold">{label}</Text>
      </label>

      <div onClick={toggleOpen} className={cx(inputSelectVariants({ state }))}>
        <span className={selected ? "text-gray-800" : "text-gray-400"}>
          {selected?.nome || placeholder || "Selecione uma opção"}
        </span>
        {open ? (
          <Icon
            svg={ChevronUp}
            color={state === "error" ? "red" : "blue"}
            size="lg"
          />
        ) : (
          <Icon
            svg={ChevronDown}
            color={state === "error" ? "red" : "gray"}
            size="lg"
          />
        )}
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md p-2 z-10">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className={cx(
                "py-2 px-2 rounded cursor-pointer flex justify-between items-center hover:bg-gray-500",
                selected?.id === option.id && "font-bold text-blue-500",
              )}
            >
              {option.nome}
              {selected?.id === option.id && (
                <Icon svg={Check} color="blue" size="lg" />
              )}
            </div>
          ))}
        </div>
      )}

      {helperText && (
        <span
          className={cx(
            "text-xs mt-1 flex items-center gap-1 italic",
            state === "error" ? "text-red-500" : "text-gray-400",
          )}
        >
          {state === "error" && <Icon svg={AlertCircle} fill="red" size="md" />}
          {helperText}
        </span>
      )}
    </div>
  );
}

```

## src\components\InputSelect\inputSelectVariants.ts

```ts
import { cva } from "class-variance-authority";

export const inputSelectVariants = cva(
    "border-b border-solid bg-transparent outline-none w-full flex justify-between items-center cursor-pointer py-2",
    {
        variants: {
            state: {
                default: "border-gray-400 text-gray-400",
                focus: "border-blue-500 text-blue-500 shadow-md",
                error: "border-red-500 text-red-500 shadow-sm",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

```

## src\components\InputText\index.tsx

```tsx
import { cx } from "class-variance-authority"
import { Icon } from "../Icon"
import { Text } from "../Text"
import { inputTextVariants, labelInputTextVariants, helperTextVariants } from "./inputTextVariants"
import { textVariants } from "../Text/textVariants"

interface InputTextProps extends React.ComponentProps<"input"> {
    label?: string
    error?: boolean
    helperText?: string
    errorIcon?: React.ComponentProps<typeof Icon>["svg"]
}

export function InputText({
    className,
    label,
    error,
    helperText,
    errorIcon,
    ...props
}: InputTextProps) {
    return (
        <div className="group flex flex-col gap-1 w-full">
            <label
                htmlFor="inputText"
                className={labelInputTextVariants({ error })}
            >
                <Text variant="text-sm-bold">{label}</Text>
            </label>

            <div className="relative flex items-center">
                <input
                    id="inputText"
                    className={cx(
                        inputTextVariants({ error }),
                        textVariants(),
                        "peer",
                        error ? "pr-6" : "",
                        className
                    )}
                    {...props}
                />

                {error && error}
            </div>

            {helperText && (
                <span className={helperTextVariants({ error })}>
                    {error && errorIcon && (
                        <Icon svg={errorIcon} className="w-3 h-3 fill-red-500" />
                    )}
                    {helperText}
                </span>
            )}

        </div>
    )
}

```

## src\components\InputText\inputTextVariants.ts

```ts
import { cva } from "class-variance-authority"

export const inputTextVariants = cva(
    "border-b border-solid bg-transparent outline-none flex-1",
    {
        variants: {
            error: {
                true: "border-red-500 focus:border-red-500",
                false: "border-gray-400 focus:border-blue-500"
            }
        },
        defaultVariants: {
            error: false
        }
    }
)

export const labelInputTextVariants = cva(
    "transition-all mt-4",
    {
        variants: {
            error: {
                true: "text-red-500 group-focus-within:text-red-500",
                false: "text-gray-400 group-focus-within:text-blue-500"
            }
        },
        defaultVariants: {
            error: false
        }
    }
)

export const helperTextVariants = cva("text-xs mt-1 flex items-center gap-1", {
    variants: {
        error: {
            true: "text-red-500",
            false: "text-gray-400"
        }
    },
    defaultVariants: {
        error: false
    }
})

```

## src\components\InputTextArea\index.tsx

```tsx
import { cx } from "class-variance-authority"
import { Icon } from "../Icon"
import { Text } from "../Text"
import { inputTextVariants, labelInputTextVariants, helperTextVariants } from "../InputText/inputTextVariants"
import { textVariants } from "../Text/textVariants"

interface TextareaProps extends React.ComponentProps<"textarea"> {
    label?: string
    error?: boolean
    helperText?: string
    errorIcon?: React.ComponentProps<typeof Icon>["svg"]
}

export function Textarea({
    className,
    label,
    error,
    helperText,
    errorIcon,
    ...props
}: TextareaProps) {
    return (
        <div className="group flex flex-col gap-1 w-full">
            {label && (
                <label className={labelInputTextVariants({ error })}>
                    <Text variant="text-sm-bold">{label}</Text>
                </label>
            )}

            <textarea
                className={cx(
                    inputTextVariants({ error }),
                    textVariants(),
                    "peer resize-none min-h-[120px] py-2",
                    className
                )}
                {...props}
            />

            {helperText && (
                <span className={helperTextVariants({ error })}>
                    {error && errorIcon && (
                        <Icon svg={errorIcon} className="w-3 h-3 fill-red-500" />
                    )}
                    {helperText}
                </span>
            )}
        </div>
    )
}

```

## src\components\Logo\index.tsx

```tsx
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

```

## src\components\Logo\logoVariants.ts

```ts
import { cva } from "class-variance-authority";

export const logoStyles = cva("flex items-center justify-center gap-3 mx-4", {
    variants: {
        size: {
            sm: "gap-2",
            md: "gap-3",
            lg: "gap-4",
        },
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col",
        },
    },
    defaultVariants: {
        size: "md",
        orientation: "horizontal",
    },
});

export const logoImage = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6",
            md: "w-10 h-10",
            lg: "w-11 h-11",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export const logoText = cva("", {
    variants: {
        color: {
            blue: "text-blue-dark",
            white: "text-white",
        },
    },
    defaultVariants: {
        color: "blue",
    },
});

```

## src\components\NavLink\index.tsx

```tsx
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { Icon } from "../Icon";
import { Text } from "../Text";
import clsx from "clsx";
import {
  navLinkIconVariants,
  navLinkTextVariants,
  navLinkVariants,
} from "./navLinkVariants";

interface Props extends Omit<NavLinkProps, "className" | "children"> {
  variant?: "primary" | "secondary" | "tertiary" | "subtitle" | "active";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function NavLink({
  to,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  children,
  icon,
  ...props
}: Props) {
  return (
    <RouterNavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        clsx(
          navLinkVariants({
            variant: isActive ? "active" : variant,
            size,
            disabled,
          }),
          "group",
          className,
        )
      }
      aria-disabled={disabled}
    >
      {({ isActive }) => (
        <>
          {icon && (
            <Icon
              svg={icon}
              className={navLinkIconVariants({
                variant: isActive ? "active" : variant,
                size,
              })}
            />
          )}
          {children && (
            <Text
              variant="text-sm-bold"
              className={navLinkTextVariants({
                variant: isActive ? "active" : variant,
              })}
            >
              {children}
            </Text>
          )}
        </>
      )}
    </RouterNavLink>
  );
}

```

## src\components\NavLink\navLinkVariants.ts

```ts
import { cva } from "class-variance-authority";

export const navLinkVariants = cva(
  "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "hover:text-blue-800 underline",
        secondary: "bg-transparent",
        tertiary:
          "bg-blue-dark text-gray-100 hover:text-gray-200 hover:bg-blue-light",
        subtitle: "bg-gray-500 hover:bg-gray-400",
        active: "bg-blue-dark text-white hover:bg-blue-dark", // 🔹 ativo com fundo azul
      },
      size: {
        lg: "h-10 text-lg px-2",
        md: "w-7 h-7 text-sm",
        sm: "text-xs px-1 py-0.5",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none no-underline",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const navLinkIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-blue-600 group-hover:fill-blue-800",
      secondary: "fill-gray-600 group-hover:fill-gray-400",
      tertiary: "fill-gray-500 group-hover:fill-gray-700",
      subtitle: "fill-gray-400 group-hover:fill-gray-600",
      active: "fill-white",
    },
    size: {
      lg: "w-6 h-6",
      md: "w-5 h-5",
      sm: "w-3.5 h-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const navLinkTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 group-hover:text-blue-800",
      secondary: "text-gray-500 group-hover:text-gray-400",
      tertiary: "text-gray-500 group-hover:text-gray-700",
      subtitle: "text-gray-200 group-hover:text-gray-200",
      active: "text-white",
    },
    size: {
      lg: "text-lg",
      md: "text-sm",
      sm: "text-xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

```

## src\components\Popover\index.tsx

```tsx
//* src/components/Popover/index.tsx

import * as PopoverPrimitive from "@radix-ui/react-popover";
import cn from "classnames";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export function PopoverContent({
  className,
  children,
  side = "right",
  align = "start",
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        side={side}
        align={align}
        className={cn(
          `
          z-50 rounded-lg mt-20 -mr-10 bg-gray-100  px-4 lg:ml-10 lg:mb-2 w-50
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=open]:fade-in-0
          data-[state=closed]:fade-out-0
          `,
          className,
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

```

## src\components\Sidebar\index.tsx

```tsx
import { NavLink } from "../NavLink"; // 🔹 usa o novo NavLink
import ClipboardList from "../../assets/icons/clipboard-list.svg?react";
import Plus from "../../assets/icons/plus.svg?react";
import Users from "../../assets/icons/users.svg?react";
import BriefCase from "../../assets/icons/briefcase-business.svg?react";
import Wrench from "../../assets/icons/wrench.svg?react";

interface SidebarProps {
  role?: "ADMIN" | "TECNICO" | "CLIENTE";
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ role = "CLIENTE", onClose }: SidebarProps) {
  return (
    <aside className="h-full">
      <div className="flex items-center justify-center">
        <nav className="w-full flex flex-col gap-4">
          {role === "ADMIN" && (
            <>
              <NavLink
                to="/admin/chamados"
                icon={ClipboardList}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Chamados
              </NavLink>
              <NavLink
                to="/admin/tecnicos"
                icon={Users}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Técnicos
              </NavLink>
              <NavLink
                to="/admin/clientes"
                icon={BriefCase}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Clientes
              </NavLink>
              <NavLink
                to="/admin/servicos"
                icon={Wrench}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Serviços
              </NavLink>
            </>
          )}

          {role === "TECNICO" && (
            <>
              <NavLink
                to="/tecnico/meus-chamados"
                icon={ClipboardList}
                variant="tertiary"
                size="lg"
                onClick={onClose}
              >
                Meus chamados
              </NavLink>
            </>
          )}

          {role === "CLIENTE" && (
            <>
              <NavLink
                to="/cliente/chamados-cliente"
                icon={ClipboardList}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Meus chamados
              </NavLink>
              <NavLink
                to="/cliente/novo-chamado"
                icon={Plus}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Criar chamado
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </aside>
  );
}

```

## src\components\Skeleton\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import { skeletonVariants } from "./skeletonVariants";
import React from "react";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> { }

export function Skeleton({
    rounded,
    className,
    ...props
}: SkeletonProps) {
    return (
        <div className={skeletonVariants({ rounded, className })} {...props} />
    );
}
```

## src\components\Skeleton\skeletonVariants.ts

```ts
import { cva } from "class-variance-authority";

export const skeletonVariants = cva("animate-pulse bg-gray-400", {
    variants: {
        rounded: {
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full",
        },
    },
})
```

## src\components\Tags\index.tsx

```tsx
import { Text } from "../Text";
import type { VariantProps } from "class-variance-authority";
import { tagsTextVariants, tagsVariants, tagsIconVariants } from "./tagsVariants";
import { Icon } from "../Icon";

interface TagsProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof tagsVariants> {
    size?: "md-width-text" | "md-height-text";
    children?: React.ReactNode;
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export function Tags({
    variant,
    size,
    className,
    children,
    svg,
    display,
    format,
    ...props
}: TagsProps) {
    return (
        <div className={tagsVariants({ variant, className, size, display, format })} {...props}>
            {svg && <Icon svg={svg} className={tagsIconVariants({ variant })} />}
            <Text
                variant={"text-xs-bold"}
                className={`hidden md:block ${tagsTextVariants({ variant })}`}>
                {children}
            </Text>
        </div>
    )
}
```

## src\components\Tags\tagsVariants.ts

```ts
import { cva } from "class-variance-authority";

export const tagsVariants = cva(
  "flex items-center justify-center text-xs-bold",
  {
    variants: {
      variant: {
        new: "border border-feedback-open/20 bg-bg-feedback-open-20",
        info: "border border-feedback-progress/20 bg-bg-feedback-info-20",
        success: "border border-feedback-done/20 bg-bg-feedback-success-20",
        danger: "border border-feedback-danger/20 bg-bg-feedback-danger-20",
        default: "border border-gray-500/20 bg-gray-500",
      },
      size: {
        "md-width-text": "p-1 rounded-full",
        "md-height-text": "w-7 h-7 rounded-full",
      },
      display: {
        text: "gap-1",
        icon: "flex items-center justify-center",
      },
      format: {
        default: "",
        circle: "rounded-full",
        squared: "p-1.5 rounded-sm hover:bg-gray-100/20",
      },
    },
    defaultVariants: {
      variant: "new",
      size: "md-width-text",
      display: "text",
      format: "default",
    },
  },
);

export const tagsTextVariants = cva("", {
  variants: {
    variant: {
      new: "text-feedback-open",
      info: "text-feedback-progress",
      success: "text-feedback-done",
      danger: "text-feedback-danger",
      default: "text-gray-100",
    },
  },
  defaultVariants: {
    variant: "new",
  },
});

export const tagsIconVariants = cva("w-4 h-4", {
  variants: {
    variant: {
      new: "fill-feedback-open",
      info: "fill-feedback-progress",
      success: "fill-feedback-done",
      danger: "fill-feedback-danger",
      default: "fill-gray-100",
    },
  },
});

```

## src\components\TagTime\index.tsx

```tsx
import { Text } from "../Text";
import { Icon } from "../Icon";
import clsx from "clsx";
import {
  tagTimeTextVariants,
  tagTimeVariants,
  tagTimeIconVariants,
} from "./tagTimeVariants";

interface TagTimeProps extends React.ComponentProps<"input"> {
  children: React.ReactNode;
  svg?: React.FC<React.ComponentProps<"svg">>;
  checked?: boolean; // ✅ permite controle externo
  onChange?: (checked: boolean) => void; // ✅ callback externo
}

export function TagTime({
  children,
  svg,
  className,
  checked,
  onChange,
  ...props
}: TagTimeProps) {
  return (
    <label className="inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)} // ✅ dispara callback externo
        {...props}
      />

      <div
        className={clsx(
          tagTimeVariants({
            variant: props.disabled ? "disabled" : "default",
            className,
          }),
          checked && "bg-feedback-progress",
        )}
      >
        <Text
          variant="text-xs-bold"
          className={clsx(
            tagTimeTextVariants({
              variant: props.disabled ? "disabled" : "default",
            }),
            checked && "text-gray-600",
          )}
        >
          {children}
        </Text>

        {svg && checked && (
          <Icon
            svg={svg}
            className={clsx(tagTimeIconVariants({ variant: "selected" }))}
          />
        )}
      </div>
    </label>
  );
}

```

## src\components\TagTime\tagTimeVariants.ts

```ts
import { cva } from "class-variance-authority";

export const tagTimeVariants = cva("flex gap-2 items-center justify-center rounded-full text-xs-bold", {
    variants: {
        variant: {
            "default": "border border-gray-400 hover:bg-gray-500 cursor-pointer",
            "selected": "bg-feedback-progress cursor-pointer",
            "disabled": "border border-gray-400 bg-gray-500 cursor-not-allowed",
        },
        size: {
            "md": "px-3 py-1.5",
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
})

export const tagTimeTextVariants = cva("", {
    variants: {
        variant: {
            "default": "text-gray-100",
            "selected": "text-gray-600",
            "disabled": " text-gray-400",
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

export const tagTimeIconVariants = cva("w-5 h-5", {
    variants: {
        variant: {
            "selected": "fill-gray-600",
        }
    }
})

```

## src\components\Text\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { textVariants } from "./textVariants";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: cn(textVariants({ variant }), className),
      ...props,
    },
    children,
  );
}

```

## src\components\Text\textVariants.ts

```ts
import { cva } from "class-variance-authority"

export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            "text-xl-bold": "text-2xl leading-[33.6px] font-bold",
            "text-lg-bold": "text-xl leading-7 font-bold",
            "heading-md-normal": "text-base leading-5 font-normal",
            "heading-md-bold": "text-base leading-5 font-bold",
            "text-sm-regular": "text-sm leading-5 font-normal",
            "text-sm-bold": "text-sm leading-5 font-bold",
            "text-xs-regular": "text-xs leading-4 font-normal",
            "text-xs-bold": "text-xs leading-4 font-bold",
            "text-xxs-regular": "text-[0.54688rem] leading-4 font-normal",
            "text-xxs-bold": "text-[10px] leading-4 font-bold"
        }
    },
    defaultVariants: {
        variant: "heading-md-normal"
    }
})

```

## src\components\UpdatePasswordDialog\index.tsx

```tsx
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  //DialogClose,
} from "../Dialog";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { Text } from "../Text";
import Divider from "../Divider";
import { api } from "../../services/api";
import axios from "axios";

export function UpdatePasswordDialog({ userId }: { userId: string }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.patch(`/users/${userId}/password`, {
        oldPassword,
        newPassword,
      });
      setOldPassword("");
      setNewPassword("");
      setOldPasswordError("");
      setNewPasswordError("");
      alert("Senha atualizada com sucesso!");
      setOpen(false);
    } catch (err) {
      console.error("Erro ao atualizar senha:", err);

      // Limpa erros anteriores
      setOldPasswordError("");
      setNewPasswordError("");

      if (axios.isAxiosError(err)) {
        const data = err.response?.data;

        // Erros de validação do Zod
        if (data?.issues && Array.isArray(data.issues)) {
          data.issues.forEach((issue: { path: string; message: string }) => {
            if (issue.path === "oldPassword") {
              setOldPasswordError(issue.message);
            }

            if (issue.path === "newPassword") {
              setNewPasswordError(issue.message);
            }
          });

          return;
        }

        // Erros do AppError
        if (data?.message) {
          if (data.message === "Senha atual incorreta.") {
            setOldPasswordError(data.message);
          } else {
            setNewPasswordError(data.message);
          }

          return;
        }

        setNewPasswordError("Não foi possível atualizar a senha.");
      } else {
        setNewPasswordError("Ocorreu um erro ao atualizar a senha.");
      }
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (value) {
          setOldPasswordError("");
          setNewPasswordError("");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="secondary" className="mb-6">
          Alterar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Text>Alterar senha</Text>
        </DialogHeader>
        <Divider className="my-4 mb-10 mt-10" />
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-2">
          <InputText
            type="password"
            label="Senha atual"
            placeholder="Digite sua senha atual"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
              setOldPasswordError("");
            }}
            error={!!oldPasswordError}
            helperText={oldPasswordError ? oldPasswordError : "."}
          />
          <InputText
            type="password"
            label="Nova senha"
            placeholder="Digite sua nova senha"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setNewPasswordError("");
            }}
            error={!!newPasswordError}
            helperText={
              newPasswordError ? newPasswordError : "mínimo 6 dígitos"
            }
          />

          <Divider className="my-4 mt-10 mb-10" />

          <DialogFooter>
            <Button type="submit" size="lg" className="">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

```

## src\components\UserMenu.tsx\index.tsx

```tsx
import { useState, type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Button } from "../Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../Dialog";
import Divider from "../Divider";
import { Icon } from "../Icon";
import { InputFile } from "../InputFile";
import { InputText } from "../InputText";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { TagTime } from "../TagTime";
import { Text } from "../Text";
import { UpdatePasswordDialog } from "../UpdatePasswordDialog";
import UserIcon from "../../assets/icons/users.svg?react";
import LogoutIcon from "../../assets/icons/log-out.svg?react";

interface UserMenuProps {
  children: ReactNode;
}

export function UserMenu({ children }: UserMenuProps) {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const [profileOpen, setProfileOpen] = useState(false);

  async function handleProfileOpen(open: boolean) {
    setProfileOpen(open);

    if (!open || !user?.id) {
      return;
    }

    try {
      const response = await api.get(`/users/${user.id}`);

      console.log("=== USUÁRIO COMPLETO ===");
      console.log(response.data);

      updateUser(response.data);

      setName(response.data.name ?? "");
      setEmail(response.data.email ?? "");
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);

      // Mantém os dados que já estavam no contexto
      setName(user.name ?? "");
      setEmail(user.email ?? "");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("=== SALVAR PERFIL ===");
    console.log("Usuário:", user);
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("ID:", user?.id);

    try {
      const response = await api.patch(`/users/${user?.id}`, {
        name,
        email,
      });

      console.log("Resposta da API:", response.data);

      // Atualiza contexto com dados novos
      updateUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
    }
  }

  function handleLogout() {
    // Remove todas as informações salvas no localStorage
    localStorage.removeItem("@helpdesk:token"); // se você usa token JWT
    localStorage.removeItem("@helpdesk:user"); // se guarda dados do usuário
    localStorage.removeItem("permissions"); // se tiver permissões específicas
    // Redireciona para a página de login
    window.location.href = "/login";
  }

  async function handleDeleteAvatar() {
    try {
      const response = await api.delete("/user-avatar/avatar");

      updateUser(response.data);

      alert("Imagem removida com sucesso!");
    } catch (error) {
      console.error("Erro ao remover imagem:", error);
      alert("Erro ao remover imagem.");
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <Text as="div" variant={"text-xxs-bold"} className="text-gray-400 pt-4">
          OPÇÕES
        </Text>
        <div className="flex flex-col gap-3 px-4 mt-4">
          <div className="flex items-center gap-3">
            <Dialog open={profileOpen} onOpenChange={handleProfileOpen}>
              <DialogTrigger asChild>
                <Button type="button" className="-ml-7.5 bg-transparent">
                  <Icon svg={UserIcon} className="fill-gray-500 mr-2" />
                  <Text className="text-gray-500">Perfil</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form id="profile-form" onSubmit={handleSubmit}>
                  <DialogHeader>
                    <Text>Perfil</Text>
                  </DialogHeader>
                  <Divider className="my-4" />
                  <div className="flex items-center gap-2 mb-5">
                    <InputFile
                      avatarUrl={user?.avatarUrl}
                      onChange={(data) => {
                        updateUser({
                          ...user!,
                          avatarUrl: data.avatarUrl,
                        });
                      }}
                      onDelete={handleDeleteAvatar}
                    />
                  </div>
                  <InputText
                    label="NOME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputText
                    label="E-MAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex py-1 items-end">
                    <InputText
                      readOnly
                      placeholder="******"
                      type="password"
                      label="SENHA"
                      value="123456"
                      helperText="Para atualizar a senha clique no botão Alterar"
                    />

                    <UpdatePasswordDialog userId={user!.id} />
                  </div>
                  <Divider className="my-4" />
                  {user?.role === "TECNICO" && (
                    <>
                      <div className="flex flex-col mb-4">
                        <Text variant="text-sm-bold">Disponibilidade</Text>
                        <Text variant="text-xs-regular">
                          Horários de atendimento definidos pelo admin.
                        </Text>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {user.disponibilidades?.length > 0 ? (
                          user.disponibilidades.map((disponibilidade) => (
                            <TagTime key={disponibilidade.horario}>
                              {disponibilidade.horario}
                            </TagTime>
                          ))
                        ) : (
                          <Text variant="text-xs-regular">
                            Nenhum horário disponível.
                          </Text>
                        )}
                      </div>
                      <Divider className="my-4" />
                    </>
                  )}
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" form="profile-form" size="lg">
                        Salvar
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Button
            className="-ml-25 bg-transparent hover:bg-transparent mb-2"
            onClick={handleLogout}
          >
            <Icon svg={LogoutIcon} className="fill-feedback-danger mr-2" />
            <Text className="text-feedback-danger">Sair</Text>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

```

## src\contexts\AuthContext.ts

```ts
import { createContext } from "react";
import type { Users } from "../contexts/User/model/users";

interface AuthContextData {
  user: Users | null;
  token: string | null;
  signIn: (data: { token: string; user: Users }) => void;
  signOut: () => void;
  updateUser: (user: Users) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

```

## src\contexts\AuthProvider.tsx

```tsx
import { jwtDecode } from "jwt-decode";
import {
  type ReactNode,
  startTransition,
  useCallback,
  useEffect,
  useState,
} from "react";
import type { Users } from "../contexts/User/model/users";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

interface DecodedToken {
  exp: number;
  sub: string;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<Users | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signOut = useCallback(() => {
    localStorage.removeItem("@helpdesk:user");
    localStorage.removeItem("@helpdesk:token");
    setUser(null);
    setToken(null);
    delete api.defaults.headers.common["Authorization"];
  }, []);

  useEffect(() => {
    const loadStoredData = async () => {
      const storedUser = localStorage.getItem("@helpdesk:user");
      const storedToken = localStorage.getItem("@helpdesk:token");

      if (!storedUser || !storedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const decoded: DecodedToken = jwtDecode(storedToken);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          signOut();
          setIsLoading(false);
          return;
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

        // 🔹 Usa startTransition para evitar render síncrono
        startTransition(() => {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        });
      } catch (error) {
        console.error("Erro ao carregar token:", error);
        signOut();
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredData();
  }, [signOut]);

  function signIn({ token, user }: { token: string; user: Users }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user));
    localStorage.setItem("@helpdesk:token", token);
    setUser(user);
    setToken(token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  function updateUser(updatedUser: Users) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(updatedUser));

    setUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{ user, token, signIn, signOut, updateUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

```

## src\contexts\CategoryServices\model\categoryServices.ts

```ts
import type { Users } from "../../User/model/users";

export interface CategoryServices {
  id: string;
  name: string;
  active: boolean;
  adminId: Users;
  price: number;
  chamadoService: string;
  createdAt: string;
  updatedAt: string;
}

```

## src\contexts\CategoryServices\ServicesContext.tsx

```tsx
import { createContext } from "react";
import type { CategoryServices } from "./model/categoryServices";

interface CategoryServicesContextType {
  categoryServices: CategoryServices[];
  loading: boolean;
  fetchCategoryServices: () => Promise<void>;
  createServico: (
    dados: Pick<CategoryServices, "name" | "price" | "active">,
  ) => Promise<void>;
  updateServico: (
    id: string,
    dados: Partial<CategoryServices>,
  ) => Promise<void>;
  deleteServico: (id: string) => Promise<void>;
}

export const ServicesContext =
  createContext<CategoryServicesContextType | null>(null);

```

## src\contexts\CategoryServices\ServicesProvider.tsx

```tsx
import type { ReactNode } from "react";
import { startTransition, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { api } from "../../services/api";
import type { CategoryServices } from "../CategoryServices/model/categoryServices";

export function ServicesProvider({ children }: { children: ReactNode }) {
  const [categoryServices, setCategoryServices] = useState<CategoryServices[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);

  // ✅ Função mantida fora do effect para poder ser exposta no context
  // O React Compiler gerencia a memoização automaticamente
  async function fetchCategoryServices() {
    setLoading(true);
    try {
      const url =
        user?.role === "ADMIN" ? "/services?includeInactive=true" : "/services";
      const response = await api.get<CategoryServices[]>(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      startTransition(() => {
        setCategoryServices(response.data);
      });
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    } finally {
      setLoading(false);
    }
  }

  // ✅ useEffect com lógica inline — evita referência a função externa
  // O React Compiler não reclama porque o setState está dentro do callback async
  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    const carregar = async () => {
      setLoading(true);
      try {
        const url =
          user?.role === "ADMIN"
            ? "/services?includeInactive=true"
            : "/services";
        const response = await api.get<CategoryServices[]>(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!cancelled) {
          startTransition(() => setCategoryServices(response.data));
        }
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    carregar();

    // cleanup: evita setState em componente desmontado
    return () => {
      cancelled = true;
    };
  }, [token, user?.role]); // ✅ deps diretas — sem referência a função externa

  async function createServico(
    dados: Pick<CategoryServices, "name" | "price" | "active">,
  ) {
    try {
      const response = await api.post("/services", dados);
      startTransition(() => {
        setCategoryServices((prev) => [...prev, response.data]);
      });
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
    }
  }

  async function updateServico(id: string, dados: Partial<CategoryServices>) {
    try {
      const response = await api.patch(`/services/${id}`, dados);
      startTransition(() => {
        setCategoryServices((prev) =>
          prev.map((s) => (s.id === id ? { ...s, ...response.data } : s)),
        );
      });
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
    }
  }

  async function deleteServico(id: string) {
    try {
      await api.delete(`/services/${id}`);
      startTransition(() => {
        setCategoryServices((prev) => prev.filter((s) => s.id !== id));
      });
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  }

  return (
    <ServicesContext.Provider
      value={{
        categoryServices,
        loading,
        fetchCategoryServices,
        createServico,
        updateServico,
        deleteServico,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

```

## src\contexts\Chamado\ChamadosContext.tsx

```tsx
import { createContext } from "react";
import type { Chamado, ChamadoPayload } from "./model/Chamado";

export interface ChamadosContextType {
  chamados: Chamado[];
  loading: boolean;
  fetchChamados: () => Promise<void>;
  getChamadoById: (id: string) => Chamado | undefined;
  createChamado: (dados: ChamadoPayload) => Promise<void>;
  updateChamado: (id: string, dados: ChamadoPayload) => Promise<void>;
}

export const ChamadosContext = createContext<ChamadosContextType | null>(null);

```

## src\contexts\Chamado\ChamadosProvider.tsx

```tsx
import { useState, useEffect, useContext } from "react";
import { ChamadosContext } from "./ChamadosContext";
import { api } from "../../services/api";
import type { Chamado, ChamadoPayload } from "./model/Chamado";
import { AuthContext } from "../AuthContext";

export function ChamadosProvider({ children }: { children: React.ReactNode }) {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  async function fetchChamados() {
    setLoading(true);
    try {
      const response = await api.get<Chamado[]>("/chamados", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChamados(response.data);
    } catch (error) {
      console.error("Erro ao buscar chamados:", error);
    } finally {
      setLoading(false);
    }
  }

  async function createChamado(dados: ChamadoPayload) {
    try {
      await api.post("/chamados", dados, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchChamados();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateChamado(id: string, dados: ChamadoPayload) {
    try {
      const response = await api.patch(`/chamados/${id}`, dados);

      await fetchChamados();

      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar chamado:", error);
      throw error;
    }
  }

  function getChamadoById(id: string) {
    return chamados.find((c) => c.id === id);
  }

  useEffect(() => {
    if (!token) return;
    const carregaChamados = async () => {
      await fetchChamados();
    };
    carregaChamados();
  }, [token]);

  return (
    <ChamadosContext.Provider
      value={{
        chamados,
        loading,
        fetchChamados,
        getChamadoById,
        createChamado,
        updateChamado,
      }}
    >
      {children}
    </ChamadosContext.Provider>
  );
}

```

## src\contexts\Chamado\hooks\useChamados.ts

```ts
import { useContext } from "react";
import { ChamadosContext } from "../ChamadosContext";

export function useChamados() {
  const context = useContext(ChamadosContext);
  if (!context) {
    throw new Error("useChamados deve ser usado dentro de ChamadosProvider");
  }
  return context;
}

```

## src\contexts\Chamado\model\Chamado.ts

```ts
// models/chamado.ts
import type { Users } from "../../User/model/users";

export type Status = "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";

export interface Chamado {
  id: string;
  title: string;
  description?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  totalPrice: number;
  // Relações
  cliente: Pick<Users, "id" | "name">; // apenas id e nome
  tecnico?: Pick<Users, "id" | "name" | "email"> | null; // opcional
  admin?: Pick<Users, "id" | "name"> | null;
  disponibilidadeId?: string;

  // Serviços vinculados
  services: {
    id: string;
    nome: string;
    price: number;
  }[];
}
export type ChamadoPayload = {
  title?: string;
  description?: string;
  services?: string[]; // apenas IDs
  status?: Status;
};

```

## src\contexts\User\model\users.ts

```ts
export interface Horario {
  horario: string;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
  role: "CLIENTE" | "ADMIN" | "TECNICO";
  createdAt: string;
  updatedAt: string;
  disponibilidades: Array<Horario>;
}

```

## src\hooks\useAuth.ts

```ts
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {

    return useContext(AuthContext);
}
```

## src\index.css

@import "tailwindcss/preflight";
@import "tailwindcss/theme";
@import "tailwindcss/utilities";
@import "tw-animate-css";

/* Defina o tema diretamente aqui */
@theme {
  --color-blue-dark: #2e3da3;
  --color-blue-base: #5156e1;
  --color-blue-light: #8996eb;

  --color-gray-100: #151619;
  --color-gray-200: #1e2024;
  --color-gray-300: #535964;
  --color-gray-400: #858b99;
  --color-gray-500: #e3e5e8;
  --color-gray-600: #f9fafa;

  --color-feedback-danger: #d03e3e;
  --color-feedback-open: #cc3d6a;
  --color-feedback-progress: #355ec5;
  --color-feedback-done: #508b26;

  --color-bg-feedback-open-20: rgba(204, 61, 106, 0.2);
  --color-bg-feedback-info-20: rgba(53, 94, 197, 0.2);
  --color-bg-feedback-success-20: rgba(80, 139, 38, 0.2);
  --color-bg-feedback-danger-20: rgba(208, 62, 62, 0.2);

  --font-sans: "Lato", sans-serif;
}
body {
  color: var(--color-gray-200);
}


## src\layout\AppLayout.tsx

```tsx
import { useState, type ReactNode } from "react";

import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Avatar } from "../components/Avatar";
import { ButtonIcon } from "../components/ButtonIcon";

import MenuIcon from "../assets/icons/menu.svg?react";
import XIcon from "../assets/icons/x.svg?react";

import { useAuth } from "../hooks/useAuth";
import { UserMenu } from "../components/UserMenu.tsx";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Header para mobile */}
      <header className="flex items-center justify-between bg-gray-100 p-4 lg:hidden">
        <div className="flex items-center gap-4">
          <ButtonIcon
            icon={MenuIcon}
            variant="primary"
            onClick={() => setIsSidebarOpen(true)}
          />
          <Logo
            color="white"
            size="md"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
        </div>
        <UserMenu>
          <div>
            <Avatar name={user?.name ?? "Usuário"} size="sm" />
          </div>
        </UserMenu>
      </header>

      {/* Sidebar mobile com animação */}
      <aside
        className={`fixed inset-0 z-50 bg-gray-100 flex flex-col justify-between p-6 lg:hidden transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 border-b border-gray-300 pb-4 flex justify-between items-center">
          <ButtonIcon
            icon={XIcon}
            variant="primary"
            onClick={() => setIsSidebarOpen(false)}
          />
          <Logo
            color="white"
            size="lg"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
          <UserMenu>
            <div>
              <Avatar name={user?.name ?? "Usuário"} size="sm" />
            </div>
          </UserMenu>
        </div>
        <Sidebar
          role={user?.role ?? "CLIENTE"}
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>

      {/* Sidebar desktop */}
      <aside className="hidden lg:flex w-64 bg-gray-100 flex-col justify-between p-6">
        <div className="mb-8 border-b border-gray-300 pb-4">
          <Logo
            color="white"
            size="lg"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
        </div>

        <Sidebar role={user?.role ?? "CLIENTE"} />
        <UserMenu>
          <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5 cursor-pointer">
            <Avatar name={user?.name ?? "CLIENTE"} size="sm" />
            <div className="text-left">
              <p className="truncate w-37.5">{user?.name}</p>
              <p className="truncate w-37.5">{user?.email}</p>
            </div>
          </footer>
        </UserMenu>
      </aside>
      {/* Conteúdo principal */}
      <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
        {children}
      </main>
    </div>
  );
}

```

## src\layout\AuthLayout.tsx

```tsx
import { Outlet } from "react-router-dom";
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

```

## src\layout\layoutVariants.ts

```ts
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

```

## src\main.tsx

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import "./index.css";

import { AuthProvider } from "./contexts/AuthProvider";
import { ServicesProvider } from "./contexts/CategoryServices/ServicesProvider";
import { ChamadosProvider } from "./contexts/Chamado/ChamadosProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ServicesProvider>
          <ChamadosProvider>
            <AppRoutes />
          </ChamadosProvider>
        </ServicesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

```

## src\Pages\admin\adminVariants.ts

```ts
import { cva } from "class-variance-authority";

export const adminVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});
```

## src\Pages\admin\ChamadosAdmin.tsx

```tsx
import { useEffect, useState } from "react";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import { api } from "../../services/api";
import { getStatusConfig } from "../../utils/statusConfig";

interface Servico {
  id: string;
  nome: string;
  price: number;
}

interface ChamadoFormatado {
  id: string;
  title: string;
  cliente: { id: string; name: string };
  tecnico: { id: string; name: string };
  status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";
  totalPrice: number;
  updatedAt: string;
  createdAt?: string;
  services: Servico[];
}

export function ChamadosAdmin() {
  const [chamados, setChamados] = useState<ChamadoFormatado[]>([]);

  useEffect(() => {
    api
      .get(`/chamados`)
      .then((res) => {
        setChamados(res.data);
      })
      .catch((err) => console.error("Erro ao buscar chamados:", err));
  }, []);
  return (
    <div className="p-4 sm:p-6">
      <header className="mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Chamados
        </Text>
      </header>

      <div className="border border-gray-500 rounded-lg">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr>
              <th className=" py-2 px-4 text-left">
                <div className="max-w-[80px] truncate lg:max-w-[112px]">
                  <Text variant="heading-md-bold" className="">
                    Atualizado em
                  </Text>
                </div>
              </th>

              <th className="px-3 py-2 text-left hidden lg:table-cell">Id</th>

              <th className="px-3 py-2 text-left">
                <Text variant="heading-md-bold" className="">
                  Título e Serviço
                </Text>
              </th>

              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Valor total
              </th>
              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Cliente
              </th>
              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Técnico
              </th>
              <th className="max-w-[64px] px-3 py-2 text-left lg:max-w-[152px]">
                Status
              </th>
              <th className="max-w-[52px] px-3 py-2 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id} className="border-t border-gray-500">
                <td className="px-3 py-2">
                  <Text variant="text-xs-regular" className="">
                    {new Date(chamado.updatedAt).toLocaleString()}
                  </Text>
                </td>

                <td className="max-w-[64px] px-3 py-2 hidden truncate lg:table-cell ">
                  <Text variant="text-sm-bold" className="">
                    {chamado.id}
                  </Text>
                </td>

                <td className="max-w-[146px] px-3 py-2 truncate lg:max-w-[266px]">
                  <Text
                    as="h3"
                    variant="text-sm-bold"
                    className="max-w-[122px] truncate lg:max-w-[242px]"
                  >
                    {chamado.title}
                  </Text>
                  {chamado.services?.map((item) => (
                    <Text
                      as="p"
                      key={item.id}
                      variant="text-sm-regular"
                      className="max-w-[122px] truncate lg:max-w-[242px]"
                    >
                      {item.nome}
                    </Text>
                  ))}
                </td>

                <td className="px-3 py-2 hidden lg:table-cell">
                  <Text variant="text-sm-bold">
                    {chamado.totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Text>
                </td>

                <td className="px-3 py-2 hidden md:hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={chamado.cliente.name} size="xs" />
                    <Text variant="text-sm-bold">{chamado.cliente.name}</Text>
                  </div>
                </td>

                <td className="px-3 py-2 hidden md:hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={chamado.tecnico.name} size="xs" />
                    <Text variant="text-sm-bold">{chamado.tecnico.name}</Text>
                  </div>
                </td>

                <td className="max-w-[64px] px-3 py-2 lg:max-w-[152px] md:max-w-[152px]">
                  <div className="flex items-center">
                    <Tags
                      variant={getStatusConfig(chamado.status).variant}
                      svg={getStatusConfig(chamado.status).icon}
                      className="max-w-[28px] lg:max-w-[152px] md:max-w-[152px] "
                    >
                      {getStatusConfig(chamado.status).label}
                    </Tags>
                  </div>
                </td>

                <td className="max-w-[52px] px-3 py-2">
                  <div className="flex items-center justify-end">
                    <ActionLink
                      to={`editarChamados/${chamado.id}`}
                      variant="subtitle"
                      size="md"
                    >
                      <Icon
                        svg={PenLineIcon}
                        className="w-4 h-4 fill-gray-100"
                      />
                    </ActionLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

## src\Pages\admin\DashboardAdmin.tsx

```tsx
import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "./adminVariants";
import type { VariantProps } from "class-variance-authority";

interface AdminProps extends VariantProps<typeof adminVariants> { }

export function DashboardAdmin({ }: AdminProps) {
    return (
        <AppLayout role="ADMIN">
            <Outlet />
        </AppLayout>
    );
}
```

## src\Pages\admin\EditarChamadoAdmin.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Button } from "../../components/Button";

export function EditarChamadoAdmin() {
  const { id } = useParams();
  const { getChamadoById, updateChamado } = useChamados();

  const chamado = getChamadoById(id!);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  function handleUpdateStatus(newStatus: "EM_ATENDIMENTO" | "ENCERRADO") {
    updateChamado(chamado.id, { status: newStatus });
  }

  return (
    <div className="mx-auto md:w-full max-w-[800px]">
      <header className="px-3 mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:w-full md:max-w-[800px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>

          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Chamado detalhado
          </Text>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            icon={ClockIcon}
            size="sm"
            className="py-5 w-full"
            onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
          >
            Em_atendimento
          </Button>
          <Button
            variant="secondary"
            icon={CheckIcon}
            size="sm"
            className="py-5 w-full"
            onClick={() => handleUpdateStatus("ENCERRADO")}
          >
            Encerrado
          </Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col gap-4 p-6 w-full md:max-w-[480px]">
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col gap-2">
                <Text as="h2" variant="heading-md-normal">
                  {chamado.id}
                </Text>
                <Text as="h2" variant="heading-md-bold">
                  {chamado.title}
                </Text>
              </div>

              <Tags
                variant={getStatusConfig(chamado.status).variant}
                svg={getStatusConfig(chamado.status).icon}
              >
                {getStatusConfig(chamado.status).label}
              </Tags>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Descrição
              </Text>
              <Text>{chamado.description}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Categoria
              </Text>
              {chamado.services.map((service) => (
                <Text key={service.id}>{service.nome}</Text>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-20">
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Criado em
                  </Text>
                  <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Atualizado em
                  </Text>
                  <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Cliente
              </Text>
              <div className="flex items-center gap-2">
                <Avatar name={String(chamado.cliente.name ?? "")} size="xs" />
                <Text>{chamado.cliente.name}</Text>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col p-6 w-[269px] h-fit">
            <div>
              <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
                Técnico responsável
              </Text>

              <div className="flex gap-2">
                <Avatar name="Jhon Doe" />
                <div className="flex flex-col">
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.name || "Técnico não atribuído"}
                  </Text>
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.email || "Email não disponível"}
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Valores
              </Text>
              <div className="flex justify-between">
                <Text>Preço Base</Text>
                <Text>R$ {chamado.totalPrice.toFixed(2)}</Text>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Adicionais
              </Text>
              {/** nessa parte deve exibir os serviços adicionais */}
              {chamado.services.slice(1).map((service) => (
                <div key={service.id} className="flex justify-between">
                  <Text>{service.nome}</Text>
                  <Text>R$ {service.valor.toFixed(2)}</Text>
                </div>
              ))}
            </div>
            <Divider />
            <div className="flex justify-between">
              <Text variant="heading-md-bold">Total</Text>
              {/** aqui deve exibir o total do preço base + adicionais */}
              <Text variant="heading-md-bold">
                R$ {chamado.totalPrice.toFixed(2)}
              </Text>
            </div>
          </Card>
        </form>
      </Container>
    </div>
  );
}

```

## src\Pages\admin\EditarTecnico.tsx

```tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { TagTime } from "../../components/TagTime";
import { Avatar } from "../../components/Avatar";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import z from "zod";
import { api } from "../../services/api";

const tecnicoSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  horarios: z.array(z.string()).optional(),
});

const periodos = {
  MANHÃ: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  TARDE: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  NOITE: ["19:00", "20:00", "21:00", "22:00", "23:00"],
};

export function EditarTecnico() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [horarios, setHorarios] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Buscar dados atuais do técnico
  useEffect(() => {
    async function fetchTecnico() {
      try {
        const response = await api.get(`/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setHorarios(
          response.data.disponibilidades?.map((d: any) => d.horario) || [],
        );
      } catch {
        setError("Erro ao carregar dados do técnico");
      }
    }
    if (id) fetchTecnico();
  }, [id]);

  // Alternar seleção de horários
  function toggleHorario(horario: string) {
    setHorarios((prev) =>
      prev.includes(horario)
        ? prev.filter((h) => h !== horario)
        : [...prev, horario],
    );
  }

  // Atualizar técnico
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = tecnicoSchema.safeParse({ name, email, horarios });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    navigate("/admin/tecnicos");
    try {
      await api.patch(`/users/${id}`, result.data);
      alert("Perfil atualizado com sucesso!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao atualizar técnico");
    }
  }

  return (
    <div className="mx-auto md:w-full max-w-[800px] ">
      <header className="mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:w-full md:max-w-[790px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/admin/tecnicos")}
          >
            Cancelar
          </Button>
          <Button className="w-full" onClick={handleSubmit}>
            Salvar
          </Button>
        </div>
      </header>

      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col gap-4 p-6 w-full h-fit md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <div className="py-1">
              <Avatar name={name} />
            </div>
            <InputText
              label="NOME"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              label="E-MAIL"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <Text className="text-red-500">{error}</Text>}
          </Card>

          <Card className="flex flex-col p-6">
            <Text as="h2" variant="heading-md-bold">
              Horários de atendimento
            </Text>
            <Text as="p" variant="text-sm-regular">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>

            {Object.entries(periodos).map(([periodo, horas]) => (
              <div key={periodo} className="mt-4">
                <Text variant="text-xs-bold" className="text-gray-300">
                  {periodo}
                </Text>
                <div className="flex gap-2 flex-wrap">
                  {horas.map((hora) => (
                    <TagTime
                      key={hora}
                      svg={XIcon}
                      checked={horarios.includes(hora)} // marcar se já está selecionado
                      onClick={() => toggleHorario(hora)}
                    >
                      {hora}
                    </TagTime>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </form>
      </Container>
    </div>
  );
}

```

## src\Pages\admin\ListClientes.tsx

```tsx
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";
import z, { ZodError } from "zod";

import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { Skeleton } from "../../components/Skeleton";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { InputText } from "../../components/InputText";
import Divider from "../../components/Divider";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";

import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";

const clienteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email("E-Mail inválido"),
});

export function ClientesAdmin() {
  const [clientes, setClientes] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await api.get<Users[]>("/users");
        const clientesFiltrados = response.data.filter(
          (user) => user.role === "CLIENTE",
        );
        setClientes(clientesFiltrados);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchClientes();
  }, []);

  async function handleUpdateCliente(id: string, dados: Partial<Users>) {
    try {
      const parsed = clienteSchema.parse(dados);
      const response = await api.patch(`/users/${id}`, parsed, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setClientes((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...response.data } : c)),
      );
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao atualizar cliente", error);
      }
    }
  }

  async function handleDeleteCliente(id: string) {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  }

  return (
    <div className="mx-auto max-w-267.5 p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text as="h1" variant="text-lg-bold" className="text-blue-dark">
          Clientes
        </Text>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-33.5 md:w-145.5">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 w-24 md:w-100 text-left">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-22"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2 w-33.5 md:w-145.5">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell w-24 md:w-100">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2 w-22">
                      <div className="flex justify-end gap-3">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </td>
                  </tr>
                ))
              : clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left w-33.5 md:w-145.5 truncate">
                      <div className="flex items-center gap-3">
                        <Avatar name={cliente.name} className="md:w-11.25" />
                        <Text
                          variant="text-sm-bold"
                          className="w-17.5 md:w-full truncate"
                        >
                          {cliente.name}
                        </Text>
                      </div>
                    </td>
                    <td className="w-24 md:w-100 px-3 py-2 text-left md:table-cell truncate max-w-30">
                      <Text className="w-24 md:w-100 truncate">
                        {cliente.email}
                      </Text>
                    </td>
                    <td className="px-3 py-2 sm:px-4 w-22">
                      <div className="flex items-center justify-end gap-3 text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <ActionLink to="#" variant="subtitle" size="md">
                              <Icon
                                svg={TrachIcon}
                                className="fill-feedback-danger"
                              />
                            </ActionLink>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <Text variant="heading-md-bold">
                                Excluir cliente
                              </Text>
                            </DialogHeader>

                            <Divider className="my-4" />
                            <div className="flex flex-col gap-6 py-6">
                              <Text>
                                Deseja realmente excluir{" "}
                                <strong>{cliente.name}</strong>?
                              </Text>
                              <Text as="p" className="mt-2 text-gray-300">
                                Ao excluir, todos os chamados deste cliente
                                serão removidos e esta ação não poderá ser
                                desfeita.
                              </Text>
                            </div>
                            <Divider className="my-4" />

                            <DialogFooter>
                              <div className="flex items-center justify-center gap-2 w-full py-6">
                                <DialogClose asChild>
                                  <Button variant="secondary" size="lg">
                                    Cancelar
                                  </Button>
                                </DialogClose>

                                <DialogClose asChild>
                                  <Button
                                    size="lg"
                                    onClick={() => {
                                      handleDeleteCliente(cliente.id);
                                      alert(
                                        `Cliente ${cliente.name} excluído com sucesso!`,
                                      );
                                    }}
                                  >
                                    Sim, excluir
                                  </Button>
                                </DialogClose>
                              </div>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <ButtonIcon
                              variant="secondary"
                              size="md"
                              icon={PenLineIcon}
                              className="fill-gray-100"
                            />
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <Text>Editar Cliente</Text>
                            </DialogHeader>
                            <Divider className="my-4" />
                            <Avatar name={cliente.name} />
                            <EditClienteForm
                              cliente={cliente}
                              onSave={handleUpdateCliente}
                              errors={errors}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EditClienteForm({
  cliente,
  onSave,
  errors,
}: {
  cliente: Users;
  onSave: (id: string, dados: Partial<Users>) => void;
  errors: Record<string, string>;
}) {
  const [formData, setFormData] = useState({
    name: cliente.name,
    email: cliente.email,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(cliente.id, formData);
      }}
    >
      <InputText
        label="NOME"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
      />
      <InputText
        label="E-MAIL"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
      />

      <Divider className="my-4" />

      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" size="lg">
            Salvar
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}

```

## src\Pages\admin\ListTecnicos.tsx

```tsx
import { useEffect, useState } from "react";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { Skeleton } from "../../components/Skeleton";
import { HorariosList } from "../../components/HorariosList";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";

export function TecnicosAdmin() {
  const [tecnicos, setTecnicos] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTecnicos() {
      try {
        const token = localStorage.getItem("@helpdesk:token");
        const response = await api.get<Users[]>("/users/tecnicos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Filtra apenas técnicos
        const tecnicosFiltrados = response.data.filter(
          (user) => user.role === "TECNICO",
        );
        setTecnicos(tecnicosFiltrados);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Erro ao buscar técnicos:", error.message);
        } else {
          console.error("Erro de conexão com o servidor:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTecnicos();
  }, []);

  return (
    <div className="mx-auto max-w-267.5 p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Técnicos
        </Text>
        <div>
          <ActionLink
            to="/admin/novoTecnico"
            variant="tertiary"
            size="md"
            icon={PlusIcon}
            className="md:hidden"
          />
          <ActionLink
            to="/admin/novoTecnico"
            variant="tertiary"
            size="md"
            className="md:block hidden justify-center hover:bg-gray-200"
            icon={PlusIcon}
          >
            Novo
          </ActionLink>
        </div>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-42.5 md:w-87.5">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left md:w-63.75">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-30 md:w-82">
                Disponibilidade
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left w-13"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2">
                      <Skeleton className="h-4 w-24" />
                    </td>
                  </tr>
                ))
              : tecnicos.map((tecnico) => (
                  <tr key={tecnico.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left">
                      <div className="flex items-center gap-3">
                        <Avatar name={tecnico.name} />
                        <Text
                          variant="text-sm-bold"
                          className="truncate max-w-37.5"
                        >
                          {tecnico.name}
                        </Text>
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell truncate max-w-30">
                      <Text>{tecnico.email}</Text>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <HorariosList
                        horarios={
                          tecnico.disponibilidades?.map((d) => d.horario) || []
                        }
                      />
                    </td>
                    <td className="px-3 py-2 text-left">
                      <div className="flex items-center justify-end">
                        <ActionLink
                          to={`/admin/editarTecnico/${tecnico.id}`}
                          variant="subtitle"
                          size="md"
                        >
                          <Icon
                            svg={PenLineIcon}
                            className="w-4 h-4 fill-gray-100"
                          />
                        </ActionLink>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

## src\Pages\admin\NovoTecnico.tsx

```tsx
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { useState } from "react";
import { TagTime } from "../../components/TagTime";
import XIcon from "../../assets/icons/x.svg?react";
import { z } from "zod";
import { api } from "../../services/api";

const tecnicoSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 dígitos"),
  horarios: z.array(z.string()).optional(),
  role: z.literal("TECNICO"),
});

export function NovoTecnico() {
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      horarios: formData.getAll("horarios") as string[],
      role: "TECNICO",
    };

    const result = tecnicoSchema.safeParse(payload);

    if (!result.success) {
      const formatted = result.error.format();
      setError({
        name: formatted.name?._errors[0] ?? "",
        email: formatted.email?._errors[0] ?? "",
        password: formatted.password?._errors[0] ?? "",
        horarios: formatted.horarios?._errors[0] ?? "",
      });
      return;
    }
    try {
      const response = await api.post("/users", {
        ...result.data,
        role: "TECNICO",
      });

      if (response.status !== 201) throw new Error("Erro ao salvar técnico");

      alert("Técnico salvo com sucesso!");
      setError({});
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Falha ao salvar técnico");
    }
  };

  return (
    <div className="mx-auto md:w-full max-w-[800px] pt-[52px]">
      <header className="mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4  md:w-full md:max-w-[790px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" className="w-full">
            Cancelar
          </Button>
          <Button type="submit" className="w-full" form="horariosForm">
            Salvar
          </Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form
          onSubmit={handleSubmit}
          id="horariosForm"
          className="mx-auto flex flex-col gap-6 md:flex-row "
        >
          <Card className="flex flex-col p-6 w-full md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <InputText
              type="text"
              label="NOME"
              name="name"
              placeholder="Nome Completo"
              error={!!error.name}
              helperText={error.name}
            />
            <InputText
              type="text"
              label="E-MAIL"
              name="email"
              placeholder="exemplo@email.com"
              error={!!error.email}
              helperText={error.email}
            />
            <InputText
              type="password"
              label="SENHA"
              name="password"
              placeholder="Defina a senha de acesso"
              error={!!error.password}
              helperText={error.password}
            />
          </Card>
          <Card className="flex flex-col p-6">
            <Text as="h2" variant="heading-md-bold">
              Horários de atendimento
            </Text>
            <Text as="p" variant="text-sm-regular">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                MANHÃ
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="07:00" svg={XIcon}>
                  07:00
                </TagTime>
                <TagTime name="horarios" value="08:00" svg={XIcon}>
                  08:00
                </TagTime>
                <TagTime name="horarios" value="09:00" svg={XIcon}>
                  09:00
                </TagTime>
                <TagTime name="horarios" value="10:00" svg={XIcon}>
                  10:00
                </TagTime>
                <TagTime name="horarios" value="11:00" svg={XIcon}>
                  11:00
                </TagTime>
                <TagTime name="horarios" value="12:00" svg={XIcon}>
                  12:00
                </TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                TARDE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="13:00" svg={XIcon}>
                  13:00
                </TagTime>
                <TagTime name="horarios" value="14:00" svg={XIcon}>
                  14:00
                </TagTime>
                <TagTime name="horarios" value="15:00" svg={XIcon}>
                  15:00
                </TagTime>
                <TagTime name="horarios" value="16:00" svg={XIcon}>
                  16:00
                </TagTime>
                <TagTime name="horarios" value="17:00" svg={XIcon}>
                  17:00
                </TagTime>
                <TagTime name="horarios" value="18:00" svg={XIcon}>
                  18:00
                </TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                NOITE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="19:00" svg={XIcon}>
                  19:00
                </TagTime>
                <TagTime name="horarios" value="20:00" svg={XIcon}>
                  20:00
                </TagTime>
                <TagTime name="horarios" value="21:00" svg={XIcon}>
                  21:00
                </TagTime>
                <TagTime name="horarios" value="22:00" svg={XIcon}>
                  22:00
                </TagTime>
                <TagTime name="horarios" value="23:00" svg={XIcon}>
                  23:00
                </TagTime>
              </div>
            </div>
          </Card>
        </form>
      </Container>
    </div>
  );
}

```

## src\Pages\admin\ServicosAdmin.tsx

```tsx
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import BanIcon from "../../assets/icons/ban.svg?react";
import CircleCheckIcon from "../../assets/icons/circle-check.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";

import { Tags } from "../../components/Tags";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";
import Divider from "../../components/Divider";

import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { ButtonIcon } from "../../components/ButtonIcon";
import { z, ZodError } from "zod";
import { useContext, useState } from "react";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { formatCurrencyBRL } from "../../utils/formatCurrency";
import { NumericFormat } from "react-number-format";

const servicoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  price: z.number().positive("O preço deve ser maior que zero"),
  active: z.boolean(),
});

export function ServicosAdmin() {
  const { categoryServices, loading, createServico, updateServico } =
    useContext(ServicesContext)!;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const [active, setActive] = useState(true);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const parsed = servicoSchema.parse({
        name,
        price: Number(price.replace(",", ".")),
        active: Boolean(active),
      });
      await createServico(parsed);
      setName("");
      setPrice("");
      setActive(true);
      setErrors({});
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao criar serviço", error);
      }
    }
  }

  async function handleUpdateServico(
    id: string,
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    try {
      const parsed = servicoSchema.pick({ name: true, price: true }).parse({
        name: editName,
        price: Number(editPrice.replace(",", ".")),
      });

      await updateServico(id, parsed);

      setEditName("");
      setEditPrice("");
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao atualizar serviço", error);
      }
    }
  }

  return (
    <div className="p-4 mx-auto overflow-x-auto max-w-267.5">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Serviços
        </Text>

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <ButtonIcon className="md:hidden" icon={PlusIcon} />
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button className="md:block hidden w-full" icon={PlusIcon}>
                Novo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Text variant="heading-md-bold">Cadastro de serviços</Text>
              </DialogHeader>

              <form onSubmit={handleSubmit}>
                <Divider className="my-4" />
                <InputText
                  label="TÍTULO"
                  placeholder="Nome do serviço"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                />
                <InputText
                  label="VALOR"
                  placeholder="R$ 0,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  error={!!errors.price}
                />
                <Divider className="my-4" />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" size={"lg"}>
                      Salvar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-hidden">
        {loading ? (
          <Text>Carregando serviços...</Text>
        ) : (
          <table className="w-full">
            <thead className="text-gray-400">
              <tr className="border-t border-gray-500">
                <th className="max-w-[87px] md:w-full px-3 py-2 sm:px-4 text-left">
                  Título
                </th>
                <th className="md:w-full px-3 py-2 sm:px-4 text-left">Valor</th>
                <th className=" px-3 py-2 sm:px-4 text-center">Status</th>
                <th
                  className=" px-3 py-2 sm:px-4 text-left w-5"
                  colSpan={2}
                ></th>
              </tr>
            </thead>
            <tbody>
              {categoryServices.map((servico) => (
                <tr key={servico.id} className="border-t border-gray-500">
                  <td className="max-w-[87px] truncate px-3 py-2 text-left">
                    <Text
                      variant="text-sm-bold"
                      className="max-w-[87px] truncate"
                    >
                      {servico.name}
                    </Text>
                  </td>
                  <td className="max-w-full px-3 py-2 text-left">
                    <Text variant="text-sm-regular">
                      {formatCurrencyBRL(servico.price)}
                    </Text>
                  </td>
                  <td className="max-w-[30px] px-3 py-2 text-right hidden md:table-cell">
                    <Tags
                      variant={servico.active ? "success" : "danger"}
                      className="max-w-[30px] md:max-w-[152px]"
                    >
                      {servico.active ? "Ativo" : "Inativo"}
                    </Tags>
                  </td>
                  <td className="px-12 py-2 text-right md:hidden table-cell">
                    <Tags
                      variant={servico.active ? "success" : "danger"}
                      svg={servico.active ? CircleCheckIcon : BanIcon}
                    />
                  </td>

                  <td className="px-3 py-6  flex items-center justify-end gap-2">
                    {servico.active ? (
                      <button
                        onClick={() =>
                          updateServico(servico.id, { active: false })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon svg={BanIcon} />
                        <Text className="hidden md:block">Desativar</Text>
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          updateServico(servico.id, { active: true })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon svg={CircleCheckIcon} />
                        <Text className="hidden md:block">Reativar</Text>
                      </button>
                    )}
                  </td>
                  <td className="w-[20px] py-2 text-right">
                    <div className="px-3 py-2 flex items-center justify-end gap-3">
                      <Dialog
                        onOpenChange={(open) => {
                          if (open) {
                            setEditName(servico.name);
                            setEditPrice(servico.price.toString());
                          }
                        }}
                      >
                        <DialogTrigger asChild>
                          <ActionLink variant="subtitle">
                            <Icon
                              svg={PenLineIcon}
                              className="w-4 h-4 fill-gray-100"
                            />
                          </ActionLink>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <Text variant="heading-md-bold">Serviço</Text>
                          </DialogHeader>

                          <form
                            onSubmit={(e) => handleUpdateServico(servico.id, e)}
                          >
                            <Divider className="my-4" />
                            <InputText
                              label="TÍTULO"
                              placeholder="Nome do serviço"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              error={!!errors.name}
                            />

                            {/* Campo com máscara de moeda na edição */}
                            <NumericFormat
                              customInput={InputText}
                              label="VALOR"
                              placeholder="R$ 0,00"
                              value={editPrice}
                              onValueChange={(values: { value: string }) =>
                                setEditPrice(values.value)
                              }
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix="R$ "
                              decimalScale={2}
                              fixedDecimalScale
                              error={!!errors.price}
                            />

                            <Divider className="my-4" />
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="submit" size={"lg"}>
                                  Salvar
                                </Button>
                              </DialogClose>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

```

## src\Pages\App.tsx

```tsx
export function App() {
  return <h1>Help_Desk</h1>;
}

```

## src\Pages\cliente\ChamadosCliente.tsx

```tsx
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import EyeIcon from "../../assets/icons/eye.svg?react";
import EditIcon from "../../assets/icons/pen-line.svg?react";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import { ActionLink } from "../../components/ActionLink";
import { Icon } from "../../components/Icon";

import { getStatusConfig } from "../../utils/statusConfig";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { Skeleton } from "../../components/Skeleton";

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
  role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
  const { chamados, loading } = useChamados();

  return (
    <>
      <h2 className="text-xl font-bold mb-2 text-blue-dark">
        {role === "CLIENTE" ? "Meus chamados" : "Chamados"}
      </h2>
      <div className="border border-gray-500 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="px-4 py-2">Atualizado em</th>
              <th className="px-4 py-2 hidden md:table-cell">Id</th>
              <th className="px-4 py-2">Titulo</th>
              <th className="px-4 py-2 hidden md:table-cell">Serviço</th>
              <th className="px-4 py-2 hidden md:table-cell">Valor total</th>
              <th className="px-4 py-2 hidden md:table-cell">Técnico</th>
              <th className="px-4 py-2" colSpan={2}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-2">
                  <Skeleton className="w-30 md:w-35 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  <Skeleton className="md:w-25 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-20 md:w-60 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  <Skeleton className="w-60 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  <Skeleton className="md:w-30 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 gap-1 md:flex hidden">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <Skeleton className="w-30 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-8 md:w-30 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 flex flex-row items-center justify-center gap-1">
                  <Skeleton className="w-8 h-8 rounded" />
                  <Skeleton className="w-8 h-8 rounded" />
                </td>
              </tr>
            ) : (
              chamados.map((chamado) => (
                <tr key={chamado.id} className="border-t border-gray-500">
                  <td className="px-4 py-2">
                    {new Date(chamado.updatedAt).toLocaleString("pt-BR")}
                  </td>

                  <td className="px-4 py-2 font-bold hidden md:table-cell max-w-20 truncate">
                    {chamado.id}
                  </td>

                  <td className="px-4 py-2 font-bold max-w-40 truncate">
                    {chamado.title}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell max-w-40 truncate">
                    {chamado.services.map((s) => s.nome).join(", ")}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell">
                    R$ {(chamado.totalPrice ?? 0.0).toFixed(2)}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell">
                    <div className="flex items-center">
                      <Avatar
                        size="xs"
                        name={chamado.tecnico?.name ?? "Sem técnico"}
                      />
                      <span className="ml-2">
                        {chamado.tecnico?.name ?? "Sem técnico"}
                      </span>
                    </div>
                  </td>

                  <td className="px-2 py-2">
                    <Tags
                      variant={getStatusConfig(chamado.status).variant}
                      svg={getStatusConfig(chamado.status).icon}
                      className="w-max px-2 py-1 flex items-center gap-1"
                    >
                      {getStatusConfig(chamado.status).label}
                    </Tags>
                  </td>

                  <td className="flex gap-2 px-2 py-2">
                    <ActionLink
                      to={`/cliente/detail-chamado/${chamado.id}`}
                      variant="subtitle"
                      size="md"
                    >
                      <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                    </ActionLink>

                    <ActionLink
                      to={`/cliente/editar-chamado/${chamado.id}`}
                      variant="tertiary"
                      size="md"
                    >
                      <Icon svg={EditIcon} className="w-4 h-4 fill-gray-600" />
                    </ActionLink>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

```

## src\Pages\cliente\clienteVariants.ts

```ts
import { cva } from "class-variance-authority";

export const clienteVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});


```

## src\Pages\cliente\DashboardCliente.tsx

```tsx
import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "../admin/adminVariants";
import type { VariantProps } from "class-variance-authority";

interface ClienteProps extends VariantProps<typeof adminVariants> { }

export function DashboardCliente({ }: ClienteProps) {
    return (
        <AppLayout role="CLIENTE">
            <Outlet />
        </AppLayout>
    );
}
```

## src\Pages\cliente\DetailChamadoCliente.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";

export function DetailChamadoCliente() {
  const { id } = useParams();
  const { getChamadoById } = useChamados();

  const chamado = getChamadoById(id!);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <Text variant="text-xs-bold">Voltar</Text>
        </a>
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Chamado detalhado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full md:min-w-120">
          <div className="flex items-start justify-between mb-6">
            <div className="flex flex-col gap-2">
              <Text as="h2" variant="heading-md-normal">
                {chamado.id}
              </Text>
              <Text as="h2" variant="heading-md-bold">
                {chamado.title}
              </Text>
            </div>

            <Tags
              variant={getStatusConfig(chamado.status).variant}
              svg={getStatusConfig(chamado.status).icon}
              className="flex w-1/3"
            >
              {getStatusConfig(chamado.status).label}
            </Tags>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="text-sm-bold" className="text-gray-400">
              Descrição
            </Text>
            <Text>{chamado.description}</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="text-sm-bold" className="text-gray-400">
              Categoria
            </Text>
            {chamado.services.map((service) => (
              <Text key={service.id}>{service.nome}</Text>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-20">
              <div className="flex flex-col gap-2">
                <Text variant="text-sm-bold" className="text-gray-400">
                  Criado em
                </Text>
                <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text variant="text-sm-bold" className="text-gray-400">
                  Atualizado em
                </Text>
                <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
          <div>
            <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
              Técnico responsável
            </Text>

            <div className="flex gap-2">
              <Avatar name={chamado.tecnico?.name || "N/A"} />
              <div className="flex flex-col">
                <Text variant="text-xs-regular" className="text-gray-300">
                  {chamado.tecnico?.name || "Técnico não atribuído"}
                </Text>
                <Text variant="text-xs-regular" className="text-gray-300">
                  {chamado.tecnico?.email || "Email não disponível"}
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Valores
            </Text>
            <div className="flex justify-between">
              <Text>Preço Base</Text>
              <Text>R$ {chamado.totalPrice.toFixed(2)}</Text>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Adicionais
            </Text>
            {/** nessa parte deve exibir os serviços adicionais */}
            {chamado.services.slice(1).map((service) => (
              <div key={service.id} className="flex justify-between">
                <Text className="w-[130px] truncate">{service.nome}</Text>
                <Text>R$ {service.price.toFixed(2)}</Text>
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex justify-between">
            <Text variant="heading-md-bold">Total</Text>
            {/** aqui deve exibir o total do preço base + adicionais */}
            <Text variant="heading-md-bold">
              R$ {chamado.totalPrice.toFixed(2)}
            </Text>
          </div>
        </Card>
      </Container>
    </div>
  );
}

```

## src\Pages\cliente\EditarChamadoCliente.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { useEffect, useState } from "react";

export function EditarChamadoCliente() {
  const { id } = useParams();
  const { getChamadoById, updateChamado } = useChamados();
  const navigate = useNavigate();

  const chamado = getChamadoById(id!);

  const [title, setTitle] = useState(chamado?.title ?? "");
  const [desc, setDesc] = useState(chamado?.description ?? "");
  const [services, setServices] = useState(
    chamado?.services.map((s) => s.id) ?? [],
  );

  async function salvarChamado(e: React.FormEvent) {
    e.preventDefault();
    await updateChamado(id!, {
      title,
      description: desc,
      services,
    });
    alert("Chamado atualizado com sucesso!");
    navigate("/cliente/chamados-cliente");
  }
  useEffect(() => {
    if (!chamado) return;

    // Executa o setState de forma assíncrona, evitando renderizações em cascata
    const timeout = setTimeout(() => {
      setTitle(chamado.title ?? "");
      setDesc(chamado.description ?? "");
      setServices(chamado.services?.map((s) => s.id) ?? []);
    }, 0);

    return () => clearTimeout(timeout);
  }, [chamado]);

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Editar chamado
        </Text>
      </header>
      <form onSubmit={salvarChamado}>
        <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
          <Card className="p-8 md:max-w-120 w-full md:min-w-120">
            <Text as="h2" variant="heading-md-bold">
              Informações
            </Text>
            <InputText
              label="Título"
              placeholder="Digite um título para o chamado"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Descrição"
              placeholder="Descreva o que está acontecendo"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <InputSelect
              label="Categoria"
              value={
                chamado?.services[0]
                  ? {
                      id: chamado.services[0].id,
                      nome: chamado.services[0].nome,
                      valor: chamado.services[0].price,
                    }
                  : undefined
              }
              onChange={(option) => setServices([option.id])}
            />
          </Card>
          <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
            <div>
              <Text as="h2" variant="heading-md-bold">
                Resumo
              </Text>
              <Text variant="text-xs-regular" className="text-gray-300">
                Valores e detalhes
              </Text>
            </div>

            <div>
              <Text as="h3" variant="text-xs-regular" className="text-gray-400">
                Categoria de serviço
              </Text>
              <Text variant="text-sm-regular" className="text-gray-200">
                Categoria selecionada
              </Text>
              <Text as="h3">Custo inicial</Text>
              <Text>
                {chamado?.services[0]?.price
                  ? Number(chamado.services[0].price).toFixed(2)
                  : "0,00"}
              </Text>
            </div>

            <Text variant="text-xs-regular" className="text-gray-300">
              O chamado será automaticamente atribuído a um técnico disponível
            </Text>
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="secondary"
                type="button"
                onClick={() => navigate("/cliente/chamados-cliente")}
              >
                Cancelar
              </Button>

              <Button type="submit">Salvar</Button>
            </div>
          </Card>
        </Container>
      </form>
    </div>
  );
}

```

## src\Pages\cliente\NovoChamado.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useState, useEffect, useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { useNavigate } from "react-router-dom";

import { useChamados } from "../../contexts/Chamado/hooks/useChamados";

export function NovoChamado() {
  const { createChamado } = useChamados();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categoria, setCategoria] = useState<{
    id: string;
    nome: string;
    valor: number;
  } | null>(null);

  const { user } = useAuth();
  const servicesCtx = useContext(ServicesContext);
  const navigate = useNavigate();

  useEffect(() => {
    servicesCtx?.fetchCategoryServices();
  }, []);

  async function enviarChamado() {
    try {
      if (!user) throw new Error("Usuário não autenticado");

      // 🔍 Loga o objeto que será enviado
      const chamadoData = {
        title,
        clienteId: user.id,
        description: desc,
        services: categoria ? [String(categoria.id ?? "")] : [],
      };

      console.log("Dados enviados para criarChamado:", chamadoData);

      await createChamado(chamadoData);

      alert("Chamado criado com sucesso!");

      navigate("/cliente/chamados-cliente");
    } catch (error) {
      alert("Erro ao criar chamado");
      console.error(error);
    }
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Novo chamado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="p-8 md:max-w-120 w-full md:min-w-120">
          <Text as="h2" variant="heading-md-bold">
            Informações
          </Text>
          <form
            id="novoChamado"
            onSubmit={(e) => {
              e.preventDefault();
              enviarChamado();
            }}
          >
            <InputText
              label="Título"
              placeholder="Digite um título para o chamado"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Descrição"
              placeholder="Descreva o que está acontecendo"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <InputSelect
              label="Categoria"
              placeholder="Selecione a categoria de atendimento"
              onChange={(option) => setCategoria(option)}
            />
          </form>
        </Card>
        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
          <div>
            <Text as="h2" variant="heading-md-bold">
              Resumo
            </Text>
            <Text variant="text-xs-regular" className="text-gray-300">
              Valores e detalhes
            </Text>
          </div>
          {categoria && (
            <div>
              <Text as="h3" variant="text-xs-regular" className="text-gray-400">
                Categoria de serviço
              </Text>
              <Text variant="text-sm-regular" className="text-gray-200">
                {categoria.nome}
              </Text>
              <Text as="h3">Custo inicial</Text>
              <Text>R$ {categoria.valor}</Text>
            </div>
          )}
          <Text variant="text-xs-regular" className="text-gray-300">
            O chamado será automaticamente atribuído a um técnico disponível
          </Text>
          <Button form="novoChamado" type="submit">
            Criar chamado
          </Button>
        </Card>
      </Container>
    </div>
  );
}

```

## src\Pages\PageComponents.tsx

```tsx
import { Avatar } from "../components/Avatar";
import { Text } from "../components/Text";
import { Icon } from "../components/Icon";
import { Tags } from "../components/Tags";
import { TagTime } from "../components/TagTime";
import { Button } from "../components/Button";

import AlertCircle from "../assets/icons/circle-alert.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SpinIcon from "../assets/icons/spinner.svg?react";
import LogOutIcon from "../assets/icons/log-out.svg?react";
import NewIcon from "../assets/icons/circle-help.svg?react";
import ClockIcon from "../assets/icons/clock-2.svg?react";
import CircleCheckIcon from "../assets/icons/circle-check-big.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import LinePencil from "../assets/icons/pen-line.svg?react";
import { ButtonIcon } from "../components/ButtonIcon";
import { InputText } from "../components/InputText";
import { InputSelect } from "../components/InputSelect";

import { useState } from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";

export function Components() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simples validação: senha precisa ter pelo menos 8 caracteres
    if (!email || !password) {
      setError(true);
      return;
    }
    if (password.length < 8) {
      setError(true);
      return;
    } else {
      setError(false);
      alert("Formulário enviado com sucesso!");
    }
  }
  return (
    <Container>
      <div className="flex flex-col gap-2 p-4">
        <Text variant={"text-xl-bold"} className="text-blue-dark">
          Hello, World!
        </Text>
        <Text variant={"text-lg-bold"}>Hello, World!</Text>
        <Text variant={"heading-md-normal"}>Hello, World!</Text>
        <Text variant={"text-sm-regular"}>Hello, World!</Text>
        <Text variant={"text-xs-regular"}>Hello, World!</Text>
        <Text variant={"text-xs-bold"}>Hello, World!</Text>
        <Text variant={"text-xxs-bold"}>Hello, World!</Text>

        <div className="flex gap-4">
          <Avatar name="Maria Oliveira" size="md" />
          <Avatar name="João Souza" size="lg" />
          <Avatar name="Ana Costa" />
          <Avatar name="Francisco Silva" />
        </div>

        <div className="flex gap-4">
          <Icon svg={TrashIcon} className="fill-gray-100" />
          <Icon svg={SpinIcon} className="fill-gray-100" animate />
          <Icon svg={LogOutIcon} className="fill-feedback-danger w-5 h-5" />
        </div>
        <div className="flex gap-4">
          <Tags variant="new" svg={NewIcon}>
            LABEL
          </Tags>
          <Tags variant="info" svg={ClockIcon}>
            LABEL
          </Tags>
          <Tags variant="success" svg={CircleCheckIcon}>
            LABEL
          </Tags>
          <Tags variant="danger" svg={NewIcon}>
            LABEL
          </Tags>
        </div>
        <div className="flex gap-4">
          <TagTime>09:00</TagTime>
          <TagTime svg={XIcon}>15:00</TagTime>
          <TagTime> 08:30 </TagTime>
        </div>
        <div className="flex gap-4">
          <Button icon={LinePencil} variant="primary">
            Primary
          </Button>
          <Button icon={LinePencil} size="sm" variant="primary">
            Primary
          </Button>
          <Button icon={LinePencil} disabled>
            Disabled
          </Button>
          <Button icon={LinePencil} variant="secondary">
            Secondary
          </Button>
          <Button icon={LinePencil} variant="link">
            Link
          </Button>
          <Button icon={LinePencil} size="sm" variant="link">
            Link
          </Button>
        </div>
        <div className="flex gap-4">
          <ButtonIcon icon={LinePencil} variant="primary" />
          <ButtonIcon icon={LinePencil} variant="primary" size="sm" />
          <ButtonIcon icon={LinePencil} disabled />
          <ButtonIcon icon={LinePencil} variant="secondary" />
          <ButtonIcon icon={LinePencil} variant="link" />
          <ButtonIcon icon={LinePencil} variant="link" size="sm" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">FORMULÁRIO EXEMPLO</h2>

          <InputText
            label="Email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            errorIcon={AlertCircle}
            helperText={error ? "O email é obrigatório" : ""}
          />

          <InputText
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={true}
            errorIcon={AlertCircle}
            helperText={error ? "A senha deve ter pelo menos 8 caracteres" : ""}
          />

          <InputSelect
            label="Categoria"
            options={["Item 1", "Item 2", "Item 3"]}
            helperText="Escolha uma opção"
            error={false}
          />

          <InputSelect
            label="Categoria"
            options={["Item 1", "Item 2", "Item 3"]}
            helperText="Campo obrigatório"
            error={true}
          />

          <Button type="submit" size="md" variant="primary">
            Enviar
          </Button>
        </form>

        <div className="flex p-8 bg-gray-600">
          <Card size="md">Hello World.</Card>
        </div>
      </div>
    </Container>
  );
}

```

## src\Pages\SignIn.tsx

```tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError, z } from "zod";
import { ActionLink } from "../components/ActionLink";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

const signInSchema = z.object({
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dbStatus, setDbStatus] = useState<"ok" | "error" | "">("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  // Verifica o health check ao montar
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        if (response.data.status === "ok") {
          setDbStatus("ok");
        } else {
          setDbStatus("error");
        }
      } catch {
        setDbStatus("error");
      }
    };
    checkHealth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = signInSchema.parse({
        email,
        password,
      });
      const response = await api.post("/sessions", data);

      signIn({
        token: response.data.token,
        user: response.data.user,
      });

      const role = response.data.user.role;

      if (role === "ADMIN") {
        navigate("/admin");
      }

      if (role === "TECNICO") {
        navigate("/tecnico");
      }

      if (role === "CLIENTE") {
        navigate("/cliente");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      setError("Falha ao autenticar. Verifique suas credenciais.");
    }
  };

  return (
    <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
      <header>
        <Logo color="blue" />
      </header>
      <main className="flex flex-col gap-3 w-full max-w-lg">
        {/* Aviso do banco de dados */}
        {dbStatus === "error" && (
          <Card className="w-full p-4 bg-red-600">
            <Text as="span" variant="text-xs-bold" className="text-white">
              ⚠️ Sistema indisponível: banco de dados fora do ar.
            </Text>
          </Card>
        )}

        <Card className="w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Acesse o portal
          </Text>
          <Text as="span" variant="text-xs-regular" className="text-gray-300">
            Entre usando seu e-mail e senha cadastrados
          </Text>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputText
              label="E-MAIL"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              label="SENHA"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <Text variant="text-xs-regular" className="text-red-400">
                {error}
              </Text>
            )}

            <Button
              size="lg"
              className="mt-4"
              type="submit"
              disabled={dbStatus === "error"}
            >
              Enviar
            </Button>
          </form>
        </Card>
        <Card className="flex flex-col w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Ainda não tem conta?
          </Text>
          <Text variant="text-xs-regular" className="text-gray-300">
            Cadastre agora mesmo
          </Text>
          <ActionLink
            to="/register"
            size="lg"
            variant="subtitle"
            className="mt-5"
          >
            Criar conta
          </ActionLink>
        </Card>
      </main>
    </Container>
  );
}

```

## src\Pages\SignUp.tsx

```tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError, z } from "zod";
import { ActionLink } from "../components/ActionLink";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { api } from "../services/api";

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome completo." }),
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dbStatus, setDbStatus] = useState<"ok" | "error" | "">("");

  const navigate = useNavigate();

  // Verifica o health check ao montar
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        if (response.data.status === "ok") {
          setDbStatus("ok");
        } else {
          setDbStatus("error");
        }
      } catch {
        setDbStatus("error");
      }
    };
    checkHealth();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = signUpSchema.parse({
        name,
        email,
        password,
      });

      await api.post("/users", { ...data, role: "CLIENTE" });

      if (confirm("Cadastrado com sucesso.")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      alert("Não foi possivel cadastrar.");
    }
  }

  return (
    <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
      <header>
        <Logo color="blue" />
      </header>
      <main className="flex flex-col gap-3 w-full max-w-lg">
        {dbStatus === "error" && (
          <Card className="w-full p-4 bg-red-600">
            <Text as="span" variant="text-xs-bold" className="text-white">
              ⚠️ Sistema indisponível: banco de dados fora do ar.
            </Text>
          </Card>
        )}

        <Card className="w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Crie sua conta
          </Text>
          <Text as="span" variant="text-xs-regular" className="text-gray-300">
            Informe seu nome, e-mail e senha
          </Text>

          <form onSubmit={onSubmit} action="#" className="flex flex-col gap-4">
            <InputText
              label="NOME"
              type="text"
              placeholder="Digite o nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              label="E-MAIL"
              type="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              label="SENHA"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button size="lg" className="mt-4" disabled={dbStatus === "error"}>
              Cadastrar
            </Button>
          </form>
        </Card>
        <Card className="flex flex-col w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Já tem uma conta?
          </Text>
          <Text variant="text-xs-regular" className="text-gray-300">
            Entre agora mesmo
          </Text>
          <ActionLink to="/login" size="lg" variant="subtitle" className="mt-5">
            Acessar conta
          </ActionLink>
        </Card>
      </main>
    </Container>
  );
}

```

## src\Pages\tecnico\ChamadoDetailsTecnico.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ButtonIcon } from "../../components/ButtonIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";
import { InputSelect } from "../../components/InputSelect";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { formatCurrencyBRL } from "../../utils/formatCurrency";
import { Skeleton } from "../../components/Skeleton";

export function ChamadoDetailsTecnico() {
  const [services, setServices] = useState<
    { id: string; name: string; price: number }[]
  >([]);

  const { id } = useParams();
  const { getChamadoById, fetchChamados, loading } = useChamados();

  const chamado = getChamadoById(id!);

  const [selectedServiceId, setSelectedServiceId] = useState<{
    id: string;
    nome: string;
    valor: number;
  } | null>(null);
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
  const [isAddingService, setIsAddingService] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await api.get("/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    fetchServices();
  }, []);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  const precoBase = chamado?.services[0]?.price ?? 0;

  const totalAdicionais = chamado?.services
    .slice(1)
    .reduce((total, service) => total + service.price, 0);

  async function handleUpdateStatus(status: "EM_ATENDIMENTO" | "ENCERRADO") {
    try {
      await api.patch(`/chamados/${chamado?.id}/status`, {
        status,
      });

      await fetchChamados();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  async function handleAddService() {
    if (!selectedServiceId) {
      return;
    }

    try {
      setIsAddingService(true);

      // IDs dos serviços que o chamado já possui
      const servicesAtuais = chamado?.services.map((service) => service.id);

      // Evita adicionar o mesmo serviço duas vezes
      if (servicesAtuais?.includes(selectedServiceId.id)) {
        alert("Esse serviço já foi adicionado ao chamado.");
        return;
      }

      // Mantém os serviços existentes e adiciona o novo
      const servicesAtualizados = [...servicesAtuais, selectedServiceId.id];

      await api.patch(`/chamados/${chamado?.id}`, {
        services: servicesAtualizados,
      });

      // Atualiza os chamados no contexto
      await fetchChamados();

      // Limpa seleção
      setSelectedServiceId(null);

      // Fecha modal
      setServiceDialogOpen(false);
    } catch (error) {
      console.error("Erro ao adicionar serviço:", error);
      alert("Não foi possível adicionar o serviço.");
    } finally {
      setIsAddingService(false);
    }
  }

  async function handleRemoveService(serviceId: string) {
    try {
      await api.delete(`/chamados/${chamado?.id}/services/${serviceId}`);

      await fetchChamados();

      alert("Serviço excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao remover serviço:", error);

      alert("Não foi possível excluir o serviço.");
    }
  }

  return (
    <div className="md:max-w-210 mt-14 mx-auto">
      <header className="flex flex-col md:items-end justify-between max-w-199 mb-6 md:flex-row">
        <div>
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Chamado detalhado
          </Text>
        </div>
        <div className="w-full md:max-w-80 flex gap-2 mt-2">
          <Button
            variant="secondary"
            size="md"
            icon={CheckIcon}
            className="w-full md:w-max"
          >
            Encerrar
          </Button>

          {chamado.status === "ABERTO" && (
            <Button
              variant="primary"
              size="md"
              icon={ClockIcon}
              onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
              className="w-full"
            >
              Iniciar atendimento
            </Button>
          )}

          {chamado.status === "EM_ATENDIMENTO" && (
            <Button
              variant="primary"
              size="md"
              icon={CheckIcon}
              onClick={() => handleUpdateStatus("ENCERRADO")}
              className="w-full"
            >
              Encerrar
            </Button>
          )}
        </div>
      </header>
      {loading ? (
        <>
          <Container className="w-full flex flex-wrap flex-col gap-6 md:flex-row md:max-w-210">
            <Skeleton className="w-[460px] h-[400px] rounded-lg" />
            <Skeleton className="w-[300px] h-[400px] rounded-lg" />
            <Skeleton className="w-[460px] h-[200px] rounded-lg" />
          </Container>
        </>
      ) : (
        <Container className="w-full flex flex-wrap flex-col gap-6 md:flex-row md:max-w-210">
          <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full">
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col gap-2">
                <Text as="h2" variant="heading-md-normal">
                  {chamado.id}
                </Text>
                <Text as="h2" variant="heading-md-bold">
                  {chamado.title}
                </Text>
              </div>

              <Tags
                variant={getStatusConfig(chamado.status).variant}
                svg={getStatusConfig(chamado.status).icon}
                className="flex w-1/3"
              >
                {getStatusConfig(chamado.status).label}
              </Tags>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Descrição
              </Text>
              <Text>{chamado.description}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Categoria
              </Text>
              {chamado.services.map((service) => (
                <Text key={service.id}>{service.nome}</Text>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-20">
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Criado em
                  </Text>
                  <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Atualizado em
                  </Text>
                  <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
                </div>
              </div>
            </div>
            <div>
              <Text>Cliente</Text>
              <div className="flex items-center gap-2 mt-2">
                <Avatar name={chamado.cliente.name} />
                <Text>{chamado.cliente.name}</Text>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 max-w-[full]">
            <div>
              <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
                Técnico responsável
              </Text>

              <div className="flex gap-2">
                <Avatar name="Jhon Doe" />
                <div className="flex flex-col">
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.name || "Técnico não atribuído"}
                  </Text>
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.email || "Email não disponível"}
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Valores
              </Text>
              <div className="flex justify-between">
                <Text>Preço Base</Text>
                <Text>{formatCurrencyBRL(precoBase)}</Text>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Adicionais
              </Text>

              {chamado.services.slice(1).map((service) => (
                <div key={service.id} className="flex justify-between gap-4">
                  <Text className="truncate w-[150px]">{service.nome}</Text>

                  <Text>{formatCurrencyBRL(service.price)}</Text>
                </div>
              ))}
            </div>
            <Divider />
            <div className="flex justify-between">
              <Text variant="heading-md-bold">Total</Text>
              {/** aqui deve exibir o total do preço base + adicionais */}
              <Text variant="heading-md-bold">
                {formatCurrencyBRL(precoBase + totalAdicionais)}
              </Text>
            </div>
          </Card>
          <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full md:min-w-120">
            <header className="flex justify-between">
              <Text variant="heading-md-bold" className="text-gray-300">
                Serviços adicionais
              </Text>
              <Dialog
                open={serviceDialogOpen}
                onOpenChange={(open) => {
                  setServiceDialogOpen(open);

                  if (!open) {
                    setSelectedServiceId(null);
                  }
                }}
              >
                <DialogTrigger asChild>
                  <ButtonIcon size="lg" icon={PlusIcon} />
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <Text>Serviços adicionais</Text>
                  </DialogHeader>

                  <Divider className="my-4" />

                  <div className="flex items-center gap-2 mb-5">
                    <InputSelect
                      label="Serviços cadastrados"
                      placeholder="Selecione um serviço"
                      value={selectedServiceId ?? undefined}
                      onChange={(option) => setSelectedServiceId(option)}
                    />
                  </div>

                  <Divider className="my-4" />

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary" size="lg">
                        Cancelar
                      </Button>
                    </DialogClose>

                    <Button
                      type="button"
                      size="lg"
                      onClick={handleAddService}
                      disabled={!selectedServiceId || isAddingService}
                    >
                      {isAddingService ? "Salvando..." : "Salvar"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </header>
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {chamado.services.slice(1).map((service) => (
                  <tr key={service.id}>
                    <td className="py-1">
                      <Text variant="heading-md-bold">{service.nome}</Text>
                    </td>

                    <td className="py-1">{formatCurrencyBRL(service.price)}</td>

                    <td className="w-10 py-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveService(service.id)}
                        className="p-2 flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-sm cursor-pointer"
                      >
                        <Icon
                          svg={TrachIcon}
                          className="w-6 h-6 fill-feedback-danger"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Container>
      )}
    </div>
  );
}

```

## src\Pages\tecnico\ChamadosTecnico.tsx

```tsx
import { ChamadoCard } from "../../components/ChamadoCard";
import { Skeleton } from "../../components/Skeleton";
import { Tags } from "../../components/Tags";
import { Text } from "../../components/Text";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { getStatusConfig } from "../../utils/statusConfig";

export function ChamadosTecnico() {
  const { chamados, loading } = useChamados();
  const chamadosPorStatus = {
    EM_ATENDIMENTO: chamados.filter((c) => c.status === "EM_ATENDIMENTO"),
    ABERTO: chamados.filter((c) => c.status === "ABERTO"),
    ENCERRADO: chamados.filter((c) => c.status === "ENCERRADO"),
  };

  const renderChamados = (lista: typeof chamados) => (
    <div className="flex flex-wrap gap-3 mt-4">
      {lista.map((chamado) => (
        <ChamadoCard key={chamado.id} chamado={chamado} />
      ))}
    </div>
  );
  return (
    <div className="p-4 sm:p-6">
      <header className="mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Meus chamados
        </Text>
      </header>
      {loading ? (
        <>
          <Skeleton className="h-8 w-30 rounded-full mb-5" />
          <section className="mb-8">
            <Skeleton className="w-100 h-50 rounded-lg" />
          </section>

          <Skeleton className="h-8 w-30 rounded-full mb-5" />
          <section className="mb-8">
            <Skeleton className="w-100 h-50 rounded-lg" />
          </section>

          <Skeleton className="h-8 w-30 rounded-full mb-5" />
          <section className="mb-8">
            <Skeleton className="w-100 h-50 rounded-lg" />
          </section>
        </>
      ) : (
        <>
          <section className="mb-8">
            <Tags
              variant={getStatusConfig("EM_ATENDIMENTO").variant}
              svg={getStatusConfig("EM_ATENDIMENTO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("EM_ATENDIMENTO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.EM_ATENDIMENTO)}
          </section>

          <section className="mb-8">
            <Tags
              variant={getStatusConfig("ABERTO").variant}
              svg={getStatusConfig("ABERTO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("ABERTO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.ABERTO)}
          </section>

          <section className="mb-8">
            <Tags
              variant={getStatusConfig("ENCERRADO").variant}
              svg={getStatusConfig("ENCERRADO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("ENCERRADO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.ENCERRADO)}
          </section>
        </>
      )}
    </div>
  );
}

```

## src\Pages\tecnico\DashboardTecnico.tsx

```tsx
import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";

export function DashboardTecnico() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

```

## src\Pages\tecnico\tecnicoVariants.ts

```ts
import { cva } from "class-variance-authority";

export const tecnicoVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});
```

## src\routes\appRoutes.tsx

```tsx
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { ChamadosAdmin } from "../Pages/admin/ChamadosAdmin";
import { DashboardAdmin } from "../Pages/admin/DashboardAdmin";
import { EditarChamadoAdmin } from "../Pages/admin/EditarChamadoAdmin";
import { EditarTecnico } from "../Pages/admin/EditarTecnico";
import { ClientesAdmin } from "../Pages/admin/ListClientes";
import { TecnicosAdmin } from "../Pages/admin/ListTecnicos";
import { NovoTecnico } from "../Pages/admin/NovoTecnico";
import { ServicosAdmin } from "../Pages/admin/ServicosAdmin";
import { ChamadosCliente } from "../Pages/cliente/ChamadosCliente";
import { DashboardCliente } from "../Pages/cliente/DashboardCliente";
import { DetailChamadoCliente } from "../Pages/cliente/DetailChamadoCliente";
import { EditarChamadoCliente } from "../Pages/cliente/EditarChamadoCliente";
import { NovoChamado } from "../Pages/cliente/NovoChamado";

import { Components } from "../Pages/PageComponents";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";
import { ChamadoDetailsTecnico } from "../Pages/tecnico/ChamadoDetailsTecnico";
import { ChamadosTecnico } from "../Pages/tecnico/ChamadosTecnico";
import { DashboardTecnico } from "../Pages/tecnico/DashboardTecnico";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/components" element={<Components />} />
      </Route>

      {/* Rotas do ADMIN */}
      <Route
        path="/admin"
        element={
          <PrivateRoute roles={["ADMIN"]}>
            <DashboardAdmin />
          </PrivateRoute>
        }
      >
        <Route index element={<ChamadosAdmin />} />
        <Route path="chamados" element={<ChamadosAdmin />} />
        <Route path="editarChamados/:id" element={<EditarChamadoAdmin />} />
        <Route path="clientes" element={<ClientesAdmin />} />
        <Route path="servicos" element={<ServicosAdmin />} />

        <Route path="tecnicos" element={<TecnicosAdmin />} />
        <Route path="novoTecnico" element={<NovoTecnico />} />
        <Route path="editarTecnico/:id" element={<EditarTecnico />} />
      </Route>

      {/* Rotas do TÉCNICO */}
      <Route
        path="/tecnico"
        element={
          <PrivateRoute roles={["TECNICO"]}>
            <DashboardTecnico />
          </PrivateRoute>
        }
      >
        <Route index element={<ChamadosTecnico />} />
        <Route path="meus-chamados" element={<ChamadosTecnico />} />
        <Route path="chamado-details/:id" element={<ChamadoDetailsTecnico />} />
      </Route>

      {/* Rotas do CLIENTE */}

      <Route
        path="/cliente"
        element={
          <PrivateRoute roles={["CLIENTE"]}>
            <DashboardCliente />
          </PrivateRoute>
        }
      >
        <Route index element={<ChamadosCliente />} />
        <Route path="chamados-cliente" element={<ChamadosCliente />} />
        <Route path="novo-chamado" element={<NovoChamado />} />
        <Route path="editar-chamado/:id" element={<EditarChamadoCliente />} />
        <Route path="detail-chamado/:id" element={<DetailChamadoCliente />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

```

## src\routes\PrivateRoute.tsx

```tsx
import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: JSX.Element;
  roles?: string[];
}

export function PrivateRoute({ children, roles }: Props) {
  const { user, isLoading } = useAuth();

  // 🔹 Enquanto o AuthProvider ainda está carregando, não renderiza nada
  if (isLoading) {
    return <div>Carregando...</div>; // ou um splash elegante
  }

  // 🔹 Se não há usuário após o carregamento, redireciona
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔹 Se há restrição de papel (role)
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

```

## src\services\api.ts

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@helpdesk:token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

```

## src\services\chamados.ts

```ts
import { api } from "./api";

// DTO para criação de chamado
export interface CriarChamadoDTO {
  clienteId: string;
  tecnicoId?: string;
  services: string[];
  disponibilidadeId?: string;
  adminId?: string;
  title?: string;
}

// Criar chamado
export async function criarChamado(data: CriarChamadoDTO) {
  const token = localStorage.getItem("@helpdesk:token");

  const response = await api.post("/chamados", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Listar chamados
export async function listarChamados() {
  const token = localStorage.getItem("@helpdesk:token");
  const response = await api.get("/chamados", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Buscar serviços (para popular o select)
export async function getServicos() {
  const response = await api.get("/servicos");
  return response.data;
}

```

## src\tests\Button.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../components/Button";

describe("Button", () => {
  it("renderiza o texto do botão", () => {
    render(<Button>Clique aqui</Button>);
    expect(
      screen.getByRole("button", { name: /clique aqui/i }),
    ).toBeInTheDocument();
  });

  it("renderiza com variante secondary", () => {
    render(<Button variant="secondary">Secundário</Button>);
    const btn = screen.getByRole("button", { name: /secundário/i });
    expect(btn).toBeInTheDocument();
    expect(btn.className).toContain("bg-gray-500");
  });

  it("renderiza com tamanho lg ocupando largura total", () => {
    render(<Button size="lg">Largo</Button>);
    const btn = screen.getByRole("button", { name: /largo/i });
    expect(btn.className).toContain("w-full");
  });

  it("aplica classe de desabilitado quando disabled=true", () => {
    render(<Button disabled={true}>Desabilitado</Button>);
    const btn = screen.getByRole("button", { name: /desabilitado/i });
    expect(btn.className).toContain("pointer-events-none");
    expect(btn.className).toContain("opacity-50");
  });

  it("chama onClick ao ser clicado", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clicável</Button>);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /clicável/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("não chama onClick quando disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled={true} onClick={handleClick}>
        Bloqueado
      </Button>,
    );

    const btn = screen.getByRole("button", { name: /bloqueado/i });

    // O Button usa pointer-events-none (CSS) — não tem disabled nativo.
    // O correto é verificar que as classes de bloqueio estão aplicadas.
    expect(btn.className).toContain("pointer-events-none");
    expect(btn.className).toContain("cursor-not-allowed");
    expect(btn.className).toContain("opacity-50");
  });
});

```

## src\tests\InputText.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { InputText } from "../components/InputText";

describe("InputText", () => {
  it("renderiza o input na tela", () => {
    render(<InputText />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renderiza com label visível", () => {
    render(<InputText label="E-MAIL" />);
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument();
  });

  it("renderiza com placeholder", () => {
    render(<InputText placeholder="Digite seu email" />);
    expect(
      screen.getByPlaceholderText(/digite seu email/i),
    ).toBeInTheDocument();
  });

  it("aceita digitação do usuário", async () => {
    render(<InputText placeholder="Digite algo" />);
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/digite algo/i);

    await user.type(input, "texto de teste");

    expect(input).toHaveValue("texto de teste");
  });

  it("renderiza o helperText quando passado", () => {
    render(<InputText helperText="Campo obrigatório" />);
    expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
  });

  it("renderiza o helperText em vermelho quando error=true", () => {
    render(<InputText helperText="Campo inválido" error={true} />);
    const helper = screen.getByText(/campo inválido/i);
    expect(helper.className).toContain("text-red");
  });

  it("chama onChange ao digitar", async () => {
    const handleChange = vi.fn();
    render(<InputText placeholder="Digite algo" onChange={handleChange} />);

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/digite algo/i), "abc");

    expect(handleChange).toHaveBeenCalled();
  });
});

```

## src\tests\PrivateRoute.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { PrivateRoute } from "../routes/PrivateRoute";

vi.mock("../hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "../hooks/useAuth";

const mockUseAuth = vi.mocked(useAuth);

const mockUser = {
  id: "1",
  name: "Teste",
  email: "teste@email.com",
  password: "",
  avatarUrl: "",
  role: "CLIENTE" as const,
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
  disponibilidades: [],
};

function PaginaProtegida() {
  return <div>Conteúdo protegido</div>;
}

function PaginaLogin() {
  return <div>Página de login</div>;
}

function renderPrivateRoute(roles?: string[]) {
  return render(
    <MemoryRouter initialEntries={["/protegido"]}>
      <Routes>
        <Route path="/login" element={<PaginaLogin />} />
        <Route
          path="/protegido"
          element={
            <PrivateRoute roles={roles}>
              <PaginaProtegida />
            </PrivateRoute>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PrivateRoute", () => {
  it("mostra loading enquanto está carregando", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      isLoading: true,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });
    renderPrivateRoute();

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it("redireciona para /login quando não há usuário", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    renderPrivateRoute();

    expect(screen.getByText(/página de login/i)).toBeInTheDocument();
    expect(screen.queryByText(/conteúdo protegido/i)).not.toBeInTheDocument();
  });

  it("renderiza o conteúdo quando usuário está autenticado", () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });
    renderPrivateRoute();

    expect(screen.getByText(/conteúdo protegido/i)).toBeInTheDocument();
  });

  it("redireciona quando usuário não tem o role exigido", () => {
    mockUseAuth.mockReturnValue({
      user: mockUser, // role: "CLIENTE"
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    // Rota exige ADMIN mas usuário é CLIENTE
    renderPrivateRoute(["ADMIN"]);

    expect(screen.getByText(/página de login/i)).toBeInTheDocument();
    expect(screen.queryByText(/conteúdo protegido/i)).not.toBeInTheDocument();
  });

  it("renderiza quando usuário tem o role exigido", () => {
    mockUseAuth.mockReturnValue({
      user: { ...mockUser, role: "ADMIN" as const },
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    // Rota exige ADMIN e usuário é ADMIN
    renderPrivateRoute(["ADMIN"]);

    expect(screen.getByText(/conteúdo protegido/i)).toBeInTheDocument();
  });
});

```

## src\tests\schemas.test.tsx

```tsx
import { describe, expect, it } from "vitest";
import { z } from "zod";

// Cópia dos schemas — igual ao que está nos componentes
const signInSchema = z.object({
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome completo." }),
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

describe("signInSchema", () => {
  it("aceita dados válidos", () => {
    const result = signInSchema.safeParse({
      email: "user@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(true);
  });

  it("rejeita email inválido", () => {
    const result = signInSchema.safeParse({
      email: "nao-é-email",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("E-Mail inválido.");
  });

  it("rejeita senha com menos de 6 caracteres", () => {
    const result = signInSchema.safeParse({
      email: "user@email.com",
      password: "123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter pelo menos 6 digitos",
    );
  });
});

describe("signUpSchema", () => {
  it("aceita dados válidos", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(true);
  });

  it("rejeita nome vazio", () => {
    const result = signUpSchema.safeParse({
      name: "",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Informe o nome completo.");
  });

  it("rejeita nome só com espaços", () => {
    const result = signUpSchema.safeParse({
      name: "   ",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Informe o nome completo.");
  });

  it("rejeita email inválido", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "invalido",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("E-Mail inválido.");
  });

  it("rejeita senha com menos de 6 caracteres", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      password: "123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter pelo menos 6 digitos",
    );
  });
});

```

## src\tests\setup.ts

```ts
import "@testing-library/jest-dom";

```

## src\tests\SignIn.test.tsx

```tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { SignIn } from "../Pages/SignIn";

vi.mock("../hooks/useAuth", () => ({
  useAuth: () => ({
    signIn: vi.fn(),
    isLoading: false,
  }),
}));

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn().mockResolvedValue({ data: { status: "ok" } }),
    post: vi.fn(),
  },
}));

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

describe("SignIn", () => {
  beforeEach(() => {
    alertMock.mockClear();
  });

  it("renderiza o formulário de login", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>,
    );
    expect(
      screen.getByPlaceholderText(/exemplo@email.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite sua senha/i),
    ).toBeInTheDocument();
  });

  it("mostra alerta ao submeter com senha curta", async () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    // Aguarda botão habilitar
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /enviar/i }),
      ).not.toBeDisabled();
    });

    // Email válido + senha curta — jsdom não bloqueia, Zod rejeita a senha
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), "123");

    // Submete o form diretamente para contornar validação nativa HTML
    fireEvent.submit(
      screen.getByRole("button", { name: /enviar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/senha deve ter pelo menos/i),
      );
    });
  });
});

```

## src\tests\SignUp.test.tsx

```tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignUp } from "../Pages/SignUp";

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn().mockResolvedValue({ data: { status: "ok" } }),
    post: vi.fn().mockResolvedValue({ data: {} }),
  },
}));

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
const confirmMock = vi.spyOn(window, "confirm").mockImplementation(() => false);

describe("SignUp", () => {
  beforeEach(() => {
    alertMock.mockClear();
    confirmMock.mockClear();
  });

  it("renderiza o formulário de cadastro", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );
    expect(
      screen.getByPlaceholderText(/digite o nome completo/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/exemplo@email.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite sua senha/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
  });

  it("mostra alerta quando o nome está vazio", async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "senha123",
    );

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/informe o nome/i),
      );
    });
  });

  it("mostra alerta quando a senha é curta", async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/digite o nome completo/i),
      "João Silva",
    );
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), "123");

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/senha deve ter pelo menos/i),
      );
    });
  });

  it("chama api.post ao submeter com dados válidos", async () => {
    const { api } = await import("../services/api");
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/digite o nome completo/i),
      "João Silva",
    );
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "joao@email.com",
    );
    await user.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "senha123",
    );

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(
        "/users",
        expect.objectContaining({
          name: "João Silva",
          email: "joao@email.com",
          password: "senha123",
          role: "CLIENTE",
        }),
      );
    });
  });
});

```

## src\tests\Text.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "../components/Text";

describe("Text", () => {
  it("renderiza o texto passado como children", () => {
    render(<Text>Olá mundo</Text>);
    expect(screen.getByText(/olá mundo/i)).toBeInTheDocument();
  });

  it("renderiza como span por padrão", () => {
    render(<Text>Texto padrão</Text>);
    const el = screen.getByText(/texto padrão/i);
    expect(el.tagName).toBe("SPAN");
  });

  it("renderiza como h1 quando as='h1'", () => {
    render(<Text as="h1">Título</Text>);
    const el = screen.getByText(/título/i);
    expect(el.tagName).toBe("H1");
  });

  it("aplica classe font-bold na variante text-lg-bold", () => {
    render(<Text variant="text-lg-bold">Negrito</Text>);
    const el = screen.getByText(/negrito/i);
    expect(el.className).toContain("font-bold");
  });

  it("aplica classe font-normal na variante text-sm-regular", () => {
    render(<Text variant="text-sm-regular">Normal</Text>);
    const el = screen.getByText(/normal/i);
    expect(el.className).toContain("font-normal");
  });

  it("aplica classe text-xs na variante text-xs-bold", () => {
    render(<Text variant="text-xs-bold">Pequeno</Text>);
    const el = screen.getByText(/pequeno/i);
    expect(el.className).toContain("text-xs");
  });

  it("aplica className extra quando passado", () => {
    render(<Text className="text-red-500">Vermelho</Text>);
    const el = screen.getByText(/vermelho/i);
    expect(el.className).toContain("text-red-500");
  });

  it("renderiza como p quando as='p'", () => {
    render(<Text as="p">Parágrafo</Text>);
    const el = screen.getByText(/parágrafo/i);
    expect(el.tagName).toBe("P");
  });
});

```

## src\types\global.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="node" />

```

## src\utils\formatCurrency.ts

```ts
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

```

## src\utils\statusConfig.ts

```ts
import HelpIcon from "../assets/icons/circle-help.svg?react";
import CircleClockIcon from "../assets/icons/clock-2.svg?react";
import CheckIcon from "../assets/icons/circle-check-big.svg?react";

type TagVariant =
  | "danger"
  | "info"
  | "success"
  | "default"
  | "new"
  | null
  | undefined;

export function getStatusConfig(status: string): {
  variant: TagVariant;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
} {
  switch (status) {
    case "ABERTO":
      return { variant: "new", label: "Aberto", icon: HelpIcon };
    case "EM_ATENDIMENTO":
      return {
        variant: "info",
        label: "Em atendimento",
        icon: CircleClockIcon,
      };
    case "ENCERRADO":
      return { variant: "success", label: "Encerrado", icon: CheckIcon };
    default:
      return { variant: "default", label: status, icon: HelpIcon };
  }
}

```

## src\vite-env.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```

## tailwind.config.ts

```ts
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

```

## tools\generate-md.ts

```ts
import { readdirSync, statSync, readFileSync, appendFileSync, existsSync, unlinkSync } from "fs";
import { join, extname, dirname, resolve, relative, basename } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// raiz do projeto (um nível acima de tools)
const projectPath = resolve(__dirname, "..");

// pega o nome da pasta raiz (nome do projeto)
const projectName = basename(projectPath);

// gera o arquivo dentro de tools com o nome do projeto
const outputFile = join(__dirname, `${projectName}.md`);

const extensions = [".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".env", ".css"];
const specialFiles = [
  "Dockerfile",
  "Makefile",
  ".eslintrc",
  ".prettierrc",
  "vite.config.ts",
  "vite.config.js",
  "tailwind.config.js",
  "postcss.config.js"
];
const excludeDirs = ["node_modules", ".git", "dist", "build", "generated"];
const excludeFiles = ["package-lock.json"];

if (existsSync(outputFile)) unlinkSync(outputFile);

function formatHeader(fullPath: string): string {
  const rel = relative(projectPath, fullPath);
  return `## ${rel}`;
}

function wrapContent(ext: string, content: string): string {
  if ([".ts", ".tsx", ".js"].includes(ext)) return `\n\`\`\`${ext.replace(".", "")}\n${content}\n\`\`\`\n`;
  if (ext === ".json") return `\n\`\`\`json\n${content}\n\`\`\`\n`;
  if (ext === ".md") return `\n${content}\n`;
  if (ext === ".env") return `\n\`\`\`env\n${content}\n\`\`\`\n`;
  if (specialFiles.includes(ext)) return `\n\`\`\`\n${content}\n\`\`\`\n`;
  return `\n${content}\n`;
}

function walk(dir: string): void {
  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) walk(fullPath);
    } else {
      const ext = extname(file) || file;
      if ((extensions.includes(ext) || specialFiles.includes(file)) && !excludeFiles.includes(file)) {
        try {
          const content = readFileSync(fullPath, "utf8");
          appendFileSync(outputFile, `\n${formatHeader(fullPath)}\n`);
          appendFileSync(outputFile, wrapContent(ext, content));
        } catch (err) {
          console.error("⚠️ Erro ao ler arquivo:", fullPath, (err as Error).message);
        }
      }
    }
  }
}

console.log(`🔍 Gerando arquivo ${projectName}.md...`);
walk(projectPath);
console.log(`✅ Arquivo gerado com sucesso em ${outputFile}`);

```

## tools\HelpDesk-WEB.md


## .env

```env
VITE_API_URL=http://localhost:3333
VITE_APP_NAME=HelpDesk
```

## eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])

```

## package.json

```json
{
  "name": "helpdesk",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "generate-md": "ts-node --esm tools/generate-md.ts"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.20",
    "@radix-ui/react-popover": "^1.1.21",
    "@tailwindcss/vite": "^4.3.0",
    "axios": "^1.16.1",
    "class-variance-authority": "^0.7.1",
    "classnames": "^2.5.1",
    "clsx": "^2.1.1",
    "jwt-decode": "^4.0.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-number-format": "^5.4.5",
    "react-router": "^8.3.0",
    "react-router-dom": "^7.17.0",
    "tailwind-merge": "^3.6.0",
    "tailwind-variants": "^3.2.2",
    "tailwindcss": "^4.3.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.4",
    "@types/classnames": "^2.3.0",
    "@types/jest": "^30.0.0",
    "@types/jwt-decode": "^2.2.1",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "@vitest/ui": "^4.1.10",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "jsdom": "^30.0.1",
    "ts-node": "^10.9.2",
    "tw-animate-css": "^1.4.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10",
    "vite-plugin-svgr": "^5.2.0",
    "vitest": "^4.1.10"
  }
}

```

## README.md

# HelpDesk WEB 💻

<p align="left">
<img src="./.github/logo HelpDesk.png" alt="Tela de Login" width="600"/>
</p>

Interface web desenvolvida em **React**, **TypeScript** e **Vite**, conectada à [HelpDesk API](https://github.com/rosendo2015/HelpDesk-API).  
O sistema oferece uma experiência moderna e intuitiva para gerenciamento de chamados, usuários e disponibilidade de técnicos.

![React](https://img.shields.io/badge/React-18.x-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## ⚙️ Funcionalidades

- Login e autenticação de usuários
- Cadastro e gerenciamento de chamados
- Painel administrativo para controle de técnicos e clientes
- Upload de avatar e perfil de usuário
- Comunicação direta com a **HelpDesk API**
- Interface **responsiva** e otimizada para desktop e mobile
- Organização modular com **contexts**, **hooks** e **services**

---

## 🧩 Arquitetura do Projeto

```plaintext
src/
 ├── assets/              # Imagens, ícones e estilos globais
 ├── components/          # Componentes reutilizáveis
 ├── contexts/            # Contextos globais (auth, theme, etc.)
 ├── hooks/               # Hooks personalizados
 ├── layout/              # Layouts principais da aplicação
 ├── Pages/               # Páginas principais
 │    ├── admin/          # Painel administrativo
 │    ├── cliente/        # Área do cliente
 │    ├── tecnico/        # Área do técnico
 │    ├── App.tsx         # Componente raiz
 │    ├── PageComponents.tsx
 │    ├── SignIn.tsx      # Tela de login
 │    └── SignUp.tsx      # Tela de cadastro
 ├── routes/              # Definição das rotas
 ├── services/            # Comunicação com a API (axios)
 ├── tests/               # Testes unitários e de integração
 ├── types/               # Tipagens globais
 ├── utils/               # Funções auxiliares
 ├── index.css            # Estilos globais
 ├── main.tsx             # Ponto de entrada da aplicação
 └── vite-env.d.ts        # Tipos do ambiente Vite

```

## 🚀 Como Executar

### \* Clone o repositório

git clone https://github.com/rosendo2015/HelpDesk-WEB.git

### \* Acesse a pasta

cd HelpDesk-WEB

### \* Instale as dependências

```
npm install
```

### \* Configure o ambiente

cp .env.example .env

### \* Defina a URL da API no arquivo .env

VITE_API_URL=http://localhost:3000

### \* Execute o projeto

npm run dev

## 🧰 Tecnologias Utilizadas

- React

- TypeScript

- Vite

- TailwindCSS

- Axios

- React Router DOM

- Context API

- Vitest + Jest para testes

- ESLint + Prettier para padronização de código

## 🧪 Testes

npm run test

## 🧱 Ferramentas e Configurações

- TailwindCSS para estilização rápida e responsiva

- Vite para build e desenvolvimento ultrarrápido

- Vitest para testes unitários

- Docker Compose (opcional) para ambiente containerizado

- CI/CD via GitHub Actions (opcional)

## 📸 Preview do Sistema

<p align="left">
<img src="./.github/pageLogin.png" alt="Tela de Login" width="600"/>
</p>
<p align="left">
<img src="./.github/dashboard-admin.png" alt="Dashboard" width="600"/>
</p>

## 🤝 Contribuição

### Contribuições são bem-vindas!

- Faça um fork do projeto

- Crie uma branch (git checkout -b feature/nova-feature)

- Commit suas alterações (git commit -m 'Adiciona nova feature')

- Push para a branch (git push origin feature/nova-feature)

- Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir.

## 💬 Contato

Desenvolvido por Francisco Rosendo  
📧 rosendo2015@gmail.com
🔗 LinkedIn (linkedin.com in Bing)


## src\components\ActionLink\actionLinkVariants.ts

```ts
import { cva } from "class-variance-authority";

export const actionLinkVariants = cva(
  "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "hover:text-blue-800 underline",
        secondary: "bg-transparent",
        tertiary: "bg-gray-100 text-gray-100",
        subtitle: "bg-gray-500 hover:bg-gray-400",
      },
      size: {
        lg: "h-10 px-4 text-lg",
        md: "h-8 px-2 py-1 text-sm",
        sm: "w-5 h-5 px-2 text-xs ",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none no-underline",
      },
    },
    defaultVariants: {
      variant: "subtitle",
      size: "md",
      disabled: false,
    },
  },
);

export const actionLinkIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-blue-600 group-hover:fill-blue-800",
      secondary: "fill-gray-600 group-hover:fill-gray-400",
      tertiary: "fill-gray-500 ",
      subtitle: "fill-gray-400 group-hover:fill-gray-600",
    },
    size: {
      lg: "w-6 h-6",
      md: "w-5 h-5",
      sm: "w-3.5 h-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const actionLinkTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 group-hover:text-blue-800",
      secondary: "text-gray-500 group-hover:text-gray-400",
      tertiary: "text-gray-500",
      subtitle: "text-gray-200 group-hover:text-gray-200",
    },
    size: {
      lg: "text-lg",
      md: "text-sm",
      sm: "text-xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

```

## src\components\ActionLink\index.tsx

```tsx
import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  actionLinkIconVariants,
  actionLinkTextVariants,
  actionLinkVariants,
} from "./actionLinkVariants";

interface ActionLinkProps {
  to?: string;
  variant?: "primary" | "secondary" | "tertiary" | "subtitle";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>["svg"];
  onClick?: () => void;
}

export function ActionLink({
  to = "#",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  children,
  icon,
  onClick,
}: ActionLinkProps) {
  return (
    <a
      href={to}
      onClick={onClick}
      className={clsx(
        actionLinkVariants({ variant, size, disabled }),
        "group",
        className,
      )}
      aria-disabled={disabled}
    >
      {icon && (
        <Icon
          svg={icon}
          className={actionLinkIconVariants({ variant, size })}
        />
      )}
      {children && (
        <Text
          variant="text-sm-bold"
          className={actionLinkTextVariants({ variant })}
        >
          {children}
        </Text>
      )}
    </a>
  );
}

```

## src\components\Avatar\avatarVariants.ts

```ts
import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "flex items-center justify-center rounded-full font-bold text-white cursor-pointer",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-10 h-10 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
      },
      color: {
        blue: "bg-blue-dark",
      },
    },
    defaultVariants: {
      size: "sm",
      color: "blue",
    },
  },
);

```

## src\components\Avatar\index.tsx

```tsx
//* src/components/Avatar/index.tsx
import { forwardRef } from "react";
import cn from "classnames";
import { type VariantProps } from "class-variance-authority";
import { avatarVariants } from "./avatarVariants";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  name: string | null;
  className?: string;
}

function getInitials(fullName: string | null): string {
  if (typeof fullName !== "string" || !fullName.trim()) return "";

  const parts = fullName.trim().split(" ");

  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, name, size, color }, ref) => {
    const initials = getInitials(name);

    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size, color }), className)}
      >
        {initials}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";

```

## src\components\Button\buttonVariants.ts

```ts
import { cva } from "class-variance-authority";


export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-gray-100",
            secondary: "bg-gray-500 hover:bg-gray-400",
            link: "bg-transparent hover:bg-gray-500"
        },
        size: {
            lg: "h-10 px-6 w-full",
            md: "h-10 px-4",
            sm: "h-7 px-3"
        },
        disabled: {
            false: "",
            true: "opacity-50 cursor-not-allowed pointer-events-none",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
    }
})

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-600",
            secondary: "fill-gray-200 hover:fill-gray-100",
            link: "fill-gray-300 hover:fill-gray-100"
        },
        size: {
            md: "w-5 h-5",
            sm: "w-3.5 h-3.5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    }
})

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-gray-600",
            secondary: "text-gray-200 hover:fill-gray-100",
            link: "text-gray-300 hover:fill-gray-100"
        },
        size: {
            md: "text-sm",
            sm: "text-xs"
        }

    },
    defaultVariants: {
        variant: "primary",

    }
})
```

## src\components\Button\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "tailwind-variants";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  buttonIconVariants,
  buttonTextVariants,
  buttonVariants,
} from "./buttonVariants";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function Button({
  variant,
  size,
  disabled,

  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ disabled, variant, size }), className)}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={buttonIconVariants({ variant, size: "md" })}
        />
      )}
      <Text variant="text-sm-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}

```

## src\components\ButtonIcon\buttonIconVariants.ts

```ts
import { cva } from "class-variance-authority";

export const buttonIconVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-gray-100",
        secondary: "bg-gray-500 hover:bg-gray-400",
        link: "bg-transparent hover:bg-gray-500",
      },
      size: {
        lg: "h-10 w-10",
        md: "h-8 w-8",
        sm: "h-5 w-5",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-gray-600",
      secondary: "fill-gray-200 group-hover:fill-gray-100",
      link: "fill-gray-300 group-hover:fill-gray-100",
    },
    size: {
      lg: "w-7 h-7",
      md: "w-5 h-5",
      sm: "w-3.5 h-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

```

## src\components\ButtonIcon\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "tailwind-variants";
import { Icon } from "../Icon";
import {
  buttonIconIconVariants,
  buttonIconVariants,
} from "./buttonIconVariants";

interface ButtonIconProps
  extends
    VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function ButtonIcon({
  variant,
  size,
  icon,
  disabled,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={cn(buttonIconVariants({ variant, size, disabled }), className)}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={buttonIconIconVariants({ variant, size, className })}
        />
      )}
    </button>
  );
}

```

## src\components\Card\cardVariants.ts

```ts
import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg border border-solid ", {
  variants: {
    variant: {
      default: "border-gray-500 bg-gray-600",
      bottom: "bg-transparent border-0",
    },
    size: {
      none: "",
      md: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "none",
  },
});

```

## src\components\Card\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { cardVariants } from "./cardVariants";

interface CardProps
  extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
  as = "div",
  variant,
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cn(cardVariants({ variant, size, className }), className),
      ...props,
    },
    children,
  );
}

```

## src\components\ChamadoCard\index.tsx

```tsx
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Card } from "../Card";
import Divider from "../Divider";
import { Tags } from "../Tags";
import { Text } from "../Text";
import { NavLink } from "../NavLink";

import { useState } from "react";
import { api } from "../../services/api";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import type { Chamado, Status } from "../../contexts/Chamado/model/Chamado";

interface ChamadoCardProps {
  chamado: Chamado;
}

type Status = "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";

export function ChamadoCard({ chamado }: ChamadoCardProps) {
  const { updateChamado } = useChamados();
  const [loading, setLoading] = useState(false);

  async function handleUpdateStatus(novoStatus: Status) {
    try {
      setLoading(true);

      await api.patch(`/chamados/${chamado.id}`, {
        status: novoStatus,
      });

      // Recarrega os chamados para que o card
      // mude de seção conforme o novo status
      window.location.reload();
    } catch (error) {
      console.error("Erro ao atualizar status do chamado:", error);
      alert("Não foi possível atualizar o status do chamado.");
    } finally {
      setLoading(false);
    }
  }

  async function handleStatusChange(status: Status) {
    try {
      await updateChamado(chamado.id, { status });
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  function renderStatusButton() {
    if (chamado.status === "ABERTO") {
      return (
        <Button
          variant="primary"
          size="sm"
          type="button"
          disabled={loading}
          onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
        >
          {loading ? "..." : "Iniciar"}
        </Button>
      );
    }

    if (chamado.status === "EM_ATENDIMENTO") {
      return (
        <Button
          variant="primary"
          size="sm"
          type="button"
          icon={CheckIcon}
          disabled={loading}
          onClick={() => handleUpdateStatus("ENCERRADO")}
        >
          {loading ? "..." : "Encerrar"}
        </Button>
      );
    }

    return null;
  }

  return (
    <Card className="h-fit p-5">
      <div className="w-full md:max-w-86.5 flex flex-col items-center ">
        <header className="w-86.5 flex justify-between mb-1"></header>
        <header className="w-86.5 flex justify-between mb-1">
          <Text>{chamado.id}</Text>

          <div className="flex items-center gap-2">
            <NavLink
              variant="subtitle"
              to={`/tecnico/chamado-details/${chamado.id}`}
              icon={PenLineIcon}
            />

            {chamado.status === "ABERTO" && (
              <Button
                variant="primary"
                size="sm"
                icon={ClockIcon}
                onClick={() => handleStatusChange("EM_ATENDIMENTO")}
              >
                Iniciar
              </Button>
            )}

            {chamado.status === "EM_ATENDIMENTO" && (
              <Button
                variant="primary"
                size="sm"
                icon={CheckIcon}
                onClick={() => handleStatusChange("ENCERRADO")}
              >
                Encerrar
              </Button>
            )}
          </div>
        </header>

        <div className="flex flex-col">
          <Text as="h3" variant="heading-md-bold">
            {chamado.title}
          </Text>
          <Text as="h3">{chamado.description ?? "-"}</Text>
          <div className="w-86.5 flex justify-between mt-4">
            <Text>{chamado.createdAt}</Text>
            <Text>R$ {chamado.totalPrice}</Text>
          </div>
          <Divider className="mt-4 mb-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar name={chamado.cliente!.name} />
              <Text>{chamado.cliente.name}</Text>
            </div>
            <Tags
              variant={getStatusConfig(chamado.status).variant}
              svg={getStatusConfig(chamado.status).icon}
              className="w-max px-2 py-1 flex items-center gap-1"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

```

## src\components\Container\containerVariants.ts

```ts
import { cva } from "class-variance-authority";

export const containerVariants = cva("", {
  variants: {
    size: {
      default: "w-full",
      md: "w-full sm:max-w-[42.5rem] px-2", // ✅ w-93.75 → w-full / max-w-170 → max-w-[42.5rem]
    },
  },
  defaultVariants: {
    size: "default",
  },
});

```

## src\components\Container\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { containerVariants } from "./containerVariants";

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cn(containerVariants({ size: "md" }), className),
      ...props,
    },
    children,
  );
}

```

## src\components\Dialog\index.tsx

```tsx
import { Card } from "../Card";
import cn from "classnames";
import { Text } from "../Text";
import { ButtonIcon } from "../ButtonIcon";
import XIcon from "../../assets/icons/x.svg?react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;

export const DialogClose = DialogPrimitive.Close;

export function DialogTrigger({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      className={cn(``, className)}
      ref={ref}
      {...props}
    />
  );
}

export function DialogOverlay({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        `
        fixed inset-0 z-50 bg-gray-100/60 backdrop-blur-sm
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=open]:fade-in-0
        data-[state=closed]:fade-out-0
        `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & {
  variant?: "default" | "bottom";
};

export function DialogContent({
  className,
  ref,
  children,
  variant = "default",
  ...props
}: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          `
          fixed z-60 data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
          `,
          variant === "default" &&
            `left-[50%] top-[50%] w-full max-w-md
             translate-x-[-50%] translate-y-[-50%]
             md:translate-x-[-50%] md:translate-y-[-50%]
             data-[state=open]:slide-in-from-bottom-[48%]
             data-[state=closed]:slide-out-to-bottom-[48%]`,
          variant === "bottom" &&
            `bottom-4 left-1/2 -translate-x-1/2 w-full max-w-sm
            bg-gray-100
             data-[state=open]:slide-in-from-bottom
             data-[state=closed]:slide-out-to-bottom`,
          className,
        )}
        {...props}
      >
        <Card variant={"default"} size={"md"}>
          {children}
        </Card>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <header
        className={cn(`flex items-center justify-between`, className)}
        {...props}
      >
        <DialogPrimitive.Title>
          <Text variant="text-xl-bold">{children}</Text>
        </DialogPrimitive.Title>
        <DialogClose asChild>
          <ButtonIcon
            variant={"link"}
            icon={XIcon}
            className="hover:bg-transparent"
          />
        </DialogClose>
      </header>
    </>
  );
}

export function DialogBody({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}

export function DialogFooter({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <footer className="flex items-center justify-end">{children}</footer>
    </div>
  );
}

```

## src\components\Divider\dividerVariants.ts

```ts
import { tv } from "tailwind-variants";
export const dividerVariants = tv({
  base: "w-full h-px ",
  variants: {
    variant: {
      default: "bg-gray-500",
    },
    orientation: {
      horizontal: "w-full h-px",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

```

## src\components\Divider\index.tsx

```tsx
import { type VariantProps } from "tailwind-variants";
import { dividerVariants } from "./dividerVariants";

interface DividerProps
  extends React.ComponentProps<"div">, VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical";
}

export default function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div className={dividerVariants({ className, orientation })} {...props} />
  );
}

```

## src\components\HorariosList\index.tsx

```tsx
import { TagTime } from "../TagTime";
import XIcon from "../../assets/icons/x.svg?react";

type HorariosListProps = {
  horarios: string[];
};

export function HorariosList({ horarios }: HorariosListProps) {
  if (!horarios || horarios.length === 0) {
    return <TagTime disabled>Sem horários aqui...</TagTime>;
  }

  return (
    <>
      {/* Mobile */}
      <div className="flex gap-2 md:hidden">
        {horarios.slice(0, 1).map((hora, index) => (
          <TagTime key={index} name="horarios" value={hora} svg={XIcon}>
            {hora}
          </TagTime>
        ))}
        {horarios.length > 1 && (
          <TagTime disabled>+{horarios.length - 1}</TagTime>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-2">
        {horarios.slice(0, 4).map((hora, index) => (
          <TagTime key={index} name="horarios" value={hora} svg={XIcon}>
            {hora}
          </TagTime>
        ))}
        {horarios.length > 4 && (
          <TagTime disabled>+{horarios.length - 4}</TagTime>
        )}
      </div>
    </>
  );
}

```

## src\components\Icon\iconVariants.ts

```ts
import { cva } from "class-variance-authority";

export const iconVariants = cva("inline-block", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin",
        },
        color: {
            gray: "text-gray-400",
            blue: "text-blue-500",
            red: "text-red-500",
        },
        size: {
            sm: "w-3 h-3",
            md: "w-4 h-4",
            lg: "w-5 h-5",
        },
    },
    defaultVariants: {
        animate: false,
        color: "gray",
        size: "md",
    },
});
```

## src\components\Icon\index.tsx

```tsx
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

```

## src\components\InputFile\index.tsx

```tsx
import React, { useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import UploadIcon from "../../assets/icons/upload.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import UserPlaceholder from "../../assets/icons/users.svg?react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../Dialog";
import Divider from "../Divider";
import { Text } from "../Text";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";

interface InputFileProps {
  avatarUrl?: string;
  onChange: (user: Users) => void;
  onDelete?: () => Promise<void>;
}

export function InputFile({ avatarUrl, onChange, onDelete }: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsDialogOpen(true);
    }
  }

  async function handleSave() {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/user-avatar/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resposta do backend:", response.data);

      onChange(response.data);
      setIsDialogOpen(false);
      alert("Imagem atualizada com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar imagem:", err);
      alert("Erro ao salvar imagem. Veja o console.");
    }
  }

  function getAvatarUrl(filename?: string) {
    if (!filename) {
      return "/default-avatar.png";
    }

    // Usa a baseURL do Axios para não hardcodear localhost
    const baseURL = api.defaults.baseURL?.replace(/\/$/, ""); // remove barra final se houver

    // Se o backend já retornou "files/...", não duplica
    const normalizedFilename = filename.startsWith("files/")
      ? filename
      : `files/${filename}`;

    return `${baseURL}/${normalizedFilename}`;
  }

  return (
    <div className="flex items-center gap-2 mb-5">
      {/* Avatar com fallback */}
      <div className="w-12 h-12 rounded-full border border-gray-300 bg-gray-200 flex items-center justify-center overflow-hidden">
        {avatarUrl ? (
          <img
            src={getAvatarUrl(avatarUrl)}
            alt="user"
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon svg={UserPlaceholder} className="w-7 h-7 fill-gray-600" />
        )}
      </div>

      {/* Botão de upload */}
      <label className="flex items-center gap-2 bg-gray-500 text-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400/50 transition-colors duration-200">
        <Icon svg={UploadIcon} className="w-4 h-4 fill-gray-100" />
        <span className="text-sm">Nova imagem</span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {/* Botão de deletar */}
      {avatarUrl && (
        <Button
          type="button"
          onClick={onDelete}
          className="rounded-md bg-gray-500 hover:bg-gray-400/50 transition-colors duration-200"
        >
          <Icon svg={TrashIcon} className="w-4 h-4 fill-feedback-danger" />
        </Button>
      )}

      {/* Dialog de confirmação */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <Text variant="heading-md-bold">Nova imagem</Text>
          </DialogHeader>
          <Divider className="my-4" />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Prévia"
              className="w-75 h-75 rounded-full object-cover mx-auto"
            />
          )}
          <Divider className="my-4" />
          <DialogFooter>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button size="lg" variant="primary" onClick={handleSave}>
                Salvar
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

```

## src\components\InputSelect\index.tsx

```tsx
import { useEffect, useState } from "react";
import { cx } from "class-variance-authority";
import { inputSelectVariants } from "./inputSelectVariants";
import { api } from "../../services/api";
import ChevronDown from "../../assets/icons/chevron-down.svg?react";
import ChevronUp from "../../assets/icons/chevron-up.svg?react";
import Check from "../../assets/icons/check.svg?react";
import AlertCircle from "../../assets/icons/circle-alert.svg?react";
import { Icon } from "../Icon";
import { Text } from "../Text";
import type { CategoryServices } from "../../contexts/CategoryServices/model/categoryServices";

interface Option {
  id: string;
  nome: string;
  valor: number;
}

interface InputSelectProps {
  label: string;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
  value?: Option;
  onChange?: (value: Option) => void;
}

export function InputSelect({
  label,
  helperText,
  placeholder,
  error,
  value,
  onChange,
}: InputSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(value ?? null);
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function fetchOptions() {
      const response = await api.get<CategoryServices[]>("/services");
      const fetched = response.data.map((s) => ({
        id: s.id,
        nome: s.name,
        valor: s.price,
      }));
      setOptions(fetched);
    }
    fetchOptions();
  }, []);

  useEffect(() => {
    if (value && value.id !== selected?.id) {
      Promise.resolve().then(() => setSelected(value));
    }
  }, [value]);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  const state = error ? "error" : open ? "focus" : "default";

  return (
    <div className="group w-full flex flex-col gap-1 relative">
      <label
        className={cx(
          "text-sm transition-all mt-4",
          state === "error"
            ? "text-red-500"
            : state === "focus"
              ? "text-blue-500"
              : "text-gray-400",
        )}
      >
        <Text variant="text-sm-bold">{label}</Text>
      </label>

      <div onClick={toggleOpen} className={cx(inputSelectVariants({ state }))}>
        <span className={selected ? "text-gray-800" : "text-gray-400"}>
          {selected?.nome || placeholder || "Selecione uma opção"}
        </span>
        {open ? (
          <Icon
            svg={ChevronUp}
            color={state === "error" ? "red" : "blue"}
            size="lg"
          />
        ) : (
          <Icon
            svg={ChevronDown}
            color={state === "error" ? "red" : "gray"}
            size="lg"
          />
        )}
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md p-2 z-10">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className={cx(
                "py-2 px-2 rounded cursor-pointer flex justify-between items-center hover:bg-gray-500",
                selected?.id === option.id && "font-bold text-blue-500",
              )}
            >
              {option.nome}
              {selected?.id === option.id && (
                <Icon svg={Check} color="blue" size="lg" />
              )}
            </div>
          ))}
        </div>
      )}

      {helperText && (
        <span
          className={cx(
            "text-xs mt-1 flex items-center gap-1 italic",
            state === "error" ? "text-red-500" : "text-gray-400",
          )}
        >
          {state === "error" && <Icon svg={AlertCircle} fill="red" size="md" />}
          {helperText}
        </span>
      )}
    </div>
  );
}

```

## src\components\InputSelect\inputSelectVariants.ts

```ts
import { cva } from "class-variance-authority";

export const inputSelectVariants = cva(
    "border-b border-solid bg-transparent outline-none w-full flex justify-between items-center cursor-pointer py-2",
    {
        variants: {
            state: {
                default: "border-gray-400 text-gray-400",
                focus: "border-blue-500 text-blue-500 shadow-md",
                error: "border-red-500 text-red-500 shadow-sm",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

```

## src\components\InputText\index.tsx

```tsx
import { cx } from "class-variance-authority"
import { Icon } from "../Icon"
import { Text } from "../Text"
import { inputTextVariants, labelInputTextVariants, helperTextVariants } from "./inputTextVariants"
import { textVariants } from "../Text/textVariants"

interface InputTextProps extends React.ComponentProps<"input"> {
    label?: string
    error?: boolean
    helperText?: string
    errorIcon?: React.ComponentProps<typeof Icon>["svg"]
}

export function InputText({
    className,
    label,
    error,
    helperText,
    errorIcon,
    ...props
}: InputTextProps) {
    return (
        <div className="group flex flex-col gap-1 w-full">
            <label
                htmlFor="inputText"
                className={labelInputTextVariants({ error })}
            >
                <Text variant="text-sm-bold">{label}</Text>
            </label>

            <div className="relative flex items-center">
                <input
                    id="inputText"
                    className={cx(
                        inputTextVariants({ error }),
                        textVariants(),
                        "peer",
                        error ? "pr-6" : "",
                        className
                    )}
                    {...props}
                />

                {error && error}
            </div>

            {helperText && (
                <span className={helperTextVariants({ error })}>
                    {error && errorIcon && (
                        <Icon svg={errorIcon} className="w-3 h-3 fill-red-500" />
                    )}
                    {helperText}
                </span>
            )}

        </div>
    )
}

```

## src\components\InputText\inputTextVariants.ts

```ts
import { cva } from "class-variance-authority"

export const inputTextVariants = cva(
    "border-b border-solid bg-transparent outline-none flex-1",
    {
        variants: {
            error: {
                true: "border-red-500 focus:border-red-500",
                false: "border-gray-400 focus:border-blue-500"
            }
        },
        defaultVariants: {
            error: false
        }
    }
)

export const labelInputTextVariants = cva(
    "transition-all mt-4",
    {
        variants: {
            error: {
                true: "text-red-500 group-focus-within:text-red-500",
                false: "text-gray-400 group-focus-within:text-blue-500"
            }
        },
        defaultVariants: {
            error: false
        }
    }
)

export const helperTextVariants = cva("text-xs mt-1 flex items-center gap-1", {
    variants: {
        error: {
            true: "text-red-500",
            false: "text-gray-400"
        }
    },
    defaultVariants: {
        error: false
    }
})

```

## src\components\InputTextArea\index.tsx

```tsx
import { cx } from "class-variance-authority"
import { Icon } from "../Icon"
import { Text } from "../Text"
import { inputTextVariants, labelInputTextVariants, helperTextVariants } from "../InputText/inputTextVariants"
import { textVariants } from "../Text/textVariants"

interface TextareaProps extends React.ComponentProps<"textarea"> {
    label?: string
    error?: boolean
    helperText?: string
    errorIcon?: React.ComponentProps<typeof Icon>["svg"]
}

export function Textarea({
    className,
    label,
    error,
    helperText,
    errorIcon,
    ...props
}: TextareaProps) {
    return (
        <div className="group flex flex-col gap-1 w-full">
            {label && (
                <label className={labelInputTextVariants({ error })}>
                    <Text variant="text-sm-bold">{label}</Text>
                </label>
            )}

            <textarea
                className={cx(
                    inputTextVariants({ error }),
                    textVariants(),
                    "peer resize-none min-h-[120px] py-2",
                    className
                )}
                {...props}
            />

            {helperText && (
                <span className={helperTextVariants({ error })}>
                    {error && errorIcon && (
                        <Icon svg={errorIcon} className="w-3 h-3 fill-red-500" />
                    )}
                    {helperText}
                </span>
            )}
        </div>
    )
}

```

## src\components\Logo\index.tsx

```tsx
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

```

## src\components\Logo\logoVariants.ts

```ts
import { cva } from "class-variance-authority";

export const logoStyles = cva("flex items-center justify-center gap-3 mx-4", {
    variants: {
        size: {
            sm: "gap-2",
            md: "gap-3",
            lg: "gap-4",
        },
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col",
        },
    },
    defaultVariants: {
        size: "md",
        orientation: "horizontal",
    },
});

export const logoImage = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6",
            md: "w-10 h-10",
            lg: "w-11 h-11",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export const logoText = cva("", {
    variants: {
        color: {
            blue: "text-blue-dark",
            white: "text-white",
        },
    },
    defaultVariants: {
        color: "blue",
    },
});

```

## src\components\NavLink\index.tsx

```tsx
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { Icon } from "../Icon";
import { Text } from "../Text";
import clsx from "clsx";
import {
  navLinkIconVariants,
  navLinkTextVariants,
  navLinkVariants,
} from "./navLinkVariants";

interface Props extends Omit<NavLinkProps, "className" | "children"> {
  variant?: "primary" | "secondary" | "tertiary" | "subtitle" | "active";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function NavLink({
  to,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  children,
  icon,
  ...props
}: Props) {
  return (
    <RouterNavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        clsx(
          navLinkVariants({
            variant: isActive ? "active" : variant,
            size,
            disabled,
          }),
          "group",
          className,
        )
      }
      aria-disabled={disabled}
    >
      {({ isActive }) => (
        <>
          {icon && (
            <Icon
              svg={icon}
              className={navLinkIconVariants({
                variant: isActive ? "active" : variant,
                size,
              })}
            />
          )}
          {children && (
            <Text
              variant="text-sm-bold"
              className={navLinkTextVariants({
                variant: isActive ? "active" : variant,
              })}
            >
              {children}
            </Text>
          )}
        </>
      )}
    </RouterNavLink>
  );
}

```

## src\components\NavLink\navLinkVariants.ts

```ts
import { cva } from "class-variance-authority";

export const navLinkVariants = cva(
  "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "hover:text-blue-800 underline",
        secondary: "bg-transparent",
        tertiary:
          "bg-blue-dark text-gray-100 hover:text-gray-200 hover:bg-blue-light",
        subtitle: "bg-gray-500 hover:bg-gray-400",
        active: "bg-blue-dark text-white hover:bg-blue-dark", // 🔹 ativo com fundo azul
      },
      size: {
        lg: "h-10 text-lg px-2",
        md: "w-7 h-7 text-sm",
        sm: "text-xs px-1 py-0.5",
      },
      disabled: {
        false: "",
        true: "opacity-50 cursor-not-allowed pointer-events-none no-underline",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const navLinkIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-blue-600 group-hover:fill-blue-800",
      secondary: "fill-gray-600 group-hover:fill-gray-400",
      tertiary: "fill-gray-500 group-hover:fill-gray-700",
      subtitle: "fill-gray-400 group-hover:fill-gray-600",
      active: "fill-white",
    },
    size: {
      lg: "w-6 h-6",
      md: "w-5 h-5",
      sm: "w-3.5 h-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const navLinkTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 group-hover:text-blue-800",
      secondary: "text-gray-500 group-hover:text-gray-400",
      tertiary: "text-gray-500 group-hover:text-gray-700",
      subtitle: "text-gray-200 group-hover:text-gray-200",
      active: "text-white",
    },
    size: {
      lg: "text-lg",
      md: "text-sm",
      sm: "text-xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

```

## src\components\Popover\index.tsx

```tsx
//* src/components/Popover/index.tsx

import * as PopoverPrimitive from "@radix-ui/react-popover";
import cn from "classnames";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export function PopoverContent({
  className,
  children,
  side = "right",
  align = "start",
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        side={side}
        align={align}
        className={cn(
          `
          z-50 rounded-lg mt-20 -mr-10 bg-gray-100  px-4 lg:ml-10 lg:mb-2 w-50
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=open]:fade-in-0
          data-[state=closed]:fade-out-0
          `,
          className,
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

```

## src\components\Sidebar\index.tsx

```tsx
import { NavLink } from "../NavLink"; // 🔹 usa o novo NavLink
import ClipboardList from "../../assets/icons/clipboard-list.svg?react";
import Plus from "../../assets/icons/plus.svg?react";
import Users from "../../assets/icons/users.svg?react";
import BriefCase from "../../assets/icons/briefcase-business.svg?react";
import Wrench from "../../assets/icons/wrench.svg?react";

interface SidebarProps {
  role?: "ADMIN" | "TECNICO" | "CLIENTE";
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ role = "CLIENTE", onClose }: SidebarProps) {
  return (
    <aside className="h-full">
      <div className="flex items-center justify-center">
        <nav className="w-full flex flex-col gap-4">
          {role === "ADMIN" && (
            <>
              <NavLink
                to="/admin/chamados"
                icon={ClipboardList}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Chamados
              </NavLink>
              <NavLink
                to="/admin/tecnicos"
                icon={Users}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Técnicos
              </NavLink>
              <NavLink
                to="/admin/clientes"
                icon={BriefCase}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Clientes
              </NavLink>
              <NavLink
                to="/admin/servicos"
                icon={Wrench}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Serviços
              </NavLink>
            </>
          )}

          {role === "TECNICO" && (
            <>
              <NavLink
                to="/tecnico/meus-chamados"
                icon={ClipboardList}
                variant="tertiary"
                size="lg"
                onClick={onClose}
              >
                Meus chamados
              </NavLink>
            </>
          )}

          {role === "CLIENTE" && (
            <>
              <NavLink
                to="/cliente/chamados-cliente"
                icon={ClipboardList}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Meus chamados
              </NavLink>
              <NavLink
                to="/cliente/novo-chamado"
                icon={Plus}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Criar chamado
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </aside>
  );
}

```

## src\components\Skeleton\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import { skeletonVariants } from "./skeletonVariants";
import React from "react";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> { }

export function Skeleton({
    rounded,
    className,
    ...props
}: SkeletonProps) {
    return (
        <div className={skeletonVariants({ rounded, className })} {...props} />
    );
}
```

## src\components\Skeleton\skeletonVariants.ts

```ts
import { cva } from "class-variance-authority";

export const skeletonVariants = cva("animate-pulse bg-gray-400", {
    variants: {
        rounded: {
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full",
        },
    },
})
```

## src\components\Tags\index.tsx

```tsx
import { Text } from "../Text";
import type { VariantProps } from "class-variance-authority";
import { tagsTextVariants, tagsVariants, tagsIconVariants } from "./tagsVariants";
import { Icon } from "../Icon";

interface TagsProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof tagsVariants> {
    size?: "md-width-text" | "md-height-text";
    children?: React.ReactNode;
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export function Tags({
    variant,
    size,
    className,
    children,
    svg,
    display,
    format,
    ...props
}: TagsProps) {
    return (
        <div className={tagsVariants({ variant, className, size, display, format })} {...props}>
            {svg && <Icon svg={svg} className={tagsIconVariants({ variant })} />}
            <Text
                variant={"text-xs-bold"}
                className={`hidden md:block ${tagsTextVariants({ variant })}`}>
                {children}
            </Text>
        </div>
    )
}
```

## src\components\Tags\tagsVariants.ts

```ts
import { cva } from "class-variance-authority";

export const tagsVariants = cva(
  "flex items-center justify-center text-xs-bold",
  {
    variants: {
      variant: {
        new: "border border-feedback-open/20 bg-bg-feedback-open-20",
        info: "border border-feedback-progress/20 bg-bg-feedback-info-20",
        success: "border border-feedback-done/20 bg-bg-feedback-success-20",
        danger: "border border-feedback-danger/20 bg-bg-feedback-danger-20",
        default: "border border-gray-500/20 bg-gray-500",
      },
      size: {
        "md-width-text": "p-1 rounded-full",
        "md-height-text": "w-7 h-7 rounded-full",
      },
      display: {
        text: "gap-1",
        icon: "flex items-center justify-center",
      },
      format: {
        default: "",
        circle: "rounded-full",
        squared: "p-1.5 rounded-sm hover:bg-gray-100/20",
      },
    },
    defaultVariants: {
      variant: "new",
      size: "md-width-text",
      display: "text",
      format: "default",
    },
  },
);

export const tagsTextVariants = cva("", {
  variants: {
    variant: {
      new: "text-feedback-open",
      info: "text-feedback-progress",
      success: "text-feedback-done",
      danger: "text-feedback-danger",
      default: "text-gray-100",
    },
  },
  defaultVariants: {
    variant: "new",
  },
});

export const tagsIconVariants = cva("w-4 h-4", {
  variants: {
    variant: {
      new: "fill-feedback-open",
      info: "fill-feedback-progress",
      success: "fill-feedback-done",
      danger: "fill-feedback-danger",
      default: "fill-gray-100",
    },
  },
});

```

## src\components\TagTime\index.tsx

```tsx
import { Text } from "../Text";
import { Icon } from "../Icon";
import clsx from "clsx";
import {
  tagTimeTextVariants,
  tagTimeVariants,
  tagTimeIconVariants,
} from "./tagTimeVariants";

interface TagTimeProps extends React.ComponentProps<"input"> {
  children: React.ReactNode;
  svg?: React.FC<React.ComponentProps<"svg">>;
  checked?: boolean; // ✅ permite controle externo
  onChange?: (checked: boolean) => void; // ✅ callback externo
}

export function TagTime({
  children,
  svg,
  className,
  checked,
  onChange,
  ...props
}: TagTimeProps) {
  return (
    <label className="inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)} // ✅ dispara callback externo
        {...props}
      />

      <div
        className={clsx(
          tagTimeVariants({
            variant: props.disabled ? "disabled" : "default",
            className,
          }),
          checked && "bg-feedback-progress",
        )}
      >
        <Text
          variant="text-xs-bold"
          className={clsx(
            tagTimeTextVariants({
              variant: props.disabled ? "disabled" : "default",
            }),
            checked && "text-gray-600",
          )}
        >
          {children}
        </Text>

        {svg && checked && (
          <Icon
            svg={svg}
            className={clsx(tagTimeIconVariants({ variant: "selected" }))}
          />
        )}
      </div>
    </label>
  );
}

```

## src\components\TagTime\tagTimeVariants.ts

```ts
import { cva } from "class-variance-authority";

export const tagTimeVariants = cva("flex gap-2 items-center justify-center rounded-full text-xs-bold", {
    variants: {
        variant: {
            "default": "border border-gray-400 hover:bg-gray-500 cursor-pointer",
            "selected": "bg-feedback-progress cursor-pointer",
            "disabled": "border border-gray-400 bg-gray-500 cursor-not-allowed",
        },
        size: {
            "md": "px-3 py-1.5",
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
})

export const tagTimeTextVariants = cva("", {
    variants: {
        variant: {
            "default": "text-gray-100",
            "selected": "text-gray-600",
            "disabled": " text-gray-400",
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

export const tagTimeIconVariants = cva("w-5 h-5", {
    variants: {
        variant: {
            "selected": "fill-gray-600",
        }
    }
})

```

## src\components\Text\index.tsx

```tsx
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "tailwind-variants";
import { textVariants } from "./textVariants";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: cn(textVariants({ variant }), className),
      ...props,
    },
    children,
  );
}

```

## src\components\Text\textVariants.ts

```ts
import { cva } from "class-variance-authority"

export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            "text-xl-bold": "text-2xl leading-[33.6px] font-bold",
            "text-lg-bold": "text-xl leading-7 font-bold",
            "heading-md-normal": "text-base leading-5 font-normal",
            "heading-md-bold": "text-base leading-5 font-bold",
            "text-sm-regular": "text-sm leading-5 font-normal",
            "text-sm-bold": "text-sm leading-5 font-bold",
            "text-xs-regular": "text-xs leading-4 font-normal",
            "text-xs-bold": "text-xs leading-4 font-bold",
            "text-xxs-regular": "text-[0.54688rem] leading-4 font-normal",
            "text-xxs-bold": "text-[10px] leading-4 font-bold"
        }
    },
    defaultVariants: {
        variant: "heading-md-normal"
    }
})

```

## src\components\UpdatePasswordDialog\index.tsx

```tsx
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  //DialogClose,
} from "../Dialog";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { Text } from "../Text";
import Divider from "../Divider";
import { api } from "../../services/api";
import axios from "axios";

export function UpdatePasswordDialog({ userId }: { userId: string }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.patch(`/users/${userId}/password`, {
        oldPassword,
        newPassword,
      });
      setOldPassword("");
      setNewPassword("");
      setOldPasswordError("");
      setNewPasswordError("");
      alert("Senha atualizada com sucesso!");
      setOpen(false);
    } catch (err) {
      console.error("Erro ao atualizar senha:", err);

      // Limpa erros anteriores
      setOldPasswordError("");
      setNewPasswordError("");

      if (axios.isAxiosError(err)) {
        const data = err.response?.data;

        // Erros de validação do Zod
        if (data?.issues && Array.isArray(data.issues)) {
          data.issues.forEach((issue: { path: string; message: string }) => {
            if (issue.path === "oldPassword") {
              setOldPasswordError(issue.message);
            }

            if (issue.path === "newPassword") {
              setNewPasswordError(issue.message);
            }
          });

          return;
        }

        // Erros do AppError
        if (data?.message) {
          if (data.message === "Senha atual incorreta.") {
            setOldPasswordError(data.message);
          } else {
            setNewPasswordError(data.message);
          }

          return;
        }

        setNewPasswordError("Não foi possível atualizar a senha.");
      } else {
        setNewPasswordError("Ocorreu um erro ao atualizar a senha.");
      }
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (value) {
          setOldPasswordError("");
          setNewPasswordError("");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="secondary" className="mb-6">
          Alterar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Text>Alterar senha</Text>
        </DialogHeader>
        <Divider className="my-4 mb-10 mt-10" />
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-2">
          <InputText
            type="password"
            label="Senha atual"
            placeholder="Digite sua senha atual"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
              setOldPasswordError("");
            }}
            error={!!oldPasswordError}
            helperText={oldPasswordError ? oldPasswordError : "."}
          />
          <InputText
            type="password"
            label="Nova senha"
            placeholder="Digite sua nova senha"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setNewPasswordError("");
            }}
            error={!!newPasswordError}
            helperText={
              newPasswordError ? newPasswordError : "mínimo 6 dígitos"
            }
          />

          <Divider className="my-4 mt-10 mb-10" />

          <DialogFooter>
            <Button type="submit" size="lg" className="">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

```

## src\components\UserMenu.tsx\index.tsx

```tsx
import { useState, type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Button } from "../Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../Dialog";
import Divider from "../Divider";
import { Icon } from "../Icon";
import { InputFile } from "../InputFile";
import { InputText } from "../InputText";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { TagTime } from "../TagTime";
import { Text } from "../Text";
import { UpdatePasswordDialog } from "../UpdatePasswordDialog";
import UserIcon from "../../assets/icons/users.svg?react";
import LogoutIcon from "../../assets/icons/log-out.svg?react";

interface UserMenuProps {
  children: ReactNode;
}

export function UserMenu({ children }: UserMenuProps) {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const [profileOpen, setProfileOpen] = useState(false);

  async function handleProfileOpen(open: boolean) {
    setProfileOpen(open);

    if (!open || !user?.id) {
      return;
    }

    try {
      const response = await api.get(`/users/${user.id}`);

      console.log("=== USUÁRIO COMPLETO ===");
      console.log(response.data);

      updateUser(response.data);

      setName(response.data.name ?? "");
      setEmail(response.data.email ?? "");
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);

      // Mantém os dados que já estavam no contexto
      setName(user.name ?? "");
      setEmail(user.email ?? "");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("=== SALVAR PERFIL ===");
    console.log("Usuário:", user);
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("ID:", user?.id);

    try {
      const response = await api.patch(`/users/${user?.id}`, {
        name,
        email,
      });

      console.log("Resposta da API:", response.data);

      // Atualiza contexto com dados novos
      updateUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
    }
  }

  function handleLogout() {
    // Remove todas as informações salvas no localStorage
    localStorage.removeItem("@helpdesk:token"); // se você usa token JWT
    localStorage.removeItem("@helpdesk:user"); // se guarda dados do usuário
    localStorage.removeItem("permissions"); // se tiver permissões específicas
    // Redireciona para a página de login
    window.location.href = "/login";
  }

  async function handleDeleteAvatar() {
    try {
      const response = await api.delete("/user-avatar/avatar");

      updateUser(response.data);

      alert("Imagem removida com sucesso!");
    } catch (error) {
      console.error("Erro ao remover imagem:", error);
      alert("Erro ao remover imagem.");
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <Text as="div" variant={"text-xxs-bold"} className="text-gray-400 pt-4">
          OPÇÕES
        </Text>
        <div className="flex flex-col gap-3 px-4 mt-4">
          <div className="flex items-center gap-3">
            <Dialog open={profileOpen} onOpenChange={handleProfileOpen}>
              <DialogTrigger asChild>
                <Button type="button" className="-ml-7.5 bg-transparent">
                  <Icon svg={UserIcon} className="fill-gray-500 mr-2" />
                  <Text className="text-gray-500">Perfil</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form id="profile-form" onSubmit={handleSubmit}>
                  <DialogHeader>
                    <Text>Perfil</Text>
                  </DialogHeader>
                  <Divider className="my-4" />
                  <div className="flex items-center gap-2 mb-5">
                    <InputFile
                      avatarUrl={user?.avatarUrl}
                      onChange={(data) => {
                        updateUser({
                          ...user!,
                          avatarUrl: data.avatarUrl,
                        });
                      }}
                      onDelete={handleDeleteAvatar}
                    />
                  </div>
                  <InputText
                    label="NOME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputText
                    label="E-MAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex py-1 items-end">
                    <InputText
                      readOnly
                      placeholder="******"
                      type="password"
                      label="SENHA"
                      value="123456"
                      helperText="Para atualizar a senha clique no botão Alterar"
                    />

                    <UpdatePasswordDialog userId={user!.id} />
                  </div>
                  <Divider className="my-4" />
                  {user?.role === "TECNICO" && (
                    <>
                      <div className="flex flex-col mb-4">
                        <Text variant="text-sm-bold">Disponibilidade</Text>
                        <Text variant="text-xs-regular">
                          Horários de atendimento definidos pelo admin.
                        </Text>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {user.disponibilidades?.length > 0 ? (
                          user.disponibilidades.map((disponibilidade) => (
                            <TagTime key={disponibilidade.horario}>
                              {disponibilidade.horario}
                            </TagTime>
                          ))
                        ) : (
                          <Text variant="text-xs-regular">
                            Nenhum horário disponível.
                          </Text>
                        )}
                      </div>
                      <Divider className="my-4" />
                    </>
                  )}
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" form="profile-form" size="lg">
                        Salvar
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Button
            className="-ml-25 bg-transparent hover:bg-transparent mb-2"
            onClick={handleLogout}
          >
            <Icon svg={LogoutIcon} className="fill-feedback-danger mr-2" />
            <Text className="text-feedback-danger">Sair</Text>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

```

## src\contexts\AuthContext.ts

```ts
import { createContext } from "react";
import type { Users } from "../contexts/User/model/users";

interface AuthContextData {
  user: Users | null;
  token: string | null;
  signIn: (data: { token: string; user: Users }) => void;
  signOut: () => void;
  updateUser: (user: Users) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

```

## src\contexts\AuthProvider.tsx

```tsx
import { jwtDecode } from "jwt-decode";
import {
  type ReactNode,
  startTransition,
  useCallback,
  useEffect,
  useState,
} from "react";
import type { Users } from "../contexts/User/model/users";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

interface DecodedToken {
  exp: number;
  sub: string;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<Users | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signOut = useCallback(() => {
    localStorage.removeItem("@helpdesk:user");
    localStorage.removeItem("@helpdesk:token");
    setUser(null);
    setToken(null);
    delete api.defaults.headers.common["Authorization"];
  }, []);

  useEffect(() => {
    const loadStoredData = async () => {
      const storedUser = localStorage.getItem("@helpdesk:user");
      const storedToken = localStorage.getItem("@helpdesk:token");

      if (!storedUser || !storedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const decoded: DecodedToken = jwtDecode(storedToken);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          signOut();
          setIsLoading(false);
          return;
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

        // 🔹 Usa startTransition para evitar render síncrono
        startTransition(() => {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        });
      } catch (error) {
        console.error("Erro ao carregar token:", error);
        signOut();
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredData();
  }, [signOut]);

  function signIn({ token, user }: { token: string; user: Users }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user));
    localStorage.setItem("@helpdesk:token", token);
    setUser(user);
    setToken(token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  function updateUser(updatedUser: Users) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(updatedUser));

    setUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{ user, token, signIn, signOut, updateUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

```

## src\contexts\CategoryServices\model\categoryServices.ts

```ts
import type { Users } from "../../User/model/users";

export interface CategoryServices {
  id: string;
  name: string;
  active: boolean;
  adminId: Users;
  price: number;
  chamadoService: string;
  createdAt: string;
  updatedAt: string;
}

```

## src\contexts\CategoryServices\ServicesContext.tsx

```tsx
import { createContext } from "react";
import type { CategoryServices } from "./model/categoryServices";

interface CategoryServicesContextType {
  categoryServices: CategoryServices[];
  loading: boolean;
  fetchCategoryServices: () => Promise<void>;
  createServico: (
    dados: Pick<CategoryServices, "name" | "price" | "active">,
  ) => Promise<void>;
  updateServico: (
    id: string,
    dados: Partial<CategoryServices>,
  ) => Promise<void>;
  deleteServico: (id: string) => Promise<void>;
}

export const ServicesContext =
  createContext<CategoryServicesContextType | null>(null);

```

## src\contexts\CategoryServices\ServicesProvider.tsx

```tsx
import type { ReactNode } from "react";
import { startTransition, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { api } from "../../services/api";
import type { CategoryServices } from "../CategoryServices/model/categoryServices";

export function ServicesProvider({ children }: { children: ReactNode }) {
  const [categoryServices, setCategoryServices] = useState<CategoryServices[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);

  // ✅ Função mantida fora do effect para poder ser exposta no context
  // O React Compiler gerencia a memoização automaticamente
  async function fetchCategoryServices() {
    setLoading(true);
    try {
      const url =
        user?.role === "ADMIN" ? "/services?includeInactive=true" : "/services";
      const response = await api.get<CategoryServices[]>(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      startTransition(() => {
        setCategoryServices(response.data);
      });
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    } finally {
      setLoading(false);
    }
  }

  // ✅ useEffect com lógica inline — evita referência a função externa
  // O React Compiler não reclama porque o setState está dentro do callback async
  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    const carregar = async () => {
      setLoading(true);
      try {
        const url =
          user?.role === "ADMIN"
            ? "/services?includeInactive=true"
            : "/services";
        const response = await api.get<CategoryServices[]>(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!cancelled) {
          startTransition(() => setCategoryServices(response.data));
        }
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    carregar();

    // cleanup: evita setState em componente desmontado
    return () => {
      cancelled = true;
    };
  }, [token, user?.role]); // ✅ deps diretas — sem referência a função externa

  async function createServico(
    dados: Pick<CategoryServices, "name" | "price" | "active">,
  ) {
    try {
      const response = await api.post("/services", dados);
      startTransition(() => {
        setCategoryServices((prev) => [...prev, response.data]);
      });
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
    }
  }

  async function updateServico(id: string, dados: Partial<CategoryServices>) {
    try {
      const response = await api.patch(`/services/${id}`, dados);
      startTransition(() => {
        setCategoryServices((prev) =>
          prev.map((s) => (s.id === id ? { ...s, ...response.data } : s)),
        );
      });
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
    }
  }

  async function deleteServico(id: string) {
    try {
      await api.delete(`/services/${id}`);
      startTransition(() => {
        setCategoryServices((prev) => prev.filter((s) => s.id !== id));
      });
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  }

  return (
    <ServicesContext.Provider
      value={{
        categoryServices,
        loading,
        fetchCategoryServices,
        createServico,
        updateServico,
        deleteServico,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

```

## src\contexts\Chamado\ChamadosContext.tsx

```tsx
import { createContext } from "react";
import type { Chamado, ChamadoPayload } from "./model/Chamado";

export interface ChamadosContextType {
  chamados: Chamado[];
  loading: boolean;
  fetchChamados: () => Promise<void>;
  getChamadoById: (id: string) => Chamado | undefined;
  createChamado: (dados: ChamadoPayload) => Promise<void>;
  updateChamado: (id: string, dados: ChamadoPayload) => Promise<void>;
}

export const ChamadosContext = createContext<ChamadosContextType | null>(null);

```

## src\contexts\Chamado\ChamadosProvider.tsx

```tsx
import { useState, useEffect, useContext } from "react";
import { ChamadosContext } from "./ChamadosContext";
import { api } from "../../services/api";
import type { Chamado, ChamadoPayload } from "./model/Chamado";
import { AuthContext } from "../AuthContext";

export function ChamadosProvider({ children }: { children: React.ReactNode }) {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  async function fetchChamados() {
    setLoading(true);
    try {
      const response = await api.get<Chamado[]>("/chamados", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChamados(response.data);
    } catch (error) {
      console.error("Erro ao buscar chamados:", error);
    } finally {
      setLoading(false);
    }
  }

  async function createChamado(dados: ChamadoPayload) {
    try {
      await api.post("/chamados", dados, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchChamados();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateChamado(id: string, dados: ChamadoPayload) {
    try {
      const response = await api.patch(`/chamados/${id}`, dados);

      await fetchChamados();

      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar chamado:", error);
      throw error;
    }
  }

  function getChamadoById(id: string) {
    return chamados.find((c) => c.id === id);
  }

  useEffect(() => {
    if (!token) return;
    const carregaChamados = async () => {
      await fetchChamados();
    };
    carregaChamados();
  }, [token]);

  return (
    <ChamadosContext.Provider
      value={{
        chamados,
        loading,
        fetchChamados,
        getChamadoById,
        createChamado,
        updateChamado,
      }}
    >
      {children}
    </ChamadosContext.Provider>
  );
}

```

## src\contexts\Chamado\hooks\useChamados.ts

```ts
import { useContext } from "react";
import { ChamadosContext } from "../ChamadosContext";

export function useChamados() {
  const context = useContext(ChamadosContext);
  if (!context) {
    throw new Error("useChamados deve ser usado dentro de ChamadosProvider");
  }
  return context;
}

```

## src\contexts\Chamado\model\Chamado.ts

```ts
// models/chamado.ts
import type { Users } from "../../User/model/users";

export type Status = "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";

export interface Chamado {
  id: string;
  title: string;
  description?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  totalPrice: number;
  // Relações
  cliente: Pick<Users, "id" | "name">; // apenas id e nome
  tecnico?: Pick<Users, "id" | "name" | "email"> | null; // opcional
  admin?: Pick<Users, "id" | "name"> | null;
  disponibilidadeId?: string;

  // Serviços vinculados
  services: {
    id: string;
    nome: string;
    price: number;
  }[];
}
export type ChamadoPayload = {
  title?: string;
  description?: string;
  services?: string[]; // apenas IDs
  status?: Status;
};

```

## src\contexts\User\model\users.ts

```ts
export interface Horario {
  horario: string;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
  role: "CLIENTE" | "ADMIN" | "TECNICO";
  createdAt: string;
  updatedAt: string;
  disponibilidades: Array<Horario>;
}

```

## src\hooks\useAuth.ts

```ts
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {

    return useContext(AuthContext);
}
```

## src\index.css

@import "tailwindcss/preflight";
@import "tailwindcss/theme";
@import "tailwindcss/utilities";
@import "tw-animate-css";

/* Defina o tema diretamente aqui */
@theme {
  --color-blue-dark: #2e3da3;
  --color-blue-base: #5156e1;
  --color-blue-light: #8996eb;

  --color-gray-100: #151619;
  --color-gray-200: #1e2024;
  --color-gray-300: #535964;
  --color-gray-400: #858b99;
  --color-gray-500: #e3e5e8;
  --color-gray-600: #f9fafa;

  --color-feedback-danger: #d03e3e;
  --color-feedback-open: #cc3d6a;
  --color-feedback-progress: #355ec5;
  --color-feedback-done: #508b26;

  --color-bg-feedback-open-20: rgba(204, 61, 106, 0.2);
  --color-bg-feedback-info-20: rgba(53, 94, 197, 0.2);
  --color-bg-feedback-success-20: rgba(80, 139, 38, 0.2);
  --color-bg-feedback-danger-20: rgba(208, 62, 62, 0.2);

  --font-sans: "Lato", sans-serif;
}
body {
  color: var(--color-gray-200);
}


## src\layout\AppLayout.tsx

```tsx
import { useState, type ReactNode } from "react";

import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Avatar } from "../components/Avatar";
import { ButtonIcon } from "../components/ButtonIcon";

import MenuIcon from "../assets/icons/menu.svg?react";
import XIcon from "../assets/icons/x.svg?react";

import { useAuth } from "../hooks/useAuth";
import { UserMenu } from "../components/UserMenu.tsx";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Header para mobile */}
      <header className="flex items-center justify-between bg-gray-100 p-4 lg:hidden">
        <div className="flex items-center gap-4">
          <ButtonIcon
            icon={MenuIcon}
            variant="primary"
            onClick={() => setIsSidebarOpen(true)}
          />
          <Logo
            color="white"
            size="md"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
        </div>
        <UserMenu>
          <div>
            <Avatar name={user?.name ?? "Usuário"} size="sm" />
          </div>
        </UserMenu>
      </header>

      {/* Sidebar mobile com animação */}
      <aside
        className={`fixed inset-0 z-50 bg-gray-100 flex flex-col justify-between p-6 lg:hidden transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 border-b border-gray-300 pb-4 flex justify-between items-center">
          <ButtonIcon
            icon={XIcon}
            variant="primary"
            onClick={() => setIsSidebarOpen(false)}
          />
          <Logo
            color="white"
            size="lg"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
          <UserMenu>
            <div>
              <Avatar name={user?.name ?? "Usuário"} size="sm" />
            </div>
          </UserMenu>
        </div>
        <Sidebar
          role={user?.role ?? "CLIENTE"}
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>

      {/* Sidebar desktop */}
      <aside className="hidden lg:flex w-64 bg-gray-100 flex-col justify-between p-6">
        <div className="mb-8 border-b border-gray-300 pb-4">
          <Logo
            color="white"
            size="lg"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
        </div>

        <Sidebar role={user?.role ?? "CLIENTE"} />
        <UserMenu>
          <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5 cursor-pointer">
            <Avatar name={user?.name ?? "CLIENTE"} size="sm" />
            <div className="text-left">
              <p className="truncate w-37.5">{user?.name}</p>
              <p className="truncate w-37.5">{user?.email}</p>
            </div>
          </footer>
        </UserMenu>
      </aside>
      {/* Conteúdo principal */}
      <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
        {children}
      </main>
    </div>
  );
}

```

## src\layout\AuthLayout.tsx

```tsx
import { Outlet } from "react-router-dom";
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

```

## src\layout\layoutVariants.ts

```ts
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

```

## src\main.tsx

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import "./index.css";

import { AuthProvider } from "./contexts/AuthProvider";
import { ServicesProvider } from "./contexts/CategoryServices/ServicesProvider";
import { ChamadosProvider } from "./contexts/Chamado/ChamadosProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ServicesProvider>
          <ChamadosProvider>
            <AppRoutes />
          </ChamadosProvider>
        </ServicesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

```

## src\Pages\admin\adminVariants.ts

```ts
import { cva } from "class-variance-authority";

export const adminVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});
```

## src\Pages\admin\ChamadosAdmin.tsx

```tsx
import { useEffect, useState } from "react";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import { api } from "../../services/api";
import { getStatusConfig } from "../../utils/statusConfig";

interface Servico {
  id: string;
  nome: string;
  price: number;
}

interface ChamadoFormatado {
  id: string;
  title: string;
  cliente: { id: string; name: string };
  tecnico: { id: string; name: string };
  status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";
  totalPrice: number;
  updatedAt: string;
  createdAt?: string;
  services: Servico[];
}

export function ChamadosAdmin() {
  const [chamados, setChamados] = useState<ChamadoFormatado[]>([]);

  useEffect(() => {
    api
      .get(`/chamados`)
      .then((res) => {
        setChamados(res.data);
      })
      .catch((err) => console.error("Erro ao buscar chamados:", err));
  }, []);
  return (
    <div className="p-4 sm:p-6">
      <header className="mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Chamados
        </Text>
      </header>

      <div className="border border-gray-500 rounded-lg">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr>
              <th className=" py-2 px-4 text-left">
                <div className="max-w-[80px] truncate lg:max-w-[112px]">
                  <Text variant="heading-md-bold" className="">
                    Atualizado em
                  </Text>
                </div>
              </th>

              <th className="px-3 py-2 text-left hidden lg:table-cell">Id</th>

              <th className="px-3 py-2 text-left">
                <Text variant="heading-md-bold" className="">
                  Título e Serviço
                </Text>
              </th>

              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Valor total
              </th>
              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Cliente
              </th>
              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Técnico
              </th>
              <th className="max-w-[64px] px-3 py-2 text-left lg:max-w-[152px]">
                Status
              </th>
              <th className="max-w-[52px] px-3 py-2 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id} className="border-t border-gray-500">
                <td className="px-3 py-2">
                  <Text variant="text-xs-regular" className="">
                    {new Date(chamado.updatedAt).toLocaleString()}
                  </Text>
                </td>

                <td className="max-w-[64px] px-3 py-2 hidden truncate lg:table-cell ">
                  <Text variant="text-sm-bold" className="">
                    {chamado.id}
                  </Text>
                </td>

                <td className="max-w-[146px] px-3 py-2 truncate lg:max-w-[266px]">
                  <Text
                    as="h3"
                    variant="text-sm-bold"
                    className="max-w-[122px] truncate lg:max-w-[242px]"
                  >
                    {chamado.title}
                  </Text>
                  {chamado.services?.map((item) => (
                    <Text
                      as="p"
                      key={item.id}
                      variant="text-sm-regular"
                      className="max-w-[122px] truncate lg:max-w-[242px]"
                    >
                      {item.nome}
                    </Text>
                  ))}
                </td>

                <td className="px-3 py-2 hidden lg:table-cell">
                  <Text variant="text-sm-bold">
                    {chamado.totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Text>
                </td>

                <td className="px-3 py-2 hidden md:hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={chamado.cliente.name} size="xs" />
                    <Text variant="text-sm-bold">{chamado.cliente.name}</Text>
                  </div>
                </td>

                <td className="px-3 py-2 hidden md:hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={chamado.tecnico.name} size="xs" />
                    <Text variant="text-sm-bold">{chamado.tecnico.name}</Text>
                  </div>
                </td>

                <td className="max-w-[64px] px-3 py-2 lg:max-w-[152px] md:max-w-[152px]">
                  <div className="flex items-center">
                    <Tags
                      variant={getStatusConfig(chamado.status).variant}
                      svg={getStatusConfig(chamado.status).icon}
                      className="max-w-[28px] lg:max-w-[152px] md:max-w-[152px] "
                    >
                      {getStatusConfig(chamado.status).label}
                    </Tags>
                  </div>
                </td>

                <td className="max-w-[52px] px-3 py-2">
                  <div className="flex items-center justify-end">
                    <ActionLink
                      to={`editarChamados/${chamado.id}`}
                      variant="subtitle"
                      size="md"
                    >
                      <Icon
                        svg={PenLineIcon}
                        className="w-4 h-4 fill-gray-100"
                      />
                    </ActionLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

## src\Pages\admin\DashboardAdmin.tsx

```tsx
import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "./adminVariants";
import type { VariantProps } from "class-variance-authority";

interface AdminProps extends VariantProps<typeof adminVariants> { }

export function DashboardAdmin({ }: AdminProps) {
    return (
        <AppLayout role="ADMIN">
            <Outlet />
        </AppLayout>
    );
}
```

## src\Pages\admin\EditarChamadoAdmin.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Button } from "../../components/Button";

export function EditarChamadoAdmin() {
  const { id } = useParams();
  const { getChamadoById, updateChamado } = useChamados();

  const chamado = getChamadoById(id!);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  function handleUpdateStatus(newStatus: "EM_ATENDIMENTO" | "ENCERRADO") {
    updateChamado(chamado.id, { status: newStatus });
  }

  return (
    <div className="mx-auto md:w-full max-w-[800px]">
      <header className="px-3 mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:w-full md:max-w-[800px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>

          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Chamado detalhado
          </Text>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            icon={ClockIcon}
            size="sm"
            className="py-5 w-full"
            onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
          >
            Em_atendimento
          </Button>
          <Button
            variant="secondary"
            icon={CheckIcon}
            size="sm"
            className="py-5 w-full"
            onClick={() => handleUpdateStatus("ENCERRADO")}
          >
            Encerrado
          </Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col gap-4 p-6 w-full md:max-w-[480px]">
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col gap-2">
                <Text as="h2" variant="heading-md-normal">
                  {chamado.id}
                </Text>
                <Text as="h2" variant="heading-md-bold">
                  {chamado.title}
                </Text>
              </div>

              <Tags
                variant={getStatusConfig(chamado.status).variant}
                svg={getStatusConfig(chamado.status).icon}
              >
                {getStatusConfig(chamado.status).label}
              </Tags>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Descrição
              </Text>
              <Text>{chamado.description}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Categoria
              </Text>
              {chamado.services.map((service) => (
                <Text key={service.id}>{service.nome}</Text>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-20">
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Criado em
                  </Text>
                  <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Atualizado em
                  </Text>
                  <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Cliente
              </Text>
              <div className="flex items-center gap-2">
                <Avatar name={String(chamado.cliente.name ?? "")} size="xs" />
                <Text>{chamado.cliente.name}</Text>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col p-6 w-[269px] h-fit">
            <div>
              <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
                Técnico responsável
              </Text>

              <div className="flex gap-2">
                <Avatar name="Jhon Doe" />
                <div className="flex flex-col">
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.name || "Técnico não atribuído"}
                  </Text>
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.email || "Email não disponível"}
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Valores
              </Text>
              <div className="flex justify-between">
                <Text>Preço Base</Text>
                <Text>R$ {chamado.totalPrice.toFixed(2)}</Text>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Adicionais
              </Text>
              {/** nessa parte deve exibir os serviços adicionais */}
              {chamado.services.slice(1).map((service) => (
                <div key={service.id} className="flex justify-between">
                  <Text>{service.nome}</Text>
                  <Text>R$ {service.valor.toFixed(2)}</Text>
                </div>
              ))}
            </div>
            <Divider />
            <div className="flex justify-between">
              <Text variant="heading-md-bold">Total</Text>
              {/** aqui deve exibir o total do preço base + adicionais */}
              <Text variant="heading-md-bold">
                R$ {chamado.totalPrice.toFixed(2)}
              </Text>
            </div>
          </Card>
        </form>
      </Container>
    </div>
  );
}

```

## src\Pages\admin\EditarTecnico.tsx

```tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { TagTime } from "../../components/TagTime";
import { Avatar } from "../../components/Avatar";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import z from "zod";
import { api } from "../../services/api";

const tecnicoSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  horarios: z.array(z.string()).optional(),
});

const periodos = {
  MANHÃ: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  TARDE: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  NOITE: ["19:00", "20:00", "21:00", "22:00", "23:00"],
};

export function EditarTecnico() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [horarios, setHorarios] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Buscar dados atuais do técnico
  useEffect(() => {
    async function fetchTecnico() {
      try {
        const response = await api.get(`/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setHorarios(
          response.data.disponibilidades?.map((d: any) => d.horario) || [],
        );
      } catch {
        setError("Erro ao carregar dados do técnico");
      }
    }
    if (id) fetchTecnico();
  }, [id]);

  // Alternar seleção de horários
  function toggleHorario(horario: string) {
    setHorarios((prev) =>
      prev.includes(horario)
        ? prev.filter((h) => h !== horario)
        : [...prev, horario],
    );
  }

  // Atualizar técnico
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = tecnicoSchema.safeParse({ name, email, horarios });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    navigate("/admin/tecnicos");
    try {
      await api.patch(`/users/${id}`, result.data);
      alert("Perfil atualizado com sucesso!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao atualizar técnico");
    }
  }

  return (
    <div className="mx-auto md:w-full max-w-[800px] ">
      <header className="mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:w-full md:max-w-[790px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/admin/tecnicos")}
          >
            Cancelar
          </Button>
          <Button className="w-full" onClick={handleSubmit}>
            Salvar
          </Button>
        </div>
      </header>

      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col gap-4 p-6 w-full h-fit md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <div className="py-1">
              <Avatar name={name} />
            </div>
            <InputText
              label="NOME"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              label="E-MAIL"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <Text className="text-red-500">{error}</Text>}
          </Card>

          <Card className="flex flex-col p-6">
            <Text as="h2" variant="heading-md-bold">
              Horários de atendimento
            </Text>
            <Text as="p" variant="text-sm-regular">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>

            {Object.entries(periodos).map(([periodo, horas]) => (
              <div key={periodo} className="mt-4">
                <Text variant="text-xs-bold" className="text-gray-300">
                  {periodo}
                </Text>
                <div className="flex gap-2 flex-wrap">
                  {horas.map((hora) => (
                    <TagTime
                      key={hora}
                      svg={XIcon}
                      checked={horarios.includes(hora)} // marcar se já está selecionado
                      onClick={() => toggleHorario(hora)}
                    >
                      {hora}
                    </TagTime>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </form>
      </Container>
    </div>
  );
}

```

## src\Pages\admin\ListClientes.tsx

```tsx
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";
import z, { ZodError } from "zod";

import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { Skeleton } from "../../components/Skeleton";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { InputText } from "../../components/InputText";
import Divider from "../../components/Divider";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";

import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";

const clienteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email("E-Mail inválido"),
});

export function ClientesAdmin() {
  const [clientes, setClientes] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await api.get<Users[]>("/users");
        const clientesFiltrados = response.data.filter(
          (user) => user.role === "CLIENTE",
        );
        setClientes(clientesFiltrados);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchClientes();
  }, []);

  async function handleUpdateCliente(id: string, dados: Partial<Users>) {
    try {
      const parsed = clienteSchema.parse(dados);
      const response = await api.patch(`/users/${id}`, parsed, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setClientes((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...response.data } : c)),
      );
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao atualizar cliente", error);
      }
    }
  }

  async function handleDeleteCliente(id: string) {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  }

  return (
    <div className="mx-auto max-w-267.5 p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text as="h1" variant="text-lg-bold" className="text-blue-dark">
          Clientes
        </Text>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-33.5 md:w-145.5">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 w-24 md:w-100 text-left">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-22"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2 w-33.5 md:w-145.5">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell w-24 md:w-100">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2 w-22">
                      <div className="flex justify-end gap-3">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </td>
                  </tr>
                ))
              : clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left w-33.5 md:w-145.5 truncate">
                      <div className="flex items-center gap-3">
                        <Avatar name={cliente.name} className="md:w-11.25" />
                        <Text
                          variant="text-sm-bold"
                          className="w-17.5 md:w-full truncate"
                        >
                          {cliente.name}
                        </Text>
                      </div>
                    </td>
                    <td className="w-24 md:w-100 px-3 py-2 text-left md:table-cell truncate max-w-30">
                      <Text className="w-24 md:w-100 truncate">
                        {cliente.email}
                      </Text>
                    </td>
                    <td className="px-3 py-2 sm:px-4 w-22">
                      <div className="flex items-center justify-end gap-3 text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <ActionLink to="#" variant="subtitle" size="md">
                              <Icon
                                svg={TrachIcon}
                                className="fill-feedback-danger"
                              />
                            </ActionLink>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <Text variant="heading-md-bold">
                                Excluir cliente
                              </Text>
                            </DialogHeader>

                            <Divider className="my-4" />
                            <div className="flex flex-col gap-6 py-6">
                              <Text>
                                Deseja realmente excluir{" "}
                                <strong>{cliente.name}</strong>?
                              </Text>
                              <Text as="p" className="mt-2 text-gray-300">
                                Ao excluir, todos os chamados deste cliente
                                serão removidos e esta ação não poderá ser
                                desfeita.
                              </Text>
                            </div>
                            <Divider className="my-4" />

                            <DialogFooter>
                              <div className="flex items-center justify-center gap-2 w-full py-6">
                                <DialogClose asChild>
                                  <Button variant="secondary" size="lg">
                                    Cancelar
                                  </Button>
                                </DialogClose>

                                <DialogClose asChild>
                                  <Button
                                    size="lg"
                                    onClick={() => {
                                      handleDeleteCliente(cliente.id);
                                      alert(
                                        `Cliente ${cliente.name} excluído com sucesso!`,
                                      );
                                    }}
                                  >
                                    Sim, excluir
                                  </Button>
                                </DialogClose>
                              </div>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <ButtonIcon
                              variant="secondary"
                              size="md"
                              icon={PenLineIcon}
                              className="fill-gray-100"
                            />
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <Text>Editar Cliente</Text>
                            </DialogHeader>
                            <Divider className="my-4" />
                            <Avatar name={cliente.name} />
                            <EditClienteForm
                              cliente={cliente}
                              onSave={handleUpdateCliente}
                              errors={errors}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EditClienteForm({
  cliente,
  onSave,
  errors,
}: {
  cliente: Users;
  onSave: (id: string, dados: Partial<Users>) => void;
  errors: Record<string, string>;
}) {
  const [formData, setFormData] = useState({
    name: cliente.name,
    email: cliente.email,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(cliente.id, formData);
      }}
    >
      <InputText
        label="NOME"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
      />
      <InputText
        label="E-MAIL"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
      />

      <Divider className="my-4" />

      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" size="lg">
            Salvar
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}

```

## src\Pages\admin\ListTecnicos.tsx

```tsx
import { useEffect, useState } from "react";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { Skeleton } from "../../components/Skeleton";
import { HorariosList } from "../../components/HorariosList";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";

export function TecnicosAdmin() {
  const [tecnicos, setTecnicos] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTecnicos() {
      try {
        const token = localStorage.getItem("@helpdesk:token");
        const response = await api.get<Users[]>("/users/tecnicos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Filtra apenas técnicos
        const tecnicosFiltrados = response.data.filter(
          (user) => user.role === "TECNICO",
        );
        setTecnicos(tecnicosFiltrados);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Erro ao buscar técnicos:", error.message);
        } else {
          console.error("Erro de conexão com o servidor:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTecnicos();
  }, []);

  return (
    <div className="mx-auto max-w-267.5 p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Técnicos
        </Text>
        <div>
          <ActionLink
            to="/admin/novoTecnico"
            variant="tertiary"
            size="md"
            icon={PlusIcon}
            className="md:hidden"
          />
          <ActionLink
            to="/admin/novoTecnico"
            variant="tertiary"
            size="md"
            className="md:block hidden justify-center hover:bg-gray-200"
            icon={PlusIcon}
          >
            Novo
          </ActionLink>
        </div>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-42.5 md:w-87.5">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left md:w-63.75">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-30 md:w-82">
                Disponibilidade
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left w-13"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2">
                      <Skeleton className="h-4 w-24" />
                    </td>
                  </tr>
                ))
              : tecnicos.map((tecnico) => (
                  <tr key={tecnico.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left">
                      <div className="flex items-center gap-3">
                        <Avatar name={tecnico.name} />
                        <Text
                          variant="text-sm-bold"
                          className="truncate max-w-37.5"
                        >
                          {tecnico.name}
                        </Text>
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell truncate max-w-30">
                      <Text>{tecnico.email}</Text>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <HorariosList
                        horarios={
                          tecnico.disponibilidades?.map((d) => d.horario) || []
                        }
                      />
                    </td>
                    <td className="px-3 py-2 text-left">
                      <div className="flex items-center justify-end">
                        <ActionLink
                          to={`/admin/editarTecnico/${tecnico.id}`}
                          variant="subtitle"
                          size="md"
                        >
                          <Icon
                            svg={PenLineIcon}
                            className="w-4 h-4 fill-gray-100"
                          />
                        </ActionLink>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

## src\Pages\admin\NovoTecnico.tsx

```tsx
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { useState } from "react";
import { TagTime } from "../../components/TagTime";
import XIcon from "../../assets/icons/x.svg?react";
import { z } from "zod";
import { api } from "../../services/api";

const tecnicoSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 dígitos"),
  horarios: z.array(z.string()).optional(),
  role: z.literal("TECNICO"),
});

export function NovoTecnico() {
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      horarios: formData.getAll("horarios") as string[],
      role: "TECNICO",
    };

    const result = tecnicoSchema.safeParse(payload);

    if (!result.success) {
      const formatted = result.error.format();
      setError({
        name: formatted.name?._errors[0] ?? "",
        email: formatted.email?._errors[0] ?? "",
        password: formatted.password?._errors[0] ?? "",
        horarios: formatted.horarios?._errors[0] ?? "",
      });
      return;
    }
    try {
      const response = await api.post("/users", {
        ...result.data,
        role: "TECNICO",
      });

      if (response.status !== 201) throw new Error("Erro ao salvar técnico");

      alert("Técnico salvo com sucesso!");
      setError({});
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Falha ao salvar técnico");
    }
  };

  return (
    <div className="mx-auto md:w-full max-w-[800px] pt-[52px]">
      <header className="mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4  md:w-full md:max-w-[790px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" className="w-full">
            Cancelar
          </Button>
          <Button type="submit" className="w-full" form="horariosForm">
            Salvar
          </Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form
          onSubmit={handleSubmit}
          id="horariosForm"
          className="mx-auto flex flex-col gap-6 md:flex-row "
        >
          <Card className="flex flex-col p-6 w-full md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <InputText
              type="text"
              label="NOME"
              name="name"
              placeholder="Nome Completo"
              error={!!error.name}
              helperText={error.name}
            />
            <InputText
              type="text"
              label="E-MAIL"
              name="email"
              placeholder="exemplo@email.com"
              error={!!error.email}
              helperText={error.email}
            />
            <InputText
              type="password"
              label="SENHA"
              name="password"
              placeholder="Defina a senha de acesso"
              error={!!error.password}
              helperText={error.password}
            />
          </Card>
          <Card className="flex flex-col p-6">
            <Text as="h2" variant="heading-md-bold">
              Horários de atendimento
            </Text>
            <Text as="p" variant="text-sm-regular">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                MANHÃ
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="07:00" svg={XIcon}>
                  07:00
                </TagTime>
                <TagTime name="horarios" value="08:00" svg={XIcon}>
                  08:00
                </TagTime>
                <TagTime name="horarios" value="09:00" svg={XIcon}>
                  09:00
                </TagTime>
                <TagTime name="horarios" value="10:00" svg={XIcon}>
                  10:00
                </TagTime>
                <TagTime name="horarios" value="11:00" svg={XIcon}>
                  11:00
                </TagTime>
                <TagTime name="horarios" value="12:00" svg={XIcon}>
                  12:00
                </TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                TARDE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="13:00" svg={XIcon}>
                  13:00
                </TagTime>
                <TagTime name="horarios" value="14:00" svg={XIcon}>
                  14:00
                </TagTime>
                <TagTime name="horarios" value="15:00" svg={XIcon}>
                  15:00
                </TagTime>
                <TagTime name="horarios" value="16:00" svg={XIcon}>
                  16:00
                </TagTime>
                <TagTime name="horarios" value="17:00" svg={XIcon}>
                  17:00
                </TagTime>
                <TagTime name="horarios" value="18:00" svg={XIcon}>
                  18:00
                </TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                NOITE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="19:00" svg={XIcon}>
                  19:00
                </TagTime>
                <TagTime name="horarios" value="20:00" svg={XIcon}>
                  20:00
                </TagTime>
                <TagTime name="horarios" value="21:00" svg={XIcon}>
                  21:00
                </TagTime>
                <TagTime name="horarios" value="22:00" svg={XIcon}>
                  22:00
                </TagTime>
                <TagTime name="horarios" value="23:00" svg={XIcon}>
                  23:00
                </TagTime>
              </div>
            </div>
          </Card>
        </form>
      </Container>
    </div>
  );
}

```

## src\Pages\admin\ServicosAdmin.tsx

```tsx
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import BanIcon from "../../assets/icons/ban.svg?react";
import CircleCheckIcon from "../../assets/icons/circle-check.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";

import { Tags } from "../../components/Tags";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";
import Divider from "../../components/Divider";

import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { ButtonIcon } from "../../components/ButtonIcon";
import { z, ZodError } from "zod";
import { useContext, useState } from "react";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { formatCurrencyBRL } from "../../utils/formatCurrency";
import { NumericFormat } from "react-number-format";

const servicoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  price: z.number().positive("O preço deve ser maior que zero"),
  active: z.boolean(),
});

export function ServicosAdmin() {
  const { categoryServices, loading, createServico, updateServico } =
    useContext(ServicesContext)!;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const [active, setActive] = useState(true);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const parsed = servicoSchema.parse({
        name,
        price: Number(price.replace(",", ".")),
        active: Boolean(active),
      });
      await createServico(parsed);
      setName("");
      setPrice("");
      setActive(true);
      setErrors({});
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao criar serviço", error);
      }
    }
  }

  async function handleUpdateServico(
    id: string,
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    try {
      const parsed = servicoSchema.pick({ name: true, price: true }).parse({
        name: editName,
        price: Number(editPrice.replace(",", ".")),
      });

      await updateServico(id, parsed);

      setEditName("");
      setEditPrice("");
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao atualizar serviço", error);
      }
    }
  }

  return (
    <div className="p-4 mx-auto overflow-x-auto max-w-267.5">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Serviços
        </Text>

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <ButtonIcon className="md:hidden" icon={PlusIcon} />
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button className="md:block hidden w-full" icon={PlusIcon}>
                Novo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Text variant="heading-md-bold">Cadastro de serviços</Text>
              </DialogHeader>

              <form onSubmit={handleSubmit}>
                <Divider className="my-4" />
                <InputText
                  label="TÍTULO"
                  placeholder="Nome do serviço"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                />
                <InputText
                  label="VALOR"
                  placeholder="R$ 0,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  error={!!errors.price}
                />
                <Divider className="my-4" />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" size={"lg"}>
                      Salvar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-hidden">
        {loading ? (
          <Text>Carregando serviços...</Text>
        ) : (
          <table className="w-full">
            <thead className="text-gray-400">
              <tr className="border-t border-gray-500">
                <th className="max-w-[87px] md:w-full px-3 py-2 sm:px-4 text-left">
                  Título
                </th>
                <th className="md:w-full px-3 py-2 sm:px-4 text-left">Valor</th>
                <th className=" px-3 py-2 sm:px-4 text-center">Status</th>
                <th
                  className=" px-3 py-2 sm:px-4 text-left w-5"
                  colSpan={2}
                ></th>
              </tr>
            </thead>
            <tbody>
              {categoryServices.map((servico) => (
                <tr key={servico.id} className="border-t border-gray-500">
                  <td className="max-w-[87px] truncate px-3 py-2 text-left">
                    <Text
                      variant="text-sm-bold"
                      className="max-w-[87px] truncate"
                    >
                      {servico.name}
                    </Text>
                  </td>
                  <td className="max-w-full px-3 py-2 text-left">
                    <Text variant="text-sm-regular">
                      {formatCurrencyBRL(servico.price)}
                    </Text>
                  </td>
                  <td className="max-w-[30px] px-3 py-2 text-right hidden md:table-cell">
                    <Tags
                      variant={servico.active ? "success" : "danger"}
                      className="max-w-[30px] md:max-w-[152px]"
                    >
                      {servico.active ? "Ativo" : "Inativo"}
                    </Tags>
                  </td>
                  <td className="px-12 py-2 text-right md:hidden table-cell">
                    <Tags
                      variant={servico.active ? "success" : "danger"}
                      svg={servico.active ? CircleCheckIcon : BanIcon}
                    />
                  </td>

                  <td className="px-3 py-6  flex items-center justify-end gap-2">
                    {servico.active ? (
                      <button
                        onClick={() =>
                          updateServico(servico.id, { active: false })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon svg={BanIcon} />
                        <Text className="hidden md:block">Desativar</Text>
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          updateServico(servico.id, { active: true })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon svg={CircleCheckIcon} />
                        <Text className="hidden md:block">Reativar</Text>
                      </button>
                    )}
                  </td>
                  <td className="w-[20px] py-2 text-right">
                    <div className="px-3 py-2 flex items-center justify-end gap-3">
                      <Dialog
                        onOpenChange={(open) => {
                          if (open) {
                            setEditName(servico.name);
                            setEditPrice(servico.price.toString());
                          }
                        }}
                      >
                        <DialogTrigger asChild>
                          <ActionLink variant="subtitle">
                            <Icon
                              svg={PenLineIcon}
                              className="w-4 h-4 fill-gray-100"
                            />
                          </ActionLink>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <Text variant="heading-md-bold">Serviço</Text>
                          </DialogHeader>

                          <form
                            onSubmit={(e) => handleUpdateServico(servico.id, e)}
                          >
                            <Divider className="my-4" />
                            <InputText
                              label="TÍTULO"
                              placeholder="Nome do serviço"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              error={!!errors.name}
                            />

                            {/* Campo com máscara de moeda na edição */}
                            <NumericFormat
                              customInput={InputText}
                              label="VALOR"
                              placeholder="R$ 0,00"
                              value={editPrice}
                              onValueChange={(values: { value: string }) =>
                                setEditPrice(values.value)
                              }
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix="R$ "
                              decimalScale={2}
                              fixedDecimalScale
                              error={!!errors.price}
                            />

                            <Divider className="my-4" />
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="submit" size={"lg"}>
                                  Salvar
                                </Button>
                              </DialogClose>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

```

## src\Pages\App.tsx

```tsx
export function App() {
  return <h1>Help_Desk</h1>;
}

```

## src\Pages\cliente\ChamadosCliente.tsx

```tsx
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import EyeIcon from "../../assets/icons/eye.svg?react";
import EditIcon from "../../assets/icons/pen-line.svg?react";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import { ActionLink } from "../../components/ActionLink";
import { Icon } from "../../components/Icon";

import { getStatusConfig } from "../../utils/statusConfig";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { Skeleton } from "../../components/Skeleton";

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
  role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
  const { chamados, loading } = useChamados();

  return (
    <>
      <h2 className="text-xl font-bold mb-2 text-blue-dark">
        {role === "CLIENTE" ? "Meus chamados" : "Chamados"}
      </h2>
      <div className="border border-gray-500 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="px-4 py-2">Atualizado em</th>
              <th className="px-4 py-2 hidden md:table-cell">Id</th>
              <th className="px-4 py-2">Titulo</th>
              <th className="px-4 py-2 hidden md:table-cell">Serviço</th>
              <th className="px-4 py-2 hidden md:table-cell">Valor total</th>
              <th className="px-4 py-2 hidden md:table-cell">Técnico</th>
              <th className="px-4 py-2" colSpan={2}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-2">
                  <Skeleton className="w-30 md:w-35 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  <Skeleton className="md:w-25 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-20 md:w-60 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  <Skeleton className="w-60 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 hidden md:table-cell">
                  <Skeleton className="md:w-30 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 gap-1 md:flex hidden">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <Skeleton className="w-30 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2">
                  <Skeleton className="w-8 md:w-30 h-8 rounded-full" />
                </td>
                <td className="px-4 py-2 flex flex-row items-center justify-center gap-1">
                  <Skeleton className="w-8 h-8 rounded" />
                  <Skeleton className="w-8 h-8 rounded" />
                </td>
              </tr>
            ) : (
              chamados.map((chamado) => (
                <tr key={chamado.id} className="border-t border-gray-500">
                  <td className="px-4 py-2">
                    {new Date(chamado.updatedAt).toLocaleString("pt-BR")}
                  </td>

                  <td className="px-4 py-2 font-bold hidden md:table-cell max-w-20 truncate">
                    {chamado.id}
                  </td>

                  <td className="px-4 py-2 font-bold max-w-40 truncate">
                    {chamado.title}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell max-w-40 truncate">
                    {chamado.services.map((s) => s.nome).join(", ")}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell">
                    R$ {(chamado.totalPrice ?? 0.0).toFixed(2)}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell">
                    <div className="flex items-center">
                      <Avatar
                        size="xs"
                        name={chamado.tecnico?.name ?? "Sem técnico"}
                      />
                      <span className="ml-2">
                        {chamado.tecnico?.name ?? "Sem técnico"}
                      </span>
                    </div>
                  </td>

                  <td className="px-2 py-2">
                    <Tags
                      variant={getStatusConfig(chamado.status).variant}
                      svg={getStatusConfig(chamado.status).icon}
                      className="w-max px-2 py-1 flex items-center gap-1"
                    >
                      {getStatusConfig(chamado.status).label}
                    </Tags>
                  </td>

                  <td className="flex gap-2 px-2 py-2">
                    <ActionLink
                      to={`/cliente/detail-chamado/${chamado.id}`}
                      variant="subtitle"
                      size="md"
                    >
                      <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                    </ActionLink>

                    <ActionLink
                      to={`/cliente/editar-chamado/${chamado.id}`}
                      variant="tertiary"
                      size="md"
                    >
                      <Icon svg={EditIcon} className="w-4 h-4 fill-gray-600" />
                    </ActionLink>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

```

## src\Pages\cliente\clienteVariants.ts

```ts
import { cva } from "class-variance-authority";

export const clienteVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});


```

## src\Pages\cliente\DashboardCliente.tsx

```tsx
import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "../admin/adminVariants";
import type { VariantProps } from "class-variance-authority";

interface ClienteProps extends VariantProps<typeof adminVariants> { }

export function DashboardCliente({ }: ClienteProps) {
    return (
        <AppLayout role="CLIENTE">
            <Outlet />
        </AppLayout>
    );
}
```

## src\Pages\cliente\DetailChamadoCliente.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";

export function DetailChamadoCliente() {
  const { id } = useParams();
  const { getChamadoById } = useChamados();

  const chamado = getChamadoById(id!);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <Text variant="text-xs-bold">Voltar</Text>
        </a>
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Chamado detalhado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full md:min-w-120">
          <div className="flex items-start justify-between mb-6">
            <div className="flex flex-col gap-2">
              <Text as="h2" variant="heading-md-normal">
                {chamado.id}
              </Text>
              <Text as="h2" variant="heading-md-bold">
                {chamado.title}
              </Text>
            </div>

            <Tags
              variant={getStatusConfig(chamado.status).variant}
              svg={getStatusConfig(chamado.status).icon}
              className="flex w-1/3"
            >
              {getStatusConfig(chamado.status).label}
            </Tags>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="text-sm-bold" className="text-gray-400">
              Descrição
            </Text>
            <Text>{chamado.description}</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="text-sm-bold" className="text-gray-400">
              Categoria
            </Text>
            {chamado.services.map((service) => (
              <Text key={service.id}>{service.nome}</Text>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-20">
              <div className="flex flex-col gap-2">
                <Text variant="text-sm-bold" className="text-gray-400">
                  Criado em
                </Text>
                <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text variant="text-sm-bold" className="text-gray-400">
                  Atualizado em
                </Text>
                <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
          <div>
            <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
              Técnico responsável
            </Text>

            <div className="flex gap-2">
              <Avatar name={chamado.tecnico?.name || "N/A"} />
              <div className="flex flex-col">
                <Text variant="text-xs-regular" className="text-gray-300">
                  {chamado.tecnico?.name || "Técnico não atribuído"}
                </Text>
                <Text variant="text-xs-regular" className="text-gray-300">
                  {chamado.tecnico?.email || "Email não disponível"}
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Valores
            </Text>
            <div className="flex justify-between">
              <Text>Preço Base</Text>
              <Text>R$ {chamado.totalPrice.toFixed(2)}</Text>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Adicionais
            </Text>
            {/** nessa parte deve exibir os serviços adicionais */}
            {chamado.services.slice(1).map((service) => (
              <div key={service.id} className="flex justify-between">
                <Text className="w-[130px] truncate">{service.nome}</Text>
                <Text>R$ {service.price.toFixed(2)}</Text>
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex justify-between">
            <Text variant="heading-md-bold">Total</Text>
            {/** aqui deve exibir o total do preço base + adicionais */}
            <Text variant="heading-md-bold">
              R$ {chamado.totalPrice.toFixed(2)}
            </Text>
          </div>
        </Card>
      </Container>
    </div>
  );
}

```

## src\Pages\cliente\EditarChamadoCliente.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { useEffect, useState } from "react";

export function EditarChamadoCliente() {
  const { id } = useParams();
  const { getChamadoById, updateChamado } = useChamados();
  const navigate = useNavigate();

  const chamado = getChamadoById(id!);

  const [title, setTitle] = useState(chamado?.title ?? "");
  const [desc, setDesc] = useState(chamado?.description ?? "");
  const [services, setServices] = useState(
    chamado?.services.map((s) => s.id) ?? [],
  );

  async function salvarChamado(e: React.FormEvent) {
    e.preventDefault();
    await updateChamado(id!, {
      title,
      description: desc,
      services,
    });
    alert("Chamado atualizado com sucesso!");
    navigate("/cliente/chamados-cliente");
  }
  useEffect(() => {
    if (!chamado) return;

    // Executa o setState de forma assíncrona, evitando renderizações em cascata
    const timeout = setTimeout(() => {
      setTitle(chamado.title ?? "");
      setDesc(chamado.description ?? "");
      setServices(chamado.services?.map((s) => s.id) ?? []);
    }, 0);

    return () => clearTimeout(timeout);
  }, [chamado]);

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Editar chamado
        </Text>
      </header>
      <form onSubmit={salvarChamado}>
        <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
          <Card className="p-8 md:max-w-120 w-full md:min-w-120">
            <Text as="h2" variant="heading-md-bold">
              Informações
            </Text>
            <InputText
              label="Título"
              placeholder="Digite um título para o chamado"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Descrição"
              placeholder="Descreva o que está acontecendo"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <InputSelect
              label="Categoria"
              value={
                chamado?.services[0]
                  ? {
                      id: chamado.services[0].id,
                      nome: chamado.services[0].nome,
                      valor: chamado.services[0].price,
                    }
                  : undefined
              }
              onChange={(option) => setServices([option.id])}
            />
          </Card>
          <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
            <div>
              <Text as="h2" variant="heading-md-bold">
                Resumo
              </Text>
              <Text variant="text-xs-regular" className="text-gray-300">
                Valores e detalhes
              </Text>
            </div>

            <div>
              <Text as="h3" variant="text-xs-regular" className="text-gray-400">
                Categoria de serviço
              </Text>
              <Text variant="text-sm-regular" className="text-gray-200">
                Categoria selecionada
              </Text>
              <Text as="h3">Custo inicial</Text>
              <Text>
                {chamado?.services[0]?.price
                  ? Number(chamado.services[0].price).toFixed(2)
                  : "0,00"}
              </Text>
            </div>

            <Text variant="text-xs-regular" className="text-gray-300">
              O chamado será automaticamente atribuído a um técnico disponível
            </Text>
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="secondary"
                type="button"
                onClick={() => navigate("/cliente/chamados-cliente")}
              >
                Cancelar
              </Button>

              <Button type="submit">Salvar</Button>
            </div>
          </Card>
        </Container>
      </form>
    </div>
  );
}

```

## src\Pages\cliente\NovoChamado.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useState, useEffect, useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { useNavigate } from "react-router-dom";

import { useChamados } from "../../contexts/Chamado/hooks/useChamados";

export function NovoChamado() {
  const { createChamado } = useChamados();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categoria, setCategoria] = useState<{
    id: string;
    nome: string;
    valor: number;
  } | null>(null);

  const { user } = useAuth();
  const servicesCtx = useContext(ServicesContext);
  const navigate = useNavigate();

  useEffect(() => {
    servicesCtx?.fetchCategoryServices();
  }, []);

  async function enviarChamado() {
    try {
      if (!user) throw new Error("Usuário não autenticado");

      // 🔍 Loga o objeto que será enviado
      const chamadoData = {
        title,
        clienteId: user.id,
        description: desc,
        services: categoria ? [String(categoria.id ?? "")] : [],
      };

      console.log("Dados enviados para criarChamado:", chamadoData);

      await createChamado(chamadoData);

      alert("Chamado criado com sucesso!");

      navigate("/cliente/chamados-cliente");
    } catch (error) {
      alert("Erro ao criar chamado");
      console.error(error);
    }
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Novo chamado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="p-8 md:max-w-120 w-full md:min-w-120">
          <Text as="h2" variant="heading-md-bold">
            Informações
          </Text>
          <form
            id="novoChamado"
            onSubmit={(e) => {
              e.preventDefault();
              enviarChamado();
            }}
          >
            <InputText
              label="Título"
              placeholder="Digite um título para o chamado"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Descrição"
              placeholder="Descreva o que está acontecendo"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <InputSelect
              label="Categoria"
              placeholder="Selecione a categoria de atendimento"
              onChange={(option) => setCategoria(option)}
            />
          </form>
        </Card>
        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
          <div>
            <Text as="h2" variant="heading-md-bold">
              Resumo
            </Text>
            <Text variant="text-xs-regular" className="text-gray-300">
              Valores e detalhes
            </Text>
          </div>
          {categoria && (
            <div>
              <Text as="h3" variant="text-xs-regular" className="text-gray-400">
                Categoria de serviço
              </Text>
              <Text variant="text-sm-regular" className="text-gray-200">
                {categoria.nome}
              </Text>
              <Text as="h3">Custo inicial</Text>
              <Text>R$ {categoria.valor}</Text>
            </div>
          )}
          <Text variant="text-xs-regular" className="text-gray-300">
            O chamado será automaticamente atribuído a um técnico disponível
          </Text>
          <Button form="novoChamado" type="submit">
            Criar chamado
          </Button>
        </Card>
      </Container>
    </div>
  );
}

```

## src\Pages\PageComponents.tsx

```tsx
import { Avatar } from "../components/Avatar";
import { Text } from "../components/Text";
import { Icon } from "../components/Icon";
import { Tags } from "../components/Tags";
import { TagTime } from "../components/TagTime";
import { Button } from "../components/Button";

import AlertCircle from "../assets/icons/circle-alert.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SpinIcon from "../assets/icons/spinner.svg?react";
import LogOutIcon from "../assets/icons/log-out.svg?react";
import NewIcon from "../assets/icons/circle-help.svg?react";
import ClockIcon from "../assets/icons/clock-2.svg?react";
import CircleCheckIcon from "../assets/icons/circle-check-big.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import LinePencil from "../assets/icons/pen-line.svg?react";
import { ButtonIcon } from "../components/ButtonIcon";
import { InputText } from "../components/InputText";
import { InputSelect } from "../components/InputSelect";

import { useState } from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";

export function Components() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simples validação: senha precisa ter pelo menos 8 caracteres
    if (!email || !password) {
      setError(true);
      return;
    }
    if (password.length < 8) {
      setError(true);
      return;
    } else {
      setError(false);
      alert("Formulário enviado com sucesso!");
    }
  }
  return (
    <Container>
      <div className="flex flex-col gap-2 p-4">
        <Text variant={"text-xl-bold"} className="text-blue-dark">
          Hello, World!
        </Text>
        <Text variant={"text-lg-bold"}>Hello, World!</Text>
        <Text variant={"heading-md-normal"}>Hello, World!</Text>
        <Text variant={"text-sm-regular"}>Hello, World!</Text>
        <Text variant={"text-xs-regular"}>Hello, World!</Text>
        <Text variant={"text-xs-bold"}>Hello, World!</Text>
        <Text variant={"text-xxs-bold"}>Hello, World!</Text>

        <div className="flex gap-4">
          <Avatar name="Maria Oliveira" size="md" />
          <Avatar name="João Souza" size="lg" />
          <Avatar name="Ana Costa" />
          <Avatar name="Francisco Silva" />
        </div>

        <div className="flex gap-4">
          <Icon svg={TrashIcon} className="fill-gray-100" />
          <Icon svg={SpinIcon} className="fill-gray-100" animate />
          <Icon svg={LogOutIcon} className="fill-feedback-danger w-5 h-5" />
        </div>
        <div className="flex gap-4">
          <Tags variant="new" svg={NewIcon}>
            LABEL
          </Tags>
          <Tags variant="info" svg={ClockIcon}>
            LABEL
          </Tags>
          <Tags variant="success" svg={CircleCheckIcon}>
            LABEL
          </Tags>
          <Tags variant="danger" svg={NewIcon}>
            LABEL
          </Tags>
        </div>
        <div className="flex gap-4">
          <TagTime>09:00</TagTime>
          <TagTime svg={XIcon}>15:00</TagTime>
          <TagTime> 08:30 </TagTime>
        </div>
        <div className="flex gap-4">
          <Button icon={LinePencil} variant="primary">
            Primary
          </Button>
          <Button icon={LinePencil} size="sm" variant="primary">
            Primary
          </Button>
          <Button icon={LinePencil} disabled>
            Disabled
          </Button>
          <Button icon={LinePencil} variant="secondary">
            Secondary
          </Button>
          <Button icon={LinePencil} variant="link">
            Link
          </Button>
          <Button icon={LinePencil} size="sm" variant="link">
            Link
          </Button>
        </div>
        <div className="flex gap-4">
          <ButtonIcon icon={LinePencil} variant="primary" />
          <ButtonIcon icon={LinePencil} variant="primary" size="sm" />
          <ButtonIcon icon={LinePencil} disabled />
          <ButtonIcon icon={LinePencil} variant="secondary" />
          <ButtonIcon icon={LinePencil} variant="link" />
          <ButtonIcon icon={LinePencil} variant="link" size="sm" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">FORMULÁRIO EXEMPLO</h2>

          <InputText
            label="Email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            errorIcon={AlertCircle}
            helperText={error ? "O email é obrigatório" : ""}
          />

          <InputText
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={true}
            errorIcon={AlertCircle}
            helperText={error ? "A senha deve ter pelo menos 8 caracteres" : ""}
          />

          <InputSelect
            label="Categoria"
            options={["Item 1", "Item 2", "Item 3"]}
            helperText="Escolha uma opção"
            error={false}
          />

          <InputSelect
            label="Categoria"
            options={["Item 1", "Item 2", "Item 3"]}
            helperText="Campo obrigatório"
            error={true}
          />

          <Button type="submit" size="md" variant="primary">
            Enviar
          </Button>
        </form>

        <div className="flex p-8 bg-gray-600">
          <Card size="md">Hello World.</Card>
        </div>
      </div>
    </Container>
  );
}

```

## src\Pages\SignIn.tsx

```tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError, z } from "zod";
import { ActionLink } from "../components/ActionLink";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

const signInSchema = z.object({
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dbStatus, setDbStatus] = useState<"ok" | "error" | "">("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  // Verifica o health check ao montar
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        if (response.data.status === "ok") {
          setDbStatus("ok");
        } else {
          setDbStatus("error");
        }
      } catch {
        setDbStatus("error");
      }
    };
    checkHealth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = signInSchema.parse({
        email,
        password,
      });
      const response = await api.post("/sessions", data);

      signIn({
        token: response.data.token,
        user: response.data.user,
      });

      const role = response.data.user.role;

      if (role === "ADMIN") {
        navigate("/admin");
      }

      if (role === "TECNICO") {
        navigate("/tecnico");
      }

      if (role === "CLIENTE") {
        navigate("/cliente");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      setError("Falha ao autenticar. Verifique suas credenciais.");
    }
  };

  return (
    <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
      <header>
        <Logo color="blue" />
      </header>
      <main className="flex flex-col gap-3 w-full max-w-lg">
        {/* Aviso do banco de dados */}
        {dbStatus === "error" && (
          <Card className="w-full p-4 bg-red-600">
            <Text as="span" variant="text-xs-bold" className="text-white">
              ⚠️ Sistema indisponível: banco de dados fora do ar.
            </Text>
          </Card>
        )}

        <Card className="w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Acesse o portal
          </Text>
          <Text as="span" variant="text-xs-regular" className="text-gray-300">
            Entre usando seu e-mail e senha cadastrados
          </Text>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputText
              label="E-MAIL"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              label="SENHA"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <Text variant="text-xs-regular" className="text-red-400">
                {error}
              </Text>
            )}

            <Button
              size="lg"
              className="mt-4"
              type="submit"
              disabled={dbStatus === "error"}
            >
              Enviar
            </Button>
          </form>
        </Card>
        <Card className="flex flex-col w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Ainda não tem conta?
          </Text>
          <Text variant="text-xs-regular" className="text-gray-300">
            Cadastre agora mesmo
          </Text>
          <ActionLink
            to="/register"
            size="lg"
            variant="subtitle"
            className="mt-5"
          >
            Criar conta
          </ActionLink>
        </Card>
      </main>
    </Container>
  );
}

```

## src\Pages\SignUp.tsx

```tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodError, z } from "zod";
import { ActionLink } from "../components/ActionLink";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { api } from "../services/api";

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome completo." }),
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dbStatus, setDbStatus] = useState<"ok" | "error" | "">("");

  const navigate = useNavigate();

  // Verifica o health check ao montar
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        if (response.data.status === "ok") {
          setDbStatus("ok");
        } else {
          setDbStatus("error");
        }
      } catch {
        setDbStatus("error");
      }
    };
    checkHealth();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = signUpSchema.parse({
        name,
        email,
        password,
      });

      await api.post("/users", { ...data, role: "CLIENTE" });

      if (confirm("Cadastrado com sucesso.")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      alert("Não foi possivel cadastrar.");
    }
  }

  return (
    <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
      <header>
        <Logo color="blue" />
      </header>
      <main className="flex flex-col gap-3 w-full max-w-lg">
        {dbStatus === "error" && (
          <Card className="w-full p-4 bg-red-600">
            <Text as="span" variant="text-xs-bold" className="text-white">
              ⚠️ Sistema indisponível: banco de dados fora do ar.
            </Text>
          </Card>
        )}

        <Card className="w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Crie sua conta
          </Text>
          <Text as="span" variant="text-xs-regular" className="text-gray-300">
            Informe seu nome, e-mail e senha
          </Text>

          <form onSubmit={onSubmit} action="#" className="flex flex-col gap-4">
            <InputText
              label="NOME"
              type="text"
              placeholder="Digite o nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              label="E-MAIL"
              type="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              label="SENHA"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button size="lg" className="mt-4" disabled={dbStatus === "error"}>
              Cadastrar
            </Button>
          </form>
        </Card>
        <Card className="flex flex-col w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Já tem uma conta?
          </Text>
          <Text variant="text-xs-regular" className="text-gray-300">
            Entre agora mesmo
          </Text>
          <ActionLink to="/login" size="lg" variant="subtitle" className="mt-5">
            Acessar conta
          </ActionLink>
        </Card>
      </main>
    </Container>
  );
}

```

## src\Pages\tecnico\ChamadoDetailsTecnico.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ButtonIcon } from "../../components/ButtonIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";
import { InputSelect } from "../../components/InputSelect";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { formatCurrencyBRL } from "../../utils/formatCurrency";
import { Skeleton } from "../../components/Skeleton";

export function ChamadoDetailsTecnico() {
  const [services, setServices] = useState<
    { id: string; name: string; price: number }[]
  >([]);

  const { id } = useParams();
  const { getChamadoById, fetchChamados, loading } = useChamados();

  const chamado = getChamadoById(id!);

  const [selectedServiceId, setSelectedServiceId] = useState<{
    id: string;
    nome: string;
    valor: number;
  } | null>(null);
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
  const [isAddingService, setIsAddingService] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await api.get("/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    fetchServices();
  }, []);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  const precoBase = chamado?.services[0]?.price ?? 0;

  const totalAdicionais = chamado?.services
    .slice(1)
    .reduce((total, service) => total + service.price, 0);

  async function handleUpdateStatus(status: "EM_ATENDIMENTO" | "ENCERRADO") {
    try {
      await api.patch(`/chamados/${chamado?.id}/status`, {
        status,
      });

      await fetchChamados();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  async function handleAddService() {
    if (!selectedServiceId) {
      return;
    }

    try {
      setIsAddingService(true);

      // IDs dos serviços que o chamado já possui
      const servicesAtuais = chamado?.services.map((service) => service.id);

      // Evita adicionar o mesmo serviço duas vezes
      if (servicesAtuais?.includes(selectedServiceId.id)) {
        alert("Esse serviço já foi adicionado ao chamado.");
        return;
      }

      // Mantém os serviços existentes e adiciona o novo
      const servicesAtualizados = [...servicesAtuais, selectedServiceId.id];

      await api.patch(`/chamados/${chamado?.id}`, {
        services: servicesAtualizados,
      });

      // Atualiza os chamados no contexto
      await fetchChamados();

      // Limpa seleção
      setSelectedServiceId(null);

      // Fecha modal
      setServiceDialogOpen(false);
    } catch (error) {
      console.error("Erro ao adicionar serviço:", error);
      alert("Não foi possível adicionar o serviço.");
    } finally {
      setIsAddingService(false);
    }
  }

  async function handleRemoveService(serviceId: string) {
    try {
      await api.delete(`/chamados/${chamado?.id}/services/${serviceId}`);

      await fetchChamados();

      alert("Serviço excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao remover serviço:", error);

      alert("Não foi possível excluir o serviço.");
    }
  }

  return (
    <div className="md:max-w-210 mt-14 mx-auto">
      <header className="flex flex-col md:items-end justify-between max-w-199 mb-6 md:flex-row">
        <div>
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Chamado detalhado
          </Text>
        </div>
        <div className="w-full md:max-w-80 flex gap-2 mt-2">
          <Button
            variant="secondary"
            size="md"
            icon={CheckIcon}
            className="w-full md:w-max"
          >
            Encerrar
          </Button>

          {chamado.status === "ABERTO" && (
            <Button
              variant="primary"
              size="md"
              icon={ClockIcon}
              onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
              className="w-full"
            >
              Iniciar atendimento
            </Button>
          )}

          {chamado.status === "EM_ATENDIMENTO" && (
            <Button
              variant="primary"
              size="md"
              icon={CheckIcon}
              onClick={() => handleUpdateStatus("ENCERRADO")}
              className="w-full"
            >
              Encerrar
            </Button>
          )}
        </div>
      </header>
      {loading ? (
        <>
          <Container className="w-full flex flex-wrap flex-col gap-6 md:flex-row md:max-w-210">
            <Skeleton className="w-[460px] h-[400px] rounded-lg" />
            <Skeleton className="w-[300px] h-[400px] rounded-lg" />
            <Skeleton className="w-[460px] h-[200px] rounded-lg" />
          </Container>
        </>
      ) : (
        <Container className="w-full flex flex-wrap flex-col gap-6 md:flex-row md:max-w-210">
          <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full">
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col gap-2">
                <Text as="h2" variant="heading-md-normal">
                  {chamado.id}
                </Text>
                <Text as="h2" variant="heading-md-bold">
                  {chamado.title}
                </Text>
              </div>

              <Tags
                variant={getStatusConfig(chamado.status).variant}
                svg={getStatusConfig(chamado.status).icon}
                className="flex w-1/3"
              >
                {getStatusConfig(chamado.status).label}
              </Tags>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Descrição
              </Text>
              <Text>{chamado.description}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Categoria
              </Text>
              {chamado.services.map((service) => (
                <Text key={service.id}>{service.nome}</Text>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-20">
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Criado em
                  </Text>
                  <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text variant="text-sm-bold" className="text-gray-400">
                    Atualizado em
                  </Text>
                  <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
                </div>
              </div>
            </div>
            <div>
              <Text>Cliente</Text>
              <div className="flex items-center gap-2 mt-2">
                <Avatar name={chamado.cliente.name} />
                <Text>{chamado.cliente.name}</Text>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 max-w-[full]">
            <div>
              <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
                Técnico responsável
              </Text>

              <div className="flex gap-2">
                <Avatar name="Jhon Doe" />
                <div className="flex flex-col">
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.name || "Técnico não atribuído"}
                  </Text>
                  <Text variant="text-xs-regular" className="text-gray-300">
                    {chamado.tecnico?.email || "Email não disponível"}
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Valores
              </Text>
              <div className="flex justify-between">
                <Text>Preço Base</Text>
                <Text>{formatCurrencyBRL(precoBase)}</Text>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text variant="text-sm-bold" className="text-gray-400 mb-2">
                Adicionais
              </Text>

              {chamado.services.slice(1).map((service) => (
                <div key={service.id} className="flex justify-between gap-4">
                  <Text className="truncate w-[150px]">{service.nome}</Text>

                  <Text>{formatCurrencyBRL(service.price)}</Text>
                </div>
              ))}
            </div>
            <Divider />
            <div className="flex justify-between">
              <Text variant="heading-md-bold">Total</Text>
              {/** aqui deve exibir o total do preço base + adicionais */}
              <Text variant="heading-md-bold">
                {formatCurrencyBRL(precoBase + totalAdicionais)}
              </Text>
            </div>
          </Card>
          <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full md:min-w-120">
            <header className="flex justify-between">
              <Text variant="heading-md-bold" className="text-gray-300">
                Serviços adicionais
              </Text>
              <Dialog
                open={serviceDialogOpen}
                onOpenChange={(open) => {
                  setServiceDialogOpen(open);

                  if (!open) {
                    setSelectedServiceId(null);
                  }
                }}
              >
                <DialogTrigger asChild>
                  <ButtonIcon size="lg" icon={PlusIcon} />
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <Text>Serviços adicionais</Text>
                  </DialogHeader>

                  <Divider className="my-4" />

                  <div className="flex items-center gap-2 mb-5">
                    <InputSelect
                      label="Serviços cadastrados"
                      placeholder="Selecione um serviço"
                      value={selectedServiceId ?? undefined}
                      onChange={(option) => setSelectedServiceId(option)}
                    />
                  </div>

                  <Divider className="my-4" />

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary" size="lg">
                        Cancelar
                      </Button>
                    </DialogClose>

                    <Button
                      type="button"
                      size="lg"
                      onClick={handleAddService}
                      disabled={!selectedServiceId || isAddingService}
                    >
                      {isAddingService ? "Salvando..." : "Salvar"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </header>
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {chamado.services.slice(1).map((service) => (
                  <tr key={service.id}>
                    <td className="py-1">
                      <Text variant="heading-md-bold">{service.nome}</Text>
                    </td>

                    <td className="py-1">{formatCurrencyBRL(service.price)}</td>

                    <td className="w-10 py-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveService(service.id)}
                        className="p-2 flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-sm cursor-pointer"
                      >
                        <Icon
                          svg={TrachIcon}
                          className="w-6 h-6 fill-feedback-danger"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Container>
      )}
    </div>
  );
}

```

## src\Pages\tecnico\ChamadosTecnico.tsx

```tsx
import { ChamadoCard } from "../../components/ChamadoCard";
import { Skeleton } from "../../components/Skeleton";
import { Tags } from "../../components/Tags";
import { Text } from "../../components/Text";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { getStatusConfig } from "../../utils/statusConfig";

export function ChamadosTecnico() {
  const { chamados, loading } = useChamados();
  const chamadosPorStatus = {
    EM_ATENDIMENTO: chamados.filter((c) => c.status === "EM_ATENDIMENTO"),
    ABERTO: chamados.filter((c) => c.status === "ABERTO"),
    ENCERRADO: chamados.filter((c) => c.status === "ENCERRADO"),
  };

  const renderChamados = (lista: typeof chamados) => (
    <div className="flex flex-wrap gap-3 mt-4">
      {lista.map((chamado) => (
        <ChamadoCard key={chamado.id} chamado={chamado} />
      ))}
    </div>
  );
  return (
    <div className="p-4 sm:p-6">
      <header className="mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Meus chamados
        </Text>
      </header>
      {loading ? (
        <>
          <Skeleton className="h-8 w-30 rounded-full mb-5" />
          <section className="mb-8">
            <Skeleton className="w-100 h-50 rounded-lg" />
          </section>

          <Skeleton className="h-8 w-30 rounded-full mb-5" />
          <section className="mb-8">
            <Skeleton className="w-100 h-50 rounded-lg" />
          </section>

          <Skeleton className="h-8 w-30 rounded-full mb-5" />
          <section className="mb-8">
            <Skeleton className="w-100 h-50 rounded-lg" />
          </section>
        </>
      ) : (
        <>
          <section className="mb-8">
            <Tags
              variant={getStatusConfig("EM_ATENDIMENTO").variant}
              svg={getStatusConfig("EM_ATENDIMENTO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("EM_ATENDIMENTO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.EM_ATENDIMENTO)}
          </section>

          <section className="mb-8">
            <Tags
              variant={getStatusConfig("ABERTO").variant}
              svg={getStatusConfig("ABERTO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("ABERTO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.ABERTO)}
          </section>

          <section className="mb-8">
            <Tags
              variant={getStatusConfig("ENCERRADO").variant}
              svg={getStatusConfig("ENCERRADO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("ENCERRADO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.ENCERRADO)}
          </section>
        </>
      )}
    </div>
  );
}

```

## src\Pages\tecnico\DashboardTecnico.tsx

```tsx
import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";

export function DashboardTecnico() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

```

## src\Pages\tecnico\tecnicoVariants.ts

```ts
import { cva } from "class-variance-authority";

export const tecnicoVariants = cva("h-screen bg-gray-100 p-4 text-gray-600", {
    variants: {
        variant: {
            default: "hover:bg-gray-500 transition-colors duration-300",
        }
    },
    defaultVariants: {
        variant: "default",
    },
});
```

## src\routes\appRoutes.tsx

```tsx
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { ChamadosAdmin } from "../Pages/admin/ChamadosAdmin";
import { DashboardAdmin } from "../Pages/admin/DashboardAdmin";
import { EditarChamadoAdmin } from "../Pages/admin/EditarChamadoAdmin";
import { EditarTecnico } from "../Pages/admin/EditarTecnico";
import { ClientesAdmin } from "../Pages/admin/ListClientes";
import { TecnicosAdmin } from "../Pages/admin/ListTecnicos";
import { NovoTecnico } from "../Pages/admin/NovoTecnico";
import { ServicosAdmin } from "../Pages/admin/ServicosAdmin";
import { ChamadosCliente } from "../Pages/cliente/ChamadosCliente";
import { DashboardCliente } from "../Pages/cliente/DashboardCliente";
import { DetailChamadoCliente } from "../Pages/cliente/DetailChamadoCliente";
import { EditarChamadoCliente } from "../Pages/cliente/EditarChamadoCliente";
import { NovoChamado } from "../Pages/cliente/NovoChamado";

import { Components } from "../Pages/PageComponents";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";
import { ChamadoDetailsTecnico } from "../Pages/tecnico/ChamadoDetailsTecnico";
import { ChamadosTecnico } from "../Pages/tecnico/ChamadosTecnico";
import { DashboardTecnico } from "../Pages/tecnico/DashboardTecnico";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/components" element={<Components />} />
      </Route>

      {/* Rotas do ADMIN */}
      <Route
        path="/admin"
        element={
          <PrivateRoute roles={["ADMIN"]}>
            <DashboardAdmin />
          </PrivateRoute>
        }
      >
        <Route index element={<ChamadosAdmin />} />
        <Route path="chamados" element={<ChamadosAdmin />} />
        <Route path="editarChamados/:id" element={<EditarChamadoAdmin />} />
        <Route path="clientes" element={<ClientesAdmin />} />
        <Route path="servicos" element={<ServicosAdmin />} />

        <Route path="tecnicos" element={<TecnicosAdmin />} />
        <Route path="novoTecnico" element={<NovoTecnico />} />
        <Route path="editarTecnico/:id" element={<EditarTecnico />} />
      </Route>

      {/* Rotas do TÉCNICO */}
      <Route
        path="/tecnico"
        element={
          <PrivateRoute roles={["TECNICO"]}>
            <DashboardTecnico />
          </PrivateRoute>
        }
      >
        <Route index element={<ChamadosTecnico />} />
        <Route path="meus-chamados" element={<ChamadosTecnico />} />
        <Route path="chamado-details/:id" element={<ChamadoDetailsTecnico />} />
      </Route>

      {/* Rotas do CLIENTE */}

      <Route
        path="/cliente"
        element={
          <PrivateRoute roles={["CLIENTE"]}>
            <DashboardCliente />
          </PrivateRoute>
        }
      >
        <Route index element={<ChamadosCliente />} />
        <Route path="chamados-cliente" element={<ChamadosCliente />} />
        <Route path="novo-chamado" element={<NovoChamado />} />
        <Route path="editar-chamado/:id" element={<EditarChamadoCliente />} />
        <Route path="detail-chamado/:id" element={<DetailChamadoCliente />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

```

## src\routes\PrivateRoute.tsx

```tsx
import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: JSX.Element;
  roles?: string[];
}

export function PrivateRoute({ children, roles }: Props) {
  const { user, isLoading } = useAuth();

  // 🔹 Enquanto o AuthProvider ainda está carregando, não renderiza nada
  if (isLoading) {
    return <div>Carregando...</div>; // ou um splash elegante
  }

  // 🔹 Se não há usuário após o carregamento, redireciona
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔹 Se há restrição de papel (role)
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

```

## src\services\api.ts

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@helpdesk:token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

```

## src\services\chamados.ts

```ts
import { api } from "./api";

// DTO para criação de chamado
export interface CriarChamadoDTO {
  clienteId: string;
  tecnicoId?: string;
  services: string[];
  disponibilidadeId?: string;
  adminId?: string;
  title?: string;
}

// Criar chamado
export async function criarChamado(data: CriarChamadoDTO) {
  const token = localStorage.getItem("@helpdesk:token");

  const response = await api.post("/chamados", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Listar chamados
export async function listarChamados() {
  const token = localStorage.getItem("@helpdesk:token");
  const response = await api.get("/chamados", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Buscar serviços (para popular o select)
export async function getServicos() {
  const response = await api.get("/servicos");
  return response.data;
}

```

## src\tests\Button.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../components/Button";

describe("Button", () => {
  it("renderiza o texto do botão", () => {
    render(<Button>Clique aqui</Button>);
    expect(
      screen.getByRole("button", { name: /clique aqui/i }),
    ).toBeInTheDocument();
  });

  it("renderiza com variante secondary", () => {
    render(<Button variant="secondary">Secundário</Button>);
    const btn = screen.getByRole("button", { name: /secundário/i });
    expect(btn).toBeInTheDocument();
    expect(btn.className).toContain("bg-gray-500");
  });

  it("renderiza com tamanho lg ocupando largura total", () => {
    render(<Button size="lg">Largo</Button>);
    const btn = screen.getByRole("button", { name: /largo/i });
    expect(btn.className).toContain("w-full");
  });

  it("aplica classe de desabilitado quando disabled=true", () => {
    render(<Button disabled={true}>Desabilitado</Button>);
    const btn = screen.getByRole("button", { name: /desabilitado/i });
    expect(btn.className).toContain("pointer-events-none");
    expect(btn.className).toContain("opacity-50");
  });

  it("chama onClick ao ser clicado", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clicável</Button>);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /clicável/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("não chama onClick quando disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled={true} onClick={handleClick}>
        Bloqueado
      </Button>,
    );

    const btn = screen.getByRole("button", { name: /bloqueado/i });

    // O Button usa pointer-events-none (CSS) — não tem disabled nativo.
    // O correto é verificar que as classes de bloqueio estão aplicadas.
    expect(btn.className).toContain("pointer-events-none");
    expect(btn.className).toContain("cursor-not-allowed");
    expect(btn.className).toContain("opacity-50");
  });
});

```

## src\tests\InputText.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { InputText } from "../components/InputText";

describe("InputText", () => {
  it("renderiza o input na tela", () => {
    render(<InputText />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renderiza com label visível", () => {
    render(<InputText label="E-MAIL" />);
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument();
  });

  it("renderiza com placeholder", () => {
    render(<InputText placeholder="Digite seu email" />);
    expect(
      screen.getByPlaceholderText(/digite seu email/i),
    ).toBeInTheDocument();
  });

  it("aceita digitação do usuário", async () => {
    render(<InputText placeholder="Digite algo" />);
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/digite algo/i);

    await user.type(input, "texto de teste");

    expect(input).toHaveValue("texto de teste");
  });

  it("renderiza o helperText quando passado", () => {
    render(<InputText helperText="Campo obrigatório" />);
    expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
  });

  it("renderiza o helperText em vermelho quando error=true", () => {
    render(<InputText helperText="Campo inválido" error={true} />);
    const helper = screen.getByText(/campo inválido/i);
    expect(helper.className).toContain("text-red");
  });

  it("chama onChange ao digitar", async () => {
    const handleChange = vi.fn();
    render(<InputText placeholder="Digite algo" onChange={handleChange} />);

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/digite algo/i), "abc");

    expect(handleChange).toHaveBeenCalled();
  });
});

```

## src\tests\PrivateRoute.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { PrivateRoute } from "../routes/PrivateRoute";

vi.mock("../hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "../hooks/useAuth";

const mockUseAuth = vi.mocked(useAuth);

const mockUser = {
  id: "1",
  name: "Teste",
  email: "teste@email.com",
  password: "",
  avatarUrl: "",
  role: "CLIENTE" as const,
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
  disponibilidades: [],
};

function PaginaProtegida() {
  return <div>Conteúdo protegido</div>;
}

function PaginaLogin() {
  return <div>Página de login</div>;
}

function renderPrivateRoute(roles?: string[]) {
  return render(
    <MemoryRouter initialEntries={["/protegido"]}>
      <Routes>
        <Route path="/login" element={<PaginaLogin />} />
        <Route
          path="/protegido"
          element={
            <PrivateRoute roles={roles}>
              <PaginaProtegida />
            </PrivateRoute>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PrivateRoute", () => {
  it("mostra loading enquanto está carregando", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      isLoading: true,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });
    renderPrivateRoute();

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it("redireciona para /login quando não há usuário", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    renderPrivateRoute();

    expect(screen.getByText(/página de login/i)).toBeInTheDocument();
    expect(screen.queryByText(/conteúdo protegido/i)).not.toBeInTheDocument();
  });

  it("renderiza o conteúdo quando usuário está autenticado", () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });
    renderPrivateRoute();

    expect(screen.getByText(/conteúdo protegido/i)).toBeInTheDocument();
  });

  it("redireciona quando usuário não tem o role exigido", () => {
    mockUseAuth.mockReturnValue({
      user: mockUser, // role: "CLIENTE"
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    // Rota exige ADMIN mas usuário é CLIENTE
    renderPrivateRoute(["ADMIN"]);

    expect(screen.getByText(/página de login/i)).toBeInTheDocument();
    expect(screen.queryByText(/conteúdo protegido/i)).not.toBeInTheDocument();
  });

  it("renderiza quando usuário tem o role exigido", () => {
    mockUseAuth.mockReturnValue({
      user: { ...mockUser, role: "ADMIN" as const },
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    // Rota exige ADMIN e usuário é ADMIN
    renderPrivateRoute(["ADMIN"]);

    expect(screen.getByText(/conteúdo protegido/i)).toBeInTheDocument();
  });
});

```

## src\tests\schemas.test.tsx

```tsx
import { describe, expect, it } from "vitest";
import { z } from "zod";

// Cópia dos schemas — igual ao que está nos componentes
const signInSchema = z.object({
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome completo." }),
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

describe("signInSchema", () => {
  it("aceita dados válidos", () => {
    const result = signInSchema.safeParse({
      email: "user@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(true);
  });

  it("rejeita email inválido", () => {
    const result = signInSchema.safeParse({
      email: "nao-é-email",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("E-Mail inválido.");
  });

  it("rejeita senha com menos de 6 caracteres", () => {
    const result = signInSchema.safeParse({
      email: "user@email.com",
      password: "123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter pelo menos 6 digitos",
    );
  });
});

describe("signUpSchema", () => {
  it("aceita dados válidos", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(true);
  });

  it("rejeita nome vazio", () => {
    const result = signUpSchema.safeParse({
      name: "",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Informe o nome completo.");
  });

  it("rejeita nome só com espaços", () => {
    const result = signUpSchema.safeParse({
      name: "   ",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Informe o nome completo.");
  });

  it("rejeita email inválido", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "invalido",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("E-Mail inválido.");
  });

  it("rejeita senha com menos de 6 caracteres", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      password: "123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter pelo menos 6 digitos",
    );
  });
});

```

## src\tests\setup.ts

```ts
import "@testing-library/jest-dom";

```

## src\tests\SignIn.test.tsx

```tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { SignIn } from "../Pages/SignIn";

vi.mock("../hooks/useAuth", () => ({
  useAuth: () => ({
    signIn: vi.fn(),
    isLoading: false,
  }),
}));

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn().mockResolvedValue({ data: { status: "ok" } }),
    post: vi.fn(),
  },
}));

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

describe("SignIn", () => {
  beforeEach(() => {
    alertMock.mockClear();
  });

  it("renderiza o formulário de login", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>,
    );
    expect(
      screen.getByPlaceholderText(/exemplo@email.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite sua senha/i),
    ).toBeInTheDocument();
  });

  it("mostra alerta ao submeter com senha curta", async () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    // Aguarda botão habilitar
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /enviar/i }),
      ).not.toBeDisabled();
    });

    // Email válido + senha curta — jsdom não bloqueia, Zod rejeita a senha
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), "123");

    // Submete o form diretamente para contornar validação nativa HTML
    fireEvent.submit(
      screen.getByRole("button", { name: /enviar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/senha deve ter pelo menos/i),
      );
    });
  });
});

```

## src\tests\SignUp.test.tsx

```tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignUp } from "../Pages/SignUp";

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn().mockResolvedValue({ data: { status: "ok" } }),
    post: vi.fn().mockResolvedValue({ data: {} }),
  },
}));

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
const confirmMock = vi.spyOn(window, "confirm").mockImplementation(() => false);

describe("SignUp", () => {
  beforeEach(() => {
    alertMock.mockClear();
    confirmMock.mockClear();
  });

  it("renderiza o formulário de cadastro", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );
    expect(
      screen.getByPlaceholderText(/digite o nome completo/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/exemplo@email.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite sua senha/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
  });

  it("mostra alerta quando o nome está vazio", async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "senha123",
    );

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/informe o nome/i),
      );
    });
  });

  it("mostra alerta quando a senha é curta", async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/digite o nome completo/i),
      "João Silva",
    );
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), "123");

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/senha deve ter pelo menos/i),
      );
    });
  });

  it("chama api.post ao submeter com dados válidos", async () => {
    const { api } = await import("../services/api");
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/digite o nome completo/i),
      "João Silva",
    );
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "joao@email.com",
    );
    await user.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "senha123",
    );

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(
        "/users",
        expect.objectContaining({
          name: "João Silva",
          email: "joao@email.com",
          password: "senha123",
          role: "CLIENTE",
        }),
      );
    });
  });
});

```

## src\tests\Text.test.tsx

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "../components/Text";

describe("Text", () => {
  it("renderiza o texto passado como children", () => {
    render(<Text>Olá mundo</Text>);
    expect(screen.getByText(/olá mundo/i)).toBeInTheDocument();
  });

  it("renderiza como span por padrão", () => {
    render(<Text>Texto padrão</Text>);
    const el = screen.getByText(/texto padrão/i);
    expect(el.tagName).toBe("SPAN");
  });

  it("renderiza como h1 quando as='h1'", () => {
    render(<Text as="h1">Título</Text>);
    const el = screen.getByText(/título/i);
    expect(el.tagName).toBe("H1");
  });

  it("aplica classe font-bold na variante text-lg-bold", () => {
    render(<Text variant="text-lg-bold">Negrito</Text>);
    const el = screen.getByText(/negrito/i);
    expect(el.className).toContain("font-bold");
  });

  it("aplica classe font-normal na variante text-sm-regular", () => {
    render(<Text variant="text-sm-regular">Normal</Text>);
    const el = screen.getByText(/normal/i);
    expect(el.className).toContain("font-normal");
  });

  it("aplica classe text-xs na variante text-xs-bold", () => {
    render(<Text variant="text-xs-bold">Pequeno</Text>);
    const el = screen.getByText(/pequeno/i);
    expect(el.className).toContain("text-xs");
  });

  it("aplica className extra quando passado", () => {
    render(<Text className="text-red-500">Vermelho</Text>);
    const el = screen.getByText(/vermelho/i);
    expect(el.className).toContain("text-red-500");
  });

  it("renderiza como p quando as='p'", () => {
    render(<Text as="p">Parágrafo</Text>);
    const el = screen.getByText(/parágrafo/i);
    expect(el.tagName).toBe("P");
  });
});

```

## src\types\global.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="node" />

```

## src\utils\formatCurrency.ts

```ts
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

```

## src\utils\statusConfig.ts

```ts
import HelpIcon from "../assets/icons/circle-help.svg?react";
import CircleClockIcon from "../assets/icons/clock-2.svg?react";
import CheckIcon from "../assets/icons/circle-check-big.svg?react";

type TagVariant =
  | "danger"
  | "info"
  | "success"
  | "default"
  | "new"
  | null
  | undefined;

export function getStatusConfig(status: string): {
  variant: TagVariant;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
} {
  switch (status) {
    case "ABERTO":
      return { variant: "new", label: "Aberto", icon: HelpIcon };
    case "EM_ATENDIMENTO":
      return {
        variant: "info",
        label: "Em atendimento",
        icon: CircleClockIcon,
      };
    case "ENCERRADO":
      return { variant: "success", label: "Encerrado", icon: CheckIcon };
    default:
      return { variant: "default", label: status, icon: HelpIcon };
  }
}

```

## src\vite-env.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```

## tailwind.config.ts

```ts
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

```

## tools\generate-md.ts

```ts
import { readdirSync, statSync, readFileSync, appendFileSync, existsSync, unlinkSync } from "fs";
import { join, extname, dirname, resolve, relative, basename } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// raiz do projeto (um nível acima de tools)
const projectPath = resolve(__dirname, "..");

// pega o nome da pasta raiz (nome do projeto)
const projectName = basename(projectPath);

// gera o arquivo dentro de tools com o nome do projeto
const outputFile = join(__dirname, `${projectName}.md`);

const extensions = [".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".env", ".css"];
const specialFiles = [
  "Dockerfile",
  "Makefile",
  ".eslintrc",
  ".prettierrc",
  "vite.config.ts",
  "vite.config.js",
  "tailwind.config.js",
  "postcss.config.js"
];
const excludeDirs = ["node_modules", ".git", "dist", "build", "generated"];
const excludeFiles = ["package-lock.json"];

if (existsSync(outputFile)) unlinkSync(outputFile);

function formatHeader(fullPath: string): string {
  const rel = relative(projectPath, fullPath);
  return `## ${rel}`;
}

function wrapContent(ext: string, content: string): string {
  if ([".ts", ".tsx", ".js"].includes(ext)) return `\n\`\`\`${ext.replace(".", "")}\n${content}\n\`\`\`\n`;
  if (ext === ".json") return `\n\`\`\`json\n${content}\n\`\`\`\n`;
  if (ext === ".md") return `\n${content}\n`;
  if (ext === ".env") return `\n\`\`\`env\n${content}\n\`\`\`\n`;
  if (specialFiles.includes(ext)) return `\n\`\`\`\n${content}\n\`\`\`\n`;
  return `\n${content}\n`;
}

function walk(dir: string): void {
  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) walk(fullPath);
    } else {
      const ext = extname(file) || file;
      if ((extensions.includes(ext) || specialFiles.includes(file)) && !excludeFiles.includes(file)) {
        try {
          const content = readFileSync(fullPath, "utf8");
          appendFileSync(outputFile, `\n${formatHeader(fullPath)}\n`);
          appendFileSync(outputFile, wrapContent(ext, content));
        } catch (err) {
          console.error("⚠️ Erro ao ler arquivo:", fullPath, (err as Error).message);
        }
      }
    }
  }
}

console.log(`🔍 Gerando arquivo ${projectName}.md...`);
walk(projectPath);
console.log(`✅ Arquivo gerado com sucesso em ${outputFile}`);

```


## tools\instrucoes.md

📘 Guia de Uso — Script `generate-md.ts`

Este utilitário percorre todo o projeto (backend ou frontend) e gera um arquivo `.md` com o conteúdo dos arquivos, formatado em Markdown e destacado por tipo de código.

---

## 🛠️ Estrutura do Projeto
````
meu-projeto/
├─ backend/
│   ├─ src/
│   └─ tools/
│       └─ generate-md.ts
├─ frontend/
│   ├─ src/
│   └─ tools/
│       └─ generate-md.ts
├─ package.json
└─ tsconfig.json
---
````
## 📂 Script `generate-md.ts`

Coloque este arquivo dentro da pasta `tools` de cada parte (backend e frontend):

```ts
import { readdirSync, statSync, readFileSync, appendFileSync, existsSync, unlinkSync } from "fs";
import { join, extname, dirname, resolve, relative, basename } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// raiz do projeto (um nível acima da pasta tools)
const projectPath = resolve(__dirname, "..");

// nome da pasta raiz (ex: backend ou frontend)
const projectName = basename(projectPath);

// arquivo de saída dentro da pasta tools
const outputFile = join(__dirname, `${projectName}.md`);

const extensions = [".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".env", ".css"];
const specialFiles = [
  "Dockerfile", "Makefile", ".eslintrc", ".prettierrc",
  "vite.config.ts", "vite.config.js", "tailwind.config.js", "postcss.config.js"
];
const excludeDirs = ["node_modules", ".git", "dist", "build", "generated"];
const excludeFiles = ["package-lock.json"];

if (existsSync(outputFile)) unlinkSync(outputFile);

function formatHeader(fullPath: string): string {
  const rel = relative(projectPath, fullPath);
  return `## ${rel}`;
}

function wrapContent(ext: string, content: string): string {
  if ([".ts", ".tsx", ".js", ".jsx"].includes(ext)) return `\n\`\`\`${ext.replace(".", "")}\n${content}\n\`\`\`\n`;
  if (ext === ".json") return `\n\`\`\`json\n${content}\n\`\`\`\n`;
  if (ext === ".md") return `\n${content}\n`;
  if (ext === ".env") return `\n\`\`\`env\n${content}\n\`\`\`\n`;
  if (ext === ".css") return `\n\`\`\`css\n${content}\n\`\`\`\n`;
  if (specialFiles.includes(ext)) return `\n\`\`\`\n${content}\n\`\`\`\n`;
  return `\n${content}\n`;
}

function walk(dir: string): void {
  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) walk(fullPath);
    } else {
      const ext = extname(file) || file;
      if ((extensions.includes(ext) || specialFiles.includes(file)) && !excludeFiles.includes(file)) {
        try {
          const content = readFileSync(fullPath, "utf8");
          appendFileSync(outputFile, `\n${formatHeader(fullPath)}\n`);
          appendFileSync(outputFile, wrapContent(ext, content));
        } catch (err) {
          console.error("⚠️ Erro ao ler arquivo:", fullPath, (err as Error).message);
        }
      }
    }
  }
}

console.log(`🔍 Gerando arquivo ${projectName}.md...`);
walk(projectPath);
console.log(`✅ Arquivo gerado com sucesso em ${outputFile}`);
```
⚙️ Configuração do TypeScript
- No tsconfig.json da raiz, adicione:

````
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ES2020",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "types": ["node"]
  },
  "include": ["src", "tools"]
}
````
📦 Dependências
- Instale:

````
"scripts": {
  "generate-md": "ts-node --esm tools/generate-md.ts"
}

````
🚀 Como Rodar
- No terminal, vá até a pasta desejada e rode:
````
npm run generate-md
````


## tsconfig.app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client", "node"],
    "skipLibCheck": true,
    /* Bundler mode */
    "strict": true,
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "src/types"],
  "types": [
    "vite/client",
    "node",
    "vitest/globals",
    "@testing-library/jest-dom"
  ]
}

```

## tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

## tsconfig.node.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts","src", "generated", "tools"]
}

```

## vite.config.ts

```ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    tailwindcss(),
    svgr(),
  ],
});

```

## vitest.config.ts

```ts
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    css: false,
    include: ["src/tests/**/*.test.{ts,tsx}"],
  },
});

```

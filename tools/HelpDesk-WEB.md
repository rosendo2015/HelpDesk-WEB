
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
    "generate-md": "ts-node --esm tools/generate-md.ts"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "axios": "^1.16.1",
    "class-variance-authority": "^0.7.1",
    "jwt-decode": "^4.0.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-router": "^7.15.1",
    "react-router-dom": "^7.17.0",
    "tailwindcss": "^4.3.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/jwt-decode": "^2.2.1",
    "@types/node": "^24.13.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "ts-node": "^10.9.2",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10",
    "vite-plugin-svgr": "^5.2.0"
  }
}

```

## README.md

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


## src\components\Avatar\avatarVariants.ts

```ts
import { cva } from "class-variance-authority";

export const avatarVariants = cva(
    "flex items-center justify-center rounded-full font-bold text-white",
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
    }
);

```

## src\components\Avatar\index.tsx

```tsx
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
import React from "react"
import { Icon } from "../Icon"
import type { VariantProps } from "class-variance-authority"
import { buttonIconVariants, buttonTextVariants, buttonVariants } from "./buttonVariants"
import { Text } from "../Text"

interface ButtonProps extends
    Omit<React.ComponentProps<"button">, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]

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
            className={buttonVariants({ disabled, variant, size, className })}

            {...props}>
            {icon && <Icon
                svg={icon}
                className={buttonIconVariants({ variant, size: "md" })}
            />}
            <Text variant="text-sm-bold" className={buttonTextVariants({ variant })}>
                {children}
            </Text>
        </button>
    )
}
```

## src\components\ButtonIcon\buttonIconVariants.ts

```ts
import { cva } from "class-variance-authority";


export const buttonIconVariants = cva("flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-gray-100",
            secondary: "bg-gray-500 hover:bg-gray-400",
            link: "bg-transparent hover:bg-gray-500"
        },
        size: {
            md: "h-10 w-10",
            sm: "h-7 w-7"
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

export const buttonIconIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-600",
            secondary: "fill-gray-200 group-hover:fill-gray-100",
            link: "fill-gray-300 group-hover:fill-gray-100"
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
```

## src\components\ButtonIcon\index.tsx

```tsx
import React from "react";
import { Icon } from "../Icon";
import type { VariantProps } from "class-variance-authority";
import { buttonIconIconVariants, buttonIconVariants } from "./buttonIconVariants";

interface ButtonIconProps
    extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
};

export function ButtonIcon({
    variant,
    size,
    icon,
    disabled,
    className,
    ...props }: ButtonIconProps) {
    return (
        <button
            className={buttonIconVariants({ variant, size, disabled, className })}
            {...props}
        >
            {icon && <Icon svg={icon} className={buttonIconIconVariants({ variant, size, className })} />}
        </button>
    );
}

```

## src\components\Card\cardVariants.ts

```ts
import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg border border-solid border-gray-500 bg-gray-600", {
    variants: {
        size: {
            none: "",
            md: "p-4",
        }
    },
    defaultVariants: {
        size: "none"
    }
})
```

## src\components\Card\index.tsx

```tsx
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "./cardVariants";


interface CardProps extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
    as = "div",
    size,
    children,
    className,
    ...props
}: CardProps) {

    return React.createElement(
        as,
        {
            className: cardVariants({ size, className }),
            ...props
        },
        children
    )
}
```

## src\components\Container\containerVariants.ts

```ts
import { cva } from "class-variance-authority";


export const containerVariants = cva("", {
    variants: {
        size: {
            default: "w-full",
            md: "w-93.75 sm:max-w-170 px-2 ",
        }
    },
    defaultVariants: {
        size: "default"
    }
})
```

## src\components\Container\index.tsx

```tsx
import React from "react";
import { containerVariants } from "./containerVariants";
import type { VariantProps } from "class-variance-authority";

interface ContainerProps extends
    VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements,
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
            className: containerVariants({ size: "md", className }),
            ...props
        },
        children
    )
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
import { type VariantProps } from "class-variance-authority";
import { iconVariants } from "./iconVariants";

interface IconProps
    extends Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({ svg: SvgComponent, animate, color, size, className, ...props }: IconProps) {
    return (
        <SvgComponent className={iconVariants({ animate, color, size, className })} {...props} />
    );
}

```

## src\components\InputSelect\index.tsx

```tsx
import { useState } from "react"
import { type VariantProps } from "class-variance-authority"
import { cx } from "class-variance-authority"
import { inputSelectVariants } from "./inputSelectVariants"

import ChevronDown from "../../assets/icons/chevron-down.svg?react"
import ChevronUp from "../../assets/icons/chevron-up.svg?react"
import Check from "../../assets/icons/check.svg?react"
import AlertCircle from "../../assets/icons/circle-alert.svg?react"
import { Icon } from "../Icon"
import { Text } from "../Text"

interface inputSelectProps
    extends VariantProps<typeof inputSelectVariants> {
    label: string
    options: string[]
    helperText?: string
    error?: boolean
    placeholder?: string
    onChange?: (value: string) => void // 🔹 nova prop
}

export function InputSelect({ label, options, helperText, placeholder, error, onChange }: inputSelectProps) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<string | null>(null)

    const toggleOpen = () => setOpen(!open)

    // 🔹 Atualiza estado interno e dispara para o pai
    const handleSelect = (option: string) => {
        setSelected(option)
        setOpen(false)
        onChange?.(option) // dispara para o pai
    }

    const state = error ? "error" : open ? "focus" : "default"

    return (
        <div className="group w-full flex flex-col gap-1 relative">
            <label
                className={cx(
                    "text-sm transition-all mt-4",
                    state === "error"
                        ? "text-red-500"
                        : state === "focus"
                            ? "text-blue-500"
                            : "text-gray-400"
                )}
            >
                <Text variant="text-sm-bold">{label}</Text>
            </label>

            <div
                onClick={toggleOpen}
                className={cx(inputSelectVariants({ state }))}
            >
                <span className={selected ? "text-gray-800" : "text-gray-400"}>
                    {selected || placeholder || "Selecione uma opção"}
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
                            key={option}
                            onClick={() => handleSelect(option)} // 🔹 usa a nova função
                            className={cx(
                                "py-2 px-2 rounded cursor-pointer flex justify-between items-center hover:bg-gray-500",
                                selected === option && "font-bold text-blue-500"
                            )}
                        >
                            {option}
                            {selected === option && <Icon svg={Check} color="blue" size="lg" />}
                        </div>
                    ))}
                </div>
            )}

            {helperText && (
                <span
                    className={cx(
                        "text-xs mt-1 flex items-center gap-1 italic",
                        state === "error" ? "text-red-500" : "text-gray-400"
                    )}
                >
                    {state === "error" && <Icon svg={AlertCircle} fill="red" size="md" />}
                    {helperText}
                </span>
            )}
        </div>
    )
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

## src\components\Link\index.tsx

```tsx
//Link/index.tsx
import { NavLink, type NavLinkProps } from "react-router-dom"
import { Icon } from "../Icon"
import { Text } from "../Text"
import clsx from "clsx"
import { linkIconVariants, linkTextVariants, linkVariants } from "./linkVariants"

interface LinkProps extends Omit<NavLinkProps, "className" | "children"> {
    variant?: "primary" | "secondary" | "tertiary" | "subtitle" | "active"
    size?: "lg" | "md" | "sm"
    disabled?: boolean
    className?: string
    children?: React.ReactNode
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export function Link({
    to,
    variant = "primary",
    size = "md",
    disabled = false,
    className,
    children,
    icon,
    ...props
}: LinkProps) {
    return (
        <NavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                clsx(
                    linkVariants({
                        variant: isActive ? "active" : variant,
                        size,
                        disabled,
                    }),
                    "group",
                    className
                )
            }
            aria-disabled={disabled}
        >
            {({ isActive }) => (
                <>
                    {icon && (
                        <Icon
                            svg={icon}
                            className={linkIconVariants({
                                variant: isActive ? "active" : variant,
                                size,
                            })}
                        />
                    )}
                    <Text
                        variant="text-sm-bold"
                        className={linkTextVariants({
                            variant: isActive ? "active" : variant,
                        })}
                    >
                        {children}
                    </Text>
                </>
            )}
        </NavLink>
    )
}


```

## src\components\Link\linkVariants.ts

```ts
// Link/linkVariants.ts
import { cva } from "class-variance-authority";

export const linkVariants = cva(
    "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "hover:text-blue-800 underline",
                secondary: "bg-transparent",
                tertiary: "bg-blue-dark text-gray-100 hover:text-gray-200 hover:bg-blue-light",
                subtitle: "bg-gray-500 hover:bg-gray-500",
                // 🟢 novo estado ativo
                active: "bg-blue-dark text-white hover:bg-blue-dark",
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
    }
)
    ;

export const linkIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-blue-600 group-hover:fill-blue-800",
            secondary: "fill-gray-600 group-hover:fill-gray-400",
            tertiary: "fill-gray-500 group-hover:fill-gray-700",
            subtitle: "fill-gray-400 group-hover:fill-gray-600",
            active: "fill-white", // 🟢 ícone branco quando ativo
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
})

export const linkTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-blue-600 group-hover:text-blue-800",
            secondary: "text-gray-500 group-hover:text-gray-400",
            tertiary: "text-gray-500 group-hover:text-gray-700",
            subtitle: "text-gray-400 group-hover:text-gray-600",
            active: "text-white", // 🟢 texto branco quando ativo
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

## src\components\Sidebar\index.tsx

```tsx
import { Link } from "../Link"
import ClipboardList from "../../assets/icons/clipboard-list.svg?react"
import Plus from "../../assets/icons/plus.svg?react"
import Users from "../../assets/icons/users.svg?react"
import BriefCase from "../../assets/icons/briefcase-business.svg?react"
import Wrench from "../../assets/icons/wrench.svg?react"

interface SidebarProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    isOpen?: boolean
    onClose?: () => void
}

export function Sidebar({ role = "CLIENTE", onClose }: SidebarProps) {
    return (
        <aside className="h-full ">
            {/* Logo no topo */}
            <div className="flex items-center justify-center ">

                <nav className="w-full flex flex-col gap-4">
                    {role === "ADMIN" && (
                        <>
                            <Link
                                to="/admin/chamados"
                                icon={ClipboardList}
                                variant="secondary"
                                size="lg" className=""
                                onClick={onClose}>Chamados
                            </Link>
                            <Link
                                to="/admin/tecnicos"
                                icon={Users}
                                variant="secondary"
                                size="lg" className="" onClick={onClose}>Técnicos</Link>
                            <Link
                                to="/admin/clientes"
                                icon={BriefCase}
                                variant="secondary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Clientes
                            </Link>
                            <Link
                                to="/admin/servicos"
                                icon={Wrench}
                                variant="secondary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Serviços
                            </Link>
                        </>
                    )}

                    {role === "TECNICO" && (
                        <>
                            <Link
                                to="/tecnico/meus-chamados"
                                icon={ClipboardList}
                                variant="tertiary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Meus chamados
                            </Link>

                        </>
                    )}

                    {role === "CLIENTE" && (
                        <>
                            <Link
                                to="/cliente/chamados-cliente"
                                icon={ClipboardList} variant="secondary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Meus chamados
                            </Link>
                            <Link
                                to="/cliente/novo-chamado"
                                icon={Plus}
                                variant="secondary"
                                size="lg"
                                onClick={onClose}>
                                Criar chamado
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </aside>

    )
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

export const tagsVariants = cva("flex items-center justify-center text-xs-bold rounded-full", {
    variants: {
        variant: {
            "new": "border border-feedback-open/20 bg-bg-feedback-open-20",
            "info": "border border-feedback-progress/20 bg-bg-feedback-info-20",
            "success": "border border-feedback-done/20 bg-bg-feedback-success-20",
            "danger": "border border-feedback-danger/20 bg-bg-feedback-danger-20",
            "default": "border border-gray-500/20 bg-gray-500",
        },
        size: {
            "md-width-text": "px-1.5 py-1.5 rounded-full",
            "md-height-text": "w-7 h-7 rounded-full",
        },
        display: {
            "text": "gap-1",
            "icon": "flex items-center justify-center",
        },
        format: {
            "default": "",
            "circle": "rounded-full",
            "squared": "p-1.5 rounded-sm hover:bg-gray-100/20",
        }
    },
    defaultVariants: {
        variant: "new",
        size: "md-width-text",
        display: "text",
        format: "default"
    }
})

export const tagsTextVariants = cva("", {
    variants: {
        variant: {
            "new": "text-feedback-open",
            "info": "text-feedback-progress",
            "success": "text-feedback-done",
            "danger": "text-feedback-danger",
            "default": "text-gray-100",
        }
    },
    defaultVariants: {
        variant: "new"
    }
})

export const tagsIconVariants = cva("w-4 h-4", {
    variants: {
        variant: {
            "new": "fill-feedback-open",
            "info": "fill-feedback-progress",
            "success": "fill-feedback-done",
            "danger": "fill-feedback-danger",
            "default": "fill-gray-100",
        }
    }
})

```

## src\components\TagTime\index.tsx

```tsx
import { Text } from "../Text";
import type { VariantProps } from "class-variance-authority";
import { tagTimeTextVariants, tagTimeVariants, tagTimeIconVariants } from "./tagTimeVariants";
import { Icon } from "../Icon";

interface TagTimeProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof tagTimeVariants> {
    size?: "md";
    children: React.ReactNode;
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export function TagTime({
    variant,
    size,
    className,
    children,
    svg,
    ...props
}: TagTimeProps) {
    return (
        <div className={tagTimeVariants({ variant, className, size, })} {...props}>
            <Text variant={"text-xs-bold"} className={tagTimeTextVariants({ variant })}>{children}</Text>
            {
                variant === "selected" && svg && (
                    <Icon svg={svg} className={tagTimeIconVariants({ variant })} />
                )}
        </div>
    )
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
import React from "react";
import { type VariantProps } from "class-variance-authority"
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
            className: textVariants({ variant, className }),
            ...props
        },
        children
    )
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

## src\contexts\AuthContext.ts

```ts
import { createContext } from "react"
import type { User } from "../types/User"

interface AuthContextData {
    user: User | null
    token: string | null
    signIn: (data: { token: string; user: User }) => void
    signOut: () => void
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)


```

## src\contexts\AuthProvider.tsx

```tsx
import { useState, useEffect, type ReactNode, startTransition } from "react"
import { AuthContext } from "./AuthContext"
import type { User } from "../types/User"
import { jwtDecode } from "jwt-decode"
import { api } from "../services/api"

interface Props {
  children: ReactNode
}

interface DecodedToken {
  exp: number
  sub: string
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadStoredData = async () => {
      const storedUser = localStorage.getItem("@helpdesk:user")
      const storedToken = localStorage.getItem("@helpdesk:token")

      if (!storedUser || !storedToken) {
        setIsLoading(false)
        return
      }

      try {
        const decoded: DecodedToken = jwtDecode(storedToken)
        const isExpired = decoded.exp * 1000 < Date.now()

        if (isExpired) {
          signOut()
          setIsLoading(false)
          return
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`

        // 🔹 Usa startTransition para evitar render síncrono
        startTransition(() => {
          setUser(JSON.parse(storedUser))
          setToken(storedToken)
        })
      } catch (error) {
        console.error("Erro ao carregar token:", error)
        signOut()
      } finally {
        setTimeout(() => setIsLoading(false), 100)
      }
    }

    loadStoredData()
  }, [])

  function signIn({ token, user }: { token: string; user: User }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user))
    localStorage.setItem("@helpdesk:token", token)
    setUser(user)
    setToken(token)
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  function signOut() {
    localStorage.removeItem("@helpdesk:user")
    localStorage.removeItem("@helpdesk:token")
    setUser(null)
    setToken(null)
    delete api.defaults.headers.common["Authorization"]
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut, isLoading }}>
      {isLoading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  )
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
import { useState, type ReactNode } from "react"

import { Logo } from "../components/Logo"
import { Sidebar } from "../components/Sidebar"
import { Avatar } from "../components/Avatar"
import { ButtonIcon } from "../components/ButtonIcon"

import MenuIcon from "../assets/icons/menu.svg?react"
import XIcon from "../assets/icons/x.svg?react"

interface AppLayoutProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    children: ReactNode
}

export function AppLayout({ role = "CLIENTE", children }: AppLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) // ✅ aqui está o useState

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
                    <Logo color="white" size="md" orientation="horizontal" role={role} />
                </div>
                <Avatar name="Usuario Cliente" size="sm" />
            </header>

            {/* Sidebar mobile com animação */}
            <aside
                className={`fixed inset-0 z-50 bg-gray-100 flex flex-col justify-between p-6 lg:hidden transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="mb-8 border-b border-gray-300 pb-4 flex justify-between items-center">
                    <ButtonIcon
                        icon={XIcon}
                        variant="primary"
                        onClick={() => setIsSidebarOpen(false)} // ✅ fecha sidebar
                    />
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                    <Avatar name="Usuario Cliente" size="sm" />
                </div>
                <Sidebar role={role} onClose={() => setIsSidebarOpen(false)} />
            </aside>

            {/* Sidebar desktop */}
            <aside className="hidden lg:flex w-64 bg-gray-100 flex-col justify-between p-6">
                <div className="mb-8 border-b border-gray-300 pb-4">
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                </div>
                <Sidebar role={role} />
                <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5">
                    <Avatar name="Usuario Cliente" size="sm" />
                    <div>
                        <p>Usuário {role}</p>
                        <p>user.{role.toLowerCase()}@test.com</p>
                    </div>
                </footer>
            </aside>

            {/* Conteúdo principal */}
            <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
                {children}
            </main>
        </div>
    )
}

```

## src\layout\AuthLayout.tsx

```tsx
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
```

## src\layout\layoutVariants.ts

```ts
import { cva } from "class-variance-authority";

export const authContainer = cva("flex h-screen justify-center items-center relative overflow-hidden sm:justify-end sm:items-end", {
    variants: {
        theme: {
            dark: "bg-gray-100",
            light: "bg-gray-600",
        },
    },
    defaultVariants: {
        theme: "dark",
    },
});

export const authBackground = cva("absolute inset-0 bg-cover bg-center opacity-60", {
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
});

export const authContent = cva("h-206 sm:h-[47.825rem] bg-gray-600 relative z-10 rounded-tl-[1.25rem] px-35 py-12 ");

```

## src\main.tsx

```tsx
//main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/appRoutes'
import './index.css'

import { AuthProvider } from "./contexts/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

```

## src\pages\admin\adminVariants.ts

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

## src\pages\admin\ChamadosAdmin.tsx

```tsx
import { useEffect, useState } from "react"
import { Text } from "../../components/Text"
import { Icon } from "../../components/Icon"
import { Link } from "../../components/Link"
import { Tags } from "../../components/Tags"
import { Avatar } from "../../components/Avatar"

import PenLineIcon from "../../assets/icons/pen-line.svg?react"

import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";

import { api } from "../../services/api"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoFormatado {
    id: string
    title: string
    cliente: string
    tecnico: string
    status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO"
    totalPrice: number
    updatedAt: string
    createdAt?: string
    services: Servico[]
}

export function ChamadosAdmin() {
    const [chamados, setChamados] = useState<ChamadoFormatado[]>([])

    useEffect(() => {
        api.get(`/chamados`)
            .then(res => {

                setChamados(res.data)
            })
            .catch(err => console.error("Erro ao buscar chamados:", err))
    }, [])
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Chamados
                </Text>
            </header>

            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr>
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Atualizado em</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Id</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Título e Serviço</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Valor total</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Cliente</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Técnico</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Status</th>
                            <th className="px-3 py-2 sm:px-4 text-left"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {chamados.map((chamado) => (
                            <tr key={chamado.id} className="border-t border-gray-500">

                                <td className="px-3 py-2 sm:px-4 whitespace-nowrap">
                                    {new Date(chamado.updatedAt).toLocaleString()}
                                </td>

                                <td className="px-3 py-2 sm:px-4 max-w-20 truncate hidden md:table-cell">
                                    <Text variant="text-sm-bold" >{chamado.id}</Text>
                                </td>

                                <td className="px-3 py-2 sm:px-4">
                                    <Text variant="text-sm-bold">{chamado.title}</Text>
                                    {chamado.services && chamado.services.map(item => (
                                        <div key={item.id}>
                                            <Text variant="text-sm-regular" className="hidden md:table-cell">{item.nome}</Text>
                                        </div>
                                    ))}
                                </td>
                                <td className="hidden md:table-cell">
                                    <Text variant="text-sm-bold">
                                        {chamado.totalPrice.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </Text>
                                </td>
                                <td className="px-3 py-2 sm:px-4 hidden md:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.cliente} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.cliente}
                                        </Text>
                                    </div>
                                </td>

                                <td className="px-3 py-2 sm:px-4 hidden md:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.tecnico} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.tecnico}
                                        </Text>
                                    </div>
                                </td>
                                <td className="">
                                    <td className="px-2 py-2">
                                        <Tags
                                            variant={
                                                chamado.status === "ABERTO"
                                                    ? "danger"
                                                    : chamado.status === "EM_ATENDIMENTO"
                                                        ? "info"
                                                        : "success"
                                            }
                                            size="md-width-text"
                                            display="text"
                                            svg={
                                                chamado.status === "ABERTO"
                                                    ? CircleHelpIcon
                                                    : CircleClockIcon
                                            }
                                        >
                                            {chamado.status === "ABERTO"
                                                ? "Aberto"
                                                : chamado.status === "EM_ATENDIMENTO"
                                                    ? "Em andamento"
                                                    : "Concluído"}
                                        </Tags>
                                    </td>
                                </td>
                                <td className="px-3 py-2 sm:px-4 ">
                                    <div className="flex items-center justify-end">
                                        <Link to={`/admin/chamados/${chamado.id}`} variant="subtitle" size="md">
                                            <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\admin\DashboardAdmin.tsx

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

## src\pages\admin\ListClientes.tsx

```tsx
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import TrachIcon from "../../assets/icons/trash.svg?react";

export function ClientesAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Clientes
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Nome</th>
                            <th className="px-3 py-2 sm:px-4 md:truncate md:w-30 hidden md:table-cell text-left">Email</th>
                            <th className="px-3 py-2 sm:px-4  hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Avatar name="Jão Silva" />
                                    <Text variant="text-sm-bold">João Silva</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text>joao.silva@teste.com</Text>
                            </td>

                            <td className="px-3 py-2 sm:px-4">
                                <div className="flex items-center justify-end gap-3 text-right">
                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={TrachIcon} className="w-4 h-4 fill-red-500" />
                                    </Link>

                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\admin\ListTecnicos.tsx

```tsx
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import { Avatar } from "../../components/Avatar";
import { TagTime } from "../../components/TagTime";

export function TecnicosAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Técnicos
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Nome</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Email</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Disponibilidade</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Avatar name="Jão Silva" />
                                    <Text variant="text-sm-bold">João Silva</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text>joao.silva@teste.com</Text>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <div className=" flex gap-3">
                                    <TagTime>08:00</TagTime>
                                    <TagTime>09:00</TagTime>
                                    <TagTime>10:00</TagTime>
                                    <TagTime>11:00</TagTime>
                                    <TagTime>+4</TagTime>
                                </div>
                            </td>
                            <td className="px-3 py-2 sm:px-4 text-left">
                                <div className="flex items-center justify-end">
                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-500" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\admin\ServicosAdmin.tsx

```tsx
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import BanIcon from "../../assets/icons/ban.svg?react"

import { Tags } from "../../components/Tags";

export function ServicosAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Serviços
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Tiítulo</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Valor</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Status</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Text variant="text-sm-bold">Instação de Rede</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text variant="text-sm-regular">R$ 180,00</Text>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <div className=" flex gap-3">
                                    <Tags variant="success">Ativo</Tags>
                                </div>
                            </td>
                            <td className="px-3 py-2 sm:px-4 text-left">
                                <div className="flex items-center justify-end">
                                    <Link to={``} variant="secondary" size="md">
                                        <Icon svg={BanIcon} />
                                        <Text variant="text-sm-bold">Desativar</Text>
                                    </Link>
                                    <Link to={``} variant="subtitle">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-500" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\App.tsx

```tsx
export function App() {
  return (
    <h1>teste</h1>
  );
}





```

## src\pages\cliente\ChamadosCliente.tsx

```tsx
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";
import EyeIcon from "../../assets/icons/eye.svg?react";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import { Link } from "../../components/Link";
import { Icon } from "../../components/Icon";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Chamado {
    id: string
    title: string
    status: "ABERTO" | "EM_ANDAMENTO" | "CONCLUIDO"
    updatedAt: string
    totalPrice: number
    cliente: string
    tecnico: string
    services: {
        nome: string
        valor: number
    }[]
}

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
    role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
    const [chamados, setChamados] = useState<Chamado[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchChamados() {
            try {
                const response = await api.get<Chamado[]>("/chamados")
                setChamados(response.data)
            } catch (error) {
                console.error("Erro ao buscar chamados:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchChamados()
    }, [])

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
                            <th className="px-4 py-2" colSpan={2}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={8} className="text-center py-4">Carregando...</td>
                            </tr>
                        ) : (
                            chamados.map(chamado => (
                                <tr key={chamado.id} className="border-t border-gray-500">
                                    <td className="px-4 py-2">
                                        {new Date(chamado.updatedAt).toLocaleString("pt-BR")}
                                    </td>

                                    <td className="px-4 py-2 font-bold hidden md:table-cell max-w-20 truncate">{chamado.id}</td>

                                    <td className="px-4 py-2 font-bold max-w-50.5 truncate">{chamado.title}</td>

                                    <td className="px-4 py-2 hidden md:table-cell max-w-44 truncate">
                                        {chamado.services.map(s => s.nome).join(", ")}
                                    </td>

                                    <td className="px-4 py-2 hidden md:table-cell">
                                        R$ {chamado.totalPrice.toFixed(2)}
                                    </td>

                                    <td className="px-4 py-2 hidden md:table-cell">
                                        <div className="flex items-center">
                                            <Avatar size="xs" name={chamado.tecnico} />
                                            <span className="ml-2">{chamado.tecnico}</span>
                                        </div>
                                    </td>

                                    <td className="px-2 py-2">
                                        <Tags
                                            variant={
                                                chamado.status === "ABERTO"
                                                    ? "danger"
                                                    : chamado.status === "EM_ANDAMENTO"
                                                        ? "info"
                                                        : "success"
                                            }
                                            size="md-width-text"
                                            display="text"
                                            svg={
                                                chamado.status === "ABERTO"
                                                    ? CircleHelpIcon
                                                    : CircleClockIcon
                                            }
                                        >
                                            {chamado.status === "ABERTO"
                                                ? "Aberto"
                                                : chamado.status === "EM_ANDAMENTO"
                                                    ? "Em andamento"
                                                    : "Concluído"}
                                        </Tags>
                                    </td>

                                    <td className="px-2 py-2">
                                        <Link to={`/cliente/chamados/${chamado.id}`} variant="subtitle" size="md">
                                            <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                                        </Link>
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

## src\pages\cliente\clienteVariants.ts

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

## src\pages\cliente\DashboardCliente.tsx

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

## src\pages\cliente\DetailChamadoCliente.tsx

```tsx

```

## src\pages\cliente\NovoChamado.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";

interface NovoChamado {
    id: string
    title: string
    status: "ABERTO" | "EM_ANDAMENTO" | "CONCLUIDO"
    updatedAt: string
    totalPrice: number
    cliente: string
    tecnico: string
    services: {
        nome: string
        valor: number
    }[]
}

// Interface tipando os props
interface NovoChamadoProps {
    titulo: string
    description: string
}

export function NovoChamado({ titulo, description }: NovoChamadoProps) {
    return (
        <div className="md:max-w-200 mt-14 mx-auto">
            <header className="w-200 mb-6">
                <Text as="h1" variant="text-xl-bold" className="text-blue-dark">Novo chamado</Text>
            </header>
            <Container className="w-full flex  flex-col gap-6 md:flex-row">
                <Card className="p-8 md:max-w-120 w-full">
                    <Text as="h2" variant="heading-md-bold">Informações</Text>
                    <Text variant="text-xs-regular" className="text-gray-400">
                        Configure os dias e horários em que você está disponível para atender chamados
                    </Text>
                    <form>
                        <InputText label="Título" placeholder="Digite um título para o chamado" />
                        <Textarea
                            label="Descrição"
                            placeholder="Descreva o que está acontecendo"
                        />
                        <InputSelect
                            label="Categoria"
                            placeholder="Selecione a categoria de atendimento"
                            options={["Item 1", "Item 2", "Item 3"]}

                        />
                    </form>
                </Card>
                <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
                    <div>
                        <Text as="h2" variant="heading-md-bold">Resumo</Text>
                        <Text variant="text-xs-regular" className="text-gray-300">Valores e detalhes</Text>
                    </div>
                    <div>
                        <Text as="h3" variant="text-xs-regular" className="text-gray-400">Categoria de serviço</Text>
                        <Text variant="text-sm-regular" className="text-gray-200">Erro de rede</Text>
                    </div>
                    <div>
                        <Text as="h3">Custo inicial</Text>
                        <Text>R$ 200,00</Text>
                    </div>
                    <Text variant="text-xs-regular" className="text-gray-300">
                        O chamado será automaticamente atribuído a um técnico disponível
                    </Text>
                    <Button>Criar chamado</Button>

                </Card>
            </Container>
        </div>
    )
}

```

## src\pages\PageComponents.tsx

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

import { useState } from "react"
import { Card } from "../components/Card";
import { Container } from "../components/Container";

export function Components() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Simples validação: senha precisa ter pelo menos 8 caracteres
    if (!email || !password) {
      setError(true)
      return
    }
    if (password.length < 8) {
      setError(true)
      return
    } else {
      setError(false)
      alert("Formulário enviado com sucesso!")
    }
  }
  return (
    <Container>
      <div className="flex flex-col gap-2 p-4">
        <Text variant={"text-xl-bold"} className="text-blue-dark">Hello, World!</Text>
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
          <Tags variant="new" svg={NewIcon} >LABEL</Tags>
          <Tags variant="info" svg={ClockIcon}>LABEL</Tags>
          <Tags variant="success" svg={CircleCheckIcon}>LABEL</Tags>
          <Tags variant="danger" svg={NewIcon}>LABEL</Tags>
        </div>
        <div className="flex gap-4">
          <TagTime>09:00</TagTime>
          <TagTime variant="selected" svg={XIcon}>15:00</TagTime>
          <TagTime variant="disabled"> 08:30 </TagTime>
        </div>
        <div className="flex gap-4">
          <Button icon={LinePencil} variant="primary">Primary</Button>
          <Button icon={LinePencil} size="sm" variant="primary">Primary</Button>
          <Button icon={LinePencil} disabled>Disabled</Button>
          <Button icon={LinePencil} variant="secondary">Secondary</Button>
          <Button icon={LinePencil} variant="link">Link</Button>
          <Button icon={LinePencil} size="sm" variant="link">Link</Button>
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


          <Button type="submit" size="md" variant="primary">Enviar</Button>
        </form>


        <div className="flex p-8 bg-gray-600">
          <Card size="md">Hello World.</Card>
        </div>

      </div>
    </Container>
  )
}





```

## src\pages\SignIn.tsx

```tsx
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { api } from "../services/api";
import { z, ZodError } from "zod";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";


const signInSchema = z.object({
    email: z.string().email({ message: "E-Mail inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" })
})

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const { signIn } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = signInSchema.parse({
                email, password
            })
            const response = await api.post("/sessions", data);


            signIn({
                token: response.data.token,
                user: response.data.user
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
            console.log(error)
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            setError("Falha ao autenticar. Verifique suas credenciais.");
        }
    };

    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
            <header>
                <Logo color="blue" />
            </header>
            <main className="flex flex-col gap-3 w-85.5 sm:w-100">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Acesse o portal</Text>
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

                        <Button size="lg" className="mt-4" type="submit">Enviar</Button>
                    </form>
                </Card>
                <Card className="flex flex-col w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Ainda não tem conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">
                        Cadastre agora mesmo
                    </Text>
                    <Link to="/register" size="lg" variant="subtitle" className="mt-5">
                        Criar conta
                    </Link>
                </Card>
            </main>
        </Container>
    );
}

```

## src\pages\SignUp.tsx

```tsx
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import {jwtDecode} from "jwt-decode"
import { InputSelect } from "../components/InputSelect";

interface  TokenPayload{
    role: "ADMIN"|"TECNICO"|"CLIENTE";
    sub: string;
    exp: number;
}

const token = localStorage.getItem("token");
const currentUser = token ? jwtDecode<TokenPayload>(token) : null;
const isAdmin = currentUser?.role === "ADMIN";

const signUpSchema = z.object({
    name: z.string().trim().min(1, { message: "Informe o nome completo." }),
    email: z.string().email({ message: "E-Mail inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" })
})

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("CLIENTE")


    const navigate = useNavigate()

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const data = signUpSchema.parse({
                name, email, password
            })

            // força cadastro como CLIENTE
            await api.post("/users", { ...data, role })

            if (confirm("Cadastrado com sucesso.")) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            alert("Não foi possivel cadastrar.")
        }
    }
    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
            <header>
                <Logo color="blue" />
            </header>
            <main className="flex flex-col gap-3 w-85.5 sm:w-100">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Crie sua conta</Text>
                    <Text as="span" variant="text-xs-regular" className="text-gray-300" >Informe seu nome, e-mail e senha</Text>

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
                        {isAdmin &&(                            
                            <InputSelect
                            label="Tipo de Usuário"
                            options={["CLIENTE","TECNICO","ADMIN"]}
                            placeholder="Escolha o perfil do usuário"
                            error={false}
                            onChange={(value)=>setRole(value)}
                            />
                        )}

                        <Button size="lg" className="mt-4">Cadastrar</Button>
                    </form>
                </Card>
                <Card className="flex flex-col w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Já tem uma conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">Entre agora mesmo</Text>
                    <Link to="/login" size="lg" variant="subtitle" className="mt-5">Acessar conta</Link>

                </Card>
            </main>
        </Container>

    );
}
```

## src\pages\tecnico\ChamadosTecnico.tsx

```tsx
import { Text } from "../../components/Text"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoTecnicoFormatado {
    id: string
    title: string
    cliente: string
    tecnico: string
    status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO"
    totalPrice: number
    updatedAt: string
    createdAt?: string
    services: Servico[]
}

export function ChamadosTecnico() {

    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Meus chamados
                </Text>
            </header>


        </div>
    )
}


```

## src\pages\tecnico\DashboardTecnico.tsx

```tsx
import { Outlet } from "react-router";
import { AppLayout } from "../../layout/AppLayout";
import { tecnicoVariants } from "./tecnicoVariants";
import type { VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface ChamadoTecnico {
    id: string
    title: string
    descricao: string
    status: "ABERTO" | "EM_ANDAMENTO" | "ENCERRADO"
    updatedAt: string
    totalPrice: number
    tecnico: string
    cliente: string
}


interface TecnicoProps extends VariantProps<typeof tecnicoVariants> {
    tecnicoId?: string // 🔹 caso queira filtrar chamados por técnico
    chamados?: ChamadoTecnico[] // 🔹 se quiser passar os chamados via props
}

export function DashboardTecnico({ tecnicoId }: TecnicoProps) {
    const [chamados, setChamados] = useState<ChamadoTecnico[]>([])

    useEffect(() => {
        async function fetchChamados() {
            const response = await api.get(`/chamados/tecnico/${tecnicoId}`)
            setChamados(response.data)
        }
        fetchChamados()
    }, [tecnicoId])

    return (
        <AppLayout role="TECNICO">
            <Outlet context={{ chamados }} />
        </AppLayout>
    );
}
```

## src\pages\tecnico\tecnicoVariants.ts

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
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { DashboardCliente } from "../pages/cliente/DashboardCliente";
import { DashboardAdmin } from "../pages/admin/DashboardAdmin";
import { ChamadosAdmin } from "../pages/admin/ChamadosAdmin";
import { PrivateRoute } from "./PrivateRoute";
import { ChamadosCliente } from "../pages/cliente/ChamadosCliente";
import { NovoChamado } from "../pages/cliente/NovoChamado";
import { DashboardTecnico } from "../pages/tecnico/DashboardTecnico";
import { ChamadosTecnico } from "../pages/tecnico/ChamadosTecnico";
import { TecnicosAdmin } from "../pages/admin/ListTecnicos";
import { ClientesAdmin } from "../pages/admin/ListClientes";
import { ServicosAdmin } from "../pages/admin/ServicosAdmin";

export function AppRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
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
                <Route path="tecnicos" element={<TecnicosAdmin />} />
                <Route path="clientes" element={<ClientesAdmin />} />
                <Route path="servicos" element={<ServicosAdmin />} />
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

            </Route>


            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}


```

## src\routes\PrivateRoute.tsx

```tsx
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import type { JSX } from "react"

interface Props {
    children: JSX.Element
    roles?: string[]
}

export function PrivateRoute({ children, roles }: Props) {
    const { user, isLoading } = useAuth()

    // 🔹 Enquanto o AuthProvider ainda está carregando, não renderiza nada
    if (isLoading) {
        return <div>Carregando...</div> // ou um splash elegante
    }

    // 🔹 Se não há usuário após o carregamento, redireciona
    if (!user) {
        return <Navigate to="/login" replace />
    }

    // 🔹 Se há restrição de papel (role)
    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/login" replace />
    }

    return children
}

```

## src\services\api.ts

```ts
import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3333",
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

```

## src\types\global.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="node" />

```

## src\types\User.ts

```ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "TECNICO" | "CLIENTE";
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
    "generate-md": "ts-node --esm tools/generate-md.ts"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "axios": "^1.16.1",
    "class-variance-authority": "^0.7.1",
    "jwt-decode": "^4.0.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-router": "^7.15.1",
    "react-router-dom": "^7.17.0",
    "tailwindcss": "^4.3.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/jwt-decode": "^2.2.1",
    "@types/node": "^24.13.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "ts-node": "^10.9.2",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10",
    "vite-plugin-svgr": "^5.2.0"
  }
}

```

## README.md

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


## src\components\Avatar\avatarVariants.ts

```ts
import { cva } from "class-variance-authority";

export const avatarVariants = cva(
    "flex items-center justify-center rounded-full font-bold text-white",
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
    }
);

```

## src\components\Avatar\index.tsx

```tsx
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
import React from "react"
import { Icon } from "../Icon"
import type { VariantProps } from "class-variance-authority"
import { buttonIconVariants, buttonTextVariants, buttonVariants } from "./buttonVariants"
import { Text } from "../Text"

interface ButtonProps extends
    Omit<React.ComponentProps<"button">, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]

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
            className={buttonVariants({ disabled, variant, size, className })}

            {...props}>
            {icon && <Icon
                svg={icon}
                className={buttonIconVariants({ variant, size: "md" })}
            />}
            <Text variant="text-sm-bold" className={buttonTextVariants({ variant })}>
                {children}
            </Text>
        </button>
    )
}
```

## src\components\ButtonIcon\buttonIconVariants.ts

```ts
import { cva } from "class-variance-authority";


export const buttonIconVariants = cva("flex items-center justify-center cursor-pointer transition rounded-[0.3125rem] group gap-2", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-gray-100",
            secondary: "bg-gray-500 hover:bg-gray-400",
            link: "bg-transparent hover:bg-gray-500"
        },
        size: {
            md: "h-10 w-10",
            sm: "h-7 w-7"
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

export const buttonIconIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-600",
            secondary: "fill-gray-200 group-hover:fill-gray-100",
            link: "fill-gray-300 group-hover:fill-gray-100"
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
```

## src\components\ButtonIcon\index.tsx

```tsx
import React from "react";
import { Icon } from "../Icon";
import type { VariantProps } from "class-variance-authority";
import { buttonIconIconVariants, buttonIconVariants } from "./buttonIconVariants";

interface ButtonIconProps
    extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
};

export function ButtonIcon({
    variant,
    size,
    icon,
    disabled,
    className,
    ...props }: ButtonIconProps) {
    return (
        <button
            className={buttonIconVariants({ variant, size, disabled, className })}
            {...props}
        >
            {icon && <Icon svg={icon} className={buttonIconIconVariants({ variant, size, className })} />}
        </button>
    );
}

```

## src\components\Card\cardVariants.ts

```ts
import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg border border-solid border-gray-500 bg-gray-600", {
    variants: {
        size: {
            none: "",
            md: "p-4",
        }
    },
    defaultVariants: {
        size: "none"
    }
})
```

## src\components\Card\index.tsx

```tsx
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "./cardVariants";


interface CardProps extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
    as = "div",
    size,
    children,
    className,
    ...props
}: CardProps) {

    return React.createElement(
        as,
        {
            className: cardVariants({ size, className }),
            ...props
        },
        children
    )
}
```

## src\components\Container\containerVariants.ts

```ts
import { cva } from "class-variance-authority";


export const containerVariants = cva("", {
    variants: {
        size: {
            default: "w-full",
            md: "w-93.75 sm:max-w-170 px-2 ",
        }
    },
    defaultVariants: {
        size: "default"
    }
})
```

## src\components\Container\index.tsx

```tsx
import React from "react";
import { containerVariants } from "./containerVariants";
import type { VariantProps } from "class-variance-authority";

interface ContainerProps extends
    VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements,
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
            className: containerVariants({ size: "md", className }),
            ...props
        },
        children
    )
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
import { type VariantProps } from "class-variance-authority";
import { iconVariants } from "./iconVariants";

interface IconProps
    extends Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({ svg: SvgComponent, animate, color, size, className, ...props }: IconProps) {
    return (
        <SvgComponent className={iconVariants({ animate, color, size, className })} {...props} />
    );
}

```

## src\components\InputSelect\index.tsx

```tsx
import { useState } from "react"
import { type VariantProps } from "class-variance-authority"
import { cx } from "class-variance-authority"
import { inputSelectVariants } from "./inputSelectVariants"

import ChevronDown from "../../assets/icons/chevron-down.svg?react"
import ChevronUp from "../../assets/icons/chevron-up.svg?react"
import Check from "../../assets/icons/check.svg?react"
import AlertCircle from "../../assets/icons/circle-alert.svg?react"
import { Icon } from "../Icon"
import { Text } from "../Text"

interface inputSelectProps
    extends VariantProps<typeof inputSelectVariants> {
    label: string
    options: string[]
    helperText?: string
    error?: boolean
    placeholder?: string
    onChange?: (value: string) => void // 🔹 nova prop
}

export function InputSelect({ label, options, helperText, placeholder, error, onChange }: inputSelectProps) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<string | null>(null)

    const toggleOpen = () => setOpen(!open)

    // 🔹 Atualiza estado interno e dispara para o pai
    const handleSelect = (option: string) => {
        setSelected(option)
        setOpen(false)
        onChange?.(option) // dispara para o pai
    }

    const state = error ? "error" : open ? "focus" : "default"

    return (
        <div className="group w-full flex flex-col gap-1 relative">
            <label
                className={cx(
                    "text-sm transition-all mt-4",
                    state === "error"
                        ? "text-red-500"
                        : state === "focus"
                            ? "text-blue-500"
                            : "text-gray-400"
                )}
            >
                <Text variant="text-sm-bold">{label}</Text>
            </label>

            <div
                onClick={toggleOpen}
                className={cx(inputSelectVariants({ state }))}
            >
                <span className={selected ? "text-gray-800" : "text-gray-400"}>
                    {selected || placeholder || "Selecione uma opção"}
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
                            key={option}
                            onClick={() => handleSelect(option)} // 🔹 usa a nova função
                            className={cx(
                                "py-2 px-2 rounded cursor-pointer flex justify-between items-center hover:bg-gray-500",
                                selected === option && "font-bold text-blue-500"
                            )}
                        >
                            {option}
                            {selected === option && <Icon svg={Check} color="blue" size="lg" />}
                        </div>
                    ))}
                </div>
            )}

            {helperText && (
                <span
                    className={cx(
                        "text-xs mt-1 flex items-center gap-1 italic",
                        state === "error" ? "text-red-500" : "text-gray-400"
                    )}
                >
                    {state === "error" && <Icon svg={AlertCircle} fill="red" size="md" />}
                    {helperText}
                </span>
            )}
        </div>
    )
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

## src\components\Link\index.tsx

```tsx
//Link/index.tsx
import { NavLink, type NavLinkProps } from "react-router-dom"
import { Icon } from "../Icon"
import { Text } from "../Text"
import clsx from "clsx"
import { linkIconVariants, linkTextVariants, linkVariants } from "./linkVariants"

interface LinkProps extends Omit<NavLinkProps, "className" | "children"> {
    variant?: "primary" | "secondary" | "tertiary" | "subtitle" | "active"
    size?: "lg" | "md" | "sm"
    disabled?: boolean
    className?: string
    children?: React.ReactNode
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export function Link({
    to,
    variant = "primary",
    size = "md",
    disabled = false,
    className,
    children,
    icon,
    ...props
}: LinkProps) {
    return (
        <NavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                clsx(
                    linkVariants({
                        variant: isActive ? "active" : variant,
                        size,
                        disabled,
                    }),
                    "group",
                    className
                )
            }
            aria-disabled={disabled}
        >
            {({ isActive }) => (
                <>
                    {icon && (
                        <Icon
                            svg={icon}
                            className={linkIconVariants({
                                variant: isActive ? "active" : variant,
                                size,
                            })}
                        />
                    )}
                    <Text
                        variant="text-sm-bold"
                        className={linkTextVariants({
                            variant: isActive ? "active" : variant,
                        })}
                    >
                        {children}
                    </Text>
                </>
            )}
        </NavLink>
    )
}


```

## src\components\Link\linkVariants.ts

```ts
// Link/linkVariants.ts
import { cva } from "class-variance-authority";

export const linkVariants = cva(
    "flex items-center justify-center transition rounded-[0.3125rem] group gap-2 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "hover:text-blue-800 underline",
                secondary: "bg-transparent",
                tertiary: "bg-blue-dark text-gray-100 hover:text-gray-200 hover:bg-blue-light",
                subtitle: "bg-gray-500 hover:bg-gray-500",
                // 🟢 novo estado ativo
                active: "bg-blue-dark text-white hover:bg-blue-dark",
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
    }
)
    ;

export const linkIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-blue-600 group-hover:fill-blue-800",
            secondary: "fill-gray-600 group-hover:fill-gray-400",
            tertiary: "fill-gray-500 group-hover:fill-gray-700",
            subtitle: "fill-gray-400 group-hover:fill-gray-600",
            active: "fill-white", // 🟢 ícone branco quando ativo
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
})

export const linkTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-blue-600 group-hover:text-blue-800",
            secondary: "text-gray-500 group-hover:text-gray-400",
            tertiary: "text-gray-500 group-hover:text-gray-700",
            subtitle: "text-gray-400 group-hover:text-gray-600",
            active: "text-white", // 🟢 texto branco quando ativo
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

## src\components\Sidebar\index.tsx

```tsx
import { Link } from "../Link"
import ClipboardList from "../../assets/icons/clipboard-list.svg?react"
import Plus from "../../assets/icons/plus.svg?react"
import Users from "../../assets/icons/users.svg?react"
import BriefCase from "../../assets/icons/briefcase-business.svg?react"
import Wrench from "../../assets/icons/wrench.svg?react"

interface SidebarProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    isOpen?: boolean
    onClose?: () => void
}

export function Sidebar({ role = "CLIENTE", onClose }: SidebarProps) {
    return (
        <aside className="h-full ">
            {/* Logo no topo */}
            <div className="flex items-center justify-center ">

                <nav className="w-full flex flex-col gap-4">
                    {role === "ADMIN" && (
                        <>
                            <Link
                                to="/admin/chamados"
                                icon={ClipboardList}
                                variant="secondary"
                                size="lg" className=""
                                onClick={onClose}>Chamados
                            </Link>
                            <Link
                                to="/admin/tecnicos"
                                icon={Users}
                                variant="secondary"
                                size="lg" className="" onClick={onClose}>Técnicos</Link>
                            <Link
                                to="/admin/clientes"
                                icon={BriefCase}
                                variant="secondary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Clientes
                            </Link>
                            <Link
                                to="/admin/servicos"
                                icon={Wrench}
                                variant="secondary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Serviços
                            </Link>
                        </>
                    )}

                    {role === "TECNICO" && (
                        <>
                            <Link
                                to="/tecnico/meus-chamados"
                                icon={ClipboardList}
                                variant="tertiary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Meus chamados
                            </Link>

                        </>
                    )}

                    {role === "CLIENTE" && (
                        <>
                            <Link
                                to="/cliente/chamados-cliente"
                                icon={ClipboardList} variant="secondary"
                                size="lg"
                                className=""
                                onClick={onClose}>
                                Meus chamados
                            </Link>
                            <Link
                                to="/cliente/novo-chamado"
                                icon={Plus}
                                variant="secondary"
                                size="lg"
                                onClick={onClose}>
                                Criar chamado
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </aside>

    )
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

export const tagsVariants = cva("flex items-center justify-center text-xs-bold rounded-full", {
    variants: {
        variant: {
            "new": "border border-feedback-open/20 bg-bg-feedback-open-20",
            "info": "border border-feedback-progress/20 bg-bg-feedback-info-20",
            "success": "border border-feedback-done/20 bg-bg-feedback-success-20",
            "danger": "border border-feedback-danger/20 bg-bg-feedback-danger-20",
            "default": "border border-gray-500/20 bg-gray-500",
        },
        size: {
            "md-width-text": "px-1.5 py-1.5 rounded-full",
            "md-height-text": "w-7 h-7 rounded-full",
        },
        display: {
            "text": "gap-1",
            "icon": "flex items-center justify-center",
        },
        format: {
            "default": "",
            "circle": "rounded-full",
            "squared": "p-1.5 rounded-sm hover:bg-gray-100/20",
        }
    },
    defaultVariants: {
        variant: "new",
        size: "md-width-text",
        display: "text",
        format: "default"
    }
})

export const tagsTextVariants = cva("", {
    variants: {
        variant: {
            "new": "text-feedback-open",
            "info": "text-feedback-progress",
            "success": "text-feedback-done",
            "danger": "text-feedback-danger",
            "default": "text-gray-100",
        }
    },
    defaultVariants: {
        variant: "new"
    }
})

export const tagsIconVariants = cva("w-4 h-4", {
    variants: {
        variant: {
            "new": "fill-feedback-open",
            "info": "fill-feedback-progress",
            "success": "fill-feedback-done",
            "danger": "fill-feedback-danger",
            "default": "fill-gray-100",
        }
    }
})

```

## src\components\TagTime\index.tsx

```tsx
import { Text } from "../Text";
import type { VariantProps } from "class-variance-authority";
import { tagTimeTextVariants, tagTimeVariants, tagTimeIconVariants } from "./tagTimeVariants";
import { Icon } from "../Icon";

interface TagTimeProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof tagTimeVariants> {
    size?: "md";
    children: React.ReactNode;
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export function TagTime({
    variant,
    size,
    className,
    children,
    svg,
    ...props
}: TagTimeProps) {
    return (
        <div className={tagTimeVariants({ variant, className, size, })} {...props}>
            <Text variant={"text-xs-bold"} className={tagTimeTextVariants({ variant })}>{children}</Text>
            {
                variant === "selected" && svg && (
                    <Icon svg={svg} className={tagTimeIconVariants({ variant })} />
                )}
        </div>
    )
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
import React from "react";
import { type VariantProps } from "class-variance-authority"
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
            className: textVariants({ variant, className }),
            ...props
        },
        children
    )
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

## src\contexts\AuthContext.ts

```ts
import { createContext } from "react"
import type { User } from "../types/User"

interface AuthContextData {
    user: User | null
    token: string | null
    signIn: (data: { token: string; user: User }) => void
    signOut: () => void
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)


```

## src\contexts\AuthProvider.tsx

```tsx
import { useState, useEffect, type ReactNode, startTransition } from "react"
import { AuthContext } from "./AuthContext"
import type { User } from "../types/User"
import { jwtDecode } from "jwt-decode"
import { api } from "../services/api"

interface Props {
  children: ReactNode
}

interface DecodedToken {
  exp: number
  sub: string
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadStoredData = async () => {
      const storedUser = localStorage.getItem("@helpdesk:user")
      const storedToken = localStorage.getItem("@helpdesk:token")

      if (!storedUser || !storedToken) {
        setIsLoading(false)
        return
      }

      try {
        const decoded: DecodedToken = jwtDecode(storedToken)
        const isExpired = decoded.exp * 1000 < Date.now()

        if (isExpired) {
          signOut()
          setIsLoading(false)
          return
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`

        // 🔹 Usa startTransition para evitar render síncrono
        startTransition(() => {
          setUser(JSON.parse(storedUser))
          setToken(storedToken)
        })
      } catch (error) {
        console.error("Erro ao carregar token:", error)
        signOut()
      } finally {
        setTimeout(() => setIsLoading(false), 100)
      }
    }

    loadStoredData()
  }, [])

  function signIn({ token, user }: { token: string; user: User }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user))
    localStorage.setItem("@helpdesk:token", token)
    setUser(user)
    setToken(token)
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  function signOut() {
    localStorage.removeItem("@helpdesk:user")
    localStorage.removeItem("@helpdesk:token")
    setUser(null)
    setToken(null)
    delete api.defaults.headers.common["Authorization"]
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut, isLoading }}>
      {isLoading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  )
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
import { useState, type ReactNode } from "react"

import { Logo } from "../components/Logo"
import { Sidebar } from "../components/Sidebar"
import { Avatar } from "../components/Avatar"
import { ButtonIcon } from "../components/ButtonIcon"

import MenuIcon from "../assets/icons/menu.svg?react"
import XIcon from "../assets/icons/x.svg?react"

interface AppLayoutProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    children: ReactNode
}

export function AppLayout({ role = "CLIENTE", children }: AppLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) // ✅ aqui está o useState

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
                    <Logo color="white" size="md" orientation="horizontal" role={role} />
                </div>
                <Avatar name="Usuario Cliente" size="sm" />
            </header>

            {/* Sidebar mobile com animação */}
            <aside
                className={`fixed inset-0 z-50 bg-gray-100 flex flex-col justify-between p-6 lg:hidden transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="mb-8 border-b border-gray-300 pb-4 flex justify-between items-center">
                    <ButtonIcon
                        icon={XIcon}
                        variant="primary"
                        onClick={() => setIsSidebarOpen(false)} // ✅ fecha sidebar
                    />
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                    <Avatar name="Usuario Cliente" size="sm" />
                </div>
                <Sidebar role={role} onClose={() => setIsSidebarOpen(false)} />
            </aside>

            {/* Sidebar desktop */}
            <aside className="hidden lg:flex w-64 bg-gray-100 flex-col justify-between p-6">
                <div className="mb-8 border-b border-gray-300 pb-4">
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                </div>
                <Sidebar role={role} />
                <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5">
                    <Avatar name="Usuario Cliente" size="sm" />
                    <div>
                        <p>Usuário {role}</p>
                        <p>user.{role.toLowerCase()}@test.com</p>
                    </div>
                </footer>
            </aside>

            {/* Conteúdo principal */}
            <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
                {children}
            </main>
        </div>
    )
}

```

## src\layout\AuthLayout.tsx

```tsx
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
```

## src\layout\layoutVariants.ts

```ts
import { cva } from "class-variance-authority";

export const authContainer = cva("flex h-screen justify-center items-center relative overflow-hidden sm:justify-end sm:items-end", {
    variants: {
        theme: {
            dark: "bg-gray-100",
            light: "bg-gray-600",
        },
    },
    defaultVariants: {
        theme: "dark",
    },
});

export const authBackground = cva("absolute inset-0 bg-cover bg-center opacity-60", {
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
});

export const authContent = cva("h-206 sm:h-[47.825rem] bg-gray-600 relative z-10 rounded-tl-[1.25rem] px-35 py-12 ");

```

## src\main.tsx

```tsx
//main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/appRoutes'
import './index.css'

import { AuthProvider } from "./contexts/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

```

## src\pages\admin\adminVariants.ts

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

## src\pages\admin\ChamadosAdmin.tsx

```tsx
import { useEffect, useState } from "react"
import { Text } from "../../components/Text"
import { Icon } from "../../components/Icon"
import { Link } from "../../components/Link"
import { Tags } from "../../components/Tags"
import { Avatar } from "../../components/Avatar"

import PenLineIcon from "../../assets/icons/pen-line.svg?react"

import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";

import { api } from "../../services/api"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoFormatado {
    id: string
    title: string
    cliente: string
    tecnico: string
    status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO"
    totalPrice: number
    updatedAt: string
    createdAt?: string
    services: Servico[]
}

export function ChamadosAdmin() {
    const [chamados, setChamados] = useState<ChamadoFormatado[]>([])

    useEffect(() => {
        api.get(`/chamados`)
            .then(res => {

                setChamados(res.data)
            })
            .catch(err => console.error("Erro ao buscar chamados:", err))
    }, [])
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Chamados
                </Text>
            </header>

            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr>
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Atualizado em</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Id</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Título e Serviço</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Valor total</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Cliente</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Técnico</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Status</th>
                            <th className="px-3 py-2 sm:px-4 text-left"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {chamados.map((chamado) => (
                            <tr key={chamado.id} className="border-t border-gray-500">

                                <td className="px-3 py-2 sm:px-4 whitespace-nowrap">
                                    {new Date(chamado.updatedAt).toLocaleString()}
                                </td>

                                <td className="px-3 py-2 sm:px-4 max-w-20 truncate hidden md:table-cell">
                                    <Text variant="text-sm-bold" >{chamado.id}</Text>
                                </td>

                                <td className="px-3 py-2 sm:px-4">
                                    <Text variant="text-sm-bold">{chamado.title}</Text>
                                    {chamado.services && chamado.services.map(item => (
                                        <div key={item.id}>
                                            <Text variant="text-sm-regular" className="hidden md:table-cell">{item.nome}</Text>
                                        </div>
                                    ))}
                                </td>
                                <td className="hidden md:table-cell">
                                    <Text variant="text-sm-bold">
                                        {chamado.totalPrice.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </Text>
                                </td>
                                <td className="px-3 py-2 sm:px-4 hidden md:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.cliente} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.cliente}
                                        </Text>
                                    </div>
                                </td>

                                <td className="px-3 py-2 sm:px-4 hidden md:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.tecnico} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.tecnico}
                                        </Text>
                                    </div>
                                </td>
                                <td className="">
                                    <td className="px-2 py-2">
                                        <Tags
                                            variant={
                                                chamado.status === "ABERTO"
                                                    ? "danger"
                                                    : chamado.status === "EM_ATENDIMENTO"
                                                        ? "info"
                                                        : "success"
                                            }
                                            size="md-width-text"
                                            display="text"
                                            svg={
                                                chamado.status === "ABERTO"
                                                    ? CircleHelpIcon
                                                    : CircleClockIcon
                                            }
                                        >
                                            {chamado.status === "ABERTO"
                                                ? "Aberto"
                                                : chamado.status === "EM_ATENDIMENTO"
                                                    ? "Em andamento"
                                                    : "Concluído"}
                                        </Tags>
                                    </td>
                                </td>
                                <td className="px-3 py-2 sm:px-4 ">
                                    <div className="flex items-center justify-end">
                                        <Link to={`/admin/chamados/${chamado.id}`} variant="subtitle" size="md">
                                            <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\admin\DashboardAdmin.tsx

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

## src\pages\admin\ListClientes.tsx

```tsx
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import TrachIcon from "../../assets/icons/trash.svg?react";

export function ClientesAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Clientes
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Nome</th>
                            <th className="px-3 py-2 sm:px-4 md:truncate md:w-30 hidden md:table-cell text-left">Email</th>
                            <th className="px-3 py-2 sm:px-4  hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Avatar name="Jão Silva" />
                                    <Text variant="text-sm-bold">João Silva</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text>joao.silva@teste.com</Text>
                            </td>

                            <td className="px-3 py-2 sm:px-4">
                                <div className="flex items-center justify-end gap-3 text-right">
                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={TrachIcon} className="w-4 h-4 fill-red-500" />
                                    </Link>

                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\admin\ListTecnicos.tsx

```tsx
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import { Avatar } from "../../components/Avatar";
import { TagTime } from "../../components/TagTime";

export function TecnicosAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Técnicos
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Nome</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Email</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Disponibilidade</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Avatar name="Jão Silva" />
                                    <Text variant="text-sm-bold">João Silva</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text>joao.silva@teste.com</Text>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <div className=" flex gap-3">
                                    <TagTime>08:00</TagTime>
                                    <TagTime>09:00</TagTime>
                                    <TagTime>10:00</TagTime>
                                    <TagTime>11:00</TagTime>
                                    <TagTime>+4</TagTime>
                                </div>
                            </td>
                            <td className="px-3 py-2 sm:px-4 text-left">
                                <div className="flex items-center justify-end">
                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-500" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\admin\ServicosAdmin.tsx

```tsx
import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import BanIcon from "../../assets/icons/ban.svg?react"

import { Tags } from "../../components/Tags";

export function ServicosAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Serviços
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Tiítulo</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Valor</th>
                            <th className="px-3 py-2 sm:px-4 text-left">Status</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Text variant="text-sm-bold">Instação de Rede</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text variant="text-sm-regular">R$ 180,00</Text>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <div className=" flex gap-3">
                                    <Tags variant="success">Ativo</Tags>
                                </div>
                            </td>
                            <td className="px-3 py-2 sm:px-4 text-left">
                                <div className="flex items-center justify-end">
                                    <Link to={``} variant="secondary" size="md">
                                        <Icon svg={BanIcon} />
                                        <Text variant="text-sm-bold">Desativar</Text>
                                    </Link>
                                    <Link to={``} variant="subtitle">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-500" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


```

## src\pages\App.tsx

```tsx
export function App() {
  return (
    <h1>teste</h1>
  );
}





```

## src\pages\cliente\ChamadosCliente.tsx

```tsx
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";
import EyeIcon from "../../assets/icons/eye.svg?react";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import { Link } from "../../components/Link";
import { Icon } from "../../components/Icon";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Chamado {
    id: string
    title: string
    status: "ABERTO" | "EM_ANDAMENTO" | "CONCLUIDO"
    updatedAt: string
    totalPrice: number
    cliente: string
    tecnico: string
    services: {
        nome: string
        valor: number
    }[]
}

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
    role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
    const [chamados, setChamados] = useState<Chamado[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchChamados() {
            try {
                const response = await api.get<Chamado[]>("/chamados")
                setChamados(response.data)
            } catch (error) {
                console.error("Erro ao buscar chamados:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchChamados()
    }, [])

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
                            <th className="px-4 py-2" colSpan={2}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={8} className="text-center py-4">Carregando...</td>
                            </tr>
                        ) : (
                            chamados.map(chamado => (
                                <tr key={chamado.id} className="border-t border-gray-500">
                                    <td className="px-4 py-2">
                                        {new Date(chamado.updatedAt).toLocaleString("pt-BR")}
                                    </td>

                                    <td className="px-4 py-2 font-bold hidden md:table-cell max-w-20 truncate">{chamado.id}</td>

                                    <td className="px-4 py-2 font-bold max-w-50.5 truncate">{chamado.title}</td>

                                    <td className="px-4 py-2 hidden md:table-cell max-w-44 truncate">
                                        {chamado.services.map(s => s.nome).join(", ")}
                                    </td>

                                    <td className="px-4 py-2 hidden md:table-cell">
                                        R$ {chamado.totalPrice.toFixed(2)}
                                    </td>

                                    <td className="px-4 py-2 hidden md:table-cell">
                                        <div className="flex items-center">
                                            <Avatar size="xs" name={chamado.tecnico} />
                                            <span className="ml-2">{chamado.tecnico}</span>
                                        </div>
                                    </td>

                                    <td className="px-2 py-2">
                                        <Tags
                                            variant={
                                                chamado.status === "ABERTO"
                                                    ? "danger"
                                                    : chamado.status === "EM_ANDAMENTO"
                                                        ? "info"
                                                        : "success"
                                            }
                                            size="md-width-text"
                                            display="text"
                                            svg={
                                                chamado.status === "ABERTO"
                                                    ? CircleHelpIcon
                                                    : CircleClockIcon
                                            }
                                        >
                                            {chamado.status === "ABERTO"
                                                ? "Aberto"
                                                : chamado.status === "EM_ANDAMENTO"
                                                    ? "Em andamento"
                                                    : "Concluído"}
                                        </Tags>
                                    </td>

                                    <td className="px-2 py-2">
                                        <Link to={`/cliente/chamados/${chamado.id}`} variant="subtitle" size="md">
                                            <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                                        </Link>
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

## src\pages\cliente\clienteVariants.ts

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

## src\pages\cliente\DashboardCliente.tsx

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

## src\pages\cliente\DetailChamadoCliente.tsx

```tsx

```

## src\pages\cliente\NovoChamado.tsx

```tsx
import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";

interface NovoChamado {
    id: string
    title: string
    status: "ABERTO" | "EM_ANDAMENTO" | "CONCLUIDO"
    updatedAt: string
    totalPrice: number
    cliente: string
    tecnico: string
    services: {
        nome: string
        valor: number
    }[]
}

// Interface tipando os props
interface NovoChamadoProps {
    titulo: string
    description: string
}

export function NovoChamado({ titulo, description }: NovoChamadoProps) {
    return (
        <div className="md:max-w-200 mt-14 mx-auto">
            <header className="w-200 mb-6">
                <Text as="h1" variant="text-xl-bold" className="text-blue-dark">Novo chamado</Text>
            </header>
            <Container className="w-full flex  flex-col gap-6 md:flex-row">
                <Card className="p-8 md:max-w-120 w-full">
                    <Text as="h2" variant="heading-md-bold">Informações</Text>
                    <Text variant="text-xs-regular" className="text-gray-400">
                        Configure os dias e horários em que você está disponível para atender chamados
                    </Text>
                    <form>
                        <InputText label="Título" placeholder="Digite um título para o chamado" />
                        <Textarea
                            label="Descrição"
                            placeholder="Descreva o que está acontecendo"
                        />
                        <InputSelect
                            label="Categoria"
                            placeholder="Selecione a categoria de atendimento"
                            options={["Item 1", "Item 2", "Item 3"]}

                        />
                    </form>
                </Card>
                <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
                    <div>
                        <Text as="h2" variant="heading-md-bold">Resumo</Text>
                        <Text variant="text-xs-regular" className="text-gray-300">Valores e detalhes</Text>
                    </div>
                    <div>
                        <Text as="h3" variant="text-xs-regular" className="text-gray-400">Categoria de serviço</Text>
                        <Text variant="text-sm-regular" className="text-gray-200">Erro de rede</Text>
                    </div>
                    <div>
                        <Text as="h3">Custo inicial</Text>
                        <Text>R$ 200,00</Text>
                    </div>
                    <Text variant="text-xs-regular" className="text-gray-300">
                        O chamado será automaticamente atribuído a um técnico disponível
                    </Text>
                    <Button>Criar chamado</Button>

                </Card>
            </Container>
        </div>
    )
}

```

## src\pages\PageComponents.tsx

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

import { useState } from "react"
import { Card } from "../components/Card";
import { Container } from "../components/Container";

export function Components() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Simples validação: senha precisa ter pelo menos 8 caracteres
    if (!email || !password) {
      setError(true)
      return
    }
    if (password.length < 8) {
      setError(true)
      return
    } else {
      setError(false)
      alert("Formulário enviado com sucesso!")
    }
  }
  return (
    <Container>
      <div className="flex flex-col gap-2 p-4">
        <Text variant={"text-xl-bold"} className="text-blue-dark">Hello, World!</Text>
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
          <Tags variant="new" svg={NewIcon} >LABEL</Tags>
          <Tags variant="info" svg={ClockIcon}>LABEL</Tags>
          <Tags variant="success" svg={CircleCheckIcon}>LABEL</Tags>
          <Tags variant="danger" svg={NewIcon}>LABEL</Tags>
        </div>
        <div className="flex gap-4">
          <TagTime>09:00</TagTime>
          <TagTime variant="selected" svg={XIcon}>15:00</TagTime>
          <TagTime variant="disabled"> 08:30 </TagTime>
        </div>
        <div className="flex gap-4">
          <Button icon={LinePencil} variant="primary">Primary</Button>
          <Button icon={LinePencil} size="sm" variant="primary">Primary</Button>
          <Button icon={LinePencil} disabled>Disabled</Button>
          <Button icon={LinePencil} variant="secondary">Secondary</Button>
          <Button icon={LinePencil} variant="link">Link</Button>
          <Button icon={LinePencil} size="sm" variant="link">Link</Button>
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


          <Button type="submit" size="md" variant="primary">Enviar</Button>
        </form>


        <div className="flex p-8 bg-gray-600">
          <Card size="md">Hello World.</Card>
        </div>

      </div>
    </Container>
  )
}





```

## src\pages\SignIn.tsx

```tsx
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { api } from "../services/api";
import { z, ZodError } from "zod";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";


const signInSchema = z.object({
    email: z.string().email({ message: "E-Mail inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" })
})

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const { signIn } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = signInSchema.parse({
                email, password
            })
            const response = await api.post("/sessions", data);


            signIn({
                token: response.data.token,
                user: response.data.user
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
            console.log(error)
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            setError("Falha ao autenticar. Verifique suas credenciais.");
        }
    };

    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
            <header>
                <Logo color="blue" />
            </header>
            <main className="flex flex-col gap-3 w-85.5 sm:w-100">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Acesse o portal</Text>
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

                        <Button size="lg" className="mt-4" type="submit">Enviar</Button>
                    </form>
                </Card>
                <Card className="flex flex-col w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Ainda não tem conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">
                        Cadastre agora mesmo
                    </Text>
                    <Link to="/register" size="lg" variant="subtitle" className="mt-5">
                        Criar conta
                    </Link>
                </Card>
            </main>
        </Container>
    );
}

```

## src\pages\SignUp.tsx

```tsx
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import {jwtDecode} from "jwt-decode"
import { InputSelect } from "../components/InputSelect";

interface  TokenPayload{
    role: "ADMIN"|"TECNICO"|"CLIENTE";
    sub: string;
    exp: number;
}

const token = localStorage.getItem("token");
const currentUser = token ? jwtDecode<TokenPayload>(token) : null;
const isAdmin = currentUser?.role === "ADMIN";

const signUpSchema = z.object({
    name: z.string().trim().min(1, { message: "Informe o nome completo." }),
    email: z.string().email({ message: "E-Mail inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" })
})

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("CLIENTE")


    const navigate = useNavigate()

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const data = signUpSchema.parse({
                name, email, password
            })

            // força cadastro como CLIENTE
            await api.post("/users", { ...data, role })

            if (confirm("Cadastrado com sucesso.")) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            alert("Não foi possivel cadastrar.")
        }
    }
    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
            <header>
                <Logo color="blue" />
            </header>
            <main className="flex flex-col gap-3 w-85.5 sm:w-100">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Crie sua conta</Text>
                    <Text as="span" variant="text-xs-regular" className="text-gray-300" >Informe seu nome, e-mail e senha</Text>

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
                        {isAdmin &&(                            
                            <InputSelect
                            label="Tipo de Usuário"
                            options={["CLIENTE","TECNICO","ADMIN"]}
                            placeholder="Escolha o perfil do usuário"
                            error={false}
                            onChange={(value)=>setRole(value)}
                            />
                        )}

                        <Button size="lg" className="mt-4">Cadastrar</Button>
                    </form>
                </Card>
                <Card className="flex flex-col w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Já tem uma conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">Entre agora mesmo</Text>
                    <Link to="/login" size="lg" variant="subtitle" className="mt-5">Acessar conta</Link>

                </Card>
            </main>
        </Container>

    );
}
```

## src\pages\tecnico\ChamadosTecnico.tsx

```tsx
import { Text } from "../../components/Text"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoTecnicoFormatado {
    id: string
    title: string
    cliente: string
    tecnico: string
    status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO"
    totalPrice: number
    updatedAt: string
    createdAt?: string
    services: Servico[]
}

export function ChamadosTecnico() {

    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Meus chamados
                </Text>
            </header>


        </div>
    )
}


```

## src\pages\tecnico\DashboardTecnico.tsx

```tsx
import { Outlet } from "react-router";
import { AppLayout } from "../../layout/AppLayout";
import { tecnicoVariants } from "./tecnicoVariants";
import type { VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface ChamadoTecnico {
    id: string
    title: string
    descricao: string
    status: "ABERTO" | "EM_ANDAMENTO" | "ENCERRADO"
    updatedAt: string
    totalPrice: number
    tecnico: string
    cliente: string
}


interface TecnicoProps extends VariantProps<typeof tecnicoVariants> {
    tecnicoId?: string // 🔹 caso queira filtrar chamados por técnico
    chamados?: ChamadoTecnico[] // 🔹 se quiser passar os chamados via props
}

export function DashboardTecnico({ tecnicoId }: TecnicoProps) {
    const [chamados, setChamados] = useState<ChamadoTecnico[]>([])

    useEffect(() => {
        async function fetchChamados() {
            const response = await api.get(`/chamados/tecnico/${tecnicoId}`)
            setChamados(response.data)
        }
        fetchChamados()
    }, [tecnicoId])

    return (
        <AppLayout role="TECNICO">
            <Outlet context={{ chamados }} />
        </AppLayout>
    );
}
```

## src\pages\tecnico\tecnicoVariants.ts

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
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { DashboardCliente } from "../pages/cliente/DashboardCliente";
import { DashboardAdmin } from "../pages/admin/DashboardAdmin";
import { ChamadosAdmin } from "../pages/admin/ChamadosAdmin";
import { PrivateRoute } from "./PrivateRoute";
import { ChamadosCliente } from "../pages/cliente/ChamadosCliente";
import { NovoChamado } from "../pages/cliente/NovoChamado";
import { DashboardTecnico } from "../pages/tecnico/DashboardTecnico";
import { ChamadosTecnico } from "../pages/tecnico/ChamadosTecnico";
import { TecnicosAdmin } from "../pages/admin/ListTecnicos";
import { ClientesAdmin } from "../pages/admin/ListClientes";
import { ServicosAdmin } from "../pages/admin/ServicosAdmin";

export function AppRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
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
                <Route path="tecnicos" element={<TecnicosAdmin />} />
                <Route path="clientes" element={<ClientesAdmin />} />
                <Route path="servicos" element={<ServicosAdmin />} />
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

            </Route>


            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}


```

## src\routes\PrivateRoute.tsx

```tsx
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import type { JSX } from "react"

interface Props {
    children: JSX.Element
    roles?: string[]
}

export function PrivateRoute({ children, roles }: Props) {
    const { user, isLoading } = useAuth()

    // 🔹 Enquanto o AuthProvider ainda está carregando, não renderiza nada
    if (isLoading) {
        return <div>Carregando...</div> // ou um splash elegante
    }

    // 🔹 Se não há usuário após o carregamento, redireciona
    if (!user) {
        return <Navigate to="/login" replace />
    }

    // 🔹 Se há restrição de papel (role)
    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/login" replace />
    }

    return children
}

```

## src\services\api.ts

```ts
import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3333",
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

```

## src\types\global.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="node" />

```

## src\types\User.ts

```ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "TECNICO" | "CLIENTE";
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


## tsconfig.app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": [
      "ES2023",
      "DOM"
    ],
    "module": "esnext",
    "types": [
      "vite/client",
      "node"
    ],
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
  "include": [
    "src",
    "src/types"
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
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
});

```

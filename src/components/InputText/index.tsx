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
        <div className="group w-lg flex flex-col gap-1">
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

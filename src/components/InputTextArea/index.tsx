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

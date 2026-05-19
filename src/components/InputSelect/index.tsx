import { useState } from "react"
import { type VariantProps } from "class-variance-authority"
import { cx } from "class-variance-authority"
import { inputSelectVariants } from "./inputselectVariants"

import ChevronDown from "../../assets/icons/chevron-down.svg?react"
import ChevronUp from "../../assets/icons/chevron-up.svg?react"
import Check from "../../assets/icons/check.svg?react"
import AlertCircle from "../../assets/icons/circle-alert.svg?react"



interface inputSelectProps
    extends VariantProps<typeof inputSelectVariants> {
    label: string
    options: string[]
    helperText?: string
    error?: boolean
}

export function InputSelect({ label, options, helperText, error }: inputSelectProps) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<string | null>(null)

    const toggleOpen = () => setOpen(!open)
    const handleSelect = (option: string) => {
        setSelected(option)
        setOpen(false)
    }

    // Estado visual controlado
    const state = error ? "error" : open ? "focus" : "default"

    return (
        <div className="group w-lg flex flex-col gap-1 relative">
            <label
                className={cx(
                    "text-sm transition-all",
                    state === "error"
                        ? "text-red-500"
                        : state === "focus"
                            ? "text-blue-500"
                            : "text-gray-400"
                )}
            >
                {label}
            </label>

            <div
                onClick={toggleOpen}
                className={cx(inputSelectVariants({ state }))}
            >
                <span className={selected ? "text-gray-800" : "text-gray-400"}>
                    {selected || "Selecione uma opção"}
                </span>
                {open ? (
                    <ChevronUp className={cx(state === "error" ? "text-red-500" : "text-blue-500")} />
                ) : (
                    <ChevronDown className={cx(state === "error" ? "text-red-500" : "text-gray-400")} />
                )}
            </div>

            {open && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md p-2 z-10">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={cx(
                                "py-2 px-2 rounded cursor-pointer flex justify-between items-center hover:bg-gray-500",
                                selected === option && "font-bold text-blue-500"
                            )}
                        >
                            {option}
                            {selected === option && <Check className="w-4 h-4 text-blue-500" />}
                        </div>
                    ))}
                </div>
            )}

            {helperText && (
                <span
                    className={cx(
                        "text-xs mt-1 flex items-center gap-1",
                        state === "error" ? "text-red-500" : "text-gray-400"
                    )}
                >
                    {state === "error" && <AlertCircle className="w-3 h-3" />}
                    {helperText}
                </span>
            )}
        </div>
    )
}

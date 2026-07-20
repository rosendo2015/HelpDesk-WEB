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

// 🔹 Agora o Option é um objeto vindo da API
interface Option {
  id: number
  nome: string
  valor: number
}

interface inputSelectProps
  extends VariantProps<typeof inputSelectVariants> {
  label: string
  options: Option[]   // recebe objetos
  helperText?: string
  error?: boolean
  placeholder?: string
  onChange?: (value: Option) => void // retorna o objeto selecionado
}

export function InputSelect({
  label,
  options,
  helperText,
  placeholder,
  error,
  onChange
}: inputSelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option | null>(null)

  const toggleOpen = () => setOpen(!open)

  // 🔹 Atualiza estado interno e dispara para o pai
  const handleSelect = (option: Option) => {
    setSelected(option)
    setOpen(false)
    onChange?.(option) // envia o objeto inteiro para o pai
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
                selected?.id === option.id && "font-bold text-blue-500"
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
            state === "error" ? "text-red-500" : "text-gray-400"
          )}
        >
          {state === "error" && (
            <Icon svg={AlertCircle} fill="red" size="md" />
          )}
          {helperText}
        </span>
      )}
    </div>
  )
}

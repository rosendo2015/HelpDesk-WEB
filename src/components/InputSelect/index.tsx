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

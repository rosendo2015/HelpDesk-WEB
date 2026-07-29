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

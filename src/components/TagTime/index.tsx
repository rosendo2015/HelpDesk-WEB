import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";
import {
  tagTimeIconVariants,
  tagTimeTextVariants,
  tagTimeVariants,
} from "./tagTimeVariants";

interface TagTimeProps extends Omit<React.ComponentProps<"input">, "onChange"> {
  children: React.ReactNode;
  svg?: React.FC<React.ComponentProps<"svg">>;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
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
        onChange={(e) => onChange?.(e.target.checked)}
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

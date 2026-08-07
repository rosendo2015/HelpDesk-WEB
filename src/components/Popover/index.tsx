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

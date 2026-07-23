import { Card } from "../Card";
import cn from "classnames";
import { Text } from "../Text";
import { ButtonIcon } from "../ButtonIcon";
import XIcon from "../../assets/icons/x.svg?react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

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
             translate-x-[50%] translate-y-[50%]
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

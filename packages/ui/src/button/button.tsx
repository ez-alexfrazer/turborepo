import { forwardRef } from "react";
import type { HTMLProps } from "react";
import clsx from "clsx";

interface Props extends HTMLProps<HTMLButtonElement> {
  readonly type?: "button" | "reset" | "submit";
  readonly variant?: "solid" | "outline" | "ghost" | "link";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ type = "button", className, variant = 'solid', ...props }, ref) => {
    return (
      <button
        {...props}
        className={clsx(
          "px-4",
          "py-2",
          "rounded-md",
          "bg-cyan-500",
          "text-white",
          'focus:ring',
          'border-2',
          'transition-all',
          'disabled:opacity-50',
          {
            'text-white': variant === 'solid',
            'bg-cyan-500': variant === 'solid',
            'bg-transparent': variant === 'outline' || variant === 'ghost',
            'border-cyan-500': variant === 'outline' || variant === 'solid',
            'border-transparent': variant === 'ghost' || variant === 'link',
            'underline': variant === 'link'
          },
          className,
        )}
        type={type}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;

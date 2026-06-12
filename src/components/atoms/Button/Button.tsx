import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "./Button.styles";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  loading?: boolean;
  rounded?: boolean;
  pressed?: boolean;
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
  form?: ButtonHTMLAttributes<HTMLButtonElement>["form"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  name?: ButtonHTMLAttributes<HTMLButtonElement>["name"];
  value?: ButtonHTMLAttributes<HTMLButtonElement>["value"];
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  rounded = false,
  pressed = false,
  className,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    aria-busy={loading || undefined}
    aria-pressed={pressed || undefined}
    className={cn(
      buttonStyles({
        variant,
        size,
        fullWidth,
        rounded,
        loading,
        pressed,
      }),
      className,
    )}
    data-loading={loading ? "true" : "false"}
    disabled={disabled || loading}
    type={type}
  >
    {leftIcon ? <span className="inline-flex shrink-0">{leftIcon}</span> : null}
    <span className="inline-flex items-center justify-center">{children}</span>
    {rightIcon ? <span className="inline-flex shrink-0">{rightIcon}</span> : null}
  </button>
);

export default Button;
export type { ButtonSize, ButtonVariant };

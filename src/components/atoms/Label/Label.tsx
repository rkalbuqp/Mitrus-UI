import type { LabelHTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import { labelIndicatorStyles, labelStyles, type LabelSize } from "./Label.styles";

export interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "children" | "className"> {
  children: ReactNode;
  size?: LabelSize;
  disabled?: boolean;
  srOnly?: boolean;
  required?: boolean;
  optional?: boolean;
  optionalText?: ReactNode;
  className?: string;
  indicatorClassName?: string;
}

const Label = ({
  children,
  size = "md",
  disabled = false,
  srOnly = false,
  required = false,
  optional = false,
  optionalText = "(opcional)",
  className,
  indicatorClassName,
  ...props
}: LabelProps) => (
  <label
    {...props}
    aria-disabled={disabled || undefined}
    className={cn(
      labelStyles({
        size,
        disabled,
        srOnly,
      }),
      className,
    )}
  >
    <span>{children}</span>
    {required ? (
      <span aria-hidden="true" className={cn(labelIndicatorStyles({ tone: "required" }), indicatorClassName)}>
        *
      </span>
    ) : null}
    {!required && optional ? (
      <span className={cn(labelIndicatorStyles({ tone: "optional" }), indicatorClassName)}>{optionalText}</span>
    ) : null}
  </label>
);

export default Label;
export type { LabelSize };

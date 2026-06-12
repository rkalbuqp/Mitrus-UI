import { useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  switchControlStyles,
  switchDescriptionStyles,
  switchInputStyles,
  switchLabelStyles,
  switchRootStyles,
  switchThumbStyles,
  type SwitchSize,
} from "./Switch.styles";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type"> {
  children?: ReactNode;
  description?: ReactNode;
  size?: SwitchSize;
  invalid?: boolean;
  className?: string;
  inputClassName?: string;
  controlClassName?: string;
  descriptionClassName?: string;
}

const Switch = ({
  children,
  description,
  size = "md",
  invalid = false,
  className,
  inputClassName,
  controlClassName,
  descriptionClassName,
  id,
  disabled = false,
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SwitchProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = children ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const mergedDescription = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  return (
    <label className={cn(switchRootStyles({ disabled }), className)} htmlFor={inputId}>
      <input
        {...props}
        aria-describedby={mergedDescription}
        aria-invalid={invalid || undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabel ? undefined : ariaLabelledBy ?? labelId}
        className={cn(switchInputStyles(), inputClassName)}
        disabled={disabled}
        id={inputId}
        role="switch"
        type="checkbox"
      />

      <span
        aria-hidden="true"
        className={cn(switchControlStyles({ size, invalid }), controlClassName)}
        data-slot="switch-control"
      >
        <span className={switchThumbStyles({ size })} data-slot="switch-thumb" />
      </span>

      {children || description ? (
        <span className="inline-flex min-w-0 flex-col">
          {children ? (
            <span className={switchLabelStyles({ size })} id={labelId}>
              {children}
            </span>
          ) : null}
          {description ? (
            <span className={cn(switchDescriptionStyles({ size }), descriptionClassName)} id={descriptionId}>
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
};

export default Switch;
export type { SwitchSize };

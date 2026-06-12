import { useEffect, useId, useRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  checkboxDescriptionStyles,
  checkboxInputStyles,
  checkboxLabelStyles,
  checkboxRootStyles,
  type CheckboxSize,
} from "./Checkbox.styles";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type"> {
  children?: ReactNode;
  description?: ReactNode;
  size?: CheckboxSize;
  invalid?: boolean;
  className?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  indeterminate?: boolean;
}

const Checkbox = ({
  children,
  description,
  size = "md",
  invalid = false,
  className,
  inputClassName,
  descriptionClassName,
  indeterminate = false,
  id,
  disabled = false,
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = children ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const mergedDescription = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={cn(checkboxRootStyles({ disabled }), className)} htmlFor={inputId}>
      <input
        {...props}
        aria-describedby={mergedDescription}
        aria-invalid={invalid || undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabel ? undefined : ariaLabelledBy ?? labelId}
        className={cn(checkboxInputStyles({ size, invalid }), inputClassName)}
        disabled={disabled}
        id={inputId}
        ref={inputRef}
        type="checkbox"
      />

      {children || description ? (
        <span className="inline-flex min-w-0 flex-col">
          {children ? (
            <span className={checkboxLabelStyles({ size })} id={labelId}>
              {children}
            </span>
          ) : null}
          {description ? (
            <span className={cn(checkboxDescriptionStyles({ size }), descriptionClassName)} id={descriptionId}>
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
};

export default Checkbox;
export type { CheckboxSize };

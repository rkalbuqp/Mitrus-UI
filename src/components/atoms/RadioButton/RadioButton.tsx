import { useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  radioButtonControlStyles,
  radioButtonDescriptionStyles,
  radioButtonDotStyles,
  radioButtonInputStyles,
  radioButtonLabelStyles,
  radioButtonRootStyles,
  type RadioButtonSize,
} from "./RadioButton.styles";

interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type"> {
  children?: ReactNode;
  description?: ReactNode;
  size?: RadioButtonSize;
  invalid?: boolean;
  className?: string;
  inputClassName?: string;
  controlClassName?: string;
  descriptionClassName?: string;
}

const RadioButton = ({
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
}: RadioButtonProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = children ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const mergedDescription = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  return (
    <label className={cn(radioButtonRootStyles({ disabled }), className)} htmlFor={inputId}>
      <input
        {...props}
        aria-describedby={mergedDescription}
        aria-invalid={invalid || undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabel ? undefined : ariaLabelledBy ?? labelId}
        className={cn(radioButtonInputStyles(), inputClassName)}
        disabled={disabled}
        id={inputId}
        type="radio"
      />

      <span
        aria-hidden="true"
        className={cn(radioButtonControlStyles({ size, invalid }), controlClassName)}
        data-slot="radio-control"
      >
        <span className={radioButtonDotStyles({ size })} data-slot="radio-dot" />
      </span>

      {children || description ? (
        <span className="inline-flex min-w-0 flex-col">
          {children ? (
            <span className={radioButtonLabelStyles({ size })} id={labelId}>
              {children}
            </span>
          ) : null}
          {description ? (
            <span
              className={cn(radioButtonDescriptionStyles({ size }), descriptionClassName)}
              id={descriptionId}
            >
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
};

export type { RadioButtonSize };

export default RadioButton;
export type { RadioButtonProps };

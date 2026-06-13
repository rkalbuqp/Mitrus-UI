import { useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  inputDescriptionStyles,
  inputFieldStyles,
  inputLabelStyles,
  inputRootStyles,
  type InputSize,
} from "./Input.styles";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size"> {
  label?: ReactNode;
  description?: ReactNode;
  size?: InputSize;
  invalid?: boolean;
  fullWidth?: boolean;
  className?: string;
  inputClassName?: string;
  descriptionClassName?: string;
}

const Input = ({
  label,
  description,
  size = "md",
  invalid = false,
  fullWidth = false,
  className,
  inputClassName,
  descriptionClassName,
  id,
  disabled = false,
  type = "text",
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const mergedDescription = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn(inputRootStyles(), className)}>
      {label ? (
        <label className={inputLabelStyles({ size })} htmlFor={inputId} id={labelId}>
          {label}
        </label>
      ) : null}

      <input
        {...props}
        aria-describedby={mergedDescription}
        aria-invalid={invalid || undefined}
        aria-labelledby={ariaLabelledBy ?? labelId}
        className={cn(
          inputFieldStyles({
            size,
            invalid,
            fullWidth,
          }),
          inputClassName,
        )}
        disabled={disabled}
        id={inputId}
        type={type}
      />

      {description ? (
        <span className={cn(inputDescriptionStyles({ size }), descriptionClassName)} id={descriptionId}>
          {description}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
export type { InputSize };

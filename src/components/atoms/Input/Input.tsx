import { useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  inputAdornmentStyles,
  inputControlStyles,
  inputDescriptionStyles,
  inputFieldStyles,
  inputLabelStyles,
  inputRootStyles,
  type InputSize,
} from "./Input.styles";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size"> {
  label?: ReactNode;
  description?: ReactNode;
  size?: InputSize;
  invalid?: boolean;
  fullWidth?: boolean;
  className?: string;
  inputClassName?: string;
  endAdornment?: ReactNode;
  endAdornmentClassName?: string;
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
  endAdornment,
  endAdornmentClassName,
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

      <div className={inputControlStyles()}>
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
              hasEndAdornment: Boolean(endAdornment),
            }),
            inputClassName,
          )}
          disabled={disabled}
          id={inputId}
          type={type}
        />

        {endAdornment ? (
          <span className={cn(inputAdornmentStyles({ size }), endAdornmentClassName)}>{endAdornment}</span>
        ) : null}
      </div>

      {description ? (
        <span className={cn(inputDescriptionStyles({ size }), descriptionClassName)} id={descriptionId}>
          {description}
        </span>
      ) : null}
    </div>
  );
};

export type { InputSize };

export default Input;
export type { InputProps };

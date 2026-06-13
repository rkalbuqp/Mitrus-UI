import { useId, type InputHTMLAttributes, type ReactNode } from "react";

import { Input, Label, Text, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import { dateFieldMessageStyles, dateFieldRootStyles } from "./DateField.styles";

interface DateFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type"> {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  size?: InputSize;
  invalid?: boolean;
  fullWidth?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  optionalText?: ReactNode;
  className?: string;
  inputClassName?: string;
  messageClassName?: string;
}

const DateField = ({
  label,
  description,
  errorMessage,
  size = "md",
  invalid = false,
  fullWidth = false,
  hideLabel = false,
  optional = false,
  optionalText,
  className,
  inputClassName,
  messageClassName,
  id,
  disabled = false,
  required = false,
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: DateFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const messageId = errorMessage ? errorId : descriptionId;
  const mergedDescription = [ariaDescribedBy, messageId].filter(Boolean).join(" ") || undefined;

  const renderMessage = () => {
    if (errorMessage) {
      return (
        <Text
          className={messageClassName}
          id={errorId}
          size={size === "sm" ? "xs" : "sm"}
          tone="critical"
        >
          {errorMessage}
        </Text>
      );
    }

    if (!description) {
      return null;
    }

    return (
      <Text
        className={cn(dateFieldMessageStyles({ size, tone: "neutral" }), messageClassName)}
        id={descriptionId}
        size={size === "sm" ? "xs" : "sm"}
        tone="secondary"
      >
        {description}
      </Text>
    );
  };

  return (
    <div className={cn(dateFieldRootStyles(), className)}>
      {label ? (
        <Label
          disabled={disabled}
          htmlFor={inputId}
          id={labelId}
          optional={!required && optional}
          optionalText={optionalText}
          required={required}
          size={size}
          srOnly={hideLabel}
        >
          {label}
        </Label>
      ) : null}

      <Input
        {...props}
        aria-describedby={mergedDescription}
        aria-invalid={invalid || undefined}
        aria-labelledby={ariaLabelledBy ?? labelId}
        disabled={disabled}
        className="gap-0"
        description={undefined}
        fullWidth={fullWidth}
        id={inputId}
        inputClassName={inputClassName}
        invalid={invalid}
        label={undefined}
        required={required}
        size={size}
        type="date"
      />

      {renderMessage()}
    </div>
  );
};

type DateFieldSize = InputSize;

export default DateField;
export type { DateFieldProps, DateFieldSize };

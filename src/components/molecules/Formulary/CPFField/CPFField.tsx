import { useState, type InputHTMLAttributes, type ReactNode } from "react";

import { Input, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../FormField";
import { cpfFieldRootStyles } from "./CPFField.styles";

const CPF_PLACEHOLDER = "000.000.000-00";

const sanitizeCpfValue = (value: string) => value.replace(/\D/g, "").slice(0, 11);

const formatCpfValue = (value: string) => {
  const digits = sanitizeCpfValue(value);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  }

  if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  }

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
};

export interface CPFFieldValueChangeMeta {
  digits: string;
  isComplete: boolean;
}

export interface CPFFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type" | "value" | "defaultValue"> {
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
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, meta: CPFFieldValueChangeMeta) => void;
}

const CPFField = ({
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
  value,
  defaultValue,
  disabled = false,
  required = false,
  inputMode = "numeric",
  autoComplete = "off",
  onChange,
  onValueChange,
  ...props
}: CPFFieldProps) => {
  const [internalValue, setInternalValue] = useState(() => formatCpfValue(defaultValue ?? ""));
  const currentValue = value ?? internalValue;

  const handleValueChange = (nextRawValue: string) => {
    const nextFormattedValue = formatCpfValue(nextRawValue);
    const digits = sanitizeCpfValue(nextFormattedValue);

    if (value === undefined) {
      setInternalValue(nextFormattedValue);
    }

    onValueChange?.(nextFormattedValue, {
      digits,
      isComplete: digits.length === 11,
    });

    return nextFormattedValue;
  };

  return (
    <FormField
      className={cn(cpfFieldRootStyles(), className)}
      description={description}
      disabled={disabled}
      errorMessage={errorMessage}
      hideLabel={hideLabel}
      invalid={invalid}
      label={label}
      messageClassName={messageClassName}
      optional={optional}
      optionalText={optionalText}
      required={required}
      size={size}
    >
      {(fieldProps) => (
        <Input
          {...props}
          {...fieldProps}
          autoComplete={autoComplete}
          className="gap-0"
          description={undefined}
          disabled={disabled}
          fullWidth={fullWidth}
          inputClassName={inputClassName}
          inputMode={inputMode}
          invalid={invalid}
          label={undefined}
          maxLength={CPF_PLACEHOLDER.length}
          onChange={(event) => {
            const nextFormattedValue = handleValueChange(event.currentTarget.value);
            event.currentTarget.value = nextFormattedValue;
            onChange?.(event);
          }}
          placeholder={CPF_PLACEHOLDER}
          required={required}
          type="text"
          value={currentValue}
        />
      )}
    </FormField>
  );
};

export default CPFField;
export type CPFFieldSize = InputSize;

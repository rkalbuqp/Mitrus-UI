import type { ReactNode, SelectHTMLAttributes } from "react";

import { Select, type SelectOption, type SelectSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../FormField";
import { selectFieldMessageStyles, selectFieldRootStyles } from "./SelectField.styles";

interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "className" | "size"> {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  size?: SelectSize;
  invalid?: boolean;
  fullWidth?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  optionalText?: ReactNode;
  className?: string;
  fieldClassName?: string;
  selectClassName?: string;
  messageClassName?: string;
  options?: SelectOption[];
  placeholder?: string;
  children?: ReactNode;
}

const SelectField = ({
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
  fieldClassName,
  selectClassName,
  messageClassName,
  options,
  placeholder,
  children,
  disabled = false,
  required = false,
  ...props
}: SelectFieldProps) => (
  <FormField
    className={cn(selectFieldRootStyles(), className)}
    description={description}
    disabled={disabled}
    errorMessage={errorMessage}
    hideLabel={hideLabel}
    invalid={invalid}
    label={label}
    messageClassName={cn(selectFieldMessageStyles({ size, tone: errorMessage ? "critical" : "neutral" }), messageClassName)}
    optional={optional}
    optionalText={optionalText}
    required={required}
    size={size}
  >
    {(fieldProps) => (
      <Select
        {...props}
        {...fieldProps}
        children={children}
        className="gap-0"
        description={undefined}
        disabled={disabled}
        fieldClassName={fieldClassName}
        fullWidth={fullWidth}
        invalid={invalid}
        label={undefined}
        options={options}
        placeholder={placeholder}
        required={required}
        selectClassName={selectClassName}
        size={size}
      />
    )}
  </FormField>
);

type SelectFieldOption = SelectOption;
type SelectFieldSize = SelectSize;

export default SelectField;
export type { SelectFieldOption, SelectFieldProps, SelectFieldSize };

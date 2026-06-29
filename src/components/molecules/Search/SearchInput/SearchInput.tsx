import { useState, type InputHTMLAttributes, type ReactNode } from "react";

import { Icon, Input, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../../Formulary/FormField";
import {
  searchInputControlStyles,
  searchInputIconStyles,
  searchInputRootStyles,
  searchInputWrapperStyles,
  searchInputInputRootStyles,
  searchInputInputStyles,
} from "./SearchInput.styles";

interface SearchInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "className" | "size" | "type" | "value" | "defaultValue" | "onChange"
  > {
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
}

const SearchInput = ({
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
  placeholder = "Buscar",
  autoComplete = "off",
  onChange,
  onValueChange,
  "aria-label": ariaLabel,
  ...props
}: SearchInputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;

  const commitValueChange = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <FormField
      className={cn(searchInputRootStyles(), className)}
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
        <div className={searchInputControlStyles({ fullWidth })}>
          <div className={searchInputWrapperStyles({ fullWidth })}>
            <span className={searchInputIconStyles({ size })}>
              <Icon decorative name="search" size={size === "lg" ? "md" : "sm"} />
            </span>

            <Input
              {...props}
              {...fieldProps}
              aria-label={label ? undefined : ariaLabel ?? "Buscar"}
              autoComplete={autoComplete}
              className={searchInputInputRootStyles({ fullWidth })}
              description={undefined}
              disabled={disabled}
              fullWidth={fullWidth}
              inputClassName={cn(searchInputInputStyles({ size }), inputClassName)}
              invalid={invalid}
              label={undefined}
              placeholder={placeholder}
              required={required}
              type="search"
              value={currentValue}
              onChange={(event) => {
                commitValueChange(event.currentTarget.value);
                onChange?.(event);
              }}
            />
          </div>
        </div>
      )}
    </FormField>
  );
};

type SearchInputSize = InputSize;

export default SearchInput;
export type { SearchInputProps, SearchInputSize };

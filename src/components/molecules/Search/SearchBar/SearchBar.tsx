import { useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";

import { Button, Icon, Input, type ButtonVariant, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../../Formulary/FormField";
import {
  searchBarButtonStyles,
  searchBarControlStyles,
  searchBarFormStyles,
  searchBarIconStyles,
  searchBarInputRootStyles,
  searchBarInputStyles,
  searchBarRootStyles,
} from "./SearchBar.styles";

interface SearchBarSubmitMeta {
  value: string;
}

interface SearchBarProps
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
  formClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
  buttonClassName?: string;
  buttonLabel?: ReactNode;
  buttonVariant?: ButtonVariant;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  onSearch?: (meta: SearchBarSubmitMeta, event: FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({
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
  formClassName,
  inputClassName,
  messageClassName,
  buttonClassName,
  buttonLabel = "Buscar",
  buttonVariant = "primary",
  value,
  defaultValue,
  disabled = false,
  required = false,
  placeholder = "Buscar",
  autoComplete = "off",
  onChange,
  onValueChange,
  onSearch,
  "aria-label": ariaLabel,
  ...props
}: SearchBarProps) => {
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
      className={cn(searchBarRootStyles(), className)}
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
        <form
          className={cn(searchBarFormStyles({ fullWidth }), formClassName)}
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            onSearch?.({ value: currentValue }, event);
          }}
        >
          <div className={searchBarControlStyles({ fullWidth })}>
            <span className={searchBarIconStyles({ size })}>
              <Icon decorative name="search" size={size === "lg" ? "md" : "sm"} />
            </span>

            <Input
              {...props}
              {...fieldProps}
              aria-label={label ? undefined : ariaLabel ?? "Buscar"}
              autoComplete={autoComplete}
              className={searchBarInputRootStyles({ fullWidth })}
              description={undefined}
              disabled={disabled}
              fullWidth={fullWidth}
              inputClassName={cn(searchBarInputStyles({ size }), inputClassName)}
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

          <Button
            className={cn(searchBarButtonStyles(), buttonClassName)}
            disabled={disabled}
            size={size}
            type="submit"
            variant={buttonVariant}
          >
            {buttonLabel}
          </Button>
        </form>
      )}
    </FormField>
  );
};

type SearchBarSize = InputSize;

export default SearchBar;
export type { SearchBarProps, SearchBarSize, SearchBarSubmitMeta };

import type { ReactNode, SelectHTMLAttributes } from "react";

import { Icon, type SelectSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../../Formulary/FormField";
import {
  searchFilterFieldStyles,
  searchFilterIconStyles,
  searchFilterMessageStyles,
  searchFilterRootStyles,
  searchFilterSelectStyles,
} from "./SearchFilter.styles";

interface SearchFilterOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

interface SearchFilterProps
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
  iconName?: string;
  options?: SearchFilterOption[];
  placeholder?: string;
  children?: ReactNode;
}

const SearchFilter = ({
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
  iconName = "filter_list",
  options,
  placeholder,
  children,
  disabled = false,
  required = false,
  ...props
}: SearchFilterProps) => (
  <FormField
    className={cn(searchFilterRootStyles(), className)}
    description={description}
    disabled={disabled}
    errorMessage={errorMessage}
    hideLabel={hideLabel}
    invalid={invalid}
    label={label}
    messageClassName={cn(searchFilterMessageStyles({ size, tone: errorMessage ? "critical" : "neutral" }), messageClassName)}
    optional={optional}
    optionalText={optionalText}
    required={required}
    size={size}
  >
    {(fieldProps) => (
      <div
        className={cn(
          searchFilterFieldStyles({
            size,
            invalid,
            fullWidth,
            disabled,
          }),
          fieldClassName,
        )}
      >
        <span className={searchFilterIconStyles({ size })}>
          <Icon decorative name={iconName} size={size === "lg" ? "md" : "sm"} />
        </span>

        <select
          {...props}
          {...fieldProps}
          aria-label={label ? undefined : "Filtrar resultados"}
          className={cn(searchFilterSelectStyles({ size }), selectClassName)}
          disabled={disabled}
          required={required}
        >
          {placeholder ? (
            <option disabled={required} value="">
              {placeholder}
            </option>
          ) : null}

          {options?.map((option) => (
            <option disabled={option.disabled} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

          {children}
        </select>

        <span aria-hidden="true" className={searchFilterIconStyles({ size, slot: "end" })}>
          <Icon decorative name="expand_more" size="sm" />
        </span>
      </div>
    )}
  </FormField>
);

type SearchFilterSize = SelectSize;

export default SearchFilter;
export type { SearchFilterOption, SearchFilterProps, SearchFilterSize };

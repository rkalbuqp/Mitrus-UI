import { useId, type ReactNode, type SelectHTMLAttributes } from "react";

import { cn } from "../../../utils/cn";
import Icon from "../Icon";
import {
  selectDescriptionStyles,
  selectElementStyles,
  selectFieldStyles,
  selectIconStyles,
  selectLabelStyles,
  selectRootStyles,
  type SelectSize,
} from "./Select.styles";

interface SelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "className" | "size"> {
  label?: ReactNode;
  description?: ReactNode;
  size?: SelectSize;
  invalid?: boolean;
  fullWidth?: boolean;
  className?: string;
  fieldClassName?: string;
  selectClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
  options?: SelectOption[];
  placeholder?: string;
}

const Select = ({
  label,
  description,
  size = "md",
  invalid = false,
  fullWidth = false,
  className,
  fieldClassName,
  selectClassName,
  descriptionClassName,
  children,
  options,
  placeholder,
  id,
  disabled = false,
  required = false,
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const labelId = label ? `${selectId}-label` : undefined;
  const descriptionId = description ? `${selectId}-description` : undefined;
  const mergedDescription = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn(selectRootStyles(), className)}>
      {label ? (
        <label className={selectLabelStyles({ size })} htmlFor={selectId} id={labelId}>
          {label}
        </label>
      ) : null}

      <div
        className={cn(
          selectFieldStyles({
            size,
            invalid,
            fullWidth,
            disabled,
          }),
          fieldClassName,
        )}
        data-slot="select-field"
      >
        <select
          {...props}
          aria-describedby={mergedDescription}
          aria-invalid={invalid || undefined}
          aria-labelledby={ariaLabelledBy ?? labelId}
          className={cn(selectElementStyles({ size }), selectClassName)}
          disabled={disabled}
          id={selectId}
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

        <span aria-hidden="true" className={selectIconStyles({ size })}>
          <Icon decorative name="expand_more" size="sm" />
        </span>
      </div>

      {description ? (
        <span className={cn(selectDescriptionStyles({ size }), descriptionClassName)} id={descriptionId}>
          {description}
        </span>
      ) : null}
    </div>
  );
};

export type { SelectSize };

export default Select;
export type { SelectOption, SelectProps };

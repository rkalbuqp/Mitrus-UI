import { useId, useState, type FieldsetHTMLAttributes, type ReactNode } from "react";

import { RadioButton, Text, type RadioButtonSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  radioGroupItemsStyles,
  radioGroupLegendIndicatorStyles,
  radioGroupLegendStyles,
  radioGroupMessageStyles,
  radioGroupRootStyles,
} from "./RadioGroup.styles";

interface RadioGroupItem {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  id?: string;
}

interface RadioGroupProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, "children" | "defaultValue" | "onChange"> {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  items: RadioGroupItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: RadioButtonSize;
  invalid?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  optionalText?: ReactNode;
  orientation?: "vertical" | "horizontal";
  itemsClassName?: string;
  messageClassName?: string;
  itemClassName?: string;
  name?: string;
  required?: boolean;
}

const RadioGroup = ({
  label,
  description,
  errorMessage,
  items,
  value,
  defaultValue,
  onValueChange,
  size = "md",
  invalid = false,
  disabled = false,
  required = false,
  hideLabel = false,
  optional = false,
  optionalText = "(opcional)",
  orientation = "vertical",
  className,
  itemsClassName,
  messageClassName,
  itemClassName,
  id,
  name,
  ...props
}: RadioGroupProps) => {
  const generatedId = useId();
  const groupId = id ?? `${generatedId}-group`;
  const groupName = name ?? `${groupId}-name`;
  const legendId = label ? `${groupId}-legend` : undefined;
  const descriptionId = description ? `${groupId}-description` : undefined;
  const errorId = errorMessage ? `${groupId}-error` : undefined;
  const messageId = errorMessage ? errorId : descriptionId;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;
  const firstEnabledItemIndex = items.findIndex((item) => !item.disabled);

  const handleValueChange = (nextValue: string) => {
    if (disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

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
        className={cn(radioGroupMessageStyles(), messageClassName)}
        id={descriptionId}
        size={size === "sm" ? "xs" : "sm"}
        tone="secondary"
      >
        {description}
      </Text>
    );
  };

  return (
    <fieldset
      {...props}
      aria-describedby={messageId}
      aria-invalid={invalid || undefined}
      aria-labelledby={legendId}
      className={cn(radioGroupRootStyles(), className)}
      id={groupId}
    >
      {label ? (
        <Text
          as="legend"
          className={radioGroupLegendStyles({ srOnly: hideLabel })}
          id={legendId}
          size={size === "sm" ? "sm" : "md"}
          tone={disabled ? "secondary" : "primary"}
          weight="medium"
        >
          {label}
          {required ? (
            <span aria-hidden="true" className={radioGroupLegendIndicatorStyles({ tone: "required" })}>
              *
            </span>
          ) : null}
          {!required && optional ? (
            <span className={radioGroupLegendIndicatorStyles({ tone: "optional" })}>{optionalText}</span>
          ) : null}
        </Text>
      ) : null}

      <div className={cn(radioGroupItemsStyles({ orientation }), itemsClassName)} role="radiogroup">
        {items.map((item, index) => (
          <RadioButton
            key={item.value}
            aria-describedby={messageId}
            checked={currentValue === item.value}
            className={itemClassName}
            description={item.description}
            disabled={disabled || item.disabled}
            id={item.id ?? `${groupId}-${item.value}`}
            invalid={invalid}
            name={groupName}
            onChange={() => {
              handleValueChange(item.value);
            }}
            required={required && index === firstEnabledItemIndex}
            size={size}
            value={item.value}
          >
            {item.label}
          </RadioButton>
        ))}
      </div>

      {renderMessage()}
    </fieldset>
  );
};

export default RadioGroup;
export type { RadioGroupItem, RadioGroupProps };

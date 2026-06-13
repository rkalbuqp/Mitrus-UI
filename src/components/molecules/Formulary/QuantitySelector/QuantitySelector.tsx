import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";

import { Button, Icon, Input, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../FormField";
import {
  quantitySelectorControlStyles,
  quantitySelectorInputRootStyles,
  quantitySelectorStepButtonStyles,
  quantitySelectorStepButtonIconStyles,
  quantitySelectorStepInputStyles,
  quantitySelectorRootStyles,
} from "./QuantitySelector.styles";

const DEFAULT_MIN = 1;
const DEFAULT_STEP = 1;

const getSafeMin = (min?: number) => {
  if (min === undefined || Number.isNaN(min)) {
    return DEFAULT_MIN;
  }

  return min;
};

const getSafeStep = (step?: number) => {
  if (step === undefined || Number.isNaN(step) || step <= 0) {
    return DEFAULT_STEP;
  }

  return step;
};

const clampValue = (value: number, min: number, max?: number) => {
  if (Number.isNaN(value)) {
    return min;
  }

  if (value < min) {
    return min;
  }

  if (max === undefined) {
    return value;
  }

  if (value > max) {
    return max;
  }

  return value;
};

const getInitialValue = (value: number | undefined, defaultValue: number | undefined, min: number, max?: number) => {
  if (value !== undefined) {
    return clampValue(value, min, max);
  }

  if (defaultValue !== undefined) {
    return clampValue(defaultValue, min, max);
  }

  return min;
};

type QuantitySelectorChangeSource = "increment" | "decrement" | "input";

interface QuantitySelectorValueChangeMeta {
  previousValue: number;
  min: number;
  max?: number;
  step: number;
  source: QuantitySelectorChangeSource;
}

interface QuantitySelectorProps
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
  controlsClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  decrementLabel?: string;
  incrementLabel?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: number, meta: QuantitySelectorValueChangeMeta) => void;
}

const QuantitySelector = ({
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
  controlsClassName,
  inputClassName,
  messageClassName,
  value,
  defaultValue,
  min,
  max,
  step,
  disabled = false,
  required = false,
  decrementLabel = "Diminuir quantidade",
  incrementLabel = "Aumentar quantidade",
  inputMode = "numeric",
  onChange,
  onValueChange,
  ...props
}: QuantitySelectorProps) => {
  const safeMin = getSafeMin(min);
  const safeStep = getSafeStep(step);
  const [internalValue, setInternalValue] = useState(() => getInitialValue(value, defaultValue, safeMin, max));
  const currentValue = clampValue(value ?? internalValue, safeMin, max);
  const canDecrement = currentValue - safeStep >= safeMin;
  const canIncrement = max === undefined || currentValue + safeStep <= max;

  const commitValueChange = (nextValue: number, source: QuantitySelectorChangeSource) => {
    const normalizedNextValue = clampValue(nextValue, safeMin, max);

    if (value === undefined) {
      setInternalValue(normalizedNextValue);
    }

    onValueChange?.(normalizedNextValue, {
      previousValue: currentValue,
      min: safeMin,
      max,
      step: safeStep,
      source,
    });

    return normalizedNextValue;
  };

  const handleStepChange = (direction: "increment" | "decrement") => {
    if (disabled) {
      return;
    }

    if (direction === "decrement" && !canDecrement) {
      return;
    }

    if (direction === "increment" && !canIncrement) {
      return;
    }

    const delta = direction === "increment" ? safeStep : -safeStep;
    commitValueChange(currentValue + delta, direction);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.currentTarget.value;

    if (rawValue === "") {
      event.currentTarget.value = String(currentValue);
      onChange?.(event);
      return;
    }

    const parsedValue = Number(rawValue);

    if (Number.isNaN(parsedValue)) {
      event.currentTarget.value = String(currentValue);
      onChange?.(event);
      return;
    }

    const normalizedNextValue = commitValueChange(parsedValue, "input");
    event.currentTarget.value = String(normalizedNextValue);
    onChange?.(event);
  };

  return (
    <FormField
      className={cn(quantitySelectorRootStyles(), className)}
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
        <div
          aria-disabled={disabled || undefined}
          className={cn(quantitySelectorControlStyles({ fullWidth }), controlsClassName)}
          role="group"
        >
          <Button
            aria-label={decrementLabel}
            className={quantitySelectorStepButtonStyles({ side: "left" })}
            disabled={disabled || !canDecrement}
            size="icon"
            type="button"
            variant="secondary"
            onClick={() => {
              handleStepChange("decrement");
            }}
          >
            <Icon className={quantitySelectorStepButtonIconStyles()} name="remove" />
          </Button>

          <Input
            {...props}
            {...fieldProps}
            aria-label={label ? undefined : "Quantidade"}
            className={cn(quantitySelectorInputRootStyles({ fullWidth }))}
            description={undefined}
            disabled={disabled}
            fullWidth={fullWidth}
            inputClassName={cn(quantitySelectorStepInputStyles(), inputClassName)}
            inputMode={inputMode}
            invalid={invalid}
            label={undefined}
            max={max}
            min={safeMin}
            onChange={handleInputChange}
            required={required}
            step={safeStep}
            type="number"
            value={currentValue}
          />

          <Button
            aria-label={incrementLabel}
            className={quantitySelectorStepButtonStyles({ side: "right" })}
            disabled={disabled || !canIncrement}
            size="icon"
            type="button"
            variant="secondary"
            onClick={() => {
              handleStepChange("increment");
            }}
          >
            <Icon className={quantitySelectorStepButtonIconStyles()} name="add" />
          </Button>
        </div>
      )}
    </FormField>
  );
};

type QuantitySelectorSize = InputSize;

export default QuantitySelector;
export type {
  QuantitySelectorChangeSource,
  QuantitySelectorValueChangeMeta,
  QuantitySelectorProps,
  QuantitySelectorSize,
};

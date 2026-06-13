import { useId, useMemo, useState, type HTMLAttributes, type ReactNode } from "react";

import { Checkbox, type CheckboxSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";

const normalizeValues = (values: string[]) => Array.from(new Set(values));

interface CheckboxFieldItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
}

interface CheckboxFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onChange"> {
  label: ReactNode;
  description?: ReactNode;
  items?: CheckboxFieldItem[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: CheckboxSize;
  disabled?: boolean;
  invalid?: boolean;
  itemsClassName?: string;
}

const CheckboxField = ({
  label,
  description,
  items = [],
  value,
  defaultValue,
  onValueChange,
  checked,
  defaultChecked = false,
  onCheckedChange,
  size = "md",
  disabled = false,
  invalid = false,
  className,
  itemsClassName,
  ...props
}: CheckboxFieldProps) => {
  const generatedId = useId();
  const fieldId = props.id ?? generatedId;
  const isGroup = items.length > 0;

  const [internalValue, setInternalValue] = useState<string[]>(() => normalizeValues(defaultValue ?? []));
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const selectedValues = useMemo(
    () => normalizeValues(value ?? internalValue),
    [internalValue, value],
  );

  const selectedValueSet = useMemo(() => new Set(selectedValues), [selectedValues]);

  const interactiveItems = useMemo(() => {
    const enabledItems = items.filter((item) => !item.disabled);
    return enabledItems.length > 0 ? enabledItems : items;
  }, [items]);

  const checkedChildrenCount = interactiveItems.filter((item) => selectedValueSet.has(item.id)).length;
  const allChildrenChecked = isGroup && interactiveItems.length > 0 && checkedChildrenCount === interactiveItems.length;
  const someChildrenChecked = checkedChildrenCount > 0;
  const parentChecked = isGroup ? allChildrenChecked : (checked ?? internalChecked);
  const parentIndeterminate = isGroup && someChildrenChecked && !allChildrenChecked;

  const updateValues = (nextValue: string[]) => {
    const normalizedValue = normalizeValues(nextValue);

    if (value === undefined) {
      setInternalValue(normalizedValue);
    }

    onValueChange?.(normalizedValue);
  };

  const handleParentChange = (nextChecked: boolean) => {
    if (!isGroup) {
      if (checked === undefined) {
        setInternalChecked(nextChecked);
      }

      onCheckedChange?.(nextChecked);
      return;
    }

    const nextValueSet = new Set(selectedValues);

    interactiveItems.forEach((item) => {
      if (nextChecked) {
        nextValueSet.add(item.id);
        return;
      }

      nextValueSet.delete(item.id);
    });

    updateValues(Array.from(nextValueSet));
  };

  const handleItemChange = (itemId: string, nextChecked: boolean) => {
    const nextValueSet = new Set(selectedValues);

    if (nextChecked) {
      nextValueSet.add(itemId);
    } else {
      nextValueSet.delete(itemId);
    }

    updateValues(Array.from(nextValueSet));
  };

  return (
    <div {...props} className={cn("flex flex-col gap-3", className)} id={fieldId}>
      <Checkbox
        checked={parentChecked}
        description={description}
        disabled={disabled}
        indeterminate={parentIndeterminate}
        invalid={invalid}
        onChange={(event) => handleParentChange(event.currentTarget.checked)}
        size={size}
      >
        {label}
      </Checkbox>

      {isGroup ? (
        <div
          aria-label={`${typeof label === "string" ? label : "grupo de checkboxes"} - itens`}
          className={cn("ml-4 flex flex-col gap-3 border-l border-border-neutral-subtle pl-5", itemsClassName)}
          role="group"
        >
          {items.map((item) => (
            <Checkbox
              key={item.id}
              checked={selectedValueSet.has(item.id)}
              description={item.description}
              disabled={disabled || item.disabled}
              invalid={invalid}
              onChange={(event) => handleItemChange(item.id, event.currentTarget.checked)}
              size={size}
            >
              {item.label}
            </Checkbox>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CheckboxField;
export type { CheckboxFieldItem, CheckboxFieldProps };

import { useId, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode } from "react";

import { Button, ListItem } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  tabGroupItemStyles,
  tabGroupListStyles,
  tabGroupPanelStyles,
  tabGroupRootStyles,
  tabGroupTabStyles,
} from "./TabGroup.styles";

const getFirstEnabledTabIndex = (items: TabGroupItem[]) => items.findIndex((item) => !item.disabled);

const getTabId = (groupId: string, item: TabGroupItem) => item.id ?? `${groupId}-tab-${item.value}`;

const getPanelId = (groupId: string, item: TabGroupItem) => `${groupId}-panel-${item.value}`;

const getNextEnabledTabIndex = (items: TabGroupItem[], startIndex: number, direction: 1 | -1) => {
  if (!items.length) {
    return -1;
  }

  for (let step = 1; step <= items.length; step += 1) {
    const nextIndex = (startIndex + step * direction + items.length) % items.length;

    if (!items[nextIndex]?.disabled) {
      return nextIndex;
    }
  }

  return -1;
};

interface TabGroupItem {
  label: ReactNode;
  content: ReactNode;
  value: string;
  disabled?: boolean;
  id?: string;
}

interface TabGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "defaultValue" | "onChange"> {
  items: TabGroupItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel?: string;
  panelClassName?: string;
  listClassName?: string;
  tabClassName?: string;
}

const TabGroup = ({
  items,
  value,
  defaultValue,
  onValueChange,
  ariaLabel = "Abas",
  className,
  panelClassName,
  listClassName,
  tabClassName,
  id,
  ...props
}: TabGroupProps) => {
  const generatedId = useId();
  const groupId = id ?? `${generatedId}-tabs`;
  const firstEnabledTabIndex = getFirstEnabledTabIndex(items);
  const fallbackValue = firstEnabledTabIndex >= 0 ? items[firstEnabledTabIndex]?.value : undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? fallbackValue ?? "");
  const currentValue = value ?? internalValue;
  const selectedIndex = items.findIndex((item) => item.value === currentValue);
  const safeSelectedIndex = selectedIndex >= 0 ? selectedIndex : firstEnabledTabIndex;
  const selectedItem = safeSelectedIndex >= 0 ? items[safeSelectedIndex] : undefined;

  const handleValueChange = (nextValue: string) => {
    const nextItem = items.find((item) => item.value === nextValue);

    if (!nextItem || nextItem.disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, itemIndex: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = getNextEnabledTabIndex(items, itemIndex, 1);

      if (nextIndex < 0) {
        return;
      }

      handleValueChange(items[nextIndex].value);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const nextIndex = getNextEnabledTabIndex(items, itemIndex, -1);

      if (nextIndex < 0) {
        return;
      }

      handleValueChange(items[nextIndex].value);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();

      if (firstEnabledTabIndex < 0) {
        return;
      }

      handleValueChange(items[firstEnabledTabIndex].value);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const reversedIndex = [...items].reverse().findIndex((item) => !item.disabled);

      if (reversedIndex < 0) {
        return;
      }

      const lastEnabledIndex = items.length - 1 - reversedIndex;
      handleValueChange(items[lastEnabledIndex].value);
    }
  };

  return (
    <div {...props} className={cn(tabGroupRootStyles(), className)}>
      <ul aria-label={ariaLabel} className={cn(tabGroupListStyles(), listClassName)} role="tablist">
        {items.map((item, index) => {
          const tabId = getTabId(groupId, item);
          const panelId = getPanelId(groupId, item);
          const isSelected = item.value === selectedItem?.value;

          return (
            <ListItem className={tabGroupItemStyles()} key={item.value} role="presentation">
              <Button
                aria-controls={panelId}
                aria-selected={isSelected}
                className={cn(tabGroupTabStyles({ selected: isSelected }), tabClassName)}
                disabled={item.disabled}
                id={tabId}
                role="tab"
                size="sm"
                tabIndex={isSelected ? 0 : -1}
                variant="ghost"
                onClick={() => {
                  handleValueChange(item.value);
                }}
                onKeyDown={(event) => {
                  handleKeyDown(event, index);
                }}
              >
                {item.label}
              </Button>
            </ListItem>
          );
        })}
      </ul>

      {selectedItem ? (
        <div
          aria-labelledby={getTabId(groupId, selectedItem)}
          className={cn(tabGroupPanelStyles(), panelClassName)}
          id={getPanelId(groupId, selectedItem)}
          role="tabpanel"
          tabIndex={0}
        >
          {selectedItem.content}
        </div>
      ) : null}
    </div>
  );
};

export default TabGroup;
export type { TabGroupItem, TabGroupProps };

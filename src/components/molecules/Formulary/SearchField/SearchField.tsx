import { useMemo, useState, type InputHTMLAttributes, type KeyboardEvent, type ReactNode } from "react";

import { Button, Icon, Input, Link, ListItem, Text, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../FormField";
import {
  searchFieldControlStyles,
  searchFieldEmptyStateStyles,
  searchFieldIconStyles,
  searchFieldInputRootStyles,
  searchFieldInputStyles,
  searchFieldInputWrapperStyles,
  searchFieldResultActionStyles,
  searchFieldResultDescriptionStyles,
  searchFieldResultsListStyles,
  searchFieldResultsStyles,
  searchFieldRootStyles,
} from "./SearchField.styles";

const normalizeSearchValue = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const compactSearchValue = (value: string) => normalizeSearchValue(value).replace(/\s+/g, "");

const getSearchFieldItemLabel = (item: SearchFieldItem) => {
  if (typeof item.label === "string" || typeof item.label === "number") {
    return String(item.label);
  }

  if (item.searchText) {
    return item.searchText;
  }

  return item.value;
};

const getSearchFieldItemTerms = (item: SearchFieldItem) => {
  const terms = new Set<string>();

  terms.add(getSearchFieldItemLabel(item));
  terms.add(item.value);

  if (item.searchText) {
    terms.add(item.searchText);
  }

  item.keywords?.forEach((keyword) => {
    terms.add(keyword);
  });

  return [...terms];
};

const getFuzzyScore = (query: string, target: string) => {
  const normalizedQuery = compactSearchValue(query);
  const normalizedTarget = compactSearchValue(target);

  if (!normalizedQuery || !normalizedTarget) {
    return 0;
  }

  const containsIndex = normalizedTarget.indexOf(normalizedQuery);

  if (containsIndex >= 0) {
    return 1_000 - containsIndex - (normalizedTarget.length - normalizedQuery.length);
  }

  let queryIndex = 0;
  let score = 0;
  let streak = 0;

  for (const character of normalizedTarget) {
    if (character !== normalizedQuery[queryIndex]) {
      streak = 0;
      continue;
    }

    queryIndex += 1;
    streak += 1;
    score += 10 + streak * 5;

    if (queryIndex === normalizedQuery.length) {
      break;
    }
  }

  if (queryIndex !== normalizedQuery.length) {
    return 0;
  }

  return score - (normalizedTarget.length - normalizedQuery.length);
};

const getSearchResults = (items: SearchFieldItem[], query: string, resultLimit?: number) => {
  if (!normalizeSearchValue(query)) {
    return [];
  }

  const rankedItems = items
    .map((item, index) => {
      const bestScore = getSearchFieldItemTerms(item).reduce((highestScore, term) => {
        const termScore = getFuzzyScore(query, term);

        if (termScore > highestScore) {
          return termScore;
        }

        return highestScore;
      }, 0);

      return {
        item,
        index,
        score: bestScore,
      };
    })
    .filter(({ score }) => score > 0)
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      return left.index - right.index;
    });

  if (resultLimit === undefined || resultLimit <= 0) {
    return rankedItems.map(({ item }) => item);
  }

  return rankedItems.slice(0, resultLimit).map(({ item }) => item);
};

const getFirstEnabledResultIndex = (results: SearchFieldItem[]) =>
  results.findIndex((result) => !result.disabled);

const getNextEnabledResultIndex = (results: SearchFieldItem[], startIndex: number, direction: 1 | -1) => {
  if (!results.length) {
    return -1;
  }

  for (let step = 1; step <= results.length; step += 1) {
    const nextIndex = (startIndex + step * direction + results.length) % results.length;

    if (!results[nextIndex]?.disabled) {
      return nextIndex;
    }
  }

  return -1;
};

interface SearchFieldItem {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  searchText?: string;
  keywords?: string[];
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

interface SearchFieldValueChangeMeta {
  query: string;
  results: SearchFieldItem[];
}

interface SearchFieldSelectMeta extends SearchFieldValueChangeMeta {
  displayValue: string;
}

interface SearchFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "className" | "size" | "type" | "value" | "defaultValue" | "onChange"
  > {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  items: SearchFieldItem[];
  size?: InputSize;
  invalid?: boolean;
  fullWidth?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  optionalText?: ReactNode;
  className?: string;
  inputClassName?: string;
  messageClassName?: string;
  resultsClassName?: string;
  emptyStateClassName?: string;
  noResultsText?: ReactNode;
  value?: string;
  defaultValue?: string;
  resultLimit?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string, meta: SearchFieldValueChangeMeta) => void;
  onItemSelect?: (item: SearchFieldItem, meta: SearchFieldSelectMeta) => void;
}

const SearchField = ({
  label,
  description,
  errorMessage,
  items,
  size = "md",
  invalid = false,
  fullWidth = false,
  hideLabel = false,
  optional = false,
  optionalText,
  className,
  inputClassName,
  messageClassName,
  resultsClassName,
  emptyStateClassName,
  noResultsText = "Nenhum resultado encontrado.",
  value,
  defaultValue,
  resultLimit,
  disabled = false,
  required = false,
  placeholder = "Buscar",
  autoComplete = "off",
  onChange,
  onValueChange,
  onItemSelect,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}: SearchFieldProps) => {
  const controlSize = size === "sm" ? "sm" : "md";
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const currentValue = value ?? internalValue;
  const results = useMemo(
    () => getSearchResults(items, currentValue, resultLimit),
    [items, currentValue, resultLimit],
  );
  const hasQuery = Boolean(normalizeSearchValue(currentValue));
  const shouldShowResults = isResultsOpen && hasQuery;
  const firstEnabledResultIndex = getFirstEnabledResultIndex(results);
  const effectiveHighlightedIndex =
    shouldShowResults && results[highlightedIndex] && !results[highlightedIndex]?.disabled
      ? highlightedIndex
      : firstEnabledResultIndex;

  const commitValueChange = (nextValue: string) => {
    const nextResults = getSearchResults(items, nextValue, resultLimit);

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    if (!normalizeSearchValue(nextValue)) {
      setIsResultsOpen(false);
      setHighlightedIndex(-1);
    } else {
      setIsResultsOpen(true);
      setHighlightedIndex(getFirstEnabledResultIndex(nextResults));
    }

    onValueChange?.(nextValue, {
      query: nextValue,
      results: nextResults,
    });
  };

  const handleItemSelect = (item: SearchFieldItem) => {
    if (item.disabled) {
      return;
    }

    const nextValue = getSearchFieldItemLabel(item);
    const nextResults = getSearchResults(items, nextValue, resultLimit);

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    setIsResultsOpen(false);
    setHighlightedIndex(-1);
    onValueChange?.(nextValue, {
      query: nextValue,
      results: nextResults,
    });
    onItemSelect?.(item, {
      displayValue: nextValue,
      query: nextValue,
      results: nextResults,
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      if (!hasQuery) {
        onKeyDown?.(event);
        return;
      }

      event.preventDefault();
      setIsResultsOpen(true);
      setHighlightedIndex((previousIndex) => {
        const safeIndex =
          results[previousIndex] && !results[previousIndex]?.disabled ? previousIndex : -1;

        return getNextEnabledResultIndex(results, safeIndex, 1);
      });
      onKeyDown?.(event);
      return;
    }

    if (event.key === "ArrowUp") {
      if (!hasQuery) {
        onKeyDown?.(event);
        return;
      }

      event.preventDefault();
      setIsResultsOpen(true);
      setHighlightedIndex((previousIndex) => {
        if (!results[previousIndex] || results[previousIndex]?.disabled) {
          return getNextEnabledResultIndex(results, 0, -1);
        }

        return getNextEnabledResultIndex(results, previousIndex, -1);
      });
      onKeyDown?.(event);
      return;
    }

    if (event.key === "Enter") {
      if (!shouldShowResults || effectiveHighlightedIndex < 0) {
        onKeyDown?.(event);
        return;
      }

      event.preventDefault();
      handleItemSelect(results[effectiveHighlightedIndex]);
      onKeyDown?.(event);
      return;
    }

    if (event.key === "Escape") {
      if (!shouldShowResults) {
        onKeyDown?.(event);
        return;
      }

      event.preventDefault();
      setIsResultsOpen(false);
      setHighlightedIndex(-1);
      onKeyDown?.(event);
      return;
    }

    onKeyDown?.(event);
  };

  return (
    <FormField
      className={cn(searchFieldRootStyles(), className)}
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
      {(fieldProps) => {
        const resultsId = `${fieldProps.id}-results`;
        const activeResultId =
          shouldShowResults && effectiveHighlightedIndex >= 0
            ? `${resultsId}-option-${effectiveHighlightedIndex}`
            : undefined;

        return (
          <div className={searchFieldControlStyles({ fullWidth })}>
            <div className={searchFieldInputWrapperStyles({ fullWidth })}>
              <div className={searchFieldIconStyles({ size })}>
                <Icon decorative name="search" size={size === "lg" ? "md" : "sm"} />
              </div>

              <Input
                {...props}
                {...fieldProps}
                aria-activedescendant={activeResultId}
                aria-autocomplete="list"
                aria-controls={shouldShowResults ? resultsId : undefined}
                aria-expanded={shouldShowResults}
                aria-label={label ? undefined : "Buscar"}
                autoComplete={autoComplete}
                className={searchFieldInputRootStyles({ fullWidth })}
                description={undefined}
                disabled={disabled}
                fullWidth={fullWidth}
                inputClassName={cn(searchFieldInputStyles({ size }), inputClassName)}
                invalid={invalid}
                label={undefined}
                onBlur={(event) => {
                  setIsResultsOpen(false);
                  setHighlightedIndex(-1);
                  onBlur?.(event);
                }}
                onChange={(event) => {
                  commitValueChange(event.currentTarget.value);
                  onChange?.(event);
                }}
                onFocus={(event) => {
                  if (hasQuery) {
                    setIsResultsOpen(true);
                    setHighlightedIndex(firstEnabledResultIndex);
                  }

                  onFocus?.(event);
                }}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                required={required}
                role="combobox"
                type="search"
                value={currentValue}
              />
            </div>

            {shouldShowResults ? (
              <div className={cn(searchFieldResultsStyles({ fullWidth }), resultsClassName)}>
                {results.length ? (
                  <ul className={searchFieldResultsListStyles()} id={resultsId} role="listbox">
                    {results.map((item, index) => {
                      const resultId = `${resultsId}-option-${index}`;
                      const isHighlighted = index === effectiveHighlightedIndex;
                      const actionClassName = searchFieldResultActionStyles({
                        disabled: item.disabled,
                        highlighted: isHighlighted,
                      });
                      const content = (
                        <>
                          <Text as="span" size={size === "sm" ? "sm" : "md"} weight="medium">
                            {item.label}
                          </Text>

                          {item.description ? (
                            <Text
                              as="span"
                              className={searchFieldResultDescriptionStyles()}
                              size={size === "sm" ? "xs" : "sm"}
                              tone="secondary"
                            >
                              {item.description}
                            </Text>
                          ) : null}
                        </>
                      );

                      return (
                        <ListItem key={`${item.value}-${index}`} role="presentation">
                          {item.href && !item.disabled ? (
                            <Link
                              className={actionClassName}
                              href={item.href}
                              id={resultId}
                              rel={item.rel}
                              role="option"
                              size={controlSize}
                              target={item.target}
                              underline="none"
                              variant="neutral"
                              onClick={() => {
                                handleItemSelect(item);
                              }}
                              onMouseDown={(event) => {
                                event.preventDefault();
                              }}
                              onMouseEnter={() => {
                                setHighlightedIndex(index);
                              }}
                            >
                              {content}
                            </Link>
                          ) : (
                            <Button
                              aria-disabled={item.disabled || undefined}
                              className={actionClassName}
                              disabled={item.disabled}
                              id={resultId}
                              role="option"
                              size={controlSize}
                              variant="ghost"
                              onClick={() => {
                                handleItemSelect(item);
                              }}
                              onMouseDown={(event) => {
                                event.preventDefault();
                              }}
                              onMouseEnter={() => {
                                if (item.disabled) {
                                  return;
                                }

                                setHighlightedIndex(index);
                              }}
                            >
                              {content}
                            </Button>
                          )}
                        </ListItem>
                      );
                    })}
                  </ul>
                ) : (
                  <Text className={cn(searchFieldEmptyStateStyles(), emptyStateClassName)} role="status" size="sm" tone="secondary">
                    {noResultsText}
                  </Text>
                )}
              </div>
            ) : null}
          </div>
        );
      }}
    </FormField>
  );
};

type SearchFieldSize = InputSize;

export default SearchField;
export type {
  SearchFieldItem,
  SearchFieldProps,
  SearchFieldSelectMeta,
  SearchFieldSize,
  SearchFieldValueChangeMeta,
};

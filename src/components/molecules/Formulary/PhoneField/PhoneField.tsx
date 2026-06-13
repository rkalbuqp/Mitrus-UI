import { useMemo, useState, type InputHTMLAttributes, type ReactNode } from "react";

import { AsYouType, getCountries, getCountryCallingCode, isSupportedCountry, type CountryCode } from "libphonenumber-js";

import { Input, Select, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../FormField";
import {
  phoneFieldControlsStyles,
  phoneFieldInputStyles,
  phoneFieldRootStyles,
  phoneFieldSelectStyles,
} from "./PhoneField.styles";

const DEFAULT_COUNTRY: CountryCode = "BR";
const DEFAULT_PHONE_PLACEHOLDER = "000 000 0000";

const PHONE_PLACEHOLDERS: Partial<Record<CountryCode, string>> = {
  BR: "(DDD) 9 0000-0000",
};

const sanitizePhoneValue = (value: string) => value.replace(/\D/g, "");

const resolveCountry = (country?: string): CountryCode => {
  if (country && isSupportedCountry(country)) {
    return country;
  }

  return DEFAULT_COUNTRY;
};

const formatPhoneValue = (value: string, country: CountryCode) => {
  const formatter = new AsYouType(country);
  return formatter.input(sanitizePhoneValue(value));
};

const buildPhoneMetadata = (value: string, country: CountryCode) => {
  const formatter = new AsYouType(country);
  formatter.input(sanitizePhoneValue(value));

  const phoneNumber = formatter.getNumber();

  return {
    country,
    dialCode: `+${getCountryCallingCode(country)}`,
    nationalNumber: phoneNumber?.nationalNumber ?? sanitizePhoneValue(value),
    internationalValue: phoneNumber?.formatInternational(),
    e164Value: phoneNumber?.number,
  };
};

const buildCountryOptions = () =>
  getCountries()
    .map((country) => ({
      label: `${country} +${getCountryCallingCode(country)}`,
      value: country,
    }))
    .sort((left, right) => {
      if (left.value === DEFAULT_COUNTRY) {
        return -1;
      }

      if (right.value === DEFAULT_COUNTRY) {
        return 1;
      }

      return left.value.localeCompare(right.value);
    });

export interface PhoneFieldValueChangeMeta {
  country: CountryCode;
  dialCode: string;
  nationalNumber: string;
  internationalValue?: string;
  e164Value?: string;
}

export interface PhoneFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type" | "value" | "defaultValue"> {
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
  onValueChange?: (value: string, meta: PhoneFieldValueChangeMeta) => void;
  country?: CountryCode;
  defaultCountry?: CountryCode;
  onCountryChange?: (country: CountryCode) => void;
  countryAriaLabel?: string;
}

const PhoneField = ({
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
  onValueChange,
  country,
  defaultCountry,
  onCountryChange,
  countryAriaLabel = "Pais e DDI",
  disabled = false,
  required = false,
  inputMode = "tel",
  autoComplete = "tel-national",
  onChange,
  ...props
}: PhoneFieldProps) => {
  const initialCountry = resolveCountry(defaultCountry);
  const [internalCountry, setInternalCountry] = useState<CountryCode>(initialCountry);
  const [internalValue, setInternalValue] = useState(() => formatPhoneValue(defaultValue ?? "", initialCountry));

  const selectedCountry = resolveCountry(country ?? internalCountry);
  const currentValue = value ?? internalValue;
  const countryOptions = useMemo(() => buildCountryOptions(), []);
  const placeholder = PHONE_PLACEHOLDERS[selectedCountry] ?? DEFAULT_PHONE_PLACEHOLDER;

  const handleValueChange = (nextRawValue: string) => {
    const nextFormattedValue = formatPhoneValue(nextRawValue, selectedCountry);

    if (value === undefined) {
      setInternalValue(nextFormattedValue);
    }

    onValueChange?.(nextFormattedValue, buildPhoneMetadata(nextFormattedValue, selectedCountry));

    return nextFormattedValue;
  };

  const handleCountryChange = (nextCountryValue: string) => {
    const nextCountry = resolveCountry(nextCountryValue);
    const nextFormattedValue = formatPhoneValue(currentValue, nextCountry);

    if (country === undefined) {
      setInternalCountry(nextCountry);
    }

    if (value === undefined) {
      setInternalValue(nextFormattedValue);
    }

    onCountryChange?.(nextCountry);
    onValueChange?.(nextFormattedValue, buildPhoneMetadata(nextFormattedValue, nextCountry));
  };

  return (
    <FormField
      className={cn(phoneFieldRootStyles(), className)}
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
        const selectId = `${fieldProps.id}-country`;

        return (
          <div
            aria-labelledby={fieldProps["aria-labelledby"]}
            className={phoneFieldControlsStyles({ fullWidth })}
            role="group"
          >
            <Select
              aria-label={countryAriaLabel}
              className={phoneFieldSelectStyles()}
              description={undefined}
              disabled={disabled}
              fullWidth
              id={selectId}
              invalid={invalid}
              label={undefined}
              onChange={(event) => handleCountryChange(event.currentTarget.value)}
              options={countryOptions}
              size={size}
              value={selectedCountry}
            />

            <Input
              {...props}
              {...fieldProps}
              autoComplete={autoComplete}
              className={phoneFieldInputStyles()}
              description={undefined}
              disabled={disabled}
              fullWidth={fullWidth}
              inputClassName={inputClassName}
              inputMode={inputMode}
              invalid={invalid}
              label={undefined}
              onChange={(event) => {
                const nextFormattedValue = handleValueChange(event.currentTarget.value);
                event.currentTarget.value = nextFormattedValue;
                onChange?.(event);
              }}
              placeholder={placeholder}
              required={required}
              type="tel"
              value={currentValue}
            />
          </div>
        );
      }}
    </FormField>
  );
};

export default PhoneField;
export type PhoneFieldCountry = CountryCode;
export type PhoneFieldSize = InputSize;

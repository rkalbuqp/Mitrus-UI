import { useState, type InputHTMLAttributes, type ReactNode } from "react";

import { Icon, Input, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import FormField from "../FormField";
import { passwordFieldRootStyles, passwordFieldToggleStyles } from "./PasswordField.styles";

interface PasswordFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "children" | "className" | "size" | "type"> {
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
  toggleAriaLabelShow?: string;
  toggleAriaLabelHide?: string;
}

const PasswordField = ({
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
  disabled = false,
  required = false,
  autoComplete = "current-password",
  toggleAriaLabelShow = "Mostrar senha",
  toggleAriaLabelHide = "Ocultar senha",
  ...props
}: PasswordFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <FormField
      className={cn(passwordFieldRootStyles(), className)}
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
        <Input
          {...props}
          {...fieldProps}
          autoComplete={autoComplete}
          className="gap-0"
          description={undefined}
          disabled={disabled}
          endAdornment={
            <button
              aria-label={isPasswordVisible ? toggleAriaLabelHide : toggleAriaLabelShow}
              className={passwordFieldToggleStyles({ size })}
              disabled={disabled}
              onClick={() => setIsPasswordVisible((currentValue) => !currentValue)}
              type="button"
            >
              <Icon
                decorative
                name={isPasswordVisible ? "visibility_off" : "visibility"}
                size="sm"
              />
            </button>
          }
          fullWidth={fullWidth}
          inputClassName={inputClassName}
          invalid={invalid}
          label={undefined}
          type={isPasswordVisible ? "text" : "password"}
        />
      )}
    </FormField>
  );
};

type PasswordFieldSize = InputSize;

export default PasswordField;
export type { PasswordFieldProps, PasswordFieldSize };

import { useId, type HTMLAttributes, type ReactNode } from "react";

import { Label, Text, type InputSize } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import { formFieldControlStyles, formFieldMessageStyles, formFieldRootStyles } from "./FormField.styles";

export interface FormFieldRenderProps {
  id: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  "aria-invalid"?: true;
  disabled?: boolean;
  required?: boolean;
}

export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  size?: InputSize;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  hideLabel?: boolean;
  optional?: boolean;
  optionalText?: ReactNode;
  controlId?: string;
  controlClassName?: string;
  messageClassName?: string;
  children?: ReactNode | ((props: FormFieldRenderProps) => ReactNode);
}

const FormField = ({
  label,
  description,
  errorMessage,
  size = "md",
  invalid = false,
  disabled = false,
  required = false,
  hideLabel = false,
  optional = false,
  optionalText,
  controlId,
  className,
  controlClassName,
  messageClassName,
  children,
  ...props
}: FormFieldProps) => {
  const generatedId = useId();
  const inputId = controlId ?? `${generatedId}-control`;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const messageId = errorMessage ? errorId : descriptionId;
  const describedBy = messageId || undefined;

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
        className={cn(formFieldMessageStyles({ size, tone: "neutral" }), messageClassName)}
        id={descriptionId}
        size={size === "sm" ? "xs" : "sm"}
        tone="secondary"
      >
        {description}
      </Text>
    );
  };

  const renderControl = () => {
    if (typeof children === "function") {
      return children({
        id: inputId,
        "aria-describedby": describedBy,
        "aria-labelledby": labelId,
        "aria-invalid": invalid || undefined,
        disabled,
        required,
      });
    }

    return children;
  };

  return (
    <div {...props} className={cn(formFieldRootStyles(), className)}>
      {label ? (
        <Label
          disabled={disabled}
          htmlFor={inputId}
          id={labelId}
          optional={!required && optional}
          optionalText={optionalText}
          required={required}
          size={size}
          srOnly={hideLabel}
        >
          {label}
        </Label>
      ) : null}

      <div className={cn(formFieldControlStyles(), controlClassName)}>{renderControl()}</div>

      {renderMessage()}
    </div>
  );
};

export default FormField;

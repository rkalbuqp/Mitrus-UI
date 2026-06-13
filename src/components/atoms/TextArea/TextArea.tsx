import { useId, type ReactNode, type TextareaHTMLAttributes } from "react";

import { cn } from "../../../utils/cn";
import {
  textAreaDescriptionStyles,
  textAreaFieldStyles,
  textAreaLabelStyles,
  textAreaRootStyles,
  type TextAreaResize,
  type TextAreaSize,
} from "./TextArea.styles";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children" | "className"> {
  label?: ReactNode;
  description?: ReactNode;
  size?: TextAreaSize;
  invalid?: boolean;
  fullWidth?: boolean;
  resize?: TextAreaResize;
  className?: string;
  textAreaClassName?: string;
  descriptionClassName?: string;
}

const TextArea = ({
  label,
  description,
  size = "md",
  invalid = false,
  fullWidth = false,
  resize = "vertical",
  className,
  textAreaClassName,
  descriptionClassName,
  id,
  disabled = false,
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: TextAreaProps) => {
  const generatedId = useId();
  const textAreaId = id ?? generatedId;
  const labelId = label ? `${textAreaId}-label` : undefined;
  const descriptionId = description ? `${textAreaId}-description` : undefined;
  const mergedDescription = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn(textAreaRootStyles(), className)}>
      {label ? (
        <label className={textAreaLabelStyles({ size })} htmlFor={textAreaId} id={labelId}>
          {label}
        </label>
      ) : null}

      <textarea
        {...props}
        aria-describedby={mergedDescription}
        aria-invalid={invalid || undefined}
        aria-labelledby={ariaLabelledBy ?? labelId}
        className={cn(
          textAreaFieldStyles({
            size,
            invalid,
            fullWidth,
            resize,
          }),
          textAreaClassName,
        )}
        disabled={disabled}
        id={textAreaId}
      />

      {description ? (
        <span className={cn(textAreaDescriptionStyles({ size }), descriptionClassName)} id={descriptionId}>
          {description}
        </span>
      ) : null}
    </div>
  );
};

export default TextArea;
export type { TextAreaResize, TextAreaSize };

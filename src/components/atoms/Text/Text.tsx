import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  textContentStyles,
  textRootStyles,
  type TextAlign,
  type TextSize,
  type TextTone,
  type TextWeight,
} from "./Text.styles";

type TextOwnProps = {
  children: ReactNode;
  tone?: TextTone;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  italic?: boolean;
  truncate?: boolean;
  srOnly?: boolean;
  className?: string;
  contentClassName?: string;
};

type TextProps<T extends ElementType> = TextOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps | "as">;

const Text = <T extends ElementType = "p">({
  as,
  children,
  tone = "primary",
  size = "md",
  weight = "regular",
  align = "left",
  italic = false,
  truncate = false,
  srOnly = false,
  className,
  contentClassName,
  ...props
}: TextProps<T>) => {
  const Component = as ?? "p";

  return (
    <Component
      {...props}
      className={cn(
        textRootStyles({
          tone,
          align,
          srOnly,
        }),
        className,
      )}
      data-slot="text-root"
    >
      <span
        className={cn(
          textContentStyles({
            size,
            weight,
            italic,
            truncate,
          }),
          contentClassName,
        )}
        data-slot="text-content"
      >
        {children}
      </span>
    </Component>
  );
};

export default Text;
export type { TextAlign, TextSize, TextTone, TextWeight };

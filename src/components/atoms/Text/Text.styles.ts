import { cva, type VariantProps } from "class-variance-authority";

export const textRootStyles = cva("", {
  variants: {
    tone: {
      primary: "text-content-neutral-primary",
      secondary: "text-content-neutral-secondary",
      disabled: "text-content-disabled",
      accent: "text-content-accent",
      success: "text-content-success",
      warning: "text-content-warning",
      critical: "text-content-critical",
      inverse: "text-content-inverse",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    srOnly: {
      true: "sr-only",
      false: "",
    },
  },
  defaultVariants: {
    tone: "primary",
    align: "left",
    srOnly: false,
  },
});

export const textContentStyles = cva("", {
  variants: {
    size: {
      xs: "text-075 leading-125",
      sm: "text-087 leading-125",
      md: "text-100 leading-150",
      lg: "text-125 leading-150",
      xl: "text-150 leading-150",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    italic: {
      true: "italic",
      false: "not-italic",
    },
    truncate: {
      true: "block truncate",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "regular",
    italic: false,
    truncate: false,
  },
});

export type TextRootStyleProps = VariantProps<typeof textRootStyles>;
export type TextContentStyleProps = VariantProps<typeof textContentStyles>;
export type TextTone = NonNullable<TextRootStyleProps["tone"]>;
export type TextAlign = NonNullable<TextRootStyleProps["align"]>;
export type TextSize = NonNullable<TextContentStyleProps["size"]>;
export type TextWeight = NonNullable<TextContentStyleProps["weight"]>;

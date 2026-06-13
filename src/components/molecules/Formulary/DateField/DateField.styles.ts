import { cva, type VariantProps } from "class-variance-authority";

export const dateFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

export const dateFieldInputStyles = cva(
  [
    "rounded-md border bg-background-primary text-content-neutral-primary",
    "transition-colors duration-200 outline-none",
    "placeholder:text-content-neutral-secondary",
    "focus:border-border-focus-default",
    "focus:ring-2 focus:ring-border-focus-default",
    "focus:ring-offset-2 focus:ring-offset-background-primary",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      size: {
        sm: "min-h-9 px-3 py-2 text-087 leading-125",
        md: "min-h-10 px-3.5 py-2.5 text-100 leading-150",
        lg: "min-h-11 px-4 py-3 text-100 leading-150",
      },
      invalid: {
        true: "border-border-critical",
        false: "border-border-neutral-default",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
      fullWidth: false,
    },
  },
);

export const dateFieldMessageStyles = cva("", {
  variants: {
    tone: {
      neutral: "text-content-neutral-secondary",
      critical: "text-content-critical",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});

export type DateFieldStyleProps = VariantProps<typeof dateFieldInputStyles>;
export type DateFieldSize = NonNullable<DateFieldStyleProps["size"]>;

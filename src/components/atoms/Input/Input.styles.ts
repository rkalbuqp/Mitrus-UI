import { cva, type VariantProps } from "class-variance-authority";

export const inputRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

export const inputControlStyles = cva("relative inline-flex min-w-0 items-center");

export const inputFieldStyles = cva(
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
      hasEndAdornment: {
        true: "pr-12",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
      fullWidth: false,
      hasEndAdornment: false,
    },
  },
);

export const inputAdornmentStyles = cva(
  "absolute right-2 inline-flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-7",
        md: "h-8",
        lg: "h-9",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const inputLabelStyles = cva("font-medium text-content-neutral-primary", {
  variants: {
    size: {
      sm: "text-087 leading-125",
      md: "text-100 leading-150",
      lg: "text-100 leading-150",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputDescriptionStyles = cva("text-content-neutral-secondary", {
  variants: {
    size: {
      sm: "text-075 leading-125",
      md: "text-087 leading-125",
      lg: "text-087 leading-125",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type InputFieldStyleProps = VariantProps<typeof inputFieldStyles>;
export type InputSize = NonNullable<InputFieldStyleProps["size"]>;

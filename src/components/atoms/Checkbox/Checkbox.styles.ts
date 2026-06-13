import { cva, type VariantProps } from "class-variance-authority";

const checkboxRootStyles = cva("inline-flex w-fit select-none items-start gap-3", {
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-60",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const checkboxInputStyles = cva(
  [
    "mt-0.5 shrink-0 rounded border border-border-neutral-default bg-background-primary",
    "transition-colors duration-200",
    "accent-fill-accent-primary-default",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
    "disabled:cursor-not-allowed",
    "checked:border-fill-accent-primary-default",
    "indeterminate:border-fill-accent-primary-default",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      invalid: {
        true: "border-border-critical",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

const checkboxLabelStyles = cva("font-medium text-content-neutral-primary", {
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

const checkboxDescriptionStyles = cva("text-content-neutral-secondary", {
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

type CheckboxStyleProps = VariantProps<typeof checkboxInputStyles>;
type CheckboxSize = NonNullable<CheckboxStyleProps["size"]>;

export { checkboxRootStyles, checkboxInputStyles, checkboxLabelStyles, checkboxDescriptionStyles };
export type { CheckboxStyleProps, CheckboxSize };

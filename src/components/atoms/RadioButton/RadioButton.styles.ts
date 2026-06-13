import { cva, type VariantProps } from "class-variance-authority";

const radioButtonRootStyles = cva("inline-flex w-fit select-none items-start gap-3", {
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

const radioButtonInputStyles = cva("peer sr-only");

const radioButtonControlStyles = cva(
  [
    "relative mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full border bg-background-primary",
    "transition-colors duration-200",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-border-focus-default",
    "peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background-primary",
    "peer-checked:border-fill-accent-primary-default",
    "peer-disabled:cursor-not-allowed",
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
        false: "border-border-neutral-default",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

const radioButtonDotStyles = cva(
  [
    "rounded-full bg-fill-accent-primary-default opacity-0 transition-opacity duration-200",
    "peer-checked:opacity-100",
  ],
  {
    variants: {
      size: {
        sm: "h-2 w-2",
        md: "h-2.5 w-2.5",
        lg: "h-3 w-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const radioButtonLabelStyles = cva("font-medium text-content-neutral-primary", {
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

const radioButtonDescriptionStyles = cva("text-content-neutral-secondary", {
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

type RadioButtonStyleProps = VariantProps<typeof radioButtonControlStyles>;
type RadioButtonSize = NonNullable<RadioButtonStyleProps["size"]>;

export { radioButtonRootStyles, radioButtonInputStyles, radioButtonControlStyles, radioButtonDotStyles, radioButtonLabelStyles, radioButtonDescriptionStyles };
export type { RadioButtonStyleProps, RadioButtonSize };

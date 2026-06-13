import { cva, type VariantProps } from "class-variance-authority";

const switchRootStyles = cva("inline-flex w-fit select-none items-start gap-3", {
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

const switchInputStyles = cva("peer sr-only");

const switchControlStyles = cva(
  [
    "relative inline-flex shrink-0 rounded-full border border-transparent",
    "bg-fill-neutral-selected transition-colors duration-200",
    "peer-checked:bg-fill-accent-primary-default",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-border-focus-default",
    "peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background-primary",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-12",
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

const switchThumbStyles = cva(
  [
    "absolute left-0.5 top-0.5 rounded-full bg-background-primary shadow-sm",
    "transition-transform duration-200",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4 peer-checked:translate-x-4",
        md: "h-5 w-5 peer-checked:translate-x-5",
        lg: "h-6 w-6 peer-checked:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const switchLabelStyles = cva("font-medium text-content-neutral-primary", {
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

const switchDescriptionStyles = cva("text-content-neutral-secondary", {
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

type SwitchStyleProps = VariantProps<typeof switchControlStyles>;
type SwitchSize = NonNullable<SwitchStyleProps["size"]>;

export { switchRootStyles, switchInputStyles, switchControlStyles, switchThumbStyles, switchLabelStyles, switchDescriptionStyles };
export type { SwitchStyleProps, SwitchSize };

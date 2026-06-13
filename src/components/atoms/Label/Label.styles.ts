import { cva, type VariantProps } from "class-variance-authority";

const labelStyles = cva(
  [
    "inline-flex w-fit items-center gap-1.5",
    "font-medium text-content-neutral-primary",
    "select-none",
  ],
  {
    variants: {
      size: {
        sm: "text-087 leading-125",
        md: "text-100 leading-150",
        lg: "text-125 leading-150",
      },
      disabled: {
        true: "cursor-not-allowed opacity-60",
        false: "cursor-pointer",
      },
      srOnly: {
        true: "sr-only",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      srOnly: false,
    },
  },
);

const labelIndicatorStyles = cva("text-content-neutral-secondary", {
  variants: {
    tone: {
      required: "text-content-critical",
      optional: "text-content-neutral-secondary",
    },
  },
  defaultVariants: {
    tone: "optional",
  },
});

type LabelStyleProps = VariantProps<typeof labelStyles>;
type LabelSize = NonNullable<LabelStyleProps["size"]>;

export { labelStyles, labelIndicatorStyles };
export type { LabelStyleProps, LabelSize };

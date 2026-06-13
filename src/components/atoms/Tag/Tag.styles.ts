import { cva, type VariantProps } from "class-variance-authority";

const tagStyles = cva(
  [
    "inline-flex items-center justify-center",
    "whitespace-nowrap align-middle",
    "border transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        neutral: "border-border-neutral-default bg-surface-neutral-secondary text-content-neutral-primary",
        accent: "border-border-accent-default bg-surface-accent text-content-accent",
        success: "border-border-success bg-surface-success text-content-success",
        warning: "border-border-warning bg-surface-warning text-content-warning",
        critical: "border-border-critical bg-surface-critical text-content-critical",
        inverse: "border-border-inverse-default bg-surface-inverse text-content-inverse",
      },
      size: {
        sm: "min-h-5 px-2 py-0.5",
        md: "min-h-6 px-2.5 py-1",
        lg: "min-h-7 px-3 py-1",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
      numeric: {
        true: "px-1.5 tabular-nums",
        false: "",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        numeric: true,
        className: "min-w-5",
      },
      {
        size: "md",
        numeric: true,
        className: "min-w-6",
      },
      {
        size: "lg",
        numeric: true,
        className: "min-w-7",
      },
    ],
    defaultVariants: {
      variant: "neutral",
      size: "md",
      rounded: true,
      numeric: false,
    },
  },
);

const tagContentStyles = cva("font-medium", {
  variants: {
    size: {
      sm: "text-0625 leading-125",
      md: "text-075 leading-125",
      lg: "text-087 leading-125",
    },
    numeric: {
      true: "tabular-nums",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    numeric: false,
  },
});

type TagStyleProps = VariantProps<typeof tagStyles>;
type TagVariant = NonNullable<TagStyleProps["variant"]>;
type TagSize = NonNullable<TagStyleProps["size"]>;

export { tagStyles, tagContentStyles };
export type { TagStyleProps, TagVariant, TagSize };

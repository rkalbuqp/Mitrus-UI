import { cva, type VariantProps } from "class-variance-authority";

const linkStyles = cva(
  [
    "inline-flex w-fit items-center gap-1.5",
    "align-middle",
    "transition-colors duration-200",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
  ],
  {
    variants: {
      variant: {
        primary: "text-link hover:text-link-hover",
        neutral: "text-content-neutral-primary hover:text-content-neutral-secondary",
        subtle: "text-content-neutral-secondary hover:text-content-neutral-primary",
        inverse: "text-content-inverse hover:opacity-80",
      },
      underline: {
        none: "no-underline",
        hover: "no-underline hover:underline",
        always: "underline",
      },
    },
    defaultVariants: {
      variant: "primary",
      underline: "hover",
    },
  },
);

const linkContentStyles = cva("font-medium", {
  variants: {
    size: {
      sm: "text-087 leading-125",
      md: "text-100 leading-150",
      lg: "text-125 leading-150",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type LinkStyleProps = VariantProps<typeof linkStyles>;
type LinkVariant = NonNullable<LinkStyleProps["variant"]>;
type LinkSize = NonNullable<VariantProps<typeof linkContentStyles>["size"]>;
type LinkUnderline = NonNullable<LinkStyleProps["underline"]>;

export { linkStyles, linkContentStyles };
export type { LinkStyleProps, LinkVariant, LinkSize, LinkUnderline };

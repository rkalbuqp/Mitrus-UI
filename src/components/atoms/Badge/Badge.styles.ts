import { cva, type VariantProps } from "class-variance-authority";

export const badgeStyles = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "whitespace-nowrap align-middle",
    "border font-medium transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        neutral: "",
        accent: "",
        success: "",
        warning: "",
        critical: "",
        inverse: "",
      },
      appearance: {
        solid: "",
        subtle: "",
        outline: "bg-transparent",
      },
      size: {
        sm: "min-h-5 rounded-full px-2 py-0.5 text-0625 leading-125",
        md: "min-h-6 rounded-full px-2.5 py-1 text-075 leading-125",
        lg: "min-h-7 rounded-full px-3 py-1 text-087 leading-125",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    compoundVariants: [
      {
        variant: "neutral",
        appearance: "solid",
        className: "border-transparent bg-fill-neutral-selected text-content-neutral-primary",
      },
      {
        variant: "neutral",
        appearance: "subtle",
        className: "border-border-neutral-default bg-surface-neutral-secondary text-content-neutral-primary",
      },
      {
        variant: "neutral",
        appearance: "outline",
        className: "border-border-neutral-default text-content-neutral-primary",
      },
      {
        variant: "accent",
        appearance: "solid",
        className: "border-transparent bg-fill-accent-primary-default text-content-inverse",
      },
      {
        variant: "accent",
        appearance: "subtle",
        className: "border-border-accent-default bg-surface-accent text-content-accent",
      },
      {
        variant: "accent",
        appearance: "outline",
        className: "border-border-accent-default text-content-accent",
      },
      {
        variant: "success",
        appearance: "solid",
        className: "border-transparent bg-fill-success-default text-content-inverse",
      },
      {
        variant: "success",
        appearance: "subtle",
        className: "border-border-success bg-surface-success text-content-success",
      },
      {
        variant: "success",
        appearance: "outline",
        className: "border-border-success text-content-success",
      },
      {
        variant: "warning",
        appearance: "solid",
        className: "border-transparent bg-fill-warning-default text-content-neutral-primary",
      },
      {
        variant: "warning",
        appearance: "subtle",
        className: "border-border-warning bg-surface-warning text-content-warning",
      },
      {
        variant: "warning",
        appearance: "outline",
        className: "border-border-warning text-content-warning",
      },
      {
        variant: "critical",
        appearance: "solid",
        className: "border-transparent bg-fill-critical-default text-content-inverse",
      },
      {
        variant: "critical",
        appearance: "subtle",
        className: "border-border-critical bg-surface-critical text-content-critical",
      },
      {
        variant: "critical",
        appearance: "outline",
        className: "border-border-critical text-content-critical",
      },
      {
        variant: "inverse",
        appearance: "solid",
        className: "border-transparent bg-fill-inverse-default text-content-inverse",
      },
      {
        variant: "inverse",
        appearance: "subtle",
        className: "border-border-inverse-default bg-surface-inverse text-content-inverse",
      },
      {
        variant: "inverse",
        appearance: "outline",
        className: "border-border-inverse-default text-content-inverse",
      },
    ],
    defaultVariants: {
      variant: "neutral",
      appearance: "subtle",
      size: "md",
      rounded: true,
    },
  },
);

export const badgeDotStyles = cva("inline-flex shrink-0 rounded-full", {
  variants: {
    variant: {
      neutral: "bg-fill-neutral-selected",
      accent: "bg-fill-accent-primary-default",
      success: "bg-fill-success-default",
      warning: "bg-fill-warning-default",
      critical: "bg-fill-critical-default",
      inverse: "bg-fill-inverse-default",
    },
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "md",
  },
});

export type BadgeStyleProps = VariantProps<typeof badgeStyles>;
export type BadgeVariant = NonNullable<BadgeStyleProps["variant"]>;
export type BadgeAppearance = NonNullable<BadgeStyleProps["appearance"]>;
export type BadgeSize = NonNullable<BadgeStyleProps["size"]>;

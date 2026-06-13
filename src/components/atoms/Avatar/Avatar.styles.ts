import { cva, type VariantProps } from "class-variance-authority";

const avatarStyles = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center overflow-hidden",
    "bg-surface-neutral-secondary text-content-neutral-primary",
    "select-none border border-border-neutral-default",
  ],
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-0625",
        sm: "h-8 w-8 text-075",
        md: "h-10 w-10 text-100",
        lg: "h-12 w-12 text-125",
        xl: "h-16 w-16 text-150",
        "2xl": "h-20 w-20 text-200",
      },
      shape: {
        circle: "rounded-full",
        rounded: "rounded-xl",
        square: "rounded-none",
      },
      bordered: {
        true: "ring-2 ring-background-primary",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
      bordered: false,
    },
  },
);

const avatarFallbackStyles = cva(
  "inline-flex h-full w-full items-center justify-center bg-fill-neutral-default font-semibold uppercase text-content-neutral-primary",
  {
    variants: {
      size: {
        xs: "text-0625",
        sm: "text-075",
        md: "text-087",
        lg: "text-100",
        xl: "text-125",
        "2xl": "text-150",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const avatarStatusStyles = cva("absolute block rounded-full border-2 border-background-primary", {
  variants: {
    size: {
      xs: "bottom-0 right-0 h-2 w-2",
      sm: "bottom-0 right-0 h-2.5 w-2.5",
      md: "bottom-0 right-0 h-3 w-3",
      lg: "bottom-0 right-0 h-3.5 w-3.5",
      xl: "bottom-0.5 right-0.5 h-4 w-4",
      "2xl": "bottom-1 right-1 h-5 w-5",
    },
    status: {
      online: "bg-fill-success-default",
      away: "bg-fill-warning-default",
      busy: "bg-fill-critical-default",
      offline: "bg-fill-disabled",
    },
  },
  defaultVariants: {
    size: "md",
    status: "offline",
  },
});

type AvatarStyleProps = VariantProps<typeof avatarStyles>;
type AvatarSize = NonNullable<AvatarStyleProps["size"]>;
type AvatarShape = NonNullable<AvatarStyleProps["shape"]>;
type AvatarStatus = NonNullable<VariantProps<typeof avatarStatusStyles>["status"]>;

export { avatarStyles, avatarFallbackStyles, avatarStatusStyles };
export type { AvatarStyleProps, AvatarSize, AvatarShape, AvatarStatus };

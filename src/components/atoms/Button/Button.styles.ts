import { cva, type VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap select-none align-middle",
    "rounded-md border font-medium",
    "transition-colors duration-200",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
    "disabled:pointer-events-none disabled:opacity-60",
  ],
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-fill-accent-primary-default text-content-inverse hover:bg-fill-accent-primary-hover active:bg-fill-accent-primary-selected",
        secondary:
          "border-border-neutral-default bg-fill-neutral-default text-content-neutral-primary hover:border-border-neutral-hover hover:bg-fill-neutral-hover active:border-border-neutral-selected active:bg-fill-neutral-selected",
        outline:
          "border-border-accent-default bg-transparent text-content-accent hover:border-border-accent-hover hover:bg-fill-accent-secondary-hover active:border-border-accent-selected active:bg-fill-accent-secondary-selected",
        ghost:
          "border-transparent bg-transparent text-content-neutral-primary hover:bg-fill-neutral-hover active:bg-fill-neutral-selected",
        link: "border-transparent bg-transparent px-0 text-link hover:text-link-hover hover:underline",
        danger:
          "border-transparent bg-fill-critical-default text-content-inverse hover:bg-fill-critical-hover active:bg-fill-critical-selected",
        success:
          "border-transparent bg-fill-success-default text-content-inverse hover:bg-fill-success-hover active:bg-fill-success-selected",
      },
      size: {
        xs: "min-h-8 px-3 py-1.5 text-087 leading-125",
        sm: "min-h-9 px-3.5 py-2 text-087 leading-125",
        md: "min-h-10 px-4 py-2.5 text-100 leading-150",
        lg: "min-h-11 px-5 py-3 text-100 leading-150",
        xl: "min-h-12 px-6 py-3.5 text-125 leading-150",
        icon: "h-10 w-10 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
      loading: {
        true: "cursor-wait",
        false: "",
      },
      pressed: {
        true: "ring-2 ring-border-focus-default",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      rounded: false,
      loading: false,
      pressed: false,
    },
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
export type ButtonVariant = NonNullable<ButtonStyleProps["variant"]>;
export type ButtonSize = NonNullable<ButtonStyleProps["size"]>;

import { cva } from "class-variance-authority";

export const passwordFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

export const passwordFieldToggleStyles = cva(
  [
    "inline-flex items-center justify-center rounded-md border border-transparent bg-transparent px-2",
    "text-content-neutral-secondary transition-colors duration-200 outline-none",
    "hover:bg-fill-neutral-hover hover:text-content-neutral-primary",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      size: {
        sm: "h-7 min-w-7",
        md: "h-8 min-w-8",
        lg: "h-9 min-w-9",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

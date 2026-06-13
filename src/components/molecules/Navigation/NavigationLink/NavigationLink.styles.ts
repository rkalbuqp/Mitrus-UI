import { cva } from "class-variance-authority";

const navigationLinkRootStyles = cva(
  [
    "inline-flex max-w-full items-center gap-2 rounded-md px-3 py-2 transition-colors duration-200",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
  ],
  {
    variants: {
      current: {
        true: "bg-fill-neutral-selected text-content-neutral-primary",
        false: "bg-transparent text-content-neutral-primary hover:bg-fill-neutral-hover",
      },
    },
    defaultVariants: {
      current: false,
    },
  },
);

const navigationLinkIconStyles = cva("text-content-neutral-secondary");

const navigationLinkLabelStyles = cva("min-w-0");

export { navigationLinkIconStyles, navigationLinkLabelStyles, navigationLinkRootStyles };

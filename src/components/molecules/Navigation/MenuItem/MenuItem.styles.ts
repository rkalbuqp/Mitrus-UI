import { cva } from "class-variance-authority";

const menuItemRootStyles = cva("w-full");

const menuItemActionStyles = cva(
  [
    "flex w-full items-start gap-3 rounded-md px-3 py-2 text-left transition-colors duration-200",
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

const menuItemContentStyles = cva("flex min-w-0 flex-1 flex-col gap-0.5");

const menuItemLabelStyles = cva("min-w-0");

const menuItemDescriptionStyles = cva("min-w-0 text-content-neutral-secondary");

const menuItemIconStyles = cva("mt-0.5 text-content-neutral-secondary");

export {
  menuItemActionStyles,
  menuItemContentStyles,
  menuItemDescriptionStyles,
  menuItemIconStyles,
  menuItemLabelStyles,
  menuItemRootStyles,
};

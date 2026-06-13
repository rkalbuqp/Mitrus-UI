import { cva } from "class-variance-authority";

const paginationRootStyles = cva("w-full");

const paginationListStyles = cva("flex flex-wrap items-center gap-1.5");

const paginationItemStyles = cva("inline-flex");

const paginationActionStyles = cva(
  [
    "inline-flex min-h-9 min-w-9 items-center justify-center gap-2 rounded-md px-3 py-2",
    "transition-colors duration-200",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
  ],
  {
    variants: {
      current: {
        true: "bg-fill-neutral-selected text-content-neutral-primary",
        false: "bg-transparent text-content-neutral-primary hover:bg-fill-neutral-hover",
      },
      disabled: {
        true: "cursor-not-allowed opacity-60",
        false: "",
      },
    },
    defaultVariants: {
      current: false,
      disabled: false,
    },
  },
);

const paginationCurrentPageStyles = cva("inline-flex min-h-9 min-w-9 items-center justify-center rounded-md px-3 py-2");

const paginationEllipsisStyles = cva("inline-flex min-h-9 min-w-9 items-center justify-center text-content-neutral-secondary");

const paginationLabelStyles = cva("min-w-0");

const paginationIconStyles = cva("text-content-neutral-secondary");

export {
  paginationActionStyles,
  paginationCurrentPageStyles,
  paginationEllipsisStyles,
  paginationIconStyles,
  paginationItemStyles,
  paginationLabelStyles,
  paginationListStyles,
  paginationRootStyles,
};

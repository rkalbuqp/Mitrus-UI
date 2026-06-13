import { cva } from "class-variance-authority";

const tabGroupRootStyles = cva("inline-flex min-w-0 flex-col gap-3");

const tabGroupListStyles = cva("flex min-w-0 items-center gap-1 border-b border-border-neutral-default");

const tabGroupItemStyles = cva("inline-flex");

const tabGroupTabStyles = cva(
  [
    "rounded-b-none border-b-2 border-transparent px-4 py-2",
    "focus-visible:ring-2 focus-visible:ring-border-focus-default focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
  ],
  {
    variants: {
      selected: {
        true: "border-border-accent-default text-content-accent hover:bg-transparent",
        false: "text-content-neutral-primary hover:bg-fill-neutral-hover",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

const tabGroupPanelStyles = cva("min-w-0");

export {
  tabGroupItemStyles,
  tabGroupListStyles,
  tabGroupPanelStyles,
  tabGroupRootStyles,
  tabGroupTabStyles,
};

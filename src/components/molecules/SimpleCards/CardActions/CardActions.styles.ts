import { cva } from "class-variance-authority";

const cardActionsRootStyles = cva("flex min-w-0 items-center gap-2", {
  variants: {
    direction: {
      horizontal: "flex-row flex-wrap",
      vertical: "flex-col items-stretch",
    },
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
  },
  defaultVariants: {
    direction: "horizontal",
    align: "start",
    fullWidth: false,
  },
});

export { cardActionsRootStyles };

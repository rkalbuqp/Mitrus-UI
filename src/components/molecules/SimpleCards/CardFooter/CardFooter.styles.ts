import { cva } from "class-variance-authority";

const cardFooterRootStyles = cva("flex min-w-0 flex-col gap-2", {
  variants: {
    divider: {
      true: "border-t border-border-neutral-default pt-4",
      false: "",
    },
  },
  defaultVariants: {
    divider: false,
  },
});

const cardFooterMainStyles = cva("flex min-w-0 items-start gap-3", {
  variants: {
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    align: "between",
  },
});

const cardFooterMetaStyles = cva("flex min-w-0 flex-1 flex-col gap-1");

const cardFooterActionStyles = cva("shrink-0");

export {
  cardFooterActionStyles,
  cardFooterMainStyles,
  cardFooterMetaStyles,
  cardFooterRootStyles,
};

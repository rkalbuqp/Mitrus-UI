import { cva } from "class-variance-authority";

const radioGroupRootStyles = cva("inline-flex min-w-0 flex-col gap-3 border-0 p-0");

const radioGroupLegendStyles = cva("inline-flex items-center gap-1.5", {
  variants: {
    srOnly: {
      true: "sr-only",
      false: "",
    },
  },
  defaultVariants: {
    srOnly: false,
  },
});

const radioGroupLegendIndicatorStyles = cva("", {
  variants: {
    tone: {
      required: "text-content-critical",
      optional: "text-content-neutral-secondary",
    },
  },
});

const radioGroupItemsStyles = cva("flex min-w-0 gap-3", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row flex-wrap items-start",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const radioGroupMessageStyles = cva("text-content-neutral-secondary");

export {
  radioGroupItemsStyles,
  radioGroupLegendIndicatorStyles,
  radioGroupLegendStyles,
  radioGroupMessageStyles,
  radioGroupRootStyles,
};

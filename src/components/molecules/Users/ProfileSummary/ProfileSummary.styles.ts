import { cva } from "class-variance-authority";

const profileSummaryRootStyles = cva("flex min-w-0 flex-col gap-4", {
  variants: {
    bordered: {
      true: "rounded-lg border border-border-neutral-default bg-background-primary p-4",
      false: "",
    },
  },
  defaultVariants: {
    bordered: false,
  },
});

const profileSummaryMainStyles = cva("flex min-w-0 items-start gap-4", {
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

const profileSummaryIdentityStyles = cva("flex min-w-0 flex-1 items-start gap-3");

const profileSummaryActionStyles = cva("shrink-0");

const profileSummaryFooterStyles = cva("flex min-w-0 flex-col gap-2");

export {
  profileSummaryActionStyles,
  profileSummaryFooterStyles,
  profileSummaryIdentityStyles,
  profileSummaryMainStyles,
  profileSummaryRootStyles,
};

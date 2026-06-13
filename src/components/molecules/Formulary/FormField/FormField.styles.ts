import { cva } from "class-variance-authority";

export const formFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

export const formFieldControlStyles = cva("inline-flex min-w-0 flex-col");

export const formFieldMessageStyles = cva("", {
  variants: {
    tone: {
      neutral: "text-content-neutral-secondary",
      critical: "text-content-critical",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});

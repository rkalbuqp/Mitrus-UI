import { cva } from "class-variance-authority";

const formFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const formFieldControlStyles = cva("inline-flex min-w-0 flex-col");

const formFieldMessageStyles = cva("", {
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

export { formFieldRootStyles, formFieldControlStyles, formFieldMessageStyles };

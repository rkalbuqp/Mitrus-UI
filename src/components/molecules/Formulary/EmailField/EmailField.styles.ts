import { cva } from "class-variance-authority";

const emailFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const emailFieldMessageStyles = cva("", {
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

export { emailFieldRootStyles, emailFieldMessageStyles };

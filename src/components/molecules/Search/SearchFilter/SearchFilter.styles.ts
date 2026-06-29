import { cva } from "class-variance-authority";

const searchFilterRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const searchFilterFieldStyles = cva(
  [
    "relative inline-flex items-center overflow-hidden rounded-md border bg-background-primary",
    "transition-colors duration-200",
    "focus-within:border-border-focus-default",
    "focus-within:ring-2 focus-within:ring-border-focus-default",
    "focus-within:ring-offset-2 focus-within:ring-offset-background-primary",
  ],
  {
    variants: {
      size: {
        sm: "min-h-9",
        md: "min-h-10",
        lg: "min-h-11",
      },
      invalid: {
        true: "border-border-critical",
        false: "border-border-neutral-default",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      disabled: {
        true: "opacity-60",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
      fullWidth: false,
      disabled: false,
    },
  },
);

const searchFilterSelectStyles = cva(
  [
    "w-full appearance-none bg-transparent text-content-neutral-primary outline-none",
    "pr-10 pl-10 font-medium",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "text-087 leading-125",
        md: "text-100 leading-150",
        lg: "text-100 leading-150",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const searchFilterIconStyles = cva(
  "pointer-events-none absolute inline-flex items-center justify-center text-content-neutral-secondary",
  {
    variants: {
      size: {
        sm: "text-[18px]",
        md: "text-[20px]",
        lg: "text-[22px]",
      },
      slot: {
        start: "left-3",
        end: "right-3",
      },
    },
    defaultVariants: {
      size: "md",
      slot: "start",
    },
  },
);

const searchFilterMessageStyles = cva("", {
  variants: {
    size: {
      sm: "text-075 leading-125",
      md: "text-087 leading-125",
      lg: "text-087 leading-125",
    },
    tone: {
      neutral: "text-content-neutral-secondary",
      critical: "text-content-critical",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "neutral",
  },
});

export {
  searchFilterFieldStyles,
  searchFilterIconStyles,
  searchFilterMessageStyles,
  searchFilterRootStyles,
  searchFilterSelectStyles,
};

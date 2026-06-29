import { cva } from "class-variance-authority";

const searchBarRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const searchBarFormStyles = cva("inline-flex min-w-0 max-w-full items-start gap-2", {
  variants: {
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const searchBarControlStyles = cva("relative min-w-0", {
  variants: {
    fullWidth: {
      true: "flex-1",
      false: "w-auto",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const searchBarInputRootStyles = cva("", {
  variants: {
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const searchBarInputStyles = cva("", {
  variants: {
    size: {
      sm: "pl-9",
      md: "pl-10",
      lg: "pl-11",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const searchBarIconStyles = cva(
  "pointer-events-none absolute inset-y-0 left-3 z-10 inline-flex items-center justify-center text-content-neutral-secondary",
  {
    variants: {
      size: {
        sm: "text-[18px]",
        md: "text-[20px]",
        lg: "text-[22px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const searchBarButtonStyles = cva("shrink-0");

export {
  searchBarButtonStyles,
  searchBarControlStyles,
  searchBarFormStyles,
  searchBarIconStyles,
  searchBarInputRootStyles,
  searchBarInputStyles,
  searchBarRootStyles,
};

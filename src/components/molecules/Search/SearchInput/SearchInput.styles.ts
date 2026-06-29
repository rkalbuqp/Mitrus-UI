import { cva } from "class-variance-authority";

const searchInputRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const searchInputControlStyles = cva("inline-flex min-w-0", {
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

const searchInputWrapperStyles = cva("relative inline-flex min-w-0", {
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

const searchInputInputRootStyles = cva("", {
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

const searchInputInputStyles = cva("", {
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

const searchInputIconStyles = cva(
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

export {
  searchInputControlStyles,
  searchInputIconStyles,
  searchInputInputRootStyles,
  searchInputInputStyles,
  searchInputRootStyles,
  searchInputWrapperStyles,
};

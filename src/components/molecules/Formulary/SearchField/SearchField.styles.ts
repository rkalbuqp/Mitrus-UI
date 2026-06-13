import { cva } from "class-variance-authority";

const searchFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const searchFieldControlStyles = cva("inline-flex min-w-0 flex-col", {
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

const searchFieldInputWrapperStyles = cva("relative inline-flex min-w-0", {
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

const searchFieldInputRootStyles = cva("gap-0", {
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

const searchFieldInputStyles = cva("", {
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

const searchFieldIconStyles = cva(
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

const searchFieldResultsStyles = cva(
  "mt-2 overflow-hidden rounded-md border border-border-neutral-default bg-background-primary shadow-sm",
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "min-w-full w-fit",
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

const searchFieldResultsListStyles = cva("flex flex-col py-1");

const searchFieldResultActionStyles = cva(
  [
    "flex w-full min-w-0 flex-col items-start gap-1 px-3 py-2 text-left outline-none transition-colors duration-150",
    "focus-visible:bg-background-secondary",
  ],
  {
    variants: {
      highlighted: {
        true: "bg-background-secondary",
        false: "bg-transparent hover:bg-background-secondary",
      },
      disabled: {
        true: "cursor-not-allowed opacity-60",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      highlighted: false,
      disabled: false,
    },
  },
);

const searchFieldResultDescriptionStyles = cva("text-content-neutral-secondary");

const searchFieldEmptyStateStyles = cva("px-3 py-2 text-content-neutral-secondary");

export {
  searchFieldControlStyles,
  searchFieldEmptyStateStyles,
  searchFieldIconStyles,
  searchFieldInputRootStyles,
  searchFieldInputStyles,
  searchFieldInputWrapperStyles,
  searchFieldResultActionStyles,
  searchFieldResultDescriptionStyles,
  searchFieldResultsListStyles,
  searchFieldResultsStyles,
  searchFieldRootStyles,
};

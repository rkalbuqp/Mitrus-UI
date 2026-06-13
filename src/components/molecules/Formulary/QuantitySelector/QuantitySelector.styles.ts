import { cva } from "class-variance-authority";

const quantitySelectorRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

const quantitySelectorControlStyles = cva("inline-flex min-w-0 items-stretch", {
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

const quantitySelectorInputRootStyles = cva("gap-0", {
  variants: {
    fullWidth: {
      true: "min-w-0 flex-1",
      false: "w-24",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const quantitySelectorStepInputStyles = cva(
  [
    "rounded-none border-l-0 border-r-0 text-center",
    "[appearance:textfield]",
    "[&::-webkit-inner-spin-button]:appearance-none",
    "[&::-webkit-outer-spin-button]:appearance-none",
  ],
);

const quantitySelectorStepButtonStyles = cva("shrink-0 shadow-none", {
  variants: {
    side: {
      left: "rounded-r-none border-r-0",
      right: "rounded-l-none border-l-0",
    },
  },
});

const quantitySelectorStepButtonIconStyles = cva("pointer-events-none");

export {
  quantitySelectorControlStyles,
  quantitySelectorInputRootStyles,
  quantitySelectorRootStyles,
  quantitySelectorStepButtonIconStyles,
  quantitySelectorStepButtonStyles,
  quantitySelectorStepInputStyles,
};

import { cva } from "class-variance-authority";

export const phoneFieldRootStyles = cva("inline-flex min-w-0 flex-col gap-1.5");

export const phoneFieldControlsStyles = cva(
  "grid min-w-0 items-start gap-3",
  {
    variants: {
      fullWidth: {
        true: "grid-cols-[minmax(8.5rem,10rem)_minmax(0,1fr)]",
        false: "grid-cols-[8.5rem_minmax(16rem,1fr)]",
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

export const phoneFieldSelectStyles = cva("gap-0 w-[8.5rem] shrink-0");

export const phoneFieldInputStyles = cva("gap-0");

import { cva } from "class-variance-authority";

const mediaCardRootStyles = cva(
  "overflow-hidden rounded-lg border border-border-neutral-default bg-background-primary shadow-sm",
  {
    variants: {
      orientation: {
        vertical: "flex flex-col",
        horizontal: "grid grid-cols-[160px_minmax(0,1fr)]",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      orientation: "vertical",
      fullWidth: false,
    },
  },
);

const mediaCardMediaStyles = cva("min-w-0", {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "h-full",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const mediaCardContentStyles = cva("flex min-w-0 flex-col gap-4 p-4");

const mediaCardBodyStyles = cva("flex min-w-0 flex-col gap-3");

export {
  mediaCardBodyStyles,
  mediaCardContentStyles,
  mediaCardMediaStyles,
  mediaCardRootStyles,
};

import { cva, type VariantProps } from "class-variance-authority";

export const tooltipRootStyles = cva("relative inline-flex w-fit");

export const tooltipContentStyles = cva(
  [
    "pointer-events-none absolute z-20 inline-flex max-w-64 whitespace-normal rounded-md",
    "bg-fill-inverse-default text-content-inverse shadow-sm",
    "transition-opacity duration-200",
  ],
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-075 leading-125",
        md: "px-2.5 py-1.5 text-087 leading-125",
        lg: "px-3 py-2 text-100 leading-150",
      },
      placement: {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
        bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
        left: "right-full top-1/2 mr-2 -translate-y-1/2",
        right: "left-full top-1/2 ml-2 -translate-y-1/2",
      },
      open: {
        true: "pointer-events-auto opacity-100",
        false: "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
      },
    },
    defaultVariants: {
      size: "md",
      placement: "top",
      open: false,
    },
  },
);

export type TooltipContentStyleProps = VariantProps<typeof tooltipContentStyles>;
export type TooltipPlacement = NonNullable<TooltipContentStyleProps["placement"]>;
export type TooltipSize = NonNullable<TooltipContentStyleProps["size"]>;

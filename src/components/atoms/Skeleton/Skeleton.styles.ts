import { cva, type VariantProps } from "class-variance-authority";

export const skeletonStyles = cva(
  [
    "inline-flex shrink-0 bg-surface-neutral-secondary",
    "relative overflow-hidden",
  ],
  {
    variants: {
      variant: {
        line: "",
        rectangle: "",
        circle: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
      animated: {
        true: "animate-pulse",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    compoundVariants: [
      {
        variant: "line",
        size: "sm",
        className: "h-3 w-20 rounded",
      },
      {
        variant: "line",
        size: "md",
        className: "h-4 w-28 rounded",
      },
      {
        variant: "line",
        size: "lg",
        className: "h-5 w-36 rounded-md",
      },
      {
        variant: "rectangle",
        size: "sm",
        className: "h-12 w-20 rounded-md",
      },
      {
        variant: "rectangle",
        size: "md",
        className: "h-16 w-28 rounded-lg",
      },
      {
        variant: "rectangle",
        size: "lg",
        className: "h-24 w-40 rounded-xl",
      },
      {
        variant: "circle",
        size: "sm",
        className: "h-8 w-8 rounded-full",
      },
      {
        variant: "circle",
        size: "md",
        className: "h-10 w-10 rounded-full",
      },
      {
        variant: "circle",
        size: "lg",
        className: "h-14 w-14 rounded-full",
      },
    ],
    defaultVariants: {
      variant: "line",
      size: "md",
      animated: true,
      fullWidth: false,
    },
  },
);

export type SkeletonStyleProps = VariantProps<typeof skeletonStyles>;
export type SkeletonVariant = NonNullable<SkeletonStyleProps["variant"]>;
export type SkeletonSize = NonNullable<SkeletonStyleProps["size"]>;

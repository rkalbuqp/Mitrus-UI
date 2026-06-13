import { cva, type VariantProps } from "class-variance-authority";

export const imageFigureStyles = cva("inline-flex min-w-0 flex-col gap-2", {
  variants: {
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const imageStyles = cva(
  [
    "block max-w-full bg-surface-neutral-secondary",
    "transition-colors duration-200",
  ],
  {
    variants: {
      size: {
        sm: "w-24",
        md: "w-40",
        lg: "w-64",
        full: "w-full",
      },
      ratio: {
        auto: "aspect-auto",
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
      },
      fit: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        none: "object-none",
        scaleDown: "object-scale-down",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      bordered: {
        true: "border border-border-neutral-default",
        false: "border-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      ratio: "auto",
      fit: "cover",
      rounded: "md",
      bordered: false,
      fullWidth: false,
    },
  },
);

export const imageCaptionStyles = cva("text-content-neutral-secondary", {
  variants: {
    size: {
      sm: "text-075 leading-125",
      md: "text-087 leading-125",
      lg: "text-100 leading-150",
      full: "text-100 leading-150",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ImageStyleProps = VariantProps<typeof imageStyles>;
export type ImageSize = NonNullable<ImageStyleProps["size"]>;
export type ImageRatio = NonNullable<ImageStyleProps["ratio"]>;
export type ImageFit = NonNullable<ImageStyleProps["fit"]>;
export type ImageRounded = NonNullable<ImageStyleProps["rounded"]>;

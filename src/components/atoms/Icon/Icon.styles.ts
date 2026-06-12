import { cva, type VariantProps } from "class-variance-authority";

export const iconStyles = cva(
  [
    "inline-flex shrink-0 select-none items-center justify-center",
    "leading-none align-middle text-current",
  ],
  {
    variants: {
      variant: {
        outlined: "material-symbols-outlined",
        rounded: "material-symbols-rounded",
        sharp: "material-symbols-sharp",
      },
      size: {
        xs: "text-[16px]",
        sm: "text-[20px]",
        md: "text-[24px]",
        lg: "text-[32px]",
        xl: "text-[40px]",
      },
    },
    defaultVariants: {
      variant: "outlined",
      size: "md",
    },
  },
);

export type IconStyleProps = VariantProps<typeof iconStyles>;
export type IconVariant = NonNullable<IconStyleProps["variant"]>;
export type IconSize = NonNullable<IconStyleProps["size"]>;

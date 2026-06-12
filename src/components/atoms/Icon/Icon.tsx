import "@material-symbols/font-400";

import type { CSSProperties, HTMLAttributes } from "react";

import { cn } from "../../../utils/cn";
import { iconStyles, type IconSize, type IconVariant } from "./Icon.styles";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: IconSize;
  variant?: IconVariant;
  filled?: boolean;
  decorative?: boolean;
}

const Icon = ({
  name,
  size = "md",
  variant = "outlined",
  filled = false,
  decorative = true,
  className,
  style,
  ...props
}: IconProps) => {
  const iconStyle: CSSProperties = {
    fontVariationSettings: `"FILL" ${filled ? 1 : 0}`,
    ...style,
  };

  return (
    <span
      {...props}
      aria-hidden={decorative ? true : undefined}
      className={cn(iconStyles({ variant, size }), className)}
      style={iconStyle}
    >
      {name}
    </span>
  );
};

export default Icon;
export type { IconSize, IconVariant };

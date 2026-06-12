import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  badgeDotStyles,
  badgeStyles,
  type BadgeAppearance,
  type BadgeSize,
  type BadgeVariant,
} from "./Badge.styles";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  size?: BadgeSize;
  rounded?: boolean;
  dot?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Badge = ({
  children,
  variant = "neutral",
  appearance = "subtle",
  size = "md",
  rounded = true,
  dot = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: BadgeProps) => (
  <span
    {...props}
    className={cn(
      badgeStyles({
        variant,
        appearance,
        size,
        rounded,
      }),
      className,
    )}
  >
    {dot ? <span aria-hidden="true" className={badgeDotStyles({ variant, size })} /> : null}
    {leftIcon ? <span className="inline-flex shrink-0">{leftIcon}</span> : null}
    <span className="inline-flex items-center justify-center">{children}</span>
    {rightIcon ? <span className="inline-flex shrink-0">{rightIcon}</span> : null}
  </span>
);

export default Badge;
export type { BadgeAppearance, BadgeSize, BadgeVariant };

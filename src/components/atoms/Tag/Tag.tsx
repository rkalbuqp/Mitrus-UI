import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import { tagContentStyles, tagStyles, type TagSize, type TagVariant } from "./Tag.styles";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
  numeric?: boolean;
}

const Tag = ({
  label,
  variant = "neutral",
  size = "md",
  rounded = true,
  numeric = false,
  className,
  ...props
}: TagProps) => (
  <span
    {...props}
    className={cn(
      tagStyles({
        variant,
        size,
        rounded,
        numeric,
      }),
      className,
    )}
  >
    <span className={tagContentStyles({ size, numeric })}>{label}</span>
  </span>
);

export type { TagSize, TagVariant };

export default Tag;
export type { TagProps };

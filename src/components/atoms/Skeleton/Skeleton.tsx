import type { CSSProperties, HTMLAttributes } from "react";

import { cn } from "../../../utils/cn";
import { skeletonStyles, type SkeletonSize, type SkeletonVariant } from "./Skeleton.styles";

interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  variant?: SkeletonVariant;
  size?: SkeletonSize;
  animated?: boolean;
  fullWidth?: boolean;
  decorative?: boolean;
  loadingLabel?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const Skeleton = ({
  variant = "line",
  size = "md",
  animated = true,
  fullWidth = false,
  decorative = true,
  loadingLabel = "Loading",
  className,
  style,
  width,
  height,
  ...props
}: SkeletonProps) => {
  const customStyle: CSSProperties = {
    width,
    height,
    ...style,
  };

  return (
    <div
      {...props}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : loadingLabel}
      aria-live={decorative ? undefined : "polite"}
      className={cn(
        skeletonStyles({
          variant,
          size,
          animated,
          fullWidth,
        }),
        fullWidth ? "w-full" : null,
        className,
      )}
      role={decorative ? undefined : "status"}
      style={customStyle}
    />
  );
};

export type { SkeletonSize, SkeletonVariant };

export default Skeleton;
export type { SkeletonProps };

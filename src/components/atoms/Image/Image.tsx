import type { ImgHTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  imageCaptionStyles,
  imageFigureStyles,
  imageStyles,
  type ImageFit,
  type ImageRatio,
  type ImageRounded,
  type ImageSize,
} from "./Image.styles";

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "className" | "src" | "alt" | "children"> {
  src: string;
  alt: string;
  caption?: ReactNode;
  size?: ImageSize;
  ratio?: ImageRatio;
  fit?: ImageFit;
  rounded?: ImageRounded;
  bordered?: boolean;
  fullWidth?: boolean;
  className?: string;
  figureClassName?: string;
  captionClassName?: string;
}

const Image = ({
  src,
  alt,
  caption,
  size = "md",
  ratio = "auto",
  fit = "cover",
  rounded = "md",
  bordered = false,
  fullWidth = false,
  className,
  figureClassName,
  captionClassName,
  ...props
}: ImageProps) => {
  const imageElement = (
    <img
      {...props}
      alt={alt}
      className={cn(
        imageStyles({
          size,
          ratio,
          fit,
          rounded,
          bordered,
          fullWidth,
        }),
        className,
      )}
      src={src}
    />
  );

  if (!caption) {
    return imageElement;
  }

  return (
    <figure className={cn(imageFigureStyles({ fullWidth }), figureClassName)}>
      {imageElement}
      <figcaption className={cn(imageCaptionStyles({ size }), captionClassName)}>{caption}</figcaption>
    </figure>
  );
};

export type { ImageFit, ImageRatio, ImageRounded, ImageSize };

export default Image;
export type { ImageProps };

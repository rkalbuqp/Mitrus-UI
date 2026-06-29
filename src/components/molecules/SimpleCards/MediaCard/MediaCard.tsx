import { useId, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

import { Image, Link, Text, type ImageFit, type ImageRatio, type ImageRounded } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  mediaCardBodyStyles,
  mediaCardContentStyles,
  mediaCardMediaStyles,
  mediaCardRootStyles,
} from "./MediaCard.styles";

type MediaCardOwnProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  badge?: ReactNode;
  mediaSrc: string;
  mediaAlt: string;
  mediaCaption?: ReactNode;
  mediaHref?: string;
  mediaTarget?: string;
  mediaRel?: string;
  orientation?: "vertical" | "horizontal";
  fullWidth?: boolean;
  imageRatio?: ImageRatio;
  imageFit?: ImageFit;
  imageRounded?: ImageRounded;
  header?: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
};

type MediaCardProps<T extends ElementType> = MediaCardOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof MediaCardOwnProps | "as">;

const MediaCard = <T extends ElementType = "article">({
  as,
  title,
  description,
  eyebrow,
  badge,
  mediaSrc,
  mediaAlt,
  mediaCaption,
  mediaHref,
  mediaTarget,
  mediaRel,
  orientation = "vertical",
  fullWidth = false,
  imageRatio = "video",
  imageFit = "cover",
  imageRounded = "none",
  header,
  footer,
  actions,
  children,
  className,
  ...props
}: MediaCardProps<T>) => {
  const Component = as ?? "article";
  const titleId = useId();
  const mediaElement = (
    <Image
      alt={mediaAlt}
      caption={mediaCaption}
      fit={imageFit}
      fullWidth
        ratio={orientation === "horizontal" ? "square" : imageRatio}
      rounded={imageRounded}
      src={mediaSrc}
    />
  );

  return (
    <Component
      {...props}
      aria-labelledby={titleId}
      className={cn(mediaCardRootStyles({ orientation, fullWidth }), className)}
    >
      <div className={mediaCardMediaStyles({ orientation })}>
        {mediaHref ? (
          <Link href={mediaHref} rel={mediaRel} target={mediaTarget} underline="none" variant="neutral">
            {mediaElement}
          </Link>
        ) : (
          mediaElement
        )}
      </div>

      <div className={mediaCardContentStyles()}>
        {header ? (
          <>
            <Text as="span" id={titleId} srOnly>
              {title}
            </Text>
            {header}
          </>
        ) : (
          <div className={mediaCardBodyStyles()}>
            {(eyebrow || badge) ? (
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                {eyebrow ? (
                  <Text as="span" size="sm" tone="secondary" weight="medium">
                    {eyebrow}
                  </Text>
                ) : null}
                {badge}
              </div>
            ) : null}

            <Text as="h3" id={titleId} size="lg" weight="semibold">
              {title}
            </Text>

            {description ? (
              <Text as="p" size="sm" tone="secondary">
                {description}
              </Text>
            ) : null}
          </div>
        )}

        {children ? <div className={mediaCardBodyStyles()}>{children}</div> : null}
        {footer}
        {actions}
      </div>
    </Component>
  );
};

export default MediaCard;
export type { MediaCardProps };

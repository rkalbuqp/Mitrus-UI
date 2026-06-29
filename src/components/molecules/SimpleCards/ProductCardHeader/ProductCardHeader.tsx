import type { HTMLAttributes, ReactNode } from "react";

import { Link, Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  productCardHeaderContentStyles,
  productCardHeaderRootStyles,
  productCardHeaderTitleLinkStyles,
  productCardHeaderTitleRowStyles,
  productCardHeaderTopStyles,
} from "./ProductCardHeader.styles";

interface ProductCardHeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  tag?: ReactNode;
  titleHref?: string;
  titleTarget?: string;
  titleRel?: string;
  titleAs?: "h2" | "h3" | "h4";
}

const ProductCardHeader = ({
  eyebrow,
  title,
  subtitle,
  description,
  badge,
  tag,
  titleHref,
  titleTarget,
  titleRel,
  titleAs = "h3",
  className,
  ...props
}: ProductCardHeaderProps) => {
  const titleContent = (
    <Text as={titleAs} size="lg" weight="semibold">
      {title}
    </Text>
  );

  return (
    <header {...props} className={cn(productCardHeaderRootStyles(), className)}>
      {(eyebrow || badge || tag) ? (
        <div className={productCardHeaderTopStyles()}>
          {eyebrow ? (
            <Text as="span" size="sm" tone="secondary" weight="medium">
              {eyebrow}
            </Text>
          ) : null}
          {badge}
          {tag}
        </div>
      ) : null}

      <div className={productCardHeaderTitleRowStyles()}>
        <div className={productCardHeaderContentStyles()}>
          {titleHref ? (
            <Link
              className={productCardHeaderTitleLinkStyles()}
              href={titleHref}
              rel={titleRel}
              size="md"
              target={titleTarget}
              underline="hover"
              variant="neutral"
            >
              {titleContent}
            </Link>
          ) : (
            titleContent
          )}

          {subtitle ? (
            <Text as="p" size="sm" tone="secondary">
              {subtitle}
            </Text>
          ) : null}
        </div>
      </div>

      {description ? (
        <Text as="p" size="sm" tone="secondary">
          {description}
        </Text>
      ) : null}
    </header>
  );
};

export default ProductCardHeader;
export type { ProductCardHeaderProps };

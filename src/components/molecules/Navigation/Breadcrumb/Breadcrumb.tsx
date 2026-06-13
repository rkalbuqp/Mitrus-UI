import type { HTMLAttributes, ReactNode } from "react";

import { Icon, Link, ListItem, Span } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  breadcrumbCurrentPageStyles,
  breadcrumbItemStyles,
  breadcrumbLinkStyles,
  breadcrumbListStyles,
  breadcrumbRootStyles,
  breadcrumbSeparatorStyles,
} from "./Breadcrumb.styles";

interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  current?: boolean;
  target?: string;
  rel?: string;
}

interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  items: BreadcrumbItem[];
  ariaLabel?: string;
}

const Breadcrumb = ({
  items,
  ariaLabel = "Breadcrumb",
  className,
  ...props
}: BreadcrumbProps) => {
  const explicitCurrentIndex = items.findIndex((item) => item.current);
  const currentIndex = explicitCurrentIndex >= 0 ? explicitCurrentIndex : items.length - 1;

  return (
    <nav {...props} aria-label={ariaLabel} className={cn(breadcrumbRootStyles(), className)}>
      <ol className={breadcrumbListStyles()}>
        {items.map((item, index) => {
          const isCurrentPage = index === currentIndex;
          const isLastItem = index === items.length - 1;

          return (
            <ListItem className={breadcrumbItemStyles()} key={`${String(item.label)}-${index}`}>
              {isCurrentPage || !item.href ? (
                <Span
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={breadcrumbCurrentPageStyles()}
                >
                  {item.label}
                </Span>
              ) : (
                <Link
                  className={breadcrumbLinkStyles()}
                  href={item.href}
                  rel={item.rel}
                  size="sm"
                  target={item.target}
                  underline="hover"
                  variant="subtle"
                >
                  {item.label}
                </Link>
              )}

              {!isLastItem ? (
                <Icon
                  aria-hidden="true"
                  className={breadcrumbSeparatorStyles()}
                  decorative
                  name="chevron_right"
                  size="sm"
                />
              ) : null}
            </ListItem>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
export type { BreadcrumbItem, BreadcrumbProps };

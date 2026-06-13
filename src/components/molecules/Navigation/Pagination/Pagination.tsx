import type { HTMLAttributes, ReactNode } from "react";

import { Button, Icon, Link, ListItem, Span, Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  paginationActionStyles,
  paginationCurrentPageStyles,
  paginationEllipsisStyles,
  paginationIconStyles,
  paginationItemStyles,
  paginationLabelStyles,
  paginationListStyles,
  paginationRootStyles,
} from "./Pagination.styles";

const DOTS = "dots" as const;
type PaginationRangeItem = number | typeof DOTS;

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start);

const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number,
): PaginationRangeItem[] => {
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const totalPageNumbers = siblingCount * 2 + boundaryCount * 2 + 3;

  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages);
  }

  const leftSiblingIndex = Math.max(safeCurrentPage - siblingCount, boundaryCount + 2);
  const rightSiblingIndex = Math.min(safeCurrentPage + siblingCount, totalPages - boundaryCount - 1);

  const shouldShowLeftDots = leftSiblingIndex > boundaryCount + 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - boundaryCount - 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftRangeEnd = boundaryCount + siblingCount * 2 + 2;
    return [...range(1, leftRangeEnd), DOTS, ...range(totalPages - boundaryCount + 1, totalPages)];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightRangeStart = totalPages - (boundaryCount + siblingCount * 2 + 1);
    return [...range(1, boundaryCount), DOTS, ...range(rightRangeStart, totalPages)];
  }

  return [
    ...range(1, boundaryCount),
    DOTS,
    ...range(leftSiblingIndex, rightSiblingIndex),
    DOTS,
    ...range(totalPages - boundaryCount + 1, totalPages),
  ];
};

interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  siblingCount?: number;
  boundaryCount?: number;
  ariaLabel?: string;
  previousLabel?: ReactNode;
  nextLabel?: ReactNode;
  pageLabel?: (page: number) => string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  getPageHref,
  siblingCount = 1,
  boundaryCount = 1,
  ariaLabel = "Paginacao",
  previousLabel = "Anterior",
  nextLabel = "Proxima",
  pageLabel = (page) => `Ir para pagina ${page}`,
  className,
  ...props
}: PaginationProps) => {
  const safeTotalPages = Math.max(totalPages, 1);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const pageItems = getPaginationRange(safeCurrentPage, safeTotalPages, siblingCount, boundaryCount);
  const canGoToPreviousPage = safeCurrentPage > 1;
  const canGoToNextPage = safeCurrentPage < safeTotalPages;

  const renderNavigationAction = (
    page: number,
    label: ReactNode,
    iconName?: string,
    iconSide: "left" | "right" = "left",
  ) => {
    const href = getPageHref?.(page);
    const icon = iconName ? <Icon className={paginationIconStyles()} decorative name={iconName} size="sm" /> : null;
    const content = (
      <>
        {iconSide === "left" ? icon : null}
        <Text as="span" className={paginationLabelStyles()} size="sm" weight="medium">
          {label}
        </Text>
        {iconSide === "right" ? icon : null}
      </>
    );

    if (href) {
      return (
        <Link className={paginationActionStyles()} href={href} size="sm" underline="none" variant="neutral">
          {content}
        </Link>
      );
    }

    return (
      <Button
        className={paginationActionStyles()}
        size="sm"
        variant="ghost"
        onClick={() => {
          onPageChange?.(page);
        }}
      >
        {content}
      </Button>
    );
  };

  return (
    <nav {...props} aria-label={ariaLabel} className={cn(paginationRootStyles(), className)}>
      <ul className={paginationListStyles()}>
        <ListItem className={paginationItemStyles()}>
          {canGoToPreviousPage
            ? renderNavigationAction(safeCurrentPage - 1, previousLabel, "chevron_left")
            : (
              <Span aria-disabled="true" className={paginationActionStyles({ disabled: true })}>
                <Icon className={paginationIconStyles()} decorative name="chevron_left" size="sm" />
                <Text as="span" className={paginationLabelStyles()} size="sm" weight="medium">
                  {previousLabel}
                </Text>
              </Span>
            )}
        </ListItem>

        {pageItems.map((item, index) => {
          if (item === DOTS) {
            return (
              <ListItem className={paginationItemStyles()} key={`dots-${index}`}>
                <Span aria-hidden="true" className={paginationEllipsisStyles()}>
                  ...
                </Span>
              </ListItem>
            );
          }

          const pageNumber = item;
          const isCurrentPage = pageNumber === safeCurrentPage;

          if (isCurrentPage) {
            return (
              <ListItem className={paginationItemStyles()} key={pageNumber}>
                <Span aria-current="page" className={paginationCurrentPageStyles()}>
                  <Text as="span" size="sm" weight="medium">
                    {pageNumber}
                  </Text>
                </Span>
              </ListItem>
            );
          }

          const href = getPageHref?.(pageNumber);

          return (
            <ListItem className={paginationItemStyles()} key={pageNumber}>
              {href ? (
                <Link
                  aria-label={pageLabel(pageNumber)}
                  className={paginationActionStyles()}
                  href={href}
                  size="sm"
                  underline="none"
                  variant="neutral"
                >
                  <Text as="span" size="sm" weight="medium">
                    {pageNumber}
                  </Text>
                </Link>
              ) : (
                <Button
                  aria-label={pageLabel(pageNumber)}
                  className={paginationActionStyles()}
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    onPageChange?.(pageNumber);
                  }}
                >
                  <Text as="span" size="sm" weight="medium">
                    {pageNumber}
                  </Text>
                </Button>
              )}
            </ListItem>
          );
        })}

        <ListItem className={paginationItemStyles()}>
          {canGoToNextPage
            ? renderNavigationAction(safeCurrentPage + 1, nextLabel, "chevron_right", "right")
            : (
              <Span aria-disabled="true" className={paginationActionStyles({ disabled: true })}>
                <Text as="span" className={paginationLabelStyles()} size="sm" weight="medium">
                  {nextLabel}
                </Text>
                <Icon className={paginationIconStyles()} decorative name="chevron_right" size="sm" />
              </Span>
            )}
        </ListItem>
      </ul>
    </nav>
  );
};

export default Pagination;
export type { PaginationProps };

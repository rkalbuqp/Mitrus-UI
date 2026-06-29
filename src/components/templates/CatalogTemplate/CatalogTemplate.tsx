import type { HTMLAttributes, ReactNode } from "react";

import { Text } from "../../atoms";
import { type BreadcrumbItem } from "../../molecules";
import { cn } from "../../../utils/cn";
import PageShell from "../PageShell";
import {
  catalogTemplateEmptyStateStyles,
  catalogTemplateFiltersStyles,
  catalogTemplateResultsGridStyles,
  catalogTemplateResultsHeaderStyles,
  catalogTemplateResultsStyles,
  catalogTemplateRootStyles,
  catalogTemplateToolbarStyles,
} from "./CatalogTemplate.styles";

interface CatalogTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  breadcrumbItems?: BreadcrumbItem[];
  title?: ReactNode;
  description?: ReactNode;
  search?: ReactNode;
  filter?: ReactNode;
  toolbarActions?: ReactNode;
  resultsTitle?: ReactNode;
  statusText?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  emptyState?: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  children?: ReactNode;
}

const CatalogTemplate = ({
  breadcrumbItems,
  title = "Catalogo",
  description,
  search,
  filter,
  toolbarActions,
  resultsTitle = "Resultados",
  statusText,
  sidebar,
  footer,
  emptyState,
  columns = 3,
  children,
  className,
  ...props
}: CatalogTemplateProps) => (
  <PageShell
    breadcrumbItems={breadcrumbItems}
    description={description}
    footer={footer}
    sidebar={sidebar}
    title={title}
  >
    <div {...props} className={cn(catalogTemplateRootStyles(), className)}>
      {(search || filter || toolbarActions) ? (
        <section aria-label="Ferramentas do catalogo" className={catalogTemplateToolbarStyles()}>
          {search}

          {(filter || toolbarActions) ? (
            <div className={catalogTemplateFiltersStyles()}>
              {filter}
              {toolbarActions}
            </div>
          ) : null}
        </section>
      ) : null}

      <section aria-label="Resultados do catalogo" className={catalogTemplateResultsStyles()}>
        <div className={catalogTemplateResultsHeaderStyles()}>
          <Text as="h2" size="lg" weight="semibold">
            {resultsTitle}
          </Text>

          {statusText ? (
            <Text as="p" size="sm" tone="secondary">
              {statusText}
            </Text>
          ) : null}
        </div>

        {children ? (
          <div className={catalogTemplateResultsGridStyles({ columns })}>{children}</div>
        ) : emptyState ? (
          <div className={catalogTemplateEmptyStateStyles()}>{emptyState}</div>
        ) : null}
      </section>
    </div>
  </PageShell>
);

export default CatalogTemplate;
export type { CatalogTemplateProps };

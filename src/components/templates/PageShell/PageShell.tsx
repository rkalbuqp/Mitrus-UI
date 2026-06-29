import type { HTMLAttributes, ReactNode } from "react";

import { Text } from "../../atoms";
import { Breadcrumb, type BreadcrumbItem } from "../../molecules";
import { cn } from "../../../utils/cn";
import {
  pageShellBodyStyles,
  pageShellFooterStyles,
  pageShellHeaderContentStyles,
  pageShellHeaderStyles,
  pageShellHeaderTopStyles,
  pageShellMainStyles,
  pageShellRootStyles,
  pageShellSidebarStyles,
} from "./PageShell.styles";

interface PageShellProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  breadcrumbItems?: BreadcrumbItem[];
  breadcrumbLabel?: string;
  title?: ReactNode;
  description?: ReactNode;
  headerActions?: ReactNode;
  topBar?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const PageShell = ({
  breadcrumbItems,
  breadcrumbLabel,
  title,
  description,
  headerActions,
  topBar,
  sidebar,
  footer,
  children,
  className,
  ...props
}: PageShellProps) => (
  <div {...props} className={cn(pageShellRootStyles(), className)}>
    {breadcrumbItems?.length ? (
      <Breadcrumb ariaLabel={breadcrumbLabel ?? "Caminho da pagina"} items={breadcrumbItems} />
    ) : null}

    {(topBar || title || description || headerActions) ? (
      <header className={pageShellHeaderStyles()}>
        {topBar}

        {(title || description || headerActions) ? (
          <div className={pageShellHeaderTopStyles()}>
            {(title || description) ? (
              <div className={pageShellHeaderContentStyles()}>
                {title ? (
                  <Text as="h1" size="xl" weight="semibold">
                    {title}
                  </Text>
                ) : null}

                {description ? (
                  <Text as="p" size="md" tone="secondary">
                    {description}
                  </Text>
                ) : null}
              </div>
            ) : null}

            {headerActions}
          </div>
        ) : null}
      </header>
    ) : null}

    <div className={pageShellBodyStyles({ layout: sidebar ? "withSidebar" : "single" })}>
      <main className={pageShellMainStyles()}>{children}</main>
      {sidebar ? <aside className={pageShellSidebarStyles()}>{sidebar}</aside> : null}
    </div>

    {footer ? <footer className={pageShellFooterStyles()}>{footer}</footer> : null}
  </div>
);

export default PageShell;
export type { PageShellProps };

import type { HTMLAttributes, ReactNode } from "react";

import { Text } from "../../atoms";
import { type BreadcrumbItem } from "../../molecules";
import { cn } from "../../../utils/cn";
import PageShell from "../PageShell";
import {
  dashboardTemplateBodyStyles,
  dashboardTemplateContentStyles,
  dashboardTemplateOverviewStyles,
  dashboardTemplateRootStyles,
  dashboardTemplateSectionStyles,
} from "./DashboardTemplate.styles";

interface DashboardTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  breadcrumbItems?: BreadcrumbItem[];
  title?: ReactNode;
  description?: ReactNode;
  headerActions?: ReactNode;
  overview?: ReactNode;
  overviewColumns?: 2 | 3 | 4;
  navigation?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const DashboardTemplate = ({
  breadcrumbItems,
  title = "Dashboard",
  description,
  headerActions,
  overview,
  overviewColumns = 3,
  navigation,
  sidebar,
  footer,
  children,
  className,
  ...props
}: DashboardTemplateProps) => (
  <PageShell
    breadcrumbItems={breadcrumbItems}
    description={description}
    footer={footer}
    headerActions={headerActions}
    title={title}
  >
    <div {...props} className={cn(dashboardTemplateRootStyles(), className)}>
      {overview ? (
        <section aria-label="Visao geral" className={dashboardTemplateOverviewStyles({ columns: overviewColumns })}>
          {overview}
        </section>
      ) : null}

      <div className={dashboardTemplateBodyStyles({ layout: sidebar ? "withSidebar" : "single" })}>
        <div className={dashboardTemplateContentStyles()}>
          {navigation ? (
            <section aria-label="Navegacao do painel" className={dashboardTemplateSectionStyles()}>
              {navigation}
            </section>
          ) : null}

          <section aria-label="Conteudo principal do painel" className={dashboardTemplateSectionStyles()}>
            <Text as="h2" size="lg" weight="semibold">
              Painel
            </Text>
            <div className="mt-4">{children}</div>
          </section>
        </div>

        {sidebar ? <aside>{sidebar}</aside> : null}
      </div>
    </div>
  </PageShell>
);

export default DashboardTemplate;
export type { DashboardTemplateProps };

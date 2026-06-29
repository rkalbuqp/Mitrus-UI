import type { HTMLAttributes, ReactNode } from "react";

import { Text } from "../../atoms";
import { type BreadcrumbItem } from "../../molecules";
import { cn } from "../../../utils/cn";
import PageShell from "../PageShell";
import {
  profileTemplateContentStyles,
  profileTemplateRootStyles,
  profileTemplateSectionStyles,
  profileTemplateSectionsStyles,
  profileTemplateSummaryStyles,
} from "./ProfileTemplate.styles";

interface ProfileTemplateSection {
  title: ReactNode;
  content: ReactNode;
}

interface ProfileTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  breadcrumbItems?: BreadcrumbItem[];
  title?: ReactNode;
  description?: ReactNode;
  summary: ReactNode;
  sections?: ProfileTemplateSection[];
  sidebar?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const ProfileTemplate = ({
  breadcrumbItems,
  title = "Perfil",
  description,
  summary,
  sections,
  sidebar,
  footer,
  children,
  className,
  ...props
}: ProfileTemplateProps) => (
  <PageShell
    breadcrumbItems={breadcrumbItems}
    description={description}
    footer={footer}
    title={title}
  >
    <div {...props} className={cn(profileTemplateRootStyles(), className)}>
      <section aria-label="Resumo do perfil" className={profileTemplateSummaryStyles()}>
        {summary}
      </section>

      <div className={profileTemplateContentStyles({ layout: sidebar ? "withSidebar" : "single" })}>
        <div className={profileTemplateSectionsStyles()}>
          {sections?.map((section, index) => (
            <section className={profileTemplateSectionStyles()} key={`${String(section.title)}-${index}`}>
              <Text as="h2" size="lg" weight="semibold">
                {section.title}
              </Text>
              <div className="mt-3">{section.content}</div>
            </section>
          ))}

          {children}
        </div>

        {sidebar ? <aside>{sidebar}</aside> : null}
      </div>
    </div>
  </PageShell>
);

export default ProfileTemplate;
export type { ProfileTemplateProps, ProfileTemplateSection };

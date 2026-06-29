import { cva } from "class-variance-authority";

const profileTemplateRootStyles = cva("flex min-w-0 flex-col gap-6");

const profileTemplateSummaryStyles = cva("flex min-w-0 flex-col");

const profileTemplateContentStyles = cva("grid min-w-0 gap-6", {
  variants: {
    layout: {
      single: "grid-cols-1",
      withSidebar: "grid-cols-[minmax(0,1fr)_320px]",
    },
  },
  defaultVariants: {
    layout: "single",
  },
});

const profileTemplateSectionsStyles = cva("flex min-w-0 flex-col gap-6");

const profileTemplateSectionStyles = cva("rounded-lg border border-border-neutral-default bg-background-primary p-4");

export {
  profileTemplateContentStyles,
  profileTemplateRootStyles,
  profileTemplateSectionStyles,
  profileTemplateSectionsStyles,
  profileTemplateSummaryStyles,
};

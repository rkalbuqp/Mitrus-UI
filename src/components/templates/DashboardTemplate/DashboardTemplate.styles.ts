import { cva } from "class-variance-authority";

const dashboardTemplateRootStyles = cva("flex min-w-0 flex-col gap-6");

const dashboardTemplateOverviewStyles = cva("grid min-w-0 gap-4", {
  variants: {
    columns: {
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

const dashboardTemplateBodyStyles = cva("grid min-w-0 gap-6", {
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

const dashboardTemplateContentStyles = cva("flex min-w-0 flex-col gap-6");

const dashboardTemplateSectionStyles = cva("rounded-lg border border-border-neutral-default bg-background-primary p-4");

export {
  dashboardTemplateBodyStyles,
  dashboardTemplateContentStyles,
  dashboardTemplateOverviewStyles,
  dashboardTemplateRootStyles,
  dashboardTemplateSectionStyles,
};

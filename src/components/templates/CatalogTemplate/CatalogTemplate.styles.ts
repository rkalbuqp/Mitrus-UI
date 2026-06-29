import { cva } from "class-variance-authority";

const catalogTemplateRootStyles = cva("flex min-w-0 flex-col gap-6");

const catalogTemplateToolbarStyles = cva("flex min-w-0 flex-col gap-4 rounded-lg border border-border-neutral-default bg-background-primary p-4");

const catalogTemplateFiltersStyles = cva("flex min-w-0 flex-wrap items-end gap-4");

const catalogTemplateResultsStyles = cva("flex min-w-0 flex-col gap-4");

const catalogTemplateResultsHeaderStyles = cva("flex min-w-0 items-start justify-between gap-4");

const catalogTemplateResultsGridStyles = cva("grid min-w-0 gap-4", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

const catalogTemplateEmptyStateStyles = cva(
  "rounded-lg border border-dashed border-border-neutral-default bg-background-primary px-6 py-10 text-center",
);

export {
  catalogTemplateEmptyStateStyles,
  catalogTemplateFiltersStyles,
  catalogTemplateResultsGridStyles,
  catalogTemplateResultsHeaderStyles,
  catalogTemplateResultsStyles,
  catalogTemplateRootStyles,
  catalogTemplateToolbarStyles,
};

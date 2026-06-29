import { cva } from "class-variance-authority";

const pageShellRootStyles = cva("flex min-h-screen flex-col gap-6 bg-background-primary px-6 py-6");

const pageShellHeaderStyles = cva("flex min-w-0 flex-col gap-4");

const pageShellHeaderTopStyles = cva("flex min-w-0 items-start justify-between gap-4");

const pageShellHeaderContentStyles = cva("flex min-w-0 flex-1 flex-col gap-2");

const pageShellBodyStyles = cva("grid min-w-0 gap-6", {
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

const pageShellMainStyles = cva("flex min-w-0 flex-col gap-6");

const pageShellSidebarStyles = cva("min-w-0");

const pageShellFooterStyles = cva("mt-auto");

export {
  pageShellBodyStyles,
  pageShellFooterStyles,
  pageShellHeaderContentStyles,
  pageShellHeaderStyles,
  pageShellHeaderTopStyles,
  pageShellMainStyles,
  pageShellRootStyles,
  pageShellSidebarStyles,
};

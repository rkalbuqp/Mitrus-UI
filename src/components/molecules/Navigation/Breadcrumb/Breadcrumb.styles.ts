import { cva } from "class-variance-authority";

const breadcrumbRootStyles = cva("w-full");

const breadcrumbListStyles = cva("flex flex-wrap items-center gap-1.5");

const breadcrumbItemStyles = cva("inline-flex items-center gap-1.5");

const breadcrumbCurrentPageStyles = cva("text-087 leading-125 text-content-neutral-primary");

const breadcrumbLinkStyles = cva("max-w-full");

const breadcrumbSeparatorStyles = cva("text-content-neutral-secondary");

export {
  breadcrumbCurrentPageStyles,
  breadcrumbItemStyles,
  breadcrumbLinkStyles,
  breadcrumbListStyles,
  breadcrumbRootStyles,
  breadcrumbSeparatorStyles,
};

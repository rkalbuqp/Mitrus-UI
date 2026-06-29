import { cva } from "class-variance-authority";

const productCardHeaderRootStyles = cva("flex min-w-0 flex-col gap-2");

const productCardHeaderTopStyles = cva("flex min-w-0 flex-wrap items-center gap-2");

const productCardHeaderTitleRowStyles = cva("flex min-w-0 items-start justify-between gap-3");

const productCardHeaderContentStyles = cva("flex min-w-0 flex-1 flex-col gap-1");

const productCardHeaderTitleLinkStyles = cva("inline-flex min-w-0");

export {
  productCardHeaderContentStyles,
  productCardHeaderRootStyles,
  productCardHeaderTitleLinkStyles,
  productCardHeaderTitleRowStyles,
  productCardHeaderTopStyles,
};

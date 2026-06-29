import { cva } from "class-variance-authority";

const userInfoRootStyles = cva("flex min-w-0 flex-col gap-1");

const userInfoHeaderStyles = cva("flex min-w-0 items-start gap-2");

const userInfoContentStyles = cva("flex min-w-0 flex-1 flex-col gap-1");

const userInfoMetaStyles = cva("flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1");

const userInfoNameLinkStyles = cva("inline-flex min-w-0");

export {
  userInfoContentStyles,
  userInfoHeaderStyles,
  userInfoMetaStyles,
  userInfoNameLinkStyles,
  userInfoRootStyles,
};

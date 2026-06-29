import { cva } from "class-variance-authority";

const userAvatarRootStyles = cva("inline-flex min-w-0 flex-col items-start gap-2");

const userAvatarFigureStyles = cva("inline-flex min-w-0 flex-col items-start gap-2");

const userAvatarCaptionStyles = cva("text-content-neutral-secondary");

export { userAvatarCaptionStyles, userAvatarFigureStyles, userAvatarRootStyles };

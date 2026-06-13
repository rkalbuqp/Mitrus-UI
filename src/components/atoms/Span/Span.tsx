import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";

interface SpanProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className"> {
  children?: ReactNode;
  className?: string;
}

const Span = ({ children, className, ...props }: SpanProps) => (
  <span {...props} className={cn(className)}>
    {children}
  </span>
);

export default Span;
export type { SpanProps };

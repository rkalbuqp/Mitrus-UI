import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import {
  linkContentStyles,
  linkStyles,
  type LinkSize,
  type LinkUnderline,
  type LinkVariant,
} from "./Link.styles";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> {
  href: string;
  children: ReactNode;
  variant?: LinkVariant;
  size?: LinkSize;
  underline?: LinkUnderline;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const Link = ({
  href,
  children,
  variant = "primary",
  size = "md",
  underline = "hover",
  leftIcon,
  rightIcon,
  className,
  ...props
}: LinkProps) => (
  <a
    {...props}
    className={cn(
      linkStyles({
        variant,
        underline,
      }),
      className,
    )}
    href={href}
  >
    {leftIcon ? <span className="inline-flex shrink-0">{leftIcon}</span> : null}
    <span className={linkContentStyles({ size })}>{children}</span>
    {rightIcon ? <span className="inline-flex shrink-0">{rightIcon}</span> : null}
  </a>
);

export type { LinkSize, LinkUnderline, LinkVariant };

export default Link;
export type { LinkProps };

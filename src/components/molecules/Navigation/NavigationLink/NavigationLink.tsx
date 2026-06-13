import type { MouseEventHandler, ReactNode } from "react";

import { Button, Icon, Link, Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  navigationLinkIconStyles,
  navigationLinkLabelStyles,
  navigationLinkRootStyles,
} from "./NavigationLink.styles";

interface NavigationLinkProps {
  label: ReactNode;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  iconName?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const NavigationLink = ({
  label,
  href,
  current = false,
  disabled = false,
  iconName,
  target,
  rel,
  className,
  onClick,
}: NavigationLinkProps) => {
  const content = (
    <>
      {iconName ? <Icon className={navigationLinkIconStyles()} decorative name={iconName} size="sm" /> : null}

      <Text as="span" className={navigationLinkLabelStyles()} size="sm" truncate weight={current ? "medium" : "regular"}>
        {label}
      </Text>
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        aria-current={current ? "page" : undefined}
        className={cn(navigationLinkRootStyles({ current }), className)}
        href={href}
        rel={rel}
        size="sm"
        target={target}
        underline="none"
        variant="neutral"
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <Button
      aria-current={current ? "page" : undefined}
      className={cn(navigationLinkRootStyles({ current }), className)}
      disabled={disabled}
      size="sm"
      variant="ghost"
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
    >
      {content}
    </Button>
  );
};

export default NavigationLink;
export type { NavigationLinkProps };

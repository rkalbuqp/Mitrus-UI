import type { MouseEventHandler, ReactNode } from "react";

import { Button, Icon, Link, ListItem, Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  menuItemActionStyles,
  menuItemContentStyles,
  menuItemDescriptionStyles,
  menuItemIconStyles,
  menuItemLabelStyles,
  menuItemRootStyles,
} from "./MenuItem.styles";

interface MenuItemProps {
  label: ReactNode;
  description?: ReactNode;
  href?: string;
  current?: boolean;
  disabled?: boolean;
  iconName?: string;
  target?: string;
  rel?: string;
  className?: string;
  actionClassName?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const MenuItem = ({
  label,
  description,
  href,
  current = false,
  disabled = false,
  iconName,
  target,
  rel,
  className,
  actionClassName,
  onClick,
}: MenuItemProps) => {
  const actionClassNames = cn(menuItemActionStyles({ current }), actionClassName);
  const content = (
    <>
      {iconName ? <Icon className={menuItemIconStyles()} decorative name={iconName} size="sm" /> : null}

      <div className={menuItemContentStyles()}>
        <Text as="span" className={menuItemLabelStyles()} size="sm" truncate weight={current ? "medium" : "regular"}>
          {label}
        </Text>

        {description ? (
          <Text as="span" className={menuItemDescriptionStyles()} size="xs" tone="secondary" truncate>
            {description}
          </Text>
        ) : null}
      </div>
    </>
  );

  return (
    <ListItem className={cn(menuItemRootStyles(), className)}>
      {href && !disabled ? (
        <Link
          aria-current={current ? "page" : undefined}
          className={actionClassNames}
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
      ) : (
        <Button
          aria-current={current ? "page" : undefined}
          className={actionClassNames}
          disabled={disabled}
          fullWidth
          size="sm"
          variant="ghost"
          onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
        >
          {content}
        </Button>
      )}
    </ListItem>
  );
};

export default MenuItem;
export type { MenuItemProps };

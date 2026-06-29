import type { HTMLAttributes, ReactNode } from "react";

import { Badge, Icon, Link, type BadgeAppearance, type BadgeSize, type BadgeVariant, type IconProps } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import { userBadgeRootStyles } from "./UserBadge.styles";

interface UserBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  label: ReactNode;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  size?: BadgeSize;
  rounded?: boolean;
  dot?: boolean;
  iconName?: IconProps["name"];
  href?: string;
  target?: string;
  rel?: string;
}

const UserBadge = ({
  label,
  variant = "neutral",
  appearance = "subtle",
  size = "md",
  rounded = true,
  dot = false,
  iconName,
  href,
  target,
  rel,
  className,
  ...props
}: UserBadgeProps) => {
  const badgeElement = (
    <Badge
      appearance={appearance}
      className={cn(userBadgeRootStyles(), className)}
      dot={dot}
      leftIcon={iconName ? <Icon decorative name={iconName} size="sm" /> : undefined}
      rounded={rounded}
      size={size}
      variant={variant}
      {...props}
    >
      {label}
    </Badge>
  );

  if (href) {
    return (
      <Link href={href} rel={rel} size="sm" target={target} underline="none" variant="neutral">
        {badgeElement}
      </Link>
    );
  }

  return badgeElement;
};

export default UserBadge;
export type { UserBadgeProps };

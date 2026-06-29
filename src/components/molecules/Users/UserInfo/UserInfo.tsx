import type { HTMLAttributes, ReactNode } from "react";

import { Link, Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  userInfoContentStyles,
  userInfoHeaderStyles,
  userInfoMetaStyles,
  userInfoNameLinkStyles,
  userInfoRootStyles,
} from "./UserInfo.styles";

interface UserInfoProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  name: ReactNode;
  handle?: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  badge?: ReactNode;
  nameHref?: string;
  nameTarget?: string;
  nameRel?: string;
  nameAs?: "h2" | "h3" | "h4";
}

const UserInfo = ({
  name,
  handle,
  description,
  meta,
  badge,
  nameHref,
  nameTarget,
  nameRel,
  nameAs = "h3",
  className,
  ...props
}: UserInfoProps) => {
  const nameContent = (
    <Text as={nameAs} size="lg" weight="semibold">
      {name}
    </Text>
  );

  return (
    <div {...props} className={cn(userInfoRootStyles(), className)}>
      <div className={userInfoHeaderStyles()}>
        <div className={userInfoContentStyles()}>
          {nameHref ? (
            <Link
              className={userInfoNameLinkStyles()}
              href={nameHref}
              rel={nameRel}
              size="md"
              target={nameTarget}
              underline="hover"
              variant="neutral"
            >
              {nameContent}
            </Link>
          ) : (
            nameContent
          )}

          {handle ? (
            <Text as="p" size="sm" tone="secondary">
              {handle}
            </Text>
          ) : null}
        </div>

        {badge}
      </div>

      {description ? (
        <Text as="p" size="sm" tone="secondary">
          {description}
        </Text>
      ) : null}

      {meta ? <div className={userInfoMetaStyles()}>{meta}</div> : null}
    </div>
  );
};

export default UserInfo;
export type { UserInfoProps };

import { useId, type HTMLAttributes, type ReactNode } from "react";

import { Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import UserAvatar, { type UserAvatarProps } from "../UserAvatar";
import UserInfo from "../UserInfo";
import {
  profileSummaryActionStyles,
  profileSummaryFooterStyles,
  profileSummaryIdentityStyles,
  profileSummaryMainStyles,
  profileSummaryRootStyles,
} from "./ProfileSummary.styles";

interface ProfileSummaryProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  avatar?: ReactNode;
  avatarProps?: UserAvatarProps["avatarProps"];
  name: ReactNode;
  handle?: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  badge?: ReactNode;
  action?: ReactNode;
  footer?: ReactNode;
  nameHref?: string;
  nameTarget?: string;
  nameRel?: string;
  bordered?: boolean;
  align?: "start" | "center" | "end" | "between";
  children?: ReactNode;
}

const ProfileSummary = ({
  avatar,
  avatarProps,
  name,
  handle,
  description,
  meta,
  badge,
  action,
  footer,
  nameHref,
  nameTarget,
  nameRel,
  bordered = false,
  align = "between",
  children,
  className,
  ...props
}: ProfileSummaryProps) => {
  const titleId = useId();

  return (
    <section
      {...props}
      aria-labelledby={titleId}
      className={cn(profileSummaryRootStyles({ bordered }), className)}
    >
      <div className={profileSummaryMainStyles({ align })}>
        <div className={profileSummaryIdentityStyles()}>
          {avatar ?? (avatarProps ? <UserAvatar avatarProps={avatarProps} /> : null)}

          {children ? (
            <>
              <Text as="span" id={titleId} srOnly>
                {name}
              </Text>
              {children}
            </>
          ) : (
            <UserInfo
              badge={badge}
              description={description}
              handle={handle}
              id={titleId}
              meta={meta}
              name={name}
              nameAs="h3"
              nameHref={nameHref}
              nameRel={nameRel}
              nameTarget={nameTarget}
            />
          )}
        </div>

        {action ? <div className={profileSummaryActionStyles()}>{action}</div> : null}
      </div>

      {footer ? <div className={profileSummaryFooterStyles()}>{footer}</div> : null}
    </section>
  );
};

export default ProfileSummary;
export type { ProfileSummaryProps };

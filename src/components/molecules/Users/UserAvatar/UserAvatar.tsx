import type { HTMLAttributes, ReactNode } from "react";

import { Avatar, Text, type AvatarProps } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import { userAvatarCaptionStyles, userAvatarFigureStyles, userAvatarRootStyles } from "./UserAvatar.styles";

interface UserAvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  avatarProps?: AvatarProps;
  caption?: ReactNode;
  captionClassName?: string;
  avatarClassName?: string;
}

const UserAvatar = ({
  avatarProps,
  caption,
  captionClassName,
  avatarClassName,
  className,
  ...props
}: UserAvatarProps) => {
  const avatarElement = <Avatar {...avatarProps} className={cn(avatarProps?.className, avatarClassName)} />;

  if (caption) {
    return (
      <figure {...props} className={cn(userAvatarFigureStyles(), className)}>
        {avatarElement}
        <Text as="figcaption" className={cn(userAvatarCaptionStyles(), captionClassName)} size="sm" tone="secondary">
          {caption}
        </Text>
      </figure>
    );
  }

  return (
    <div {...props} className={cn(userAvatarRootStyles(), className)}>
      {avatarElement}
    </div>
  );
};

export default UserAvatar;
export type { UserAvatarProps };

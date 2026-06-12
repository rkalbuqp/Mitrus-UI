import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";
import Icon from "../Icon";
import {
  avatarFallbackStyles,
  avatarStatusStyles,
  avatarStyles,
  type AvatarShape,
  type AvatarSize,
  type AvatarStatus,
} from "./Avatar.styles";

const getInitials = (name?: string) => {
  if (!name) {
    return "";
  }

  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  return parts.map((part) => part[0]).join("").toUpperCase();
};

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  fallback?: ReactNode;
  icon?: ReactNode;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  bordered?: boolean;
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className">;
}

const Avatar = ({
  src,
  alt,
  name,
  fallback,
  icon,
  size = "md",
  shape = "circle",
  status,
  bordered = false,
  className,
  imgProps,
  ...props
}: AvatarProps) => {
  const initials = getInitials(name);
  const fallbackContent =
    fallback ?? (initials || icon || <Icon name="person" size={size === "2xl" ? "xl" : size} />);
  const accessibleLabel = alt ?? name ?? (typeof fallbackContent === "string" ? fallbackContent : "Avatar");

  return (
    <div
      {...props}
      aria-label={accessibleLabel}
      className={cn(avatarStyles({ size, shape, bordered }), className)}
      role="img"
    >
      {src ? (
        <img
          {...imgProps}
          alt={alt ?? name ?? "Avatar"}
          className="h-full w-full object-cover"
          src={src}
        />
      ) : (
        <span className={avatarFallbackStyles({ size })}>{fallbackContent}</span>
      )}

      {status ? <span className={avatarStatusStyles({ size, status })} data-testid="avatar-status" /> : null}
    </div>
  );
};

export default Avatar;
export type { AvatarShape, AvatarSize, AvatarStatus };

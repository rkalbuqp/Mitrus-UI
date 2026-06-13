import type { LiHTMLAttributes, ReactNode } from "react";

import { cn } from "../../../utils/cn";

interface ListItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, "children" | "className"> {
  children?: ReactNode;
  className?: string;
}

const ListItem = ({ children, className, ...props }: ListItemProps) => (
  <li {...props} className={cn(className)}>
    {children}
  </li>
);

export default ListItem;
export type { ListItemProps };

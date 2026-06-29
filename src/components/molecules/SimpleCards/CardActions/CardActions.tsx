import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../../../utils/cn";
import { cardActionsRootStyles } from "./CardActions.styles";

interface CardActionsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  align?: "start" | "center" | "end" | "between";
  fullWidth?: boolean;
}

const CardActions = ({
  children,
  direction = "horizontal",
  align = "start",
  fullWidth = false,
  className,
  "aria-label": ariaLabel = "Acoes do card",
  ...props
}: CardActionsProps) => (
  <div
    {...props}
    aria-label={ariaLabel}
    className={cn(cardActionsRootStyles({ direction, align, fullWidth }), className)}
    role="group"
  >
    {children}
  </div>
);

export default CardActions;
export type { CardActionsProps };

import {
  cloneElement,
  isValidElement,
  useId,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "../../../utils/cn";
import {
  tooltipContentStyles,
  tooltipRootStyles,
  type TooltipPlacement,
  type TooltipSize,
} from "./Tooltip.styles";

type TooltipTriggerProps = {
  "aria-describedby"?: string;
};

interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "content"> {
  children: ReactElement<TooltipTriggerProps>;
  content: ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
  open?: boolean;
  tooltipClassName?: string;
}

const Tooltip = ({
  children,
  content,
  placement = "top",
  size = "md",
  open = false,
  className,
  tooltipClassName,
  ...props
}: TooltipProps) => {
  const tooltipId = useId();

  if (!isValidElement(children)) {
    return null;
  }

  const describedBy = [children.props["aria-describedby"], tooltipId].filter(Boolean).join(" ");

  const trigger = cloneElement<TooltipTriggerProps>(children, {
    "aria-describedby": describedBy,
  });

  return (
    <span {...props} className={cn(tooltipRootStyles(), "group", className)}>
      {trigger}
      <span
        className={cn(
          tooltipContentStyles({
            size,
            placement,
            open,
          }),
          tooltipClassName,
        )}
        id={tooltipId}
        role="tooltip"
      >
        {content}
      </span>
    </span>
  );
};

export type { TooltipPlacement, TooltipSize };

export default Tooltip;
export type { TooltipProps };

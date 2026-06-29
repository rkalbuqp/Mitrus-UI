import type { HTMLAttributes, ReactNode } from "react";

import { Text } from "../../../atoms";
import { cn } from "../../../../utils/cn";
import {
  cardFooterActionStyles,
  cardFooterMainStyles,
  cardFooterMetaStyles,
  cardFooterRootStyles,
} from "./CardFooter.styles";

interface CardFooterProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  meta?: ReactNode;
  supportingText?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
  divider?: boolean;
  align?: "start" | "center" | "end" | "between";
}

const CardFooter = ({
  meta,
  supportingText,
  action,
  children,
  divider = false,
  align = "between",
  className,
  ...props
}: CardFooterProps) => {
  if (children) {
    return (
      <footer {...props} className={cn(cardFooterRootStyles({ divider }), className)}>
        {children}
      </footer>
    );
  }

  return (
    <footer {...props} className={cn(cardFooterRootStyles({ divider }), className)}>
      {(meta || action) ? (
        <div className={cardFooterMainStyles({ align })}>
          {meta ? <div className={cardFooterMetaStyles()}>{meta}</div> : null}
          {action ? <div className={cardFooterActionStyles()}>{action}</div> : null}
        </div>
      ) : null}

      {supportingText ? (
        <Text size="sm" tone="secondary">
          {supportingText}
        </Text>
      ) : null}
    </footer>
  );
};

export default CardFooter;
export type { CardFooterProps };

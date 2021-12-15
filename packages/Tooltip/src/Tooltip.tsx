import * as React from 'react';
import classNames from 'classnames';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';
export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends React.ComponentProps<'div'> {
  children: string | React.ReactNode;
  tooltipClassName?: string;
  // content?: React.ReactNode;
  position?: Position;
  appearance?: Appearance;
  maxWidth?: number;
  spacing?: number;
  arrowVisible?: boolean;
}

const Tooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps
) => {
  const {
    children,
    tooltipClassName,
    position = 'top',
    appearance = 'dark',
    maxWidth = 200,
    spacing = 8,
    arrowVisible = true,
    className,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip', className, {
    [`ids-tooltip--${position}`]: true,
    'has-arrow': arrowVisible,
    'ids-tooltip-dark': appearance === 'dark',
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Tooltip;

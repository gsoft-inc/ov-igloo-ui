import React, { useState } from 'react';
import classNames from 'classnames';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';
export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends React.ComponentProps<'div'> {
  children: string | React.ReactNode;
  tooltipClassName?: string;
  content?: React.ReactNode;
  position?: Position;
  appearance?: Appearance;
  maxWidth?: number;
  spacing?: number;
  arrowVisible?: boolean;
  active?: boolean;
}

const Tooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps
) => {
  const {
    children,
    content,
    tooltipClassName,
    position = 'top',
    appearance = 'dark',
    maxWidth = 200,
    spacing = 8,
    arrowVisible = true,
    className,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip__container', className);

  const [active, setActive] = useState<boolean>(false);

  const tooltipClasses = classNames('ids-tooltip', tooltipClassName, {
    [`ids-tooltip--${position}`]: true,
    'has-arrow': arrowVisible,
    'ids-tooltip-dark': appearance === 'dark',
  });

  const tooltipStyle = {
    maxWidth: `${maxWidth}px`,
  };

  const onMouseEnterHandle = (): void => {
    setActive(true);
  };

  const onMouseLeaveHandle = (): void => {
    setActive(false);
  };

  return (
    <span
      className={classes}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      <div
        className={tooltipClasses}
        style={tooltipStyle}
        hidden={!active}
        {...rest}
      >
        {content}
      </div>
      {children}
    </span>
  );
};

export default Tooltip;

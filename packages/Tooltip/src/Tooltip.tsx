import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Position, GetVisiblePosition } from './position';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';

export interface TooltipProps extends React.ComponentProps<'div'> {
  children: string | React.ReactNode;
  tooltipClassName?: string;
  content?: React.ReactNode;
  position?: Position;
  appearance?: Appearance;
  maxWidth?: number;
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
    arrowVisible = true,
    className,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip__container', className);

  const defaultTooltipClasses = classNames('ids-tooltip', tooltipClassName, {
    [`ids-tooltip--${position}`]: true,
    'has-arrow': arrowVisible,
    'ids-tooltip-dark': appearance === 'dark',
  });

  const [active, setActive] = useState<boolean>(false);
  const [tooltipClasses, setTooltipClasses] = useState<string>(
    defaultTooltipClasses
  );

  const tooltipElement = useRef<HTMLDivElement>(null);

  const tooltipStyle = {
    maxWidth: `${maxWidth}px`,
  };

  const onMouseEnterHandle = (): void => {
    setActive(true);

    setTimeout(() => {
      if (tooltipElement != null && tooltipElement.current) {
        const visiblePosition = GetVisiblePosition(
          tooltipElement.current.getBoundingClientRect(),
          position
        );

        setTooltipClasses(
          classNames('ids-tooltip', tooltipClassName, {
            [`ids-tooltip--${visiblePosition}`]: true,
            'has-arrow': arrowVisible,
            'ids-tooltip-dark': appearance === 'dark',
          })
        );
      }
    }, 0);
  };

  const onMouseLeaveHandle = (): void => {
    setActive(false);

    setTooltipClasses(defaultTooltipClasses);
  };

  return (
    <span
      className={classes}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      <div
        className={tooltipClasses}
        ref={tooltipElement}
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

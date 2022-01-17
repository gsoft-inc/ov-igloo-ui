import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Position, GetVisiblePosition } from './position';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';

export interface TooltipProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  tooltipClassName?: string;
  content?: React.ReactNode;
  position?: Position;
  appearance?: Appearance;
  maxWidth?: number;
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
    className,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip__container', className);

  const defaultTooltipClasses = (visiblePosition: Position): string => {
    return classNames(
      'ids-tooltip',
      tooltipClassName,
      `ids-tooltip--${visiblePosition}`,
      {
        'ids-tooltip--light': appearance === 'light',
      }
    );
  };

  const [active, setActive] = useState<boolean>(false);
  const [tooltipClasses, setTooltipClasses] = useState<string>(
    defaultTooltipClasses(position)
  );

  const tooltipElement = useRef<HTMLDivElement>(null);
  const parentElement = useRef<HTMLDivElement>(null);

  const tooltipStyle = {
    maxWidth: `${maxWidth}px`,
  };

  const onMouseEnterHandle = (): void => {
    setActive(true);

    setTimeout(() => {
      if (tooltipElement?.current && parentElement?.current) {
        const visiblePosition = GetVisiblePosition(
          tooltipElement.current.getBoundingClientRect(),
          parentElement.current.getBoundingClientRect(),
          position
        );

        setTooltipClasses(defaultTooltipClasses(visiblePosition));
      }
    }, 0);
  };

  const onMouseLeaveHandle = (): void => {
    setActive(false);

    setTooltipClasses(defaultTooltipClasses(position));
  };

  return (
    <span
      className={classes}
      ref={parentElement}
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

import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Position, GetVisiblePosition } from './position';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';

export interface TooltipProps extends React.ComponentProps<'div'> {
  /** The target button, text, svg etc.. of the Tooltip. */
  children: React.ReactNode;
  /** Add a specific class to the tooltip */
  tooltipClassName?: string;
  /** The content to display inside the tooltip */
  content?: React.ReactNode;
  /** The position the tooltip is on. */
  position?: Position;
  /** The appearance of the tooltip. */
  appearance?: Appearance;
  /** The max with of the tooltip */
  maxWidth?: number;
  /** When True, manually show the Tooltip. */
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

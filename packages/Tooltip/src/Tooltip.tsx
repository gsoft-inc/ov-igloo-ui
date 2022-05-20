import * as React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import { Position, getVisiblePosition } from './position';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';
export type Ref = HTMLDivElement;

export interface TooltipProps extends React.ComponentPropsWithRef<'div'> {
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
  /** When True, disabled the tooltip */
  disabled?: boolean;
}

const Tooltip: React.FunctionComponent<TooltipProps> = React.forwardRef<
  Ref,
  TooltipProps
>((props, ref) => {
  const {
    children,
    content,
    tooltipClassName,
    position = 'top',
    appearance = 'dark',
    maxWidth = 200,
    className,
    disabled,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip__container', className);

  const defaultTooltipClasses = (visiblePosition: string): string => {
    return classNames(
      'ids-tooltip',
      tooltipClassName,
      `ids-tooltip--${visiblePosition}`,
      {
        'ids-tooltip--light': appearance === 'light',
      }
    );
  };

  const [active, setActive] = React.useState<boolean>(false);
  const [tooltipClasses, setTooltipClasses] = React.useState<string>(
    defaultTooltipClasses(position)
  );

  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef({ x: 0, y: 0 });

  const tooltipStyle = {
    maxWidth: `${maxWidth}px`,
    top: `${positionRef.current.y}px`,
    left: `${positionRef.current.x}px`,
  };

  const onMouseEnterHandle = (event: { currentTarget: HTMLElement }): void => {
    setActive(true);

    const tooltip = tooltipRef.current;
    const parent = event.currentTarget;

    if (tooltip) {
      const { x, y, visiblePosition } = getVisiblePosition(
        tooltip,
        parent,
        position
      );
      setTooltipClasses(defaultTooltipClasses(visiblePosition));
      positionRef.current = { x, y };
    }
  };

  const onMouseLeaveHandle = (): void => {
    setActive(false);
  };

  const tooltip = ReactDom.createPortal(
    <div
      ref={tooltipRef}
      className={classNames(tooltipClasses, {
        'ids-tooltip--active': active,
      })}
      style={tooltipStyle}
      {...rest}
    >
      {content}
    </div>,
    document.body
  );

  return (
    <span
      ref={ref}
      className={classes}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      {children}
      {!disabled && tooltip}
    </span>
  );
});

export default Tooltip;

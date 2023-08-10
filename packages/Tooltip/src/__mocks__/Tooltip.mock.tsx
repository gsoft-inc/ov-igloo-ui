import * as React from 'react';
import cx from 'classnames';

import '../tooltip.scss';

export type Appearance = 'dark' | 'light';
export type Position = 'top' | 'right' | 'bottom' | 'left' | 'auto';

export interface TooltipProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'content'> {
  /** The target button, text, svg etc.. of the tooltip */
  children: React.ReactNode;
  /** Add a specific class to the tooltip */
  tooltipClassName?: string;
  /** The content to display inside the tooltip */
  content?: React.ReactNode;
  /** The position the tooltip is on */
  position?: Position;
  /** The appearance of the tooltip */
  appearance?: Appearance;
  /** The max with of the tooltip */
  maxWidth?: number;
  /** When true, manually show the tooltip */
  active?: boolean;
  /** When True, disabled the tooltip */
  disabled?: boolean;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** When true, display the tooltip on a mobile device */
  showOnMobile?: boolean;
}

const MockTooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps,
) => {
  const {
    children,
    content,
    tooltipClassName,
    position = 'top',
    appearance = 'dark',
    maxWidth = 200,
    className,
    disabled,
    active = false,
    dataTest,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showOnMobile = false,
    ...rest
  } = props;

  const classes = cx('ids-tooltip__container', className);

  const [show, setShow] = React.useState<boolean>(active);

  const showTooltip = !disabled && show;

  const { x, y, strategy } = {
    x: 0,
    y: 0,
    strategy: 'fixed' as const,
  };

  const tooltipClasses = cx('ids-tooltip', tooltipClassName, {
    'ids-tooltip--light': appearance === 'light',
  });

  const fromPxToRem = (value: number, base = 10): string =>
    `${value / base}rem`;

  const center = position === 'top' || position === 'bottom';

  return (
    <span
      className={classes}
      onClick={() => setShow(!show)}
      role="button"
      tabIndex={0}
    >
      {children}
      {showTooltip && (
        <div
          className={tooltipClasses}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            maxWidth: fromPxToRem(maxWidth),
          }}
          data-text={center && 'center'}
          data-show={show}
          data-test={dataTest}
          {...rest}
        >
          {content}
          <div className="ids-tooltip__arrow" />
        </div>
      )}
    </span>
  );
};

export default MockTooltip;

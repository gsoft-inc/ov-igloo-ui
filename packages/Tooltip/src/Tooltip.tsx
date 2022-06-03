import React, { useState } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import { usePopper } from 'react-popper';

import './tooltip.scss';

export type Appearance = 'dark' | 'light';
export type Position = 'top' | 'right' | 'bottom' | 'left' | 'auto';

export interface TooltipProps extends React.ComponentPropsWithoutRef<'div'> {
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

const Tooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps
) => {
  const {
    children,
    content,
    tooltipClassName,
    position = 'auto',
    appearance = 'dark',
    maxWidth = 200,
    className,
    disabled,
    active = false,
    ...rest
  } = props;

  const classes = classNames('ids-tooltip__container', className);

  const [show, setShow] = useState<boolean>(active);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLElement | null>(null);
  const [tooltipElement, setTooltipElement] =
    React.useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, tooltipElement, {
    placement: position,
    modifiers: [
      { name: 'offset', options: { offset: [0, 10] } },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'bottom', 'left', 'right'],
        },
      },
    ],
  });

  const onMouseEnterHandle = (): void => {
    setShow(true);
  };

  const onMouseLeaveHandle = (): void => {
    setShow(false);
  };

  const tooltipClasses = classNames('ids-tooltip', tooltipClassName, {
    'ids-tooltip--light': appearance === 'light',
  });

  const tooltip = ReactDom.createPortal(
    <div
      ref={setTooltipElement}
      className={tooltipClasses}
      style={styles.popper}
      {...attributes.popper}
      data-show={show}
      {...rest}
    >
      {content}
      <div
        style={styles.arrow}
        data-popper-arrow={true}
        className="ids-tooltip__arrow"
      />
    </div>,
    document.body
  );

  return (
    <span
      ref={setReferenceElement}
      className={classes}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      {children}
      {disabled ? null : tooltip}
    </span>
  );
};

export default Tooltip;

import * as React from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';
import { usePopper } from 'react-popper';
import { animated, useTransition } from 'react-spring';

import useDeviceDetect from './hooks/useDeviceDetect';

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
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** When True, display the tooltip on a mobile device */
  showOnMobile?: boolean;
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
    disabled,
    active = false,
    dataTest,
    showOnMobile = false,
    ...rest
  } = props;

  const classes = cx('ids-tooltip__container', className);

  const [show, setShow] = React.useState<boolean>(active);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLElement | null>(null);
  const [tooltipElement, setTooltipElement] =
    React.useState<HTMLElement | null>(null);

  const { isMobile } = useDeviceDetect();

  const { styles, attributes, update } = usePopper(
    referenceElement,
    tooltipElement,
    {
      placement: position,
      strategy: 'fixed',
      modifiers: [
        { name: 'offset', options: { offset: [0, 10] } },
        { name: 'hide', options: { enabled: true } },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top', 'bottom', 'left', 'right'],
          },
        },
      ],
    }
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (show) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onMouseEnterHandle = (): void => {
    setShow(true);
    if (update !== null) {
      update();
    }
  };

  const onMouseLeaveHandle = (): void => {
    setShow(false);
  };

  const tooltipClasses = cx('ids-tooltip', tooltipClassName, {
    'ids-tooltip--light': appearance === 'light',
  });

  const fromPxToRem = (value: number, base = 10): string =>
    `${value / base}rem`;

  const tooltipStyle = {
    ...styles.popper,
    maxWidth: fromPxToRem(maxWidth),
  };

  const center = position === 'top' || position === 'bottom';

  const translateYAdjustment = position === 'bottom' ? '' : '-';

  const transitions = useTransition(show, {
    from: {
      opacity: 0,
      y: `${translateYAdjustment}1rem`,
    },
    enter: {
      opacity: 1,
      y: '0',
    },
    config: { mass: 1, tension: 126, friction: 18, clamp: true },
  });

  const tooltip = transitions(
    ({ opacity, ...restOfAnimations }, item) =>
      item && (
        <animated.div
          ref={setTooltipElement}
          className={tooltipClasses}
          style={{
            ...restOfAnimations,
            ...tooltipStyle,
            opacity: opacity.to({ range: [0.0, 0.6, 1.0], output: [0, 1, 1] }),
          }}
          {...attributes.popper}
          data-text={center && 'center'}
          data-show={show}
          data-test={dataTest}
          {...rest}
        >
          {content}
          <div
            style={styles.arrow}
            data-popper-arrow
            className="ids-tooltip__arrow"
          />
        </animated.div>
      )
  );

  const portaledTooltip = ReactDom.createPortal(tooltip, document.body);

  React.useEffect(() => {
    if (referenceElement) {
      // The reason we use the native js event is because react has a bug where
      // it will not call onMouseLeave if it has a disabled button inside.
      referenceElement.addEventListener('mouseleave', onMouseLeaveHandle);
    }
    // Called when unmounting component
    return () => {
      if (referenceElement) {
        // This may still be called multiple times so we want to
        // make sure we remove the event before mounting it again.
        referenceElement.removeEventListener('mouseleave', onMouseLeaveHandle);
      }
    };
  }, [referenceElement]);

  const disabledOnMobile = isMobile && !showOnMobile;

  return (
    <span
      ref={setReferenceElement}
      className={classes}
      onMouseEnter={onMouseEnterHandle}
    >
      {children}
      {!disabled && !disabledOnMobile && portaledTooltip}
    </span>
  );
};

export default Tooltip;

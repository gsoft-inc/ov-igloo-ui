import * as React from 'react';
import cx from 'classnames';
import {
  flip,
  shift,
  offset,
  autoUpdate,
  useFloating,
  useDismiss,
  useInteractions,
  useTransitionStyles,
  autoPlacement,
  useRole,
  FloatingPortal,
  useClick,
  useHover,
  FloatingFocusManager,
  safePolygon,
  ReferenceType,
} from '@floating-ui/react';

import IconButton from '@igloo-ui/icon-button';
import Close from '@igloo-ui/icons/dist/Close';

import './popover.scss';
import { Props } from '@floating-ui/react/src/hooks/useHover';

export type Position = 'top' | 'right' | 'bottom' | 'left' | 'auto';
export type TriggerEvent = 'click' | 'hover';

export interface PopoverProps extends React.ComponentProps<'div'> {
  /** The target button, text, svg etc.. of the Popover. */
  children: React.ReactNode;
  /** Add a specific class to the Popover */
  popoverClassName?: string;
  /** The content to display inside the Popover */
  content: React.ReactNode;
  /** The position the Popover is on. */
  position?: Position;
  /** The max with of the Popover */
  maxWidth?: number;
  /** When True, manually show the Popover. */
  active?: boolean;
  /** The content for the title of the Popover */
  title?: string;
  /** The content for the call to action of the Popover */
  action?: React.ReactNode;
  /** Render the close button */
  isClosable?: boolean;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The event that triggers the opening or closing of the popover */
  triggerEvent?: TriggerEvent;
  /** Whether or not the mouse is allowed inside the popover
   * (This is only useful when the triggerEvent is set to 'hover')
   */
  interactive?: boolean;
}

const Popover: React.FunctionComponent<PopoverProps> = ({
  children,
  content,
  position = 'auto',
  maxWidth = 320,
  active = false,
  className,
  popoverClassName,
  title,
  action,
  isClosable = false,
  dataTest,
  triggerEvent = 'click',
  interactive = true,
  ...rest
}: PopoverProps) => {
  const classes = cx('ids-popover__container', className);

  const [show, setShow] = React.useState<boolean>(active);

  let floatingUIPlacement = {};

  if (position === 'auto') {
    floatingUIPlacement = {
      middleware: [offset(10), autoPlacement(), shift()],
    };
  } else {
    floatingUIPlacement = {
      placement: position,
      middleware: [
        offset(10),
        flip({ fallbackAxisSideDirection: 'end' }),
        shift(),
      ],
    };
  }

  const { x, y, strategy, refs, context } = useFloating({
    open: show,
    strategy: 'fixed',
    onOpenChange: setShow,
    whileElementsMounted: autoUpdate,
    ...floatingUIPlacement,
  });

  const useHoverProps: Props<ReferenceType> = {
    enabled: triggerEvent === 'hover',
    restMs: 150,
  };

  if (interactive) {
    useHoverProps.handleClose = safePolygon({
      buffer: 1.5,
    });
  }

  const click = useClick(context, { enabled: triggerEvent === 'click' });
  const hover = useHover(context, useHoverProps);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    hover,
    dismiss,
    role,
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 150,
    initial: ({ side }) => ({
      opacity: 0,
      transform: side === 'bottom' ? 'translateY(1rem)' : 'translateY(-1rem)',
    }),
    open: {
      opacity: 1,
      transform: 'translateY(0rem)',
    },
  });

  const onClose = (): void => {
    setShow(false);
  };

  const popoverClasses = cx('ids-popover', popoverClassName);

  const fromPxToRem = (value: number, base = 10): string =>
    `${value / base}rem`;

  const popoverContent = (
    <>
      {title && <div className="ids-popover__title">{title}</div>}
      <div className="ids-popover__content">{content}</div>
      {action && <div className="ids-popover__action">{action}</div>}
    </>
  );

  const popover = (
    <div
      ref={refs.setFloating}
      className={popoverClasses}
      style={{
        position: strategy,
        top: y ?? 0,
        left: x ?? 0,
        maxWidth: fromPxToRem(maxWidth),
        ...styles,
      }}
      data-show={show}
      data-test={dataTest}
      {...getFloatingProps()}
      {...rest}
    >
      {isClosable && (
        <IconButton
          size="xsmall"
          className="ids-popover__close"
          onClick={onClose}
          appearance={{ type: 'ghost', variant: 'secondary' }}
          aria-label="close"
          icon={<Close size="small" />}
        />
      )}

      {popoverContent}
    </div>
  );

  return (
    <>
      <span
        ref={refs.setReference}
        className={classes}
        role="button"
        tabIndex={0}
        {...getReferenceProps()}
      >
        {children}
      </span>
      <FloatingPortal>
        {isMounted && (
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={-1}
          >
            {popover}
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
};

export default Popover;

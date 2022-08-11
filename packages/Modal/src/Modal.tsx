import * as React from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';

import {
  OverlayProps,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { AriaDialogProps } from '@react-types/dialog';
import {
  animated,
  AnimationResult,
  Controller,
  SpringValue,
  useTransition,
} from 'react-spring';

import IconButton from '@igloo-ui/icon-button';
import Close from '@igloo-ui/icons/dist/Close';

import './modal.scss';

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

export interface ModalProps extends OverlayProps, AriaDialogProps {
  /** The content to display inside the modal */
  children: React.ReactNode;
  /** Add a specific class to the modal */
  className?: string;
  /** Changes the modal width */
  size?: Size;
  /** The content for the title of the modal */
  title?: string;
  /** Render the close button */
  isClosable?: boolean;
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Handler that is called when the overlay should close. */
  onClose?: () => void;
  /** Handler that is called when the modal is closed and no longer visible. */
  onAfterClose?: () => void;
  /** The content for the aria-label on the close button */
  closeBtnAriaLabel?: string;
  /** Remove the default padding and the title from the modal */
  fullContent?: boolean;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    children,
    className,
    closeBtnAriaLabel,
    title,
    onClose,
    onAfterClose,
    isClosable,
    fullContent,
    size = 'small',
    isOpen,
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll({ isDisabled: !isOpen });

  const overlayTransitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  const modalTransitions = useTransition(isOpen, {
    from: { opacity: 0, transform: 'scale(0.95)' },
    // For whatever reason, enter is actually called after leave, which is why the onRest event is added here.
    // This is also where isOpen is set to false after closing.
    enter: {
      opacity: 1,
      transform: 'scale(1)',
      delay: 200,
      onRest: (
        result: AnimationResult,
        spring: Controller | SpringValue,
        item?: boolean
      ) => {
        // Call onAfterClose if model is completely closed and animation is done, if the function exists.
        if (!item) {
          onAfterClose?.();
        }
      },
    },
    leave: {
      opacity: 0,
      transform: 'scale(1)',
    },
    config: { duration: 200 },
  });

  const { dialogProps } = useDialog(props, ref);

  const classes = cx('ids-modal', className, {
    [`ids-modal--${size}`]: size !== 'small',
    'ids-modal--full-content': fullContent,
    'ids-modal--with-header': isClosable || title !== undefined,
  });

  const modal = (
    <>
      {overlayTransitions(
        (styles, item) =>
          item && (
            <animated.div
              className="ids-overlay"
              {...underlayProps}
              style={styles}
            />
          )
      )}
      {modalTransitions(
        (styles, item) =>
          item && (
            <animated.div className="ids-modal__container" style={styles}>
              <div
                {...overlayProps}
                {...dialogProps}
                ref={ref}
                className={classes}
              >
                <div
                  className={cx(
                    'ids-modal__header',
                    !isClosable && 'ids-modal__header--with-action'
                  )}
                >
                  {title && <h5 className="ids-modal__title">{title}</h5>}

                  <IconButton
                    size="small"
                    className="ids-modal__close"
                    onClick={onClose}
                    appearance="ghost"
                    aria-label={closeBtnAriaLabel}
                    icon={<Close />}
                  />
                </div>
                <div className="ids-modal__content">{children}</div>
              </div>
            </animated.div>
          )
      )}
    </>
  );

  return ReactDom.createPortal(modal, document.body);
};

export default Modal;

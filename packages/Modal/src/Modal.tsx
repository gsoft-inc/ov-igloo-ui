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
  /** The content for the aria-label on the close button */
  closeBtnAriaLabel?: string;
  /** Remove the default padding and the title from the modal */
  withSpace?: boolean;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    children,
    className,
    closeBtnAriaLabel,
    title,
    onClose,
    isClosable,
    withSpace,
    size = 'small',
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { dialogProps } = useDialog(props, ref);

  const classes = cx('ids-modal', className, {
    [`ids-modal--${size}`]: size !== 'small',
    'ids-modal--with-space': withSpace,
    'ids-modal--with-header': isClosable || title !== undefined,
  });

  const modal = (
    <div className="ids-overlay" {...underlayProps}>
      <div className="ids-modal__container">
        <div {...overlayProps} {...dialogProps} ref={ref} className={classes}>
          <div className="ids-modal__header">
            {title && <h5 className="ids-modal__title">{title}</h5>}
            {isClosable && (
              <IconButton
                size="small"
                className="ids-modal__close"
                onClick={onClose}
                appearance="ghost"
                aria-label={closeBtnAriaLabel}
                icon={<Close />}
              />
            )}
          </div>
          <div className="ids-modal__content">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDom.createPortal(modal, document.body);
};

export default Modal;

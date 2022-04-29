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
  children: React.ReactNode;
  className?: string;
  size?: Size;
  title?: string;
  isClosable?: boolean;
  onClose?: () => void;
  closeButtonLabel?: string;
  withSpace?: boolean;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    children,
    className,
    closeButtonLabel,
    title,
    onClose,
    isClosable,
    withSpace,
    size = 'small',
  } = props;

  let ref = React.useRef<HTMLDivElement>(null);
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll();
  let { dialogProps } = useDialog(props, ref);

  const classes = cx('ids-modal', className, {
    [`ids-modal--${size}`]: size !== 'small',
    'ids-modal--with-space': withSpace,
    'ids-modal--with-header': isClosable || title !== undefined,
  });

  const modal = (
    <div className="ids-overlay" {...underlayProps}>
      <div {...overlayProps} {...dialogProps} ref={ref} className={classes}>
        <div className="ids-modal__header">
          {title && <h5 className="ids-modal__title">{title}</h5>}
          {isClosable && (
            <IconButton
              size="small"
              className="ids-modal__close"
              onClick={onClose}
              appearance="ghost"
              aria-label={closeButtonLabel}
              icon={<Close />}
            />
          )}
        </div>
        <div className="ids-modal__content">{children}</div>
      </div>
    </div>
  );

  return ReactDom.createPortal(modal, document.body);
};

export default Modal;

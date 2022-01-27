import * as React from 'react';
import cx from 'classnames';

import { Toast as HotToast } from 'react-hot-toast';

import IconButton from '@igloo-ui/icon-button';
import SuccessSolid from '@igloo-ui/icons/dist/SuccessSolid';
import RemoveSolid from '@igloo-ui/icons/dist/RemoveSolid';
import Close from '@igloo-ui/icons/dist/Close';

export interface ToastProps extends React.ComponentProps<'div'> {
  toast?: HotToast;
  close?: () => void;
  className?: string;
  iconDescription?: string;
}

const Toast: React.FunctionComponent<ToastProps> = (props: ToastProps) => {
  const { toast, iconDescription, close, className, ...rest } = props;

  const toastRef = React.useRef<HTMLDivElement>(null);

  if (!toast) {
    return null;
  }

  const error = toast.type === 'error';

  const statusIcon = !error ? (
    <SuccessSolid className="ids-toaster__icon" />
  ) : (
    <RemoveSolid className="ids-toaster__icon" />
  );

  const classes = cx('ids-toaster', className, {
    'ids-toaster--error': error,
  });

  return (
    <div {...toast.ariaProps} ref={toastRef} className={classes} {...rest}>
      <div className="ids-toaster__content">
        {statusIcon}
        <span className="ids-toaster__text">{toast.message}</span>
      </div>

      <IconButton
        onClick={close}
        appearance="ghost"
        aria-label={iconDescription}
        icon={<Close className="ids-toaster__close" />}
      />
    </div>
  );
};
export default Toast;

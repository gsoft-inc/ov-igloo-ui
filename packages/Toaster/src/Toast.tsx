import * as React from 'react';
import cx from 'classnames';

import { Toast as HotToast } from 'react-hot-toast';

import SuccessSolid from '@igloo-ui/icons/dist/SuccessSolid';
import RemoveSolid from '@igloo-ui/icons/dist/RemoveSolid';
import Close from '@igloo-ui/icons/dist/Close';

export interface ToastProps extends React.ComponentProps<'div'> {
  toast?: HotToast;
  close?: () => void;
}

const Toast: React.FunctionComponent<ToastProps> = (props: ToastProps) => {
  const { toast, close, className, ...rest } = props;

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
    <div {...toast.ariaProps} className={classes} {...rest}>
      <div className="ids-toaster__content">
        {statusIcon}
        <span className="ids-toaster__text">{toast.message}</span>
      </div>
      <button className="ids-toaster__btn" onClick={close}>
        <Close className="ids-toaster__close" />
      </button>
    </div>
  );
};

export default Toast;

import * as React from 'react';
import cx from 'classnames';

import { Toast as HotToast } from 'react-hot-toast';

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

  const [isShown, setIsShown] = React.useState(false);

  const toastRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      setIsShown(false);
    };
  }, []);

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
    'ids-toaster--shown': isShown && toast.visible,
  });

  return (
    <div {...toast.ariaProps} ref={toastRef} className={classes} {...rest}>
      <div className="ids-toaster__content">
        {statusIcon}
        <span className="ids-toaster__text">{toast.message}</span>
      </div>
      <button
        onClick={close}
        className="ids-toaster__btn"
        aria-label={iconDescription}
      >
        <Close className="ids-toaster__close" />
      </button>
    </div>
  );
};
export default Toast;

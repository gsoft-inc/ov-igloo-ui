import * as React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import SuccessSolid from '@igloo-ui/icons/dist/SuccessSolid';
import RemoveSolid from '@igloo-ui/icons/dist/RemoveSolid';

import ToasterContainer, { TOAST_CONTAINER_ID } from './ToasterContainer';

const TOAST_DURATION = 4000 as const;
const TOAST_INFINITE_TIME = 'infinite' as const;

export interface ToastProps extends React.ComponentProps<'div'> {
  /** The content to display inside the Toast. */
  message: string;
  /** Display the error Toast. */
  error?: boolean;
  /** The length of time in milliseconds the toast message should persist. */
  duration?: number | 'infinite';
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** Handler that is called when the overlay should close. */
  onDissmiss?: () => void;
}

const Toast: React.FunctionComponent<ToastProps> = (props: ToastProps) => {
  const {
    message,
    error = false,
    onDissmiss,
    duration = TOAST_DURATION,
    className,
    dataTest,
    ...rest
  } = props;

  const toastRef = React.useRef<HTMLOutputElement>(null);
  let interval: NodeJS.Timer;

  const setAnimation = (duration: number) => {
    document.documentElement.style.setProperty('--_duration', `${duration}ms`);
    interval = setInterval(() => {
      if (toastRef && toastRef.current) {
        toastRef.current.classList.add('ids-toast--hidden');
      }
    }, duration);

    return () => clearInterval(interval);
  };

  React.useEffect(() => {
    if (duration === TOAST_INFINITE_TIME) {
      return;
    }

    setAnimation(duration);
  }, []);

  React.useEffect(() => {
    if (duration === TOAST_INFINITE_TIME) {
      return;
    }

    interval = setInterval(() => {
      if (onDissmiss) {
        onDissmiss();
      }
    }, duration + 500);

    // eslint-disable-next-line
    return () => clearInterval(interval);
  }, [onDissmiss]);

  const statusIcon = !error ? (
    <SuccessSolid className="ids-toast__icon" />
  ) : (
    <RemoveSolid className="ids-toast__icon" />
  );

  const classes = cx('ids-toast', className, {
    'ids-toast--error': error,
    'ids-toast--reduce-motion': duration === TOAST_INFINITE_TIME,
  });

  const container = document.getElementById(TOAST_CONTAINER_ID);

  const toast = (
    <output ref={toastRef} className={classes} data-test={dataTest} {...rest}>
      {statusIcon} {message}
    </output>
  );

  if (!container) {
    return ReactDOM.createPortal(
      <ToasterContainer>{toast}</ToasterContainer>,
      document.body
    );
  }

  return toast;
};
export default Toast;

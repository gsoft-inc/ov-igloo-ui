import * as React from 'react';
import cx from 'classnames';
import toast, { useToaster } from 'react-hot-toast';

import Toast from './Toast';

import './toaster.scss';

export interface ToastProps extends React.ComponentProps<'div'> {
  iconDescription?: 'string';
}

const Toaster: React.FunctionComponent<ToastProps> = (props: ToastProps) => {
  const { iconDescription, className, ...rest } = props;
  const { toasts } = useToaster();

  return (
    <div className="ids-toaster__overlay">
      {toasts.map((t) => {
        return (
          <Toast
            key={t.id}
            id={t.id}
            toast={t}
            close={() => toast.dismiss(t.id)}
            className={cx(className, {
              'ids-toaster__visible': t.visible,
            })}
            iconDescription={iconDescription}
            {...rest}
          />
        );
      })}
    </div>
  );
};

const position = 'top-center';

export const toaster = {
  success: (message: string, duration = 5000) =>
    toast.success(message, { position, duration }),
  error: (message: string, duration = 5000) =>
    toast.error(message, { position, duration }),
};

export default Toaster;

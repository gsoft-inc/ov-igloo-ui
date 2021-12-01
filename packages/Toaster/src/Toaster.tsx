import * as React from 'react';
import toast, { useToaster } from 'react-hot-toast';

import Toast from './Toast';

import './toaster.scss';

export type ToastProps = React.ComponentProps<'div'>;

const Toaster: React.FunctionComponent<ToastProps> = (props: ToastProps) => {
  const { className, ...rest } = props;
  const { toasts } = useToaster();

  return (
    <div className="ids-toaster__overlay">
      {toasts
        .filter((t) => t.visible)
        .map((t) => (
          <Toast
            key={t.id}
            toast={t}
            close={() => toast.dismiss(t.id)}
            className={className}
            {...rest}
          />
        ))}
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

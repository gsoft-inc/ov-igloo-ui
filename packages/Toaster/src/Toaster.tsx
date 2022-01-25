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

  const [remove, setRemove] = React.useState<boolean>(false);

  const toasterRef = React.useRef<HTMLDivElement>(null);
  const lastToastRef = React.useRef<number | null>(null);

  const flip = (size: number): void => {
    if (lastToastRef.current && size) {
      const invert = lastToastRef.current - size;

      toasterRef.current?.animate(
        [
          { transform: `translateY(${invert}px)` },
          { transform: `translateY(0)` },
        ],
        {
          duration: 150,
          easing: 'ease-out',
        }
      );
    }

    lastToastRef.current = size;
  };

  React.useLayoutEffect(() => {
    if (toasterRef.current) {
      flip(toasterRef.current?.offsetHeight);
    }
  }, [toasts]);

  const handleClose = (id: string): void => {
    setRemove(true);
    toast.dismiss(id);
    setRemove(false);
  };

  return (
    <div ref={toasterRef} className="ids-toaster__overlay">
      {toasts.map((t) => {
        return (
          <Toast
            key={t.id}
            id={t.id}
            toast={t}
            close={() => handleClose(t.id)}
            className={cx(className, {
              'ids-toaster__hidden': remove,
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

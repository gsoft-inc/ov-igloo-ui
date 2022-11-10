import * as React from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import ToasterContainer from './ToasterContainer';
import { useToaster, ToastArgs } from './useToaster';

import './toaster.scss';

export interface ToasterProps {
  toasts: [] | ToastArgs[];
}

const Toaster: React.FunctionComponent<ToasterProps> = (
  props: ToasterProps
) => {
  const { toasts } = props;
  const [list, setList] = React.useState(toasts);

  React.useEffect(() => {
    setList([...toasts]);
  }, [toasts]);

  const deleteToast = (id: string) => {
    const toast = list;
    const toastsListItem = toasts.findIndex((e) => e.id === id);
    toast[toastsListItem].isOpen = false;

    setList([...toast]);
  };

  const container = (
    <ToasterContainer>
      {toasts.map((toast) => {
        return (
          toast.isOpen && (
            <Toast
              key={toast.id}
              message={toast.message}
              error={toast.status === 'error'}
              duration={toast.duration}
              onDissmiss={() => deleteToast(toast.id)}
            />
          )
        );
      })}
    </ToasterContainer>
  );

  return ReactDOM.createPortal(container, document.body);
};

export { useToaster, Toast };
export default Toaster;

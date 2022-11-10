import * as React from 'react';

export interface ToastArgs {
  id: string;
  status?: 'success' | 'error';
  isOpen?: boolean;
  message: string;
  duration?: number;
}

export function useToaster() {
  const [toastList, setToastList] = React.useState<[] | ToastArgs[]>([]);
  let toastProperties: null | ToastArgs = null;

  const id = Math.random().toString(36).substr(2, 9);

  const toast = {
    success: (message: string, duration?: number) => {
      toastProperties = {
        id,
        status: 'success',
        isOpen: true,
        message,
        duration,
      };
      setToastList([...toastList, toastProperties]);
    },
    error: (message: string, duration?: number) => {
      toastProperties = {
        id,
        status: 'error',
        isOpen: true,
        message,
        duration,
      };
      setToastList([...toastList, toastProperties]);
    },
  };

  return { toast, toastList, setToastList };
}

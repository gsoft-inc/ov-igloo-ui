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

  const createToast = (
    status: 'success' | 'error',
    message: string,
    duration?: number
  ) => {
    const id = Math.random().toString(36).substr(2, 9);

    const toastProperties: ToastArgs = {
      id,
      status,
      isOpen: true,
      message,
      duration,
    };

    setToastList((prevList) => [...prevList, toastProperties]);
  };

  const toast = {
    success: (message: string, duration?: number) =>
      createToast('success', message, duration),
    error: (message: string, duration?: number) =>
      createToast('error', message, duration),
  };

  return { toast, toastList, setToastList };
}

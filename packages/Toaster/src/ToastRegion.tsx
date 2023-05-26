import * as React from 'react';
import { useFocusWithin, useHover } from '@react-aria/interactions';
import { useToastRegion } from '@react-aria/toast';
import type { AriaToastRegionProps } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import type { ToastArgs } from './Toaster';

import Toast from './Toast';

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

const ToastRegion: React.FunctionComponent<ToastRegionProps<ToastArgs>> = ({
  state,
  ...props
}: ToastRegionProps<ToastArgs>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { regionProps } = useToastRegion(props, state, ref);

  const pauseAnimation = (): void => {
    ref.current?.classList.add('ids-toast__overlay--focus');
    state.pauseAll();
  };

  const resumeAnimation = (): void => {
    ref.current?.classList.remove('ids-toast__overlay--focus');
    state.resumeAll();
  };

  const { hoverProps } = useHover({
    onHoverStart: pauseAnimation,
    onHoverEnd: resumeAnimation,
  });

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: pauseAnimation,
    onBlurWithin: resumeAnimation,
  });

  return (
    <div
      {...regionProps}
      ref={ref}
      className="ids-toast__overlay"
      {...focusWithinProps}
      {...hoverProps}
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
};

export default ToastRegion;

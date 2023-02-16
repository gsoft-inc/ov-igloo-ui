import * as React from 'react';
import cx from 'classnames';
import {
  flip,
  useMergeRefs,
  offset,
  autoUpdate,
  useFloating,
  FloatingFocusManager,
  useDismiss,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';

import './dropdown.scss';

export type Position =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';
export type Size = 'xsmall' | 'small' | 'medium' | 'large';
export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** The target button, text, svg etc.. of the Dropdown. */
  children: React.ReactElement;
  /** Add a specific class to the dropdown. */
  className?: string;
  /** Default value displayed in the Dropdown. */
  content: React.ReactNode;
  /** Position of the Dropdown. */
  position?: Position;
  /** Changes the size of the card, giving it more or less padding. */
  size?: Size;
  /** True if the Dropdown list is displayed. */
  isOpen?: boolean;
  /** Callback when the user clicks outside the Dropdown. */
  onClose?: () => void;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
}

const Dropdown: React.FunctionComponent<DropdownProps> = React.forwardRef(
  (props: DropdownProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      className,
      content,
      size = 'xsmall',
      onClose,
      dataTest,
      isOpen = false,
      position = 'bottom-start',
      style,
      ...rest
    } = props;

    const handleOnClose = (): void => {
      if (onClose) {
        onClose();
      }
    };

    const handleOpenChange = (open: boolean): void => {
      if (!open) {
        handleOnClose();
      }
    };

    const { x, y, strategy, refs, context } = useFloating({
      placement: position,
      open: isOpen,
      strategy: 'fixed',
      onOpenChange: handleOpenChange,
      whileElementsMounted: autoUpdate,
      middleware: [offset(1), flip()],
    });

    const mergedDropdownRef = useMergeRefs([refs.setFloating, ref]);

    const dismiss = useDismiss(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

    const { isMounted, styles } = useTransitionStyles(context, {
      duration: 150,
      initial: ({ side }) => ({
        opacity: 0,
        transform: side === 'bottom' ? 'translateY(1rem)' : 'translateY(-1rem)',
      }),
      open: {
        opacity: 1,
        transform: 'translateY(0rem)',
      },
      close: ({ side }) => ({
        opacity: 0,
        transform: side === 'bottom' ? 'translateY(1rem)' : 'translateY(-1rem)',
      }),
    });

    const dropdownClasses = cx('ids-dropdown', className, {
      [`ids-dropdown--${size}`]: size !== 'xsmall',
      [`ids-dropdown--${position}`]: position !== 'bottom',
    });

    return (
      <>
        <div
          className="ids-dropdown__ref"
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          {children}
        </div>
        {isMounted && (
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={-1}
          >
            <div
              ref={mergedDropdownRef}
              className={dropdownClasses}
              data-test={dataTest}
              {...rest}
              data-show={isOpen}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                ...styles,
                ...style,
              }}
              {...getFloatingProps()}
            >
              {content}
            </div>
          </FloatingFocusManager>
        )}
      </>
    );
  }
);

export default Dropdown;

import * as React from 'react';
import cx from 'classnames';

import { useTransition, animated } from 'react-spring';

import './dropdown.scss';

export type Position = 'top' | 'bottom';
export type Size = 'xsmall' | 'small' | 'medium' | 'large';

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** The target button, text, svg etc.. of the Dropdown. */
  children: React.ReactElement;
  /** Default value displayed in the Dropdown. */
  content: React.ReactNode;
  /** Changes the size of card, giving more or less padding */
  size?: Size;
  /** True if the Dropdown list is displayed. */
  isOpen?: boolean;
  /** Callback when the user clicks outside the Dropdown. */
  onClose?: () => void;
  /** Position of the Dropdown. */
  position?: Position;
}

const Dropdown: React.FunctionComponent<DropdownProps> = React.forwardRef(
  (props: DropdownProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      children,
      content,
      size = 'xsmall',
      isOpen = false,
      onClose,
      position = 'bottom',
      ...rest
    } = props;

    const initialTransform =
      position === 'bottom' ? 'translateY(-1rem)' : 'translateY(1rem)';
    const transition = useTransition(isOpen, {
      from: {
        opacity: 0,
        transform: initialTransform,
      },
      enter: { opacity: 1, transform: 'translateY(0rem)' },
      leave: { opacity: 0, transform: initialTransform },
      config: { duration: 150 },
    });

    const handleOnClose = () => {
      if (onClose) {
        onClose();
      }
    };

    const dropdownClasses = cx('ids-dropdown', {
      [`ids-drop--${size}`]: size !== 'xsmall',
      [`ids-drop--${position}`]: position !== 'bottom',
    });

    return (
      <>
        <div className="ids-dropdown__container">
          {children}
          {transition(
            (styles, item) =>
              item && (
                <animated.div
                  style={styles}
                  ref={ref}
                  className={dropdownClasses}
                  {...rest}
                >
                  {content}
                </animated.div>
              )
          )}
        </div>
        {isOpen && (
          <div
            role="button"
            tabIndex={0}
            className="ids-dropdown__overlay"
            onClick={handleOnClose}
          />
        )}
      </>
    );
  }
);

export default Dropdown;

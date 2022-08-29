import * as React from 'react';
import cx from 'classnames';
import { useTransition, animated } from 'react-spring';

import './dropdown.scss';

export type Position = 'top' | 'right' | 'bottom' | 'left';

const DeterminePosition = (position: Position): string => {
  if (position === 'right') {
    return 'translateX(-1rem)';
  }

  if (position === 'top') {
    return 'translateY(1rem)';
  }

  return 'translateY(-1rem)';
};

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** Default value displayed in the Dropdown. */
  children?: React.ReactNode;
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
      isOpen = false,
      onClose,
      position = 'bottom',
      ...rest
    } = props;

    const initialTransform = DeterminePosition(position);
    const isOnTheRight = position === 'right';
    const transitions = useTransition(isOpen, {
      from: { opacity: 0, transform: initialTransform },
      enter: {
        opacity: 1,
        transform: isOnTheRight ? 'translateX(0rem)' : 'translateY(0rem)',
      },
      leave: { opacity: 0, transform: initialTransform },
      config: { duration: 150 },
    });

    const dropdownClasses = cx('ids-dropdown', {
      'ids-dropdown--top': position === 'top',
      'ids-dropdown--right': position === 'right',
      'ids-dropdown--bottom': position === 'bottom',
      'ids-dropdown--left': position === 'left',
    });

    const handleOnClose = (): void => {
      if (onClose) {
        onClose();
      }
    };

    return transitions((styles) => (
      <>
        <div
          role="button"
          tabIndex={0}
          className="ids-dropdown__overlay"
          onClick={handleOnClose}
        >
          {null}
        </div>
        <animated.div
          style={styles}
          ref={ref}
          className={dropdownClasses}
          {...rest}
        >
          {children}
        </animated.div>
      </>
    ));
  }
);

export default Dropdown;

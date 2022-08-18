import * as React from 'react';
import cx from 'classnames';
import { useTransition, animated } from 'react-spring';

import './dropdown.scss';

export enum DropdownPositions {
  Top,
  Right,
  Bottom,
  Left,
}

const DeterminePosition = (position: DropdownPositions): string => {
  if (position === DropdownPositions.Right) {
    return 'translateX(-1rem)';
  }

  if (position === DropdownPositions.Top) {
    return 'translateY(1rem)';
  }

  return 'translateY(-1rem)';
};

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** Default value displayed in the Dropdown. */
  children?: React.ReactNode;
  /** Position of the Dropdown */
  position?: DropdownPositions;
  /** True if the Dropdown list is displayed. */
  isOpen?: boolean;
}

const Dropdown: React.FunctionComponent<DropdownProps> = React.forwardRef(
  (props: DropdownProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      children,
      position = DropdownPositions.Bottom,
      isOpen = false,
      ...rest
    } = props;

    const initialTransform = DeterminePosition(position);
    const isOnTheRight = position === DropdownPositions.Right;
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
      'ids-dropdown--top': position === DropdownPositions.Top,
      'ids-dropdown--right': position === DropdownPositions.Right,
      'ids-dropdown--bottom': position === DropdownPositions.Bottom,
      'ids-dropdown--left': position === DropdownPositions.Left,
    });

    return transitions((styles) => (
      <animated.div
        style={styles}
        ref={ref}
        className={dropdownClasses}
        {...rest}
      >
        {children}
      </animated.div>
    ));
  }
);

export default Dropdown;

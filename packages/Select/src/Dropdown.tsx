import * as React from 'react';
import cx from 'classnames';
import { useTransition, animated } from 'react-spring';

import { DeterminePosition } from './DropdownHelper';

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** Add a specific class to the button. */
  className?: string;
  /** True if the option list is displayed. */
  isOpen?: boolean;
  above?: boolean;
  onTheRight?: boolean;
  /** React child node representing the dropdown content */
  children: React.ReactNode;
}

const Dropdown: React.FunctionComponent<DropdownProps> = React.forwardRef(
  (props: DropdownProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      className,
      isOpen = false,
      above = false,
      onTheRight = false,
      children,
    } = props;

    const dropdownClasses = cx('ids-select--dropdown', className);

    const initialTransform = DeterminePosition(onTheRight, above);

    const transitions = useTransition(isOpen, {
      from: { opacity: 0, transform: initialTransform },
      enter: {
        opacity: 1,
        transform: onTheRight ? 'translateX(0rem)' : 'translateY(0rem)',
      },
      leave: { opacity: 0, transform: initialTransform },
      config: { duration: 150 },
    });

    return transitions(
      (styles, item) =>
        item && (
          <animated.div style={styles} className={dropdownClasses}>
            {children}
          </animated.div>
        )
    );
  }
);

export default Dropdown;

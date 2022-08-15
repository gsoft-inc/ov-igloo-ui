import * as React from 'react';
import cx from 'classnames';

import './dropdown.scss';

export enum DropdownPositions {
  Top,
  Right,
  Bottom,
  Left,
}

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** Default value displayed in the dropdown. */
  children?: React.ReactNode;
  /** Position of the dropdown */
  position?: DropdownPositions;
}

const Dropdown: React.FunctionComponent<DropdownProps> = React.forwardRef(
  (props: DropdownProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, position = DropdownPositions.Bottom, ...rest } = props;

    const dropdownClasses = cx('ids-dropdown', {
      'ids-dropdown--top': position === DropdownPositions.Top,
      'ids-dropdown--right': position === DropdownPositions.Right,
      'ids-dropdown--bottom': position === DropdownPositions.Bottom,
      'ids-dropdown--left': position === DropdownPositions.Left,
    });

    return (
      <div ref={ref} className={dropdownClasses} {...rest}>
        {children}
      </div>
    );
  }
);

export default Dropdown;

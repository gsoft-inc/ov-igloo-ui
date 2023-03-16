import * as React from 'react';
import cx from 'classnames';

import './button-group.scss';

import ButtonGroupItem from './ButtonGroupItem';

export interface ButtonGroupProps {
  /** Changes the padding of button group */
  compact?: boolean;
  /** Changes the size of button group */
  small?: boolean;
  /** React child node representing the button content text or icon */
  children: React.ReactNode;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a specific class to the button group */
  className?: string;
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
  children,
  compact = false,
  small = false,
  className,
  dataTest,
  ...rest
}: ButtonGroupProps) => {
  return (
    <div
      data-test={dataTest}
      className={cx('ids-btn-group', className, {
        'ids-btn-group--small': small,
        'ids-btn-group--compact': compact,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export { ButtonGroupItem as ButtonItem };
export default ButtonGroup;

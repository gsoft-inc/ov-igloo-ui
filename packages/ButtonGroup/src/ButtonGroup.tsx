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
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = (
  props: ButtonGroupProps
) => {
  const { children, compact = false, small = false, dataTest } = props;

  return (
    <div
      data-test={dataTest}
      className={cx('ids-btn-group', {
        'ids-btn-group--small': small,
        'ids-btn-group--compact': compact,
      })}
    >
      {children}
    </div>
  );
};

export { ButtonGroupItem as ButtonItem };
export default ButtonGroup;

import * as React from 'react';
import cx from 'classnames';

import './button-group.scss';

import ButtonGroupItem from './ButtonGroupItem';

export interface ButtonGroupProps {
  /** Changes the padding of button group  */
  compact?: boolean;
  /** Changes the size of button group  */
  small?: boolean;
  /** React node child representing the button content text | icon. */
  children: React.ReactNode;
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = (
  props: ButtonGroupProps
) => {
  const { children, compact = false, small = false } = props;

  return (
    <div
      className={cx('ids-btn-group', {
        'ids-btn-group--small': small,
        'ids-btn-group--compact': compact,
      })}
    >
      {children}
    </div>
  );
};

export { ButtonGroupItem as Item };
export default ButtonGroup;

import * as React from 'react';
import cx from 'classnames';

export interface ButtonGroupItemProps extends React.ComponentProps<'button'> {
  /** The content to display inside the button */
  children: React.ReactNode | string;
  /** Whether or not the button is active. */
  active?: boolean;
  /** Disabled the button, the user cannot click on them */
  disabled?: boolean;
  /** Callback funtion executed when a button is clicked. */
  onClick?: () => void;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const ButtonGroupItem: React.FunctionComponent<ButtonGroupItemProps> = (
  props: ButtonGroupItemProps
) => {
  const { children, active, disabled, onClick, dataTest } = props;

  return (
    <button
      className={cx('ids-btn-group__item', {
        'is-disabled': disabled,
        'is-selected': active,
      })}
      data-test={dataTest}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonGroupItem;

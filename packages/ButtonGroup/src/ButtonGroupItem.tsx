import * as React from 'react';
import cx from 'classnames';

export interface ButtonGroupItemProps extends React.ComponentProps<'button'> {
  /** The content to display inside the `ButtonItem` */
  children: React.ReactNode | string;
  /** Whether or not the `ButtonItem` is active */
  active?: boolean;
  /** Disabled the `ButtonItem`, the user cannot click on them */
  disabled?: boolean;
  /** Callback function executed when a `ButtonItem` is clicked */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const ButtonGroupItem: React.FunctionComponent<ButtonGroupItemProps> = (
  props: ButtonGroupItemProps
) => {
  const { children, active, disabled, onClick, dataTest, ...rest } = props;

  return (
    <button
      className={cx('ids-btn-group__item', {
        'is-disabled': disabled,
        'is-selected': active,
      })}
      data-test={dataTest}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonGroupItem;

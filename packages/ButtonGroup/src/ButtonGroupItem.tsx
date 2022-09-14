import * as React from 'react';
import cx from 'classnames';

export interface ButtonGroupItemProps extends React.ComponentProps<'button'> {
  /** The content to display inside the `ButtonItem` */
  children?: React.ReactNode | string;
  /** Whether or not the `ButtonItem` is active */
  active?: boolean;
  /** Disabled the `ButtonItem`, the user cannot click on them */
  disabled?: boolean;
  /** Callback function executed when a `ButtonItem` is clicked */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Icon to display to the left of button content */
  icon?: React.ReactNode;
}

const ButtonGroupItem: React.FunctionComponent<ButtonGroupItemProps> = (
  props: ButtonGroupItemProps
) => {
  const { children, icon, active, disabled, onClick, dataTest, ...rest } =
    props;

  const renderWithIcon = (
    <>
      {icon}{' '}
      {children && <span className="ids-btn-group__text">{children}</span>}
    </>
  );

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
      {icon ? renderWithIcon : children}
    </button>
  );
};

export default ButtonGroupItem;

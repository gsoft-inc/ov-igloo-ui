import * as React from 'react';
import cx from 'classnames';

import './button.scss';

export type Appearance =
  | 'primary'
  | 'secondary'
  | 'premium'
  | 'ghost'
  | 'danger';
export type Size = 'small' | 'medium';

export type Ref = HTMLButtonElement;

// export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
type ButtonOwnProps<E extends React.ElementType> = {
  /** The content to display inside the button */
  children?: React.ReactNode;
  /** Disabled the button, the user cannot click on them */
  disabled?: boolean;
  /** Sets the button in an active state */
  active?: boolean;
  /** Replaces button text with a spinner while a background action is being performed */
  loading?: boolean;
  /** Changes the size of button, giving more or less padding */
  size?: Size;
  /** Button appearance */
  appearance?: Appearance;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Icon to display to the left of button content */
  iconLeading?: React.ReactNode;
  /** Icon to display to the right of button content */
  iconTrailing?: React.ReactNode;
  /** Display only the icon in mobile */
  showOnlyIconOnMobile?: boolean;
  /** Callback when clicked */
  onClick?: () => void;
  /** Optional prop to specify the type of the Button */
  type?: 'button' | 'reset' | 'submit';
  /** Add a data-intercom-target with unique id to link a components to a Product Tour step */
  intercomTarget?: string;
  /** Add a specific class to the button */
  className?: string;
  as?: E;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;

const Button = <E extends React.ElementType = 'button'>(
  props: ButtonProps<E>
) => {
  const {
    children,
    disabled = false,
    active = false,
    loading = false,
    size = 'medium',
    appearance = 'primary',
    type = 'button',
    onClick,
    dataTest,
    iconLeading,
    iconTrailing,
    showOnlyIconOnMobile,
    intercomTarget,
    className,
    as,
    ...rest
  } = props;

  const hasIconLeading = iconLeading !== undefined;
  const hasIconTrailing = iconTrailing !== undefined;
  const hasIcon = hasIconLeading || hasIconTrailing;
  const childrenIsAString =
    typeof children === 'string' || children instanceof String;

  const classes = cx('ids-btn', className, {
    'ids-btn--small': size === 'small',
    'ids-btn--active': active,
    'ids-btn--loading': loading,
    'ids-btn--mobile': showOnlyIconOnMobile,
    'has-icon': hasIcon,
    'has-icon--leading': hasIconLeading,
    'has-icon--trailing': hasIconTrailing,
    [`ids-btn--${appearance}`]: appearance !== 'primary',
  });

  const renderContent = (): JSX.Element => {
    return (
      <>
        {hasIconLeading && iconLeading}
        {showOnlyIconOnMobile ? (
          <span
            className={cx('ids-btn__label', {
              'is-hidden': loading,
            })}
          >
            {children}
          </span>
        ) : (
          <span
            className={cx({
              'is-hidden': loading,
            })}
          >
            {children}
          </span>
        )}
        {hasIconTrailing && iconTrailing}
      </>
    );
  };

  const Component = as || 'button';

  return (
    <Component
      disabled={disabled}
      className={classes}
      data-test={dataTest}
      data-intercom-target={intercomTarget}
      type={type}
      title={childrenIsAString ? children?.toString() : ''}
      onClick={onClick}
      {...rest}
    >
      {loading && <div className="ids-loader" />}
      {renderContent()}
    </Component>
  );
};

export default Button;

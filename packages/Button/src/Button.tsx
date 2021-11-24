import * as React from 'react';
import classNames from 'classnames';

import './button.scss';

export type Appearance =
  | 'primary'
  | 'secondary'
  | 'premium'
  | 'ghost'
  | 'danger';
export type Size = 'small' | 'medium';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  // The content to display inside the button
  children?: React.ReactNode;
  // Disabled the button, the user cannot click on them
  disabled?: boolean;
  // Sets the button in a active state
  active?: boolean;
  // Replaces button text with a spinner while a background action is being performed
  loading?: boolean;
  // Changes the size of button, giving more or less padding
  size?: Size;
  // Button appearance
  appearance?: Appearance;
  // Add a data-test tag for automated tests
  dataTest?: string;
  // Icon to display to the left of button content
  iconLeading?: React.ReactNode;
  // Icon to display to the right of button content
  iconTrailing?: React.ReactNode;
  // Display only the icon in mobile
  showOnlyIconOnMobile?: boolean;
  // Callback when clicked
  onClick?: () => void;
  // Optional prop to specify the type of the Button
  type?: 'button' | 'reset' | 'submit';
  // Add a data-intercom-target with unique id to link a components to a Product Tour step.
  intercomTarget?: string;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
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
    ...rest
  } = props;

  const hasIconLeading = iconLeading !== undefined;
  const hasIconTrailing = iconTrailing !== undefined;
  const hasIcon = hasIconLeading || hasIconTrailing;

  const classes = classNames('ids-btn', className, {
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
    if (loading) {
      return <div className="ids-loader" />;
    }

    return (
      <>
        {hasIconLeading && iconLeading}
        {showOnlyIconOnMobile ? (
          <span className="ids-btn__label">{children}</span>
        ) : (
          children
        )}
        {hasIconTrailing && iconTrailing}
      </>
    );
  };

  return (
    <button
      disabled={disabled}
      className={classes}
      data-test={dataTest}
      data-intercom-target={intercomTarget}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export default Button;

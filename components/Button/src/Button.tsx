import * as React from 'react';
import classNames from 'classnames';

import './button.css';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  // The content to dispaly inside the button
  children?: React.ReactNode;
  // Disabled the button, the user cannot click on them
  disabled?: boolean;
  // Sets the button in a active state
  active?: boolean;
  // Changes the size of button, giving more or less padding
  size?: 'small' | 'medium';
  // Button appearance
  appearance?: 'primary' | 'secondary' | 'premium' | 'ghost' | 'danger';
  // Add a data-test tag for automated tests
  dataTest?: string;
  // Icon to display to the left of button content
  iconLeading?: React.ReactNode;
  // Icon to display to the right of button content
  iconTrailing?: React.ReactNode;
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
    size = 'medium',
    appearance = 'primary',
    type = 'button',
    onClick,
    dataTest,
    iconLeading,
    iconTrailing,
    intercomTarget,
    ...rest
  } = props;

  const hasIconLeading = iconLeading !== undefined;
  const hasIconTrailing = iconTrailing !== undefined;
  const hasIcon = hasIconLeading || hasIconTrailing;

  const classes = classNames(
    'ids-btn',
    size === 'small' && 'ids-btn--small',
    active && 'ids-btn--active',
    appearance !== 'primary' && `ids-btn--${appearance}`,
    hasIcon && 'has-icon',
    hasIconLeading && 'has-icon--leading',
    hasIconTrailing && 'has-icon--trailing'
  );

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
      {hasIconLeading && iconLeading}
      {children}
      {hasIconTrailing && iconTrailing}
    </button>
  );
};

export default Button;

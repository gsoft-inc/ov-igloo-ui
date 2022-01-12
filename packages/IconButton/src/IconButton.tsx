import React from 'react';
import cx from 'classnames';

import Button from '@igloo-ui/button';

import './icon-button.scss';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
export type Theme = 'default' | 'round' | 'light';

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  // The content to display inside the button
  children?: React.ReactNode;
  /** Add class names to the surrounding DOM container. */
  className?: string;
  /** Icon React node to represent the value of the button */
  icon?: React.ReactNode;
  /** Callback function that will be called when the user clicks on the button.
   * @returns {void}
   */
  onClick?: () => void;
  /** True if the control is disabled and shows a disabled state. The user cannot click on the button */
  disabled?: boolean;
  /** True if the control is waiting and shows a loading state. The user cannot click on the button */
  isLoading?: boolean;
  /** Button size */
  buttonSize?: ButtonSize;
  /** Add a tooltip value on hover action of the button . */
  tooltip?: string;
  /** The button's theme */
  theme?: Theme;
  // Add a data-test tag for automated tests
  dataTest?: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = (
  props: IconButtonProps
) => {
  const {
    children,
    className,
    icon,
    onClick,
    disabled = false,
    isLoading = false,
    buttonSize = 'medium',
    tooltip,
    theme = 'default',
    dataTest,
    ...rest
  } = props;

  var classWithSize = buttonSize ? `ids-icon-btn--${buttonSize}` : '';

  const classes = cx(
    'ids-icon-btn',
    `ids-icon-btn--${theme}`,
    classWithSize,
    className
  );

  return (
    <Button className={classes} {...rest}>
      {icon}
    </Button>
  );
};

export default IconButton;

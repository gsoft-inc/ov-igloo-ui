import React from 'react';
import cx from 'classnames';

import Button, { ButtonProps } from '@igloo-ui/button';

import './icon-button.scss';

export type Size = 'xsmall' | 'small' | 'medium' | 'large';

export interface IconButtonProps extends Omit<ButtonProps, 'size'> {
  /** Add class names to the surrounding DOM container. */
  className?: string;
  /** Icon React node to represent the value of the button */
  icon: React.ReactNode;
  /** Callback function that will be called when the user clicks on the button.
   * @returns {void}
   */
  onClick?: () => void;
  /** True if the control is disabled and shows a disabled state. The user cannot click on the button */
  disabled?: boolean;
  /** Button size */
  size?: Size;
  /** True for rounded corners */
  rounded?: boolean;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = (
  props: IconButtonProps
) => {
  const {
    className,
    icon,
    onClick,
    disabled = false,
    size = 'medium',
    rounded = false,
    dataTest,
    ...rest
  } = props;

  const classes = cx('ids-icon-btn', `ids-icon-btn--${size}`, className, {
    'ids-icon-btn--round': rounded,
  });

  return (
    <Button className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {icon}
    </Button>
  );
};

export default IconButton;

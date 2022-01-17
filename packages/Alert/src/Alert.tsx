import React, { RefObject, useRef } from 'react';
import classNames from 'classnames';
import Close from '@igloo-ui/icons/dist/Close';

import './alert.scss';

export type Type =
  | 'announcement'
  | 'info'
  | 'premium'
  | 'promo'
  | 'success'
  | 'warning'
  | 'none';

export type Style = 'card' | 'inline' | 'horizontal';

export type IconStyle = 'medium-centered' | 'small-top';

export interface AlertProps extends React.ComponentProps<'div'> {
  // The content to display inside the alert
  children?: React.ReactNode;
  // Change the type of the alert
  type: Type;
  // Change how the alert is displayed
  alertStyle?: Style;
  // Change how the icon in the alert display
  iconStyle?: IconStyle;
  // Add a specific class to the alert
  className?: string;
  // Set if the alert can be closed by the user
  isDismissible?: boolean;
  // Action on alert dismiss click
  onDismissClick?: () => void;
}

const renderIcon = (style: Style, iconStyle: IconStyle): JSX.Element => {
  const classes = classNames('ids-alert__icon', {
    [`ids-alert__icon--${style}`]: true,
    [`ids-alert__icon--${iconStyle}`]: true,
  });

  return (
    <div className={classes}>
      <i />
    </div>
  );
};

const renderDismissButton = (
  ref: RefObject<HTMLDivElement>,
  onDismissClick?: () => void
): JSX.Element => {
  const action = (): void => {
    if (onDismissClick) {
      onDismissClick();
    }

    if (ref && ref.current && ref.current.style) {
      ref.current.style.display = 'none';
    }
  };

  return (
    <button className="ids-alert__dismiss-button" onClick={onDismissClick}>
      <Close size="small" fill="color: #838B95" />
    </button>
  );
};

const Alert: React.FunctionComponent<AlertProps> = (props: AlertProps) => {
  const {
    className,
    children,
    type,
    alertStyle = 'card',
    iconStyle = 'medium-centered',
    isDismissible = true,
    onDismissClick,
    ...rest
  } = props;

  const classes = classNames('ids-alert', className, {
    [`ids-alert--${alertStyle}`]: true,
    [`ids-alert--${type}`]: type !== 'none',
  });

  const parentElement = useRef<HTMLDivElement>(null);

  return (
    <div className={classes} ref={parentElement} {...rest}>
      {alertStyle !== 'horizontal' && renderIcon(alertStyle, iconStyle)}
      <div className="ids-alert__content">{children}</div>
      {isDismissible && renderDismissButton(parentElement, onDismissClick)}
    </div>
  );
};

export default Alert;

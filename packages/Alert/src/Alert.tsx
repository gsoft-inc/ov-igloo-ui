import * as React from 'react';
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

const renderDismissButton = (onDismissClick?: () => void): JSX.Element => {
  // TODO add icon close
  return (
    <button className="ids-alert__dismiss-button" onClick={onDismissClick}>
      <Close size="small" />
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

  return (
    <div className={classes} {...rest}>
      {alertStyle !== 'horizontal' && renderIcon(alertStyle, iconStyle)}
      <div className="ids-alert__content">{children}</div>
      {isDismissible && renderDismissButton(onDismissClick)}
    </div>
  );
};

export default Alert;

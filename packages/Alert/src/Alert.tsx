import React, { RefObject, useRef, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import classNames from 'classnames';

import Button from '@igloo-ui/button';
import Close from '@igloo-ui/icons/dist/Close';
import {
  TadaIcon,
  InfoIcon,
  CrownIcon,
  PromoIcon,
  SuccessIcon,
  WarningIcon,
} from './svgs';

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
  onAlertActionClick?: () => void;
  alertActionText?: string;
}

const renderIcon = (
  style: Style,
  iconStyle: IconStyle,
  type: Type
): JSX.Element => {
  const classes = classNames('ids-alert__icon', {
    [`ids-alert__icon--${style}`]: true,
    [`ids-alert__icon--${iconStyle}`]: true,
  });

  return (
    <div className={classes}>
      {type === 'announcement' && HTMLReactParser(TadaIcon)}
      {type === 'info' && HTMLReactParser(InfoIcon)}
      {type === 'premium' && HTMLReactParser(CrownIcon)}
      {type === 'promo' && HTMLReactParser(PromoIcon)}
      {type === 'success' && HTMLReactParser(SuccessIcon)}
      {type === 'warning' && HTMLReactParser(WarningIcon)}
    </div>
  );
};

const renderDismissButton = (
  ref: RefObject<HTMLDivElement>,
  setShow: (show: boolean) => void,
  onDismissClick?: () => void
): JSX.Element => {
  const action = (): void => {
    if (onDismissClick) {
      onDismissClick();
    }

    setShow(false);
  };

  return (
    <button className="ids-alert__dismiss-button" onClick={action}>
      <Close size="small" fill="#838B95" />
    </button>
  );
};

const renderAlertActionButton = (
  style: Style,
  alertActionText?: string,
  onAlertActionClick?: () => void
): JSX.Element => {
  if (alertActionText == null || onAlertActionClick == null) {
    return <></>;
  }

  return (
    <Button
      appearance={style === 'horizontal' ? 'ghost' : 'secondary'}
      onClick={onAlertActionClick}
    >
      {alertActionText}
    </Button>
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
    onAlertActionClick,
    alertActionText,
    ...rest
  } = props;

  const classes = classNames('ids-alert', className, {
    [`ids-alert--${alertStyle}`]: true,
    [`ids-alert--${type}`]: type !== 'none',
  });

  const parentElement = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className={classes} ref={parentElement} {...rest}>
        {alertStyle !== 'horizontal' &&
          type !== 'none' &&
          renderIcon(alertStyle, iconStyle, type)}

        <div className="ids-alert__body">
          <div className="ids-alert__content">{children}</div>
          {renderAlertActionButton(
            alertStyle,
            alertActionText,
            onAlertActionClick
          )}
        </div>

        {isDismissible &&
          renderDismissButton(parentElement, setShow, onDismissClick)}
      </div>
    );
  }

  return <></>;
};

export default Alert;

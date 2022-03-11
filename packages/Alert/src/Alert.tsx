import React, { RefObject, useRef, useState } from 'react';
import classNames from 'classnames';

import Button from '@igloo-ui/button';
import IconButton from '@igloo-ui/icon-button';
import Close from '@igloo-ui/icons/dist/Close';
import {
  TadaIcon,
  InfoIcon,
  CrownIcon,
  SuccessIcon,
  WarningIcon,
} from './svgs';

import './alert.scss';

export type Type = 'announcement' | 'info' | 'premium' | 'success' | 'warning';

export type Appearance = 'card' | 'inline' | 'horizontal';

export type IconStyle = 'medium-centered' | 'small-top';

export interface AlertButton {
  label: string;
  onClick: () => void;
}

export interface AlertProps extends React.ComponentProps<'div'> {
  /** The title of the alert */
  title?: string;
  /** The content to display inside the Alert */
  message?: React.ReactNode;
  /** Change the type of the Alert */
  type: Type;
  /** Change the Alert appearance */
  appearance?: Appearance;
  /** Add a specific class to the Alert */
  className?: string;
  /** Set if the Alert can be closed by the user */
  closable?: boolean;
  /** Action on Alert close button click */
  onClose?: () => void;
  /** Alert button */
  button?: AlertButton;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const renderIcon = (
  style: Appearance,
  hasButton: boolean,
  type: Type
): JSX.Element => {
  const classes = classNames('ids-alert__icon', `ids-alert__icon--${style}`, {
    'ids-alert__icon--small-top': hasButton,
    'ids-alert__icon--medium-centered': !hasButton,
  });

  return (
    <div className={classes}>
      {type === 'announcement' && <TadaIcon />}
      {type === 'info' && <InfoIcon />}
      {type === 'premium' && <CrownIcon />}
      {type === 'success' && <SuccessIcon />}
      {type === 'warning' && <WarningIcon />}
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
    <IconButton
      appearance="ghost"
      className="ids-alert__dismiss-btn"
      type="button"
      size="medium"
      icon={<Close size="medium" />}
      onClick={action}
    />
  );
};

const renderAlertActionButton = (
  style: Appearance,
  button?: AlertButton
): JSX.Element => {
  if (button == null || button.onClick == null || button.label == null) {
    return <></>;
  }

  return (
    <Button
      appearance={style === 'horizontal' ? 'ghost' : 'secondary'}
      size="small"
      onClick={button.onClick}
    >
      {button.label}
    </Button>
  );
};

const Alert: React.FunctionComponent<AlertProps> = (props: AlertProps) => {
  const {
    title,
    message,
    type,
    appearance = 'card',
    className,
    closable = true,
    onClose,
    button,
    dataTest,
    ...rest
  } = props;

  const classes = classNames(
    'ids-alert',
    `ids-alert--${appearance}`,
    `ids-alert--${type}`,
    className
  );

  const parentElement = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const hasButton = button !== undefined;
  const isHorizontal = appearance === 'horizontal';
  const canBeClose = closable && !isHorizontal;

  if (show) {
    return (
      <div
        className={classes}
        ref={parentElement}
        data-test={dataTest}
        {...rest}
      >
        {!isHorizontal && renderIcon(appearance, hasButton, type)}

        <div className="ids-alert__body">
          <p className="ids-alert__title">{title}</p>
          {!isHorizontal && <div className="ids-alert__content">{message}</div>}
          {hasButton && renderAlertActionButton(appearance, button)}
        </div>

        {canBeClose && renderDismissButton(parentElement, setShow, onClose)}
      </div>
    );
  }

  return null;
};

export default Alert;

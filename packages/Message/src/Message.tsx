import * as React from 'react';
import cx from 'classnames';
import Alert from '@igloo-ui/icons/dist/Alert';

import './message.scss';

export interface MessageProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  appearance?: 'default' | 'warning' | 'error';
}

const Message: React.FunctionComponent<MessageProps> = (
  props: MessageProps
) => {
  const { children, appearance = 'default' } = props;
  const classes = cx('ids-message', {
    [`ids-message--${appearance}`]: appearance !== 'default',
  });

  const hasIcon = appearance !== 'default';

  return (
    <span className={classes}>
      {hasIcon && <Alert className="ids-message__icon" size="small" />}
      {children}
    </span>
  );
};

export default Message;

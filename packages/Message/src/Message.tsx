import * as React from 'react';
import cx from 'classnames';
import Alert from '@igloo-ui/icons/dist/Alert';

import './message.scss';

export interface MessageProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  error?: boolean;
}

const Message: React.FunctionComponent<MessageProps> = (
  props: MessageProps
) => {
  const { children, error } = props;
  const classes = cx('ids-message', {
    [`ids-message--error`]: error,
  });

  return (
    <span className={classes}>
      {error && <Alert className="ids-message__icon" size="small" />}
      {children}
    </span>
  );
};

export default Message;

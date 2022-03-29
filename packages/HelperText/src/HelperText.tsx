import * as React from 'react';
import cx from 'classnames';
import Alert from '@igloo-ui/icons/dist/Alert';

import './helper-text.scss';

export interface HelperTextProps extends React.ComponentProps<'div'> {
  /** The content to display inside the HelperText */
  children: React.ReactNode;
  /** Changes the appearance of component */
  error?: boolean;
}

const HelperText: React.FunctionComponent<HelperTextProps> = (
  props: HelperTextProps
) => {
  const { children, error } = props;
  const classes = cx('ids-helperText', {
    [`ids-helperText--error`]: error,
  });

  return (
    <span className={classes}>
      {error && <Alert className="ids-helperText__icon" size="small" />}
      {children}
    </span>
  );
};

export default HelperText;

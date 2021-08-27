import * as React from 'react';
import classNames from 'classnames';

import './button.css';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  size?: 'small' | 'medium';
  appearance?: 'primary' | 'secondary' | 'ghost' | 'danger';
  dataTest?: string;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    disabled = false,
    active = false,
    size = 'medium',
    appearance = 'primary',
    dataTest = undefined,
    ...rest
  } = props;

  const classes = classNames(
    'ids-btn',
    size === 'small' && 'ids-btn--small',
    active && 'ids-btn--active',
    appearance !== 'primary' && `ids-btn--${appearance}`
  );
  return (
    <button
      disabled={disabled}
      className={classes}
      data-test={dataTest}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

import * as React from 'react';
import cx from 'classnames';

import SuccessSolid from '@igloo-ui/icons/dist/SuccessSolid';
import RemoveSolid from '@igloo-ui/icons/dist/RemoveSolid';
import Close from '@igloo-ui/icons/dist/Close';

import './toaster.scss';

export interface ToasterProps extends React.ComponentProps<'div'> {
  error?: boolean;
  children: React.ReactNode;
}

const Toaster: React.FunctionComponent<ToasterProps> = (
  props: ToasterProps
) => {
  const { children, error, className, ...rest } = props;

  const statusIcon = !error ? (
    <SuccessSolid className="ids-toaster__icon" />
  ) : (
    <RemoveSolid className="ids-toaster__icon" />
  );

  const classes = cx('ids-toaster', className, {
    'ids-toaster--error': error,
  });

  return (
    <div className={classes} {...rest}>
      <div className="ids-toaster__content">
        {statusIcon}
        <span className="ids-toaster__text">{children}</span>
      </div>
      <Close className="ids-toaster__close" />
    </div>
  );
};

export default Toaster;

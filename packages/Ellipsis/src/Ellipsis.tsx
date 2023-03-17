import * as React from 'react';
import cx from 'classnames';

import './ellipsis.scss';

export type Ref = HTMLDivElement;

export interface EllipsisProps extends React.ComponentPropsWithRef<'div'> {
  /** The content to display inside the ellipsis */
  children: React.ReactNode;
  /** Add a className for the ellipsis content div */
  className?: string;
  /** Add a className for the ellipsis container div */
  containerClassName?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a title to the ellipsis */
  title?: string;
}

const Ellipsis: React.FunctionComponent<EllipsisProps> = React.forwardRef<
  Ref,
  EllipsisProps
>(
  (
    { children, className, containerClassName, dataTest, title, ...rest },
    ref
  ) => {
    return (
      <div
        className={cx('ids-ellipsis', containerClassName)}
        data-test={dataTest}
        title={title}
        ref={ref}
        {...rest}
      >
        <div className={cx('ids-ellipsis__content', className)}>{children}</div>
      </div>
    );
  }
);

export default Ellipsis;

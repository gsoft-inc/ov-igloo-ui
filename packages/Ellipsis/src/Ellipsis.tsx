import * as React from 'react';
import cx from 'classnames';

import './ellipsis.scss';

export interface EllipsisProps extends React.ComponentProps<'div'> {
  /** The content to display inside the ellipsis */
  children: React.ReactNode;
  /** Add a className for the ellipsis content div */
  className?: string;
  /** Add a className for the ellipsis container div */
  containerClassName?: string;
  /** Add a title to the ellipsis */
  title?: string;
}

const Ellipsis: React.FunctionComponent<EllipsisProps> = (
  props: EllipsisProps
) => {
  const { children, className, containerClassName, title } = props;

  const parentElement = React.useRef<HTMLDivElement>(null);
  const element = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={cx('ids-ellipsis', containerClassName)}
      title={title}
      ref={parentElement}
    >
      <div className={cx('ids-ellipsis__content', className)} ref={element}>
        {children}
      </div>
    </div>
  );
};

export default Ellipsis;

import * as React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';

import './ellipsis.css';

export interface EllipsisProps {
  // Add a className for the ellipsis content div
  className?: string;
  // Add a className for the ellipsis container div
  containerClassName?: string;
  // The content to display inside the ellipsis
  children?: React.ReactNode;
  // Add a title to the ellipsis
  title?: string;
  // Add a tooltip to the ellipsis with children as content (TODO)
  withTooltip?: boolean;
}

const Ellipsis: React.FunctionComponent<EllipsisProps> = (
  props: EllipsisProps
) => {
  const { children, className, containerClassName, title } = props;

  const parentElement = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);

  if (!children) {
    return null;
  }

  return (
    <div
      className={classNames('ids-ellipsis', containerClassName)}
      title={title}
      ref={parentElement}
    >
      <div
        className={classNames('ids-ellipsis__content', className)}
        ref={element}
      >
        {children}
      </div>
    </div>
  );
};

export default Ellipsis;

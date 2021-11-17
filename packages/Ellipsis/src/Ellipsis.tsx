import * as React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';

import './ellipsis.css';

export interface EllipsisProps {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  title?: string;
  withTooltip?: boolean;
}

const Ellipsis: React.FunctionComponent<EllipsisProps> = (
  props: EllipsisProps
) => {
  const { children } = props;

  const parentElement = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);

  if (!children) {
    return null;
  }

  return (
    <div
      className={classNames('ids-ellipsis', props.containerClassName)}
      title={props.title}
      ref={parentElement}
    >
      <div
        className={classNames('ids-ellipsis__content', props.className)}
        ref={element}
      >
        {children}
      </div>
    </div>
  );
};

export default Ellipsis;

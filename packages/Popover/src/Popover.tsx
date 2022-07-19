import * as React from 'react';

import './popover.scss';

export interface PopoverProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const Popover: React.FunctionComponent<PopoverProps> = (
  props: PopoverProps
) => {
  const { children } = props;
  return <div className="ids-popover">{children}</div>;
};

export default Popover;

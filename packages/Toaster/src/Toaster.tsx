import * as React from 'react';

import './toaster.scss';

export interface ToasterProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const Toaster: React.FunctionComponent<ToasterProps> = (
  props: ToasterProps
) => {
  const { children } = props;
  return <div className="ids-toaster">{children}</div>;
};

export default Toaster;

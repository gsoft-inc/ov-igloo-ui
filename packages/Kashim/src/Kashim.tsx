import * as React from 'react';

import './kashim.scss';

export interface KashimProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const Kashim: React.FunctionComponent<KashimProps> = (props: KashimProps) => {
  const { children } = props;
  return <div className="ids-kashim">{children}</div>;
};

export default Kashim;

import * as React from 'react';

import './kashim.css';

export interface KashimProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const Kashim: React.FunctionComponent<KashimProps> = (props: KashimProps) => {
  return <div className="ids-kashim">{props.children}</div>;
};

export default Kashim;

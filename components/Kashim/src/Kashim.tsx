import * as React from 'react';

import Star from '@igloo-ui/icons/dist/Star';

import './kashim.css';

export interface KashimProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const Kashim: React.FunctionComponent<KashimProps> = (props: KashimProps) => {
  const { children } = props;
  return (
    <div className="ids-kashim">
      <Star /> {children}
    </div>
  );
};

export default Kashim;

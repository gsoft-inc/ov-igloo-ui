import * as React from 'react';

import './card.css';

export interface CardProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  const { children } = props;
  return <div className="ids-card">{children}</div>;
};

export default Card;

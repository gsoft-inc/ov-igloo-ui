import * as React from 'react';
import classNames from 'classnames';

import './card.css';

export type Size = 'small' | 'medium' | 'large';
export interface CardProps extends React.ComponentProps<'div'> {
  // The content to display inside the card
  children: React.ReactNode;
  // Changes the size of card, giving more or less padding
  size?: Size;
  // Add a data-test tag for automated tests
  dataTest?: string;
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  const { children, className, dataTest, size = 'large', ...rest } = props;

  const classes = classNames('ids-card', className, {
    [`ids-card--${size}`]: size !== 'large',
  });

  return (
    <div className={classes} data-test={dataTest} {...rest}>
      {children}
    </div>
  );
};

export default Card;

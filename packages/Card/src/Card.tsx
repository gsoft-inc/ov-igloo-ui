import * as React from 'react';
import classNames from 'classnames';

import './card.scss';

export type Size = 'xsmall' | 'small' | 'medium' | 'large';
export type Ref = HTMLDivElement;

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
  /** The content to display inside the card */
  children: React.ReactNode;
  /**  Changes the size of card, giving more or less padding */
  size?: Size;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const Card: React.FunctionComponent<CardProps> = React.forwardRef<
  Ref,
  CardProps
>(({ children, className, dataTest, size = 'large', ...rest }, ref) => {
  const classes = classNames('ids-card', className, {
    [`ids-card--${size}`]: size !== 'large',
  });

  return (
    <div ref={ref} className={classes} data-test={dataTest} {...rest}>
      {children}
    </div>
  );
});

export default Card;

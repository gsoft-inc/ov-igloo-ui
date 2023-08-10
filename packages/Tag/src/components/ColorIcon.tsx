import * as React from 'react';

import cx from 'classnames';

import './color-icon.scss';

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

export interface ColorIconProps extends React.ComponentProps<'div'> {
  /** The content of the color icon */
  children?: React.ReactNode;
  /** Add a specific class to the color icon */
  className?: string;
  /** The background color of the icon */
  color?: string;
  /** Specifies the size of the team icon */
  size?: Size;
}

const ColorIcon: React.FunctionComponent<ColorIconProps> = ({
  children,
  className,
  color,
  size = 'small',
}) => {
  const classes = cx(
    'ids-team-color-icon',
    `ids-team-color-icon--${size}`,
    className,
  );

  return (
    <div className={classes} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default ColorIcon;

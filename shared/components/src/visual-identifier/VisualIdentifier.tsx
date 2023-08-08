import * as React from 'react';

import cx from 'classnames';
import Color from '@igloo-ui/color';
import Avatar from '@igloo-ui/avatar';

export type Size = 'small' | 'medium' | 'large';
export interface VisualIdentifierProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the visual identifier */
  className?: string;
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** Add an icon */
  icon?: React.ReactElement;
  /** Specify the size. For icon, the size is set directly on the icon
   * These sizes are common between Color and Avatar components */
  size?: Size;
  /** Specifies the url for the image to show */
  src?: string;
}

export const VisualIdentifier: React.FunctionComponent<
  VisualIdentifierProps
> = ({
  className,
  color,
  icon,
  size = 'small',
  src,
}: VisualIdentifierProps) => {
  const classes = cx(
    'ids-visual-identifier',
    {
      'ids-visual-identifier__icon': icon,
      'ids-visual-identifier__color': color && !icon,
      'ids-visual-identifier__avatar': src && !icon && !color,
    },
    className,
  );

  const renderIcon = (): JSX.Element | null => {
    if (icon) {
      return React.cloneElement(icon, {
        className: classes,
      });
    }
    if (color) {
      return <Color className={classes} color={color} size={size} />;
    }
    if (src) {
      return <Avatar className={classes} src={src} size={size} />;
    }
    return null;
  };

  return <>{renderIcon()}</>;
};

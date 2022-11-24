import * as React from 'react';

import cx from 'classnames';
import Color from '@igloo-ui/color';
import Avatar from '@igloo-ui/avatar';

export interface VisualIdentifierProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the visual identifier */
  className?: string;
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** Add an icon */
  icon?: React.ReactElement;
  /** Specifies the url for the image to show */
  src?: string;
}

export const VisualIdentifier: React.FunctionComponent<VisualIdentifierProps> =
  (props: VisualIdentifierProps) => {
    const { className, color, icon, src } = props;

    const classes = cx(
      'ids-visual-identifier',
      {
        'ids-visual-identifier__icon': icon,
        'ids-visual-identifier__color': color && !icon,
        'ids-visual-identifier__avatar': src && !icon && !color,
      },
      className
    );

    const renderIcon = (): JSX.Element | null => {
      if (icon) {
        return React.cloneElement(icon, {
          className: classes,
        });
      }
      if (color) {
        return <Color className={classes} color={color} size="small" />;
      }
      if (src) {
        return <Avatar className={classes} src={src} size="small" />;
      }
      return null;
    };

    return <>{renderIcon()}</>;
  };

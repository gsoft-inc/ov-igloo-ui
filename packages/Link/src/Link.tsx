import * as React from 'react';
import cx from 'classnames';

import './link.scss';

export type Appearance =
  | 'primary'
  | 'secondary'
  | 'premium'
  | 'ghost'
  | 'danger';
export type Size = 'small' | 'medium';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /** The content to display inside the link */
  children?: React.ReactNode;
  /** Set the size of the link */
  size?: Size;
  /** Set the theme for the link */
  appearance?: Appearance;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Icon React node to be displayed before the text value of the link */
  iconLeading?: React.ReactNode;
  /** Icon React node to be displayed after the text value of the link */
  iconTrailing?: React.ReactNode;
  /** True if we want only show the icon in mobile or tablet size (< medium) */
  showOnlyIconOnMobile?: boolean;
  /** A string representation of the Link location, created by concatenating the location's pathname, search, and hash properties */
  to: string;
  /** Unique id used in Intercom to link a components to a Product Tour step */
  intercomTarget?: string;
  /** The target attribute specifies a window or a frame where the linked document is loaded */
  target?: string;
  /** Add class names to the surrounding DOM container */
  className?: string;
  // /** True if the link is disabled */
  // disabled: boolean;
}

const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const {
    children,
    size = 'small',
    appearance = 'primary',
    dataTest,
    iconLeading,
    iconTrailing,
    showOnlyIconOnMobile,
    to,
    intercomTarget,
    target,
    className,
    ...rest
  } = props;

  const hasIconLeading = iconLeading !== undefined;
  const hasIconTrailing = iconTrailing !== undefined;
  const hasIcon = hasIconLeading || hasIconTrailing;

  const classes = cx(
    'ids-link',
    className,
    `ids-link--${appearance}`,
    `ids-link--${size}`,
    {
      'has-icon': hasIcon,
      'has-icon--leading': hasIconLeading,
      'has-icon--trailing': hasIconTrailing,
      'ids-link--mobile': showOnlyIconOnMobile,
    }
  );

  return (
    <a
      href={to}
      target={target}
      className={classes}
      data-test={dataTest}
      data-intercom-target={intercomTarget}
      {...rest}
    >
      {hasIconLeading && iconLeading}
      {children}
      {hasIconTrailing && iconTrailing}
    </a>
  );
};

export default Link;

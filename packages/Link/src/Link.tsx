import * as React from 'react';
import cx from 'classnames';

import { useLink } from '@react-aria/link';

import './link.scss';

export type Appearance = 'primary' | 'secondary' | 'danger';
export type Size = 'xsmall' | 'small' | 'medium';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /** The content to display inside the link */
  children?: React.ReactNode;
  /** Changes the size of link, giving more or less padding */
  size?: Size;
  /** Link appearance */
  appearance?: Appearance;
  /** Add a underline on link */
  underline?: boolean;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Icon to display to the left of link content */
  iconLeading?: React.ReactNode;
  /** Icon to display to the right of link content */
  iconTrailing?: React.ReactNode;
  /** Add a specific class to the link */
  className?: string;
  /** Add a data-intercom-target with unique id
   * to link a components to a Product Tour step
   * */
  intercomTarget?: string;
}

const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const {
    children,
    size = 'medium',
    appearance = 'primary',
    underline = false,
    dataTest,
    iconLeading,
    iconTrailing,
    className,
    intercomTarget,
    ...rest
  } = props;

  const ref = React.useRef<HTMLSpanElement | HTMLAnchorElement>(null);
  const { linkProps } = useLink(
    {
      elementType: typeof children === 'string' ? 'span' : 'a',
    },
    ref
  );

  const hasIconLeading = iconLeading !== undefined;
  const hasIconTrailing = iconTrailing !== undefined;
  const hasIcon = hasIconLeading || hasIconTrailing;

  const getWrappedElement = (
    children: string | React.ReactElement | React.ReactNode
  ): React.ReactElement => {
    if (typeof children === 'string') {
      return (
        <span>
          {hasIconLeading && iconLeading}
          {children}
          {hasIconTrailing && iconTrailing}
        </span>
      );
    }

    if (hasIcon && React.isValidElement(children)) {
      const { type, props } = children;
      const Component = type;
      return (
        <Component {...props}>
          {iconLeading} {props.children} {iconTrailing}
        </Component>
      );
    }

    if (React.isValidElement(children)) {
      return React.Children.only(children);
    }

    return <></>;
  };

  const classes = cx('ids-link', className, {
    'ids-link--underline': underline,
    'has-icon': hasIcon,
    'has-icon--leading': hasIconLeading,
    'has-icon--trailing': hasIconTrailing,
    [`ids-link--${size}`]: size !== 'medium',
    [`ids-link--${appearance}`]: appearance !== 'primary',
  });

  return React.cloneElement(getWrappedElement(children), {
    ...linkProps,
    className: classes,

    'data-test': dataTest,
    'data-intercom-target': intercomTarget,
    ref,
    ...rest,
  });
};

export default Link;

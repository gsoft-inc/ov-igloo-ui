import * as React from 'react';
import cx from 'classnames';

import { useLink } from '@react-aria/link';

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
  /** Sets the link in an active state */
  active?: boolean;
  /** Disabled the link, the user cannot click on them */
  disabled?: boolean;
  /** Changes the size of link, giving more or less padding */
  size?: Size;
  /** Link appearance */
  appearance?: Appearance;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Icon to display to the left of link content */
  iconLeading?: React.ReactNode;
  /** Icon to display to the right of link content */
  iconTrailing?: React.ReactNode;
  /** Display only the icon in mobile */
  showOnlyIconOnMobile?: boolean;
  /** Add a specific class to the link */
  className?: string;
  /** Callback when clicked
   *  not to be used with an anchor children
   * */
  onClick?: () => void;
  /** Add a data-intercom-target with unique id
   * to link a components to a Product Tour step
   * */
  intercomTarget?: string;
}

const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const {
    children,
    disabled = false,
    active = false,
    size = 'medium',
    appearance = 'primary',
    dataTest,
    iconLeading,
    iconTrailing,
    className,
    onClick,
    showOnlyIconOnMobile,
    intercomTarget,
    ...rest
  } = props;

  const ref = React.useRef<HTMLSpanElement | HTMLAnchorElement>(null);
  const { linkProps } = useLink(
    {
      onPress: onClick,
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
          {showOnlyIconOnMobile ? (
            <span className="ids-link__label">{children}</span>
          ) : (
            children
          )}
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
    'ids-link--active': active,
    'ids-link--disabled': disabled,
    'ids-link--small': size === 'small',
    'ids-link--mobile': showOnlyIconOnMobile,
    'has-icon': hasIcon,
    'has-icon--leading': hasIconLeading,
    'has-icon--trailing': hasIconTrailing,
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

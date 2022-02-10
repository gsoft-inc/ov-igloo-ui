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
  /** Changes the size of link, giving more or less padding */
  size?: Size;
  /** Link appearance */
  appearance?: Appearance;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a specific class to the button */
  className?: string;
}

const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const {
    children,
    size = 'medium',
    appearance = 'primary',
    dataTest,
    className,
    ...rest
  } = props;

  const getWrappedElement = (
    children: string | React.ReactElement | React.ReactNode
  ): React.ReactElement => {
    if (typeof children === 'string') {
      return <span>{children}</span>;
    }

    if (React.isValidElement(children)) {
      return React.Children.only(children);
    }

    return <></>;
  };

  const classes = cx('ids-link', className, {
    'ids-link--small': size === 'small',
    [`ids-link--${appearance}`]: appearance !== 'primary',
  });

  const ref = React.useRef();
  const { linkProps } = useLink(
    {
      ...rest,
      elementType: typeof children === 'string' ? 'span' : 'a',
    },
    ref
  );

  return React.cloneElement(getWrappedElement(children), {
    ...linkProps,
    className: classes,
    'data-test': dataTest,
    ref,
    ...rest,
  });

  // const classes = cx(
  //   'ids-link',
  //   className,
  //   `ids-link--${appearance}`,
  //   `ids-link--${size}`,
  //   {
  //     'has-icon': hasIcon,
  //     'has-icon--leading': hasIconLeading,
  //     'has-icon--trailing': hasIconTrailing,
  //     'ids-link--mobile': showOnlyIconOnMobile,
  //   }
  // );
  // return (
  //   <a
  //     href={to}
  //     target={target}
  //     className={classes}
  //     data-test={dataTest}
  //     data-intercom-target={intercomTarget}
  //     {...rest}
  //   >
  //     {hasIconLeading && iconLeading}
  //     {children}
  //     {hasIconTrailing && iconTrailing}
  //   </a>
  // );
};

export default Link;

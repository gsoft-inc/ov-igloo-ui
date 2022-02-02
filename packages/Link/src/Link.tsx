import * as React from 'react';
import cx from 'classnames';

import './link.scss';
import { ContextualLinkProps } from './base/ContextualLink';

export type Theme = 'primary' | 'secondary' | 'warning';
export type Size = 'small' | 'medium';

export interface LinkProps extends ContextualLinkProps {
  /** Set the theme for the link */
  theme?: Theme;
  /** Set the size of the link */
  size?: Size;
}

const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const {
    children,
    theme = 'primary',
    size = 'small',
    to,
    queryParamsToAppend,
    queryParamsToKeep,
    onClick,
    intercomTarget,
    target,
    iconLeading,
    iconTrailing,
    showOnlyIconOnMobile,
    className,
    disabled,
    ...rest
  } = props;

  const hasIntercomTarget = intercomTarget !== undefined;
  const hasTarget = target !== undefined;
  const hasIconLeading = iconLeading !== undefined;
  const hasIconTrailing = iconTrailing !== undefined;

  const action = (): void => {
    if (onClick) {
      onClick();
    }

    // Todo move to address logic
  };

  const classes = cx(
    'ids-link',
    className,
    `ids-link--${theme}`,
    `ids-link--${size}`
  );

  return (
    <a className={classes} rel="noopener noreferrer" onClick={action} {...rest}>
      {hasIconLeading && iconLeading}
      {children}
      {hasIconTrailing && iconTrailing}
    </a>
  );
};

export default Link;

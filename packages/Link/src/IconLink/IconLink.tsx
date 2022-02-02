import * as React from 'react';
import cx from 'classnames';

import './iconLink.scss';
import { ContextualLinkProps } from '../base/ContextualLink';
import { LinkProps } from '../Link';

export type IconLinkType = 'link' | 'button';

export interface IconLinkProps extends ContextualLinkProps {
  /** Icon React node to represent the value of the button */
  icon: React.ReactNode;
  /** Tooltip to describe the action of the button */
  tooltip?: React.ReactNode;
  /** Once generated, if it must generate as <button> or as <a> */
  as?: IconLinkType;
}

const IconLink: React.FunctionComponent<IconLinkProps> = (
  props: IconLinkProps
) => {
  const {
    icon,
    tooltip,
    as = 'link',
    children,
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

  const hasTooltip = tooltip !== undefined;
  const hasButton = as === 'button';

  const classes = cx('ids-link-icon', className);

  if (hasButton) {
  } else {
  }
};

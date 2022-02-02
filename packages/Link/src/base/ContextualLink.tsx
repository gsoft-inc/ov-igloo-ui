import * as React from 'react';
import cx from 'classnames';

export interface ContextualLinkProps
  extends React.ComponentPropsWithoutRef<'a'> {
  /** The content to display inside the link */
  children?: React.ReactNode;
  /** A string representation of the Link location, created by concatenating the location's pathname, search, and hash properties */
  to: string;
  /** Add a query params to the location, ex: `queryParamsToAppend={{ metric: "M-1" }}` will give `?metric=M-1` */
  queryParamsToAppend?: object;
  /** Keep a current query params in the link redirection, ex: `queryParamsToKeep={["team"]}` */
  queryParamsToKeep?: string[];
  /** Callback to execute on click */
  onClick?: () => void;
  /** Unique id used in Intercom to link a components to a Product Tour step */
  intercomTarget?: string;
  // /** The tabindex attribute specifies the tab order of the component */
  // tabIndex?: string,
  /** The target attribute specifies a window or a frame where the linked document is loaded */
  target?: string;
  /** Icon React node to be displayed before the text value of the link */
  iconLeading?: React.ReactNode;
  /** Icon React node to be displayed after the text value of the link */
  iconTrailing?: React.ReactNode;
  /** True if we want only show the icon in mobile or tablet size (< medium) */
  showOnlyIconOnMobile?: boolean;
  /** Add class names to the surrounding DOM container */
  className?: string;
  /** True if the link is disabled */
  disabled: boolean;
}

import * as React from 'react';

import cx from 'classnames';

import IconButton from '@igloo-ui/icon-button';
import Ellipsis from '@igloo-ui/ellipsis';
import Close from '@igloo-ui/icons/dist/Close';

import { VisualIdentifier } from '../../../shared/components';

import './tag.scss';

export type Size = 'medium' | 'small' | 'xsmall' | 'micro';

export type Appearance =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'secondary'
  | 'grey';

export interface TagProps extends React.ComponentProps<'div'> {
  /** The different appearances of the Tag */
  appearance?: Appearance;
  /** The content of the Tag */
  children: React.ReactNode;
  /** Add a specific class to the Tag */
  className?: string;
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Render the close button */
  dismissible?: boolean;
  /** The icon used at the beginning of the Tag */
  icon?: React.ReactElement;
  /** The id of the tag to use when removing */
  id?: string;
  /** Add an error style to the tag */
  hasError?: boolean;
  /** Callback to execute on remove tag */
  onRemove?: (id: string) => void;
  /** Render rounded corners */
  rounded?: boolean;
  /** The different sizes of the Tag */
  size?: Size;
  /** Specifies the image url to show */
  src?: string;
}

const Tag: React.FunctionComponent<TagProps> = ({
  children,
  className,
  color,
  dataTest,
  dismissible = false,
  appearance = 'default',
  icon,
  id,
  hasError,
  onRemove,
  rounded = false,
  size = 'medium',
  src,
}) => {
  const [show, setShow] = React.useState(true);

  const renderDismissButton = (): JSX.Element => {
    const action = (): void => {
      if (onRemove && id) {
        onRemove(id);
      }

      setShow(false);
    };

    return (
      <IconButton
        className="ids-tag__dismiss-btn"
        type="button"
        onClick={action}
        appearance="ghost"
        size="xsmall"
        aria-label="close"
        icon={<Close size="small" className="ids-tag__close" />}
      />
    );
  };

  const classes = cx(
    'ids-tag',
    `ids-tag--${appearance}`,
    `ids-tag--${size}`,
    {
      'ids-tag--rounded': rounded,
      'ids-tag--has-error': hasError,
    },
    className
  );

  if (show) {
    return (
      <div className={classes} data-test={dataTest}>
        <VisualIdentifier
          className="ids-tag__visual"
          color={color}
          src={src}
          icon={icon}
        />

        <div className="ids-tag__content">
          <Ellipsis>{children}</Ellipsis>
        </div>

        {dismissible && renderDismissButton()}
      </div>
    );
  }

  return null;
};

export default Tag;

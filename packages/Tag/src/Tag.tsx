import * as React from 'react';

import cx from 'classnames';

import IconButton from '@igloo-ui/icon-button';
import Ellipsis from '@igloo-ui/ellipsis';
import Close from '@igloo-ui/icons/dist/Close';
import ColorIcon from './components/ColorIcon';
import UserImage from './components/UserImage';

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
  /** Add an error style to the tag */
  hasError?: boolean;
  /** Event when the tag is closed */
  onClose?: () => void;
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
  hasError,
  onClose,
  rounded = false,
  size = 'medium',
  src,
}) => {
  const [show, setShow] = React.useState(true);

  const renderIcon = (): JSX.Element | null => {
    if (icon) {
      return React.cloneElement(icon, {
        className: 'ids-tag__visual ids-tag__icon',
      });
    }
    if (color) {
      // When 'color' is blank, its value is calculated from 'id'
      return (
        <ColorIcon
          className="ids-tag__visual ids-tag__color-icon"
          color={color}
          size="small"
        />
      );
    }
    if (src) {
      return (
        <UserImage
          className="ids-tag__visual ids-tag__image-icon"
          src={src}
          size="small"
        />
      );
    }
    return null;
  };

  const renderDismissButton = (): JSX.Element => {
    const action = (): void => {
      if (onClose) {
        onClose();
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
        {renderIcon()}

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

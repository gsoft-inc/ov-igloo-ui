import * as React from 'react';

import IconButton from '@igloo-ui/icon-button';
import Close from '@igloo-ui/icons/dist/Close';
import cx from 'classnames';

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
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The content of the Tag */
  children: React.ReactNode;
  /** Add a specific class to the Tag */
  className?: string;
  /** Render the close button */
  dismissible?: boolean;
  /** The icon used at the beginning of the Tag */
  icon?: React.ReactNode;
  /** Event when the tag is closed */
  onClose?: () => void;
  /** Render rounded corners */
  rounded?: boolean;
  /** The different sizes of the Tag */
  size?: Size;
}

const Tag: React.FunctionComponent<TagProps> = ({
  dataTest,
  children,
  className,
  dismissible = false,
  appearance = 'default',
  icon,
  onClose,
  rounded = false,
  size = 'medium',
}) => {
  const [show, setShow] = React.useState(true);

  const renderDismissButton = (
    setShow: (show: boolean) => void,
    onDismissClick?: () => void
  ): JSX.Element => {
    const action = (): void => {
      if (onDismissClick) {
        onDismissClick();
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
    },
    className
  );

  if (show) {
    return (
      <div className={classes} data-test={dataTest}>
        {icon && <div className="ids-tag__icon">{icon}</div>}

        <div className="ids-tag__content">{children}</div>

        {dismissible && renderDismissButton(setShow, onClose)}
      </div>
    );
  }

  return null;
};

export default Tag;

import * as React from 'react';
import cx from 'classnames';
import Tooltip, { Position } from '@igloo-ui/tooltip';

import './popover.scss';

export interface PopoverProps extends React.ComponentProps<'div'> {
  /** The target button, text, svg etc.. of the Popover. */
  children: React.ReactNode;
  /** The content to display inside the Popover */
  content: React.ReactNode;
  /** The position the Popover is on. */
  position?: Position;
  /** The max with of the Popover */
  maxWidth?: number;
  /** When True, manually show the Popover. */
  active?: boolean;

  title?: string;

  action?: React.ReactNode;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
}

const Popover: React.FunctionComponent<PopoverProps> = (
  props: PopoverProps
) => {
  const {
    children,
    content,
    position = 'auto',
    maxWidth = 200,
    active,
    className,
    title,
    action,
    dataTest,
    ...rest
  } = props;

  const classes = cx('ids-popover', className);

  const popoverContent = (
    <>
      {title && <div className="ids-popover__title">{title}</div>}
      <div className="ids-popover__content">{content}</div>
      {action && <div className="ids-popover__action">{action}</div>}
    </>
  );

  return (
    <Tooltip
      content={popoverContent}
      position={position}
      maxWidth={maxWidth}
      appearance="light"
      className="ids-popover__container"
      tooltipClassName={classes}
      active={active}
      dataTest={dataTest}
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export default Popover;

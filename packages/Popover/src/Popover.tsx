import * as React from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';
import { usePopper } from 'react-popper';

import IconButton from '@igloo-ui/icon-button';
import Close from '@igloo-ui/icons/dist/Close';

import './popover.scss';

export type Position = 'top' | 'right' | 'bottom' | 'left' | 'auto';

export interface PopoverProps extends React.ComponentProps<'div'> {
  /** The target button, text, svg etc.. of the Popover. */
  children: React.ReactNode;
  /** Add a specific class to the Popover */
  popoverClassName?: string;
  /** The content to display inside the Popover */
  content: React.ReactNode;
  /** The position the Popover is on. */
  position?: Position;
  /** The max with of the Popover */
  maxWidth?: number;
  /** When True, manually show the Popover. */
  active?: boolean;
  /** The content for the title of the Popover */
  title?: string;
  /** The content for the call to action of the Popover */
  action?: React.ReactNode;
  /** Render the close button */
  isClosable?: boolean;
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
    maxWidth = 320,
    active = false,
    className,
    popoverClassName,
    title,
    action,
    isClosable = false,
    dataTest,
    ...rest
  } = props;

  const classes = cx('ids-popover__container', className);

  const [show, setSow] = React.useState<boolean>(active);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLElement | null>(null);
  const [popoverElement, setPopoverElement] =
    React.useState<HTMLElement | null>(null);

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popoverElement,
    {
      placement: position,
      strategy: 'fixed',
      modifiers: [
        { name: 'offset', options: { offset: [0, 10] } },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top', 'bottom', 'left', 'right'],
          },
        },
      ],
    }
  );

  const onClick = (): void => {
    setSow(!show);
    if (update !== null) {
      update();
    }
  };

  const onClose = (): void => {
    setSow(false);
  };

  const popoverClasses = cx('ids-popover', popoverClassName);

  const popoverStyle = {
    ...styles.popper,
    maxWidth: `${maxWidth}px`,
  };

  const popoverContent = (
    <>
      {title && <div className="ids-popover__title">{title}</div>}
      <div className="ids-popover__content">{content}</div>
      {action && <div className="ids-popover__action">{action}</div>}
    </>
  );

  const popover = ReactDom.createPortal(
    <div
      ref={setPopoverElement}
      className={popoverClasses}
      style={popoverStyle}
      {...attributes.popper}
      data-show={show}
      data-test={dataTest}
      {...rest}
    >
      {isClosable && (
        <IconButton
          size="xsmall"
          className="ids-popover__close"
          onClick={onClose}
          appearance="ghost"
          aria-label="close"
          icon={<Close size="small" />}
        />
      )}

      {popoverContent}
    </div>,
    document.body
  );

  return (
    <>
      <span
        ref={setReferenceElement}
        className={classes}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        {children}
      </span>
      {!show ? null : popover}
    </>
  );
};

export default Popover;

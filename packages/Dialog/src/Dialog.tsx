import * as React from 'react';

import Button from '@igloo-ui/button';
import Modal from '@igloo-ui/modal';
import cx from 'classnames';

import './dialog.scss';

export interface DialogProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the dialog */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The text for the dissmiss button */
  dismissText?: string;
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Handler that is called when the overlay should close. */
  onDismiss: () => void;
  /** Handler that is called when the dialog
   * is closed and the animation is complete */
  onAfterDismiss?: () => void;
  /** Handler that is called when the validate button is clicked. */
  onValidate: () => void;
  /** The text for the sub title of the modal */
  subTitle?: string;
  /** The text for the title of the modal */
  title: string;
  /** The text for the validate button */
  validateText: string;
}

const Dialog: React.FunctionComponent<DialogProps> = (props: DialogProps) => {
  const {
    className,
    dataTest,
    dismissText,
    isOpen,
    onDismiss,
    onAfterDismiss,
    onValidate,
    subTitle,
    title,
    validateText,
  } = props;

  const classes = cx('ids-dialog', className);

  return (
    <Modal
      className={classes}
      dataTest={dataTest}
      isClosable
      isDismissable={false}
      isOpen={isOpen}
      size="small"
      onClose={onDismiss}
      onAfterClose={onAfterDismiss}
      title={title}
    >
      {subTitle && <div className="ids-dialog__sub-title">{subTitle}</div>}
      <div className="ids-dialog__buttons">
        {dismissText && onDismiss && (
          <Button
            appearance="secondary"
            onClick={onDismiss}
            className="ids-dialog__dismiss-btn"
          >
            {dismissText}
          </Button>
        )}
        <Button
          appearance="primary"
          onClick={onValidate}
          className="ids-dialog__validate-btn"
        >
          {validateText}
        </Button>
      </div>
    </Modal>
  );
};

export default Dialog;

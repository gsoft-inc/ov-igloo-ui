import * as React from 'react';

import cx from 'classnames';
import HelperText from '@igloo-ui/helper-text';

import './form-group.scss';

export type MessageType = 'error' | 'info';

export interface FormGroupProps extends React.ComponentProps<'div'> {
  /** The form element that needs an error and/or a label. */
  children: React.ReactNode;
  /** Add a className for the form group div */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a message below the form element */
  message?: string;
  /** Specifies the type of message to display */
  messageType?: MessageType;
  /** Add the htmlFor attribute to the label of the form element */
  htmlFor?: string;
  /** Add label text above the form element */
  label?: string;
  /** Decides when to show the message */
  showMessage?: boolean;
}

const FormGroup: React.FunctionComponent<FormGroupProps> = ({
  children,
  className,
  dataTest,
  message,
  messageType = 'error',
  htmlFor,
  label,
  showMessage,
}: FormGroupProps) => {
  const classes = cx('ids-form-group', className);

  return (
    <div className={classes} data-test={dataTest}>
      {label && (
        <label htmlFor={htmlFor} className="ids-form-group__label">
          {label}
        </label>
      )}
      {children}
      {message && showMessage && (
        <HelperText
          error={messageType === 'error'}
          className="ids-form-group__message"
        >
          {message}
        </HelperText>
      )}
    </div>
  );
};

export default FormGroup;

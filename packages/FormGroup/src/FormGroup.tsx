import * as React from 'react';

import cx from 'classnames';
import Alert from '@igloo-ui/icons/dist/Alert';

import './form-group.scss';

export interface FormGroupProps extends React.ComponentProps<'div'> {
  /** The form element that needs an error and/or a label. */
  children: React.ReactNode;
  /** Add a className for the form group div */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add an error message below the form element */
  errorMsg?: string;
  /** Add the htmlFor attribute to the label of the form element */
  htmlFor?: string;
  /** Add label text above the form element */
  label?: string;
  /** Decides when to show the error */
  showError?: boolean;
}

const FormGroup: React.FunctionComponent<FormGroupProps> = (
  props: FormGroupProps
) => {
  const { children, className, dataTest, errorMsg, htmlFor, label, showError } =
    props;

  const classes = cx('ids-form-group', className);

  return (
    <div className={classes} data-test={dataTest}>
      {label && (
        <label htmlFor={htmlFor} className="ids-form-group__label">
          {label}
        </label>
      )}
      {children}
      {errorMsg && showError && (
        <div className="ids-form-group__error">
          <Alert size="small" />
          {errorMsg}
        </div>
      )}
    </div>
  );
};

export default FormGroup;

import * as React from 'react';
import cx from 'classnames';

import './checkbox.scss';

export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  /** The content to display inside the label */
  children?: React.ReactNode;
  /** Add a specific class to the checkbox */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Indicates the ID of the element that is controlled by the checkbox */
  htmlFor: string;
  /** Modifies true/false value of the native checkbox */
  checked?: boolean;
  /** Modifies the native disabled state of the native checkbox */
  disabled?: boolean;
  /** Applies an indeterminate state to the checkbox */
  indeterminate?: boolean;
  /** Function called when the value changes. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = React.forwardRef(
  (props: CheckboxProps, ref: React.Ref<HTMLInputElement | null>) => {
    const {
      children,
      className,
      dataTest,
      htmlFor,
      onChange,
      checked = false,
      disabled = false,
      indeterminate = false,
      ...rest
    } = props;

    const [status, setStatus] = React.useState(checked);

    const checkRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => checkRef.current);

    React.useEffect(() => {
      setStatus(checked);
    }, [checked]);

    React.useEffect(() => {
      if (checkRef.current && indeterminate) {
        checkRef.current.indeterminate = true;
      }
    }, [indeterminate]);

    const handleOnChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      if (onChange) {
        onChange(event);
        return;
      }

      event.stopPropagation();
      setStatus(!status);
    };

    return (
      <span className={cx('ids-form-control', className)}>
        <input
          ref={checkRef}
          id={htmlFor}
          className="ids-checkbox"
          data-test={dataTest}
          checked={status}
          disabled={disabled}
          type="checkbox"
          onChange={handleOnChange}
          {...rest}
        />
        {children && (
          <label className="ids-checkbox__label" htmlFor={htmlFor}>
            {children}
          </label>
        )}
      </span>
    );
  }
);
export default Checkbox;

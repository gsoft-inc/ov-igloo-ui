import * as React from 'react';
import cx from 'classnames';

import Checkmark from '@igloo-ui/icons/dist/Checkmark';

import './checkbox.scss';

export type CheckboxAppearance = 'default' | 'completion';

export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  /** The appearance of the checkbox */
  appearance?: CheckboxAppearance;
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
  (
    {
      appearance = 'default',
      children,
      className,
      dataTest,
      htmlFor,
      onChange,
      checked = false,
      disabled = false,
      indeterminate = false,
      ...rest
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
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

    const showLabel = appearance === 'completion' || children;

    return (
      <span
        className={cx(
          'ids-form-control',
          className,
          `ids-form-control--${appearance}`
        )}
      >
        <input
          ref={checkRef}
          id={htmlFor}
          className={cx('ids-checkbox', `ids-checkbox--${appearance}`)}
          data-test={dataTest}
          checked={status}
          disabled={disabled}
          type="checkbox"
          onChange={handleOnChange}
          {...rest}
        />
        {showLabel && (
          <label
            className={cx(
              'ids-checkbox__label',
              `ids-checkbox__label--${appearance}`
            )}
            htmlFor={htmlFor}
          >
            {appearance === 'completion' && (
              <span className="ids-checkbox__box">
                <Checkmark size="small" className="ids-checkbox__check" />
              </span>
            )}
            {children && (
              <span className="ids-checkbox__label-text">{children}</span>
            )}
          </label>
        )}
      </span>
    );
  }
);
export default Checkbox;

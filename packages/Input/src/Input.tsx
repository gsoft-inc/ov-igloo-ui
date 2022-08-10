import * as React from 'react';
import cx from 'classnames';

import './input.scss';

const KeyCodes = {
  Comma: 44,
  Minus: 45,
  Nine: 57,
  Period: 46,
  Plus: 43,
  Zero: 48,
};

export type InputType = 'email' | 'text' | 'password' | 'number';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  /** Add class names to the surrounding DOM container. */
  className?: string;
  /** Form.ValidatedField state. True if has error. */
  error?: boolean;
  /**  Specifies the type to display */
  type?: InputType;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** Specifies the value inside the input. */
  value?: string | number;
  /** True if you need the input to be focus on page load. */
  autoFocus?: boolean;
  /** True if you need the input to be readonly. */
  disabled?: boolean;
  /** Function called when the value changes. */
  onChange?: (e: any) => void;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Use a prefix for add an icon before the input text */
  prefixIcon?: React.ReactNode;
  /** Use a suffix for add an icon after the input text */
  suffixIcon?: React.ReactNode;
}

const Input: React.FunctionComponent<InputProps> = React.forwardRef(
  (props: InputProps, ref: React.Ref<any>) => {
    const {
      className,
      error,
      type = 'text',
      isCompact,
      value,
      autoFocus,
      disabled,
      onChange,
      dataTest,
      prefixIcon,
      suffixIcon,
      ...rest
    } = props;

    const classes = cx('ids-input', className, {
      'ids-input--compact': isCompact,
      'ids-input--error': error,
      'ids-input--disabled': disabled,
      'ids-input--prefixIcon': prefixIcon,
      'ids-input--suffixIcon': suffixIcon,
    });

    React.useEffect(() => {
      const refObject = ref as React.RefObject<HTMLInputElement>;
      if (autoFocus && refObject && refObject.current) {
        refObject.current.focus();
      }
    }, [ref, autoFocus]);

    const handleOnChange = (e: any) => {
      if (onChange) {
        onChange(e);

        return;
      }

      // Firefox doesn't support type="number", so here's a workaround
      // Input type="number" on Chrome supports "+", "-", "," et "."
      if (type === 'number') {
        const { charCode } = e.charCode;

        if (
          charCode !== KeyCodes.Comma &&
          charCode !== KeyCodes.Period &&
          charCode !== KeyCodes.Minus &&
          charCode !== KeyCodes.Plus &&
          (charCode < KeyCodes.Zero || charCode > KeyCodes.Nine)
        ) {
          e.preventDefault();
        } else if (
          (charCode === KeyCodes.Comma || charCode === KeyCodes.Period) &&
          value &&
          typeof value === 'string' &&
          (value.indexOf(',') !== -1 || value.indexOf('.') !== -1)
        ) {
          e.preventDefault();
        } else if (
          (charCode === KeyCodes.Minus || charCode === KeyCodes.Plus) &&
          value &&
          typeof value === 'string' &&
          (value.indexOf('-') !== -1 || value.indexOf('+') !== -1)
        ) {
          e.preventDefault();
        }
      }
    };

    const inputRender = (
      <input
        ref={ref}
        className={classes}
        type={type}
        value={value}
        readOnly={disabled}
        onChange={handleOnChange}
        data-test={dataTest}
        {...rest}
      />
    );

    const addPrefixIcon = (
      <span
        className={cx('ids-input__asset--prefix', {
          'ids-input__asset--prefix--compact': isCompact,
        })}
      >
        {prefixIcon}
      </span>
    );

    const addSuffixIcon = (
      <span
        className={cx('ids-input__asset--suffix', {
          'ids-input__asset--suffix--compact': isCompact,
        })}
      >
        {suffixIcon}
      </span>
    );

    return prefixIcon || suffixIcon ? (
      <div className="ids-input__wrapper">
        {prefixIcon && addPrefixIcon}
        {inputRender}
        {suffixIcon && addSuffixIcon}
      </div>
    ) : (
      inputRender
    );
  }
);

export default Input;

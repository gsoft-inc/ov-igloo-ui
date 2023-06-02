import * as React from 'react';
import cx from 'classnames';

import useCharLength from './hooks/useCharLength';
import useTruncateValue from './hooks/useTruncateValue';

import './input.scss';

const KeyCodes = {
  Comma: ',',
  Minus: '-',
  Nine: '9',
  Period: '.',
  Plus: '+',
  Zero: '0',
  Backspace: 'Backspace',
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
  /** The maximum number of characters allowed. Required if
   *  "showCharactersIndicator" is enabled.
   * Should not be used for type 'number' inputs */
  maxLength?: number;
  /** True to display the number of remaining allowed characters
   *  on the right of the input. Requires a valid
   *  value in the "maxLength" prop. */
  showCharactersIndicator?: boolean;
}

const Input: React.FunctionComponent<InputProps> = React.forwardRef(
  (
    {
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
      maxLength,
      showCharactersIndicator,
      ...rest
    }: InputProps,
    ref: React.Ref<any>
  ) => {
    const [currentValue, setCurrentValue] = React.useState(
      value?.toString() ?? ''
    );
    const inputMaxLength = maxLength ?? 0;
    const charLength = useCharLength(currentValue, inputMaxLength);
    const displayCharIndicator = showCharactersIndicator && inputMaxLength > 0;

    const classes = cx('ids-input', className, {
      'ids-input--compact': isCompact,
      'ids-input--error': error,
      'ids-input--disabled': disabled,
      'ids-input--prefixIcon': prefixIcon,
      'ids-input--suffixIcon': suffixIcon,
      'ids-input--has-char-indicator': displayCharIndicator,
    });

    const truncateValue = useTruncateValue();

    React.useEffect(() => {
      const refObject = ref as React.RefObject<HTMLInputElement>;
      if (autoFocus && refObject && refObject.current) {
        refObject.current.focus();
      }
    }, [ref, autoFocus]);

    React.useEffect(() => {
      const newValue = truncateValue(value?.toString() ?? '', maxLength);
      setCurrentValue(newValue);
    }, [value, maxLength, truncateValue]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const newValue = truncateValue(e.target.value, maxLength);
      setCurrentValue(newValue);
      if (onChange) {
        onChange(e);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      // Firefox doesn't support type="number", so here's a workaround
      // Input type="number" on Chrome supports "+", "-", "," et "."
      if (type === 'number') {
        const charCode = e.key;

        if (
          charCode !== KeyCodes.Comma &&
          charCode !== KeyCodes.Period &&
          charCode !== KeyCodes.Minus &&
          charCode !== KeyCodes.Plus &&
          (charCode < KeyCodes.Zero || charCode > KeyCodes.Nine) &&
          charCode !== KeyCodes.Backspace
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
        value={currentValue}
        readOnly={disabled}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        data-test={dataTest}
        maxLength={maxLength}
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

    return prefixIcon || suffixIcon || displayCharIndicator ? (
      <div className="ids-input__wrapper">
        {prefixIcon && addPrefixIcon}
        {inputRender}
        {suffixIcon || displayCharIndicator ? (
          <div
            className={cx('ids-input__asset-wrapper', {
              'ids-input__asset-wrapper--has-char-indicator':
                displayCharIndicator,
            })}
          >
            {suffixIcon && addSuffixIcon}
            {displayCharIndicator && (
              <div className="ids-input__char-indicator">
                {inputMaxLength - charLength}
              </div>
            )}
          </div>
        ) : null}
      </div>
    ) : (
      inputRender
    );
  }
);

export default Input;

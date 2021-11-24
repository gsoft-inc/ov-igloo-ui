import React, { useEffect } from 'react';
import classNames from 'classnames';

import './input.css';

const KeyCodes = {
  Comma: 44,
  Minus: 45,
  Nine: 57,
  Period: 46,
  Plus: 43,
  Zero: 48,
};

export type InputSize = 'Small' | 'Medium';

export type InputType = 'email' | 'text' | 'password' | 'number';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  // Add class names to the surrounding DOM container.
  className?: string;
  // Form.ValidatedField state. "Error" if has error, otherwise null.
  state?: string;
  // Specifies the type to display
  type?: InputType;
  // Input size.
  inputSize?: InputSize;
  // Specifies the value inside the input.
  value?: any;
  // True if you need the input to be focus on page load.
  autoFocus?: boolean;
  // True if you need the input to be readonly.
  readOnly?: boolean;
  // Function called when a key is pressed.
  onKeyPress?: (e: any) => void;
}

// const Input: React.FunctionComponent<InputProps> = (props: InputProps, ref: React.RefObject<HTMLInputElement>) => {
// const Input: React.FunctionComponent<InputProps> = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref: React.ForwardedRef<any>) => {
const Input: React.FunctionComponent<InputProps> = React.forwardRef(
  (props: InputProps, ref: React.Ref<any>) => {
    const {
      className,
      state,
      type,
      inputSize,
      value,
      autoFocus,
      readOnly,
      onKeyPress,
      ...rest
    } = props;

    const classes = classNames(
      'ids-input',
      className,
      `ids-input--${inputSize && inputSize.toLowerCase()}`,
      {
        [(state || '').toLowerCase()]: !!state,
        'ids-input--readonly': readOnly,
      }
    );

    // useEffect(() => {
    //   if (autoFocus && ref && ref.current) {
    //       ref.current.focus();
    //   }
    // }, []);

    const handleOnKeyDown = (e: any) => {
      if (onKeyPress) {
        onKeyPress(e);

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
          (value.indexOf(',') !== -1 || value.indexOf('.') !== -1)
        ) {
          e.preventDefault();
        } else if (
          (charCode === KeyCodes.Minus || charCode === KeyCodes.Plus) &&
          value &&
          (value.indexOf('-') !== -1 || value.indexOf('+') !== -1)
        ) {
          e.preventDefault();
        }
      }
    };

    return (
      <input
        ref={ref}
        className={classes}
        type={type}
        value={value || ''}
        readOnly={readOnly}
        onKeyPress={handleOnKeyDown}
        {...rest}
      />
    );
  }
);

Input.defaultProps = {
  type: 'text',
  inputSize: 'Medium',
};

export default Input;

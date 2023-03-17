import * as React from 'react';
import cx from 'classnames';

import './toggle.scss';

export interface ToggleProps extends React.ComponentProps<'input'> {
  /** The content to display inside the label */
  children?: React.ReactNode;
  /** Add a specific class to the toggle */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Indicates the ID of the element that is controlled by the toggle */
  htmlFor: string;
  /** Modifies true/false value of the toggle */
  checked?: boolean;
  /** The content to display to help users */
  helperText?: string;
  /** Function called when the value changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FunctionComponent<ToggleProps> = ({
  children,
  className,
  checked,
  dataTest,
  htmlFor,
  helperText,
  onChange,
  ...rest
}: ToggleProps) => {
  const handleStopPropagation = (
    event: React.MouseEvent<HTMLInputElement>
  ): void => {
    event.stopPropagation();
  };

  const classes = cx('ids-toggle', className, {
    'ids-toggle--helperText': helperText,
  });

  return (
    <div
      className={classes}
      onClick={handleStopPropagation}
      role="switch"
      aria-checked={checked}
      tabIndex={-1}
    >
      <input
        className="ids-toggle__input"
        id={htmlFor}
        type="checkbox"
        data-test={dataTest}
        onChange={onChange}
        checked={checked}
        {...rest}
      />
      <label className="ids-toggle__label" htmlFor={htmlFor}>
        {children && (
          <span className="ids-toggle__text">
            {children}
            {helperText && (
              <span className="ids-toggle__description">{helperText}</span>
            )}
          </span>
        )}
      </label>
    </div>
  );
};

export default Toggle;

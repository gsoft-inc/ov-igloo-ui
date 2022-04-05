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
  /** Function called when the value changes. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FunctionComponent<ToggleProps> = (props: ToggleProps) => {
  const { children, className, dataTest, htmlFor, ...rest } = props;

  const classes = cx('ids-toggle', className);
  return (
    <div className={classes}>
      <input
        className="ids-toggle__input"
        id={htmlFor}
        type="checkbox"
        data-test={dataTest}
        {...rest}
      />
      <label className="ids-toggle__label" htmlFor={htmlFor}>
        {children && <span className="ids-toggle__text">{children}</span>}
      </label>
    </div>
  );
};

export default Toggle;

import React from 'react';
import cx from 'classnames';

export interface SelectValueProps extends React.ComponentPropsWithRef<'div'> {
  /** Add a specific class to the button. */
  className?: string;
  /** If the option is disables */
  disabled?: boolean;
  /** Icon to display to the right of the option */
  icon?: React.ReactNode;
  /** Index of the value */
  index: number;
  /** Option title */
  label: string;
  /** Callback when content is clicked. */
  onClick?: () => void;
}

const SelectValue: React.FunctionComponent<SelectValueProps> = React.forwardRef(
  (props: SelectValueProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      className,
      disabled = false,
      icon,
      index,
      label,
      onClick,
      ...rest
    } = props;

    const selectValueClasses = cx('select-value', className, {
      'select-value--disabled': disabled,
    });

    return (
      <div
        ref={ref}
        className={selectValueClasses}
        onClick={onClick}
        role="button"
        tabIndex={index}
        {...rest}
      >
        {icon && <div className="select-value__icon">{icon}</div>}
        <div className="select-value__title">{label}</div>
      </div>
    );
  }
);

export default SelectValue;

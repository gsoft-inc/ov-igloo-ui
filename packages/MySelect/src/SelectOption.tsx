import React from 'react';
import cx from 'classnames';

import './select-option.scss';

export interface SelectOptionProps extends React.ComponentPropsWithRef<'div'> {
  /** Add a specific class to the button. */
  className?: string;
  /** If the option is disables */
  disabled?: boolean;
  /** Icon to display to the right of the option */
  icon?: React.ReactNode;
  /** Index of the value */
  index: number;
  /** Option title */
  label: React.ReactNode;
  /** Callback when content is clicked. */
  onClick: () => void;
  /** True if the SelectOption is the one selected */
  selected?: boolean;
}

const SelectOption: React.FunctionComponent<SelectOptionProps> =
  React.forwardRef(
    (props: SelectOptionProps, ref: React.Ref<HTMLDivElement>) => {
      const {
        className,
        disabled = false,
        icon,
        index,
        label,
        onClick,
        selected = false,
        ...rest
      } = props;

      const selectOptionClasses = cx('ids-select-option', className, {
        'ids-select-option--selected': selected,
        'ids-select-option--disabled': disabled,
      });

      const onSelectValueClicked = (): void => {
        if (!disabled && onClick) {
          onClick();
        }
      };

      return (
        <div
          ref={ref}
          className={selectOptionClasses}
          onClick={onSelectValueClicked}
          role="button"
          tabIndex={index}
          {...rest}
        >
          {icon && <div className="ids-select-value__icon">{icon}</div>}
          <div className="ids-select-value__title">{label}</div>
        </div>
      );
    }
  );

export default SelectOption;

import React from 'react';
import cx from 'classnames';

import SelectValue from './SelectValue';

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
  label: string;
  /** Callback when content is clicked. */
  onClick?: () => void;
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
      } = props;

      const selectOptionClasses = cx('select-option', className, {
        'select-option--selected': selected,
        'select-option--disabled': disabled,
      });

      const onSelectValueClicked = (): void => {
        if (!disabled && onClick) {
          onClick();
        }
      };

      return (
        <div ref={ref} className={selectOptionClasses}>
          <SelectValue
            className={className}
            icon={icon}
            label={label}
            disabled={disabled}
            onClick={onSelectValueClicked}
            index={index}
          />
        </div>
      );
    }
  );

export default SelectOption;

import React from 'react';
import cx from 'classnames';

import SelectValue from './SelectValue';

import './select-option.scss';

export interface SelectOptionProps extends React.ComponentPropsWithRef<'div'> {
  /** Add a specific class to the button. */
  className?: string;
  /** If the option is disabled. */
  disabled?: boolean;
  /** Icon to display to the right of the option. */
  icon?: React.ReactNode;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** Option title. */
  label: React.ReactNode;
  /** Callback when content is clicked. */
  onClick: () => void;
  /** True if the SelectOption is the one selected. */
  selected?: boolean;
}

const SelectOption: React.FunctionComponent<SelectOptionProps> =
  React.forwardRef(
    (props: SelectOptionProps, ref: React.Ref<HTMLDivElement>) => {
      const {
        className,
        disabled = false,
        icon,
        isCompact = false,
        label,
        onClick,
        selected = false,
        ...rest
      } = props;

      const canTabKeyFocusThisAction = disabled ? -1 : 0;

      const selectOptionClasses = cx('ids-select-option', className, {
        'ids-select-option--selected': selected,
        'ids-select-option--disabled': disabled,
      });

      const onSelectValueClicked = (): void => {
        if (!disabled && onClick) {
          onClick();
        }
      };

      const handleOnKeyDown = (keyboardEvent: {
        key: string;
        code: string;
      }): void => {
        if (keyboardEvent.key === 'Enter') {
          onSelectValueClicked();
        }
      };

      return (
        <div
          ref={ref}
          className={selectOptionClasses}
          onClick={onSelectValueClicked}
          onKeyDown={handleOnKeyDown}
          role="button"
          tabIndex={canTabKeyFocusThisAction}
          {...rest}
        >
          <SelectValue
            label={label}
            icon={icon}
            isCompact={isCompact}
            disabled={disabled}
          />
        </div>
      );
    }
  );

export default SelectOption;

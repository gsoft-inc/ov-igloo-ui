import * as React from 'react';
import cx from 'classnames';

import SelectHeader from './SelectHeader';
import SelectOption from './SelectOption';

import './select.scss';

const MaxOptionDisplayDefault = 4;

export interface SelectOptionProps {
  /** The option label */
  label: React.ReactNode;
  /** The option value */
  value: string | number;
  /** True if the current option can't be selected */
  disabled?: boolean;
  /** Icon displayed at the front of the option label */
  icon?: React.ReactNode;
}

export interface SelectProps extends React.ComponentPropsWithRef<'div'> {
  /** Add a specific class to the button. */
  className?: string;
  /** The selection is in an error state. */
  error?: boolean;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** Disabled the select, the user cannot click on them. */
  disabled?: boolean;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** Callback when selected content change. */
  onChange?: (option: SelectOptionProps | any) => void;
  /** List of available options. */
  options: SelectOptionProps[];
  /** The selected option. */
  selectedOption?: SelectOptionProps;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const Select: React.FunctionComponent<SelectProps> = React.forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      className,
      error = false,
      isCompact = false,
      disabled = false,
      dataTest,
      onChange,
      options,
      selectedOption,
      isOpen = false,
      ...rest
    } = props;

    const dropdownButtonRef = React.useRef(null);
    const scrollingListContainer = React.useRef(null);
    const selectedOptionRef = React.useRef(null);

    const selectClasses = cx('ids-select_select', className);

    const onOptionSelected = (option: SelectOptionProps): void => {
      if (onChange) {
        onChange(option);
      }
    };

    const selectRenderer = (
      <select
        ref={ref}
        className={selectClasses}
        disabled={disabled}
        onChange={onChange}
        data-test={dataTest}
        {...rest}
      />
    );

    return (
      <span
        className={cx('ids-select', {
          'ids-select--compact': isCompact,
          'ids-select--error': error,
        })}
      >
        {selectRenderer}
      </span>
    );
  }
);

export default Select;

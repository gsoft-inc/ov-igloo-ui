import * as React from 'react';
import cx from 'classnames';

import './select.scss';

import Dropdown from './Dropdown';

import SelectHeader from './SelectHeader';
import SelectOptionComponent from './SelectOption';
import SelectValue from './SelectValue';

export interface SelectOption {
  /** True if the current option can't be selected. */
  disabled?: boolean;
  /** Icon displayed at the front of the option label. */
  icon?: React.ReactNode;
  /** The option label. */
  label: React.ReactNode;
  /** The option value. */
  value: string | number;
}

export interface SelectProps {
  /** Default value displayed in the Select. */
  children?: React.ReactNode;
  /** Add a specific class to the Select. */
  className?: string;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** Disabled the Select, the user cannot click on it. */
  disabled?: boolean;
  /** The Select is in an error state. */
  error?: boolean;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** True if the option list is displayed. */
  isOpen?: boolean;
  /** Callback when selected content change. */
  onChange?: (option: SelectOption | any) => void;
  /** List of available options. */
  options: SelectOption[];
  /** The selected option at the initialisation. */
  selectedOption?: SelectOption;
}

const Select: React.FunctionComponent<SelectProps> = (props: SelectProps) => {
  const {
    children,
    className,
    dataTest,
    disabled = false,
    error,
    isCompact = false,
    isOpen = false,
    onChange,
    options,
    selectedOption,
    ...rest
  } = props;

  const selectRef = React.useRef<HTMLDivElement>(null);
  const [currentSelectedOption, setCurrentSelectedOption] =
    React.useState(selectedOption);
  const [showMenu, setShowMenu] = React.useState(isOpen);

  const handleOnKeyDown = (keyboardEvent: {
    key: string;
    code: string;
  }): void => {
    if (keyboardEvent.key === 'Escape' || keyboardEvent.key === 'Esc') {
      if (showMenu) {
        setShowMenu(false);
      }
    }

    if (keyboardEvent.code === 'Space' || keyboardEvent.key === 'Enter') {
      const keepFocus = showMenu;

      setShowMenu(!showMenu);
      if (keepFocus) {
        if (selectRef && selectRef.current) {
          selectRef.current.focus();
        }
      }
    }
  };

  const handleOnClick = (): void => {
    if (disabled) {
      return;
    }

    setShowMenu(!showMenu);
  };

  const generateOptions = (): React.ReactNode => {
    if (!options || options.length === 0) {
      return <Dropdown />;
    }

    const selectOptions = options.map((option: SelectOption) => {
      if (!option) {
        return null;
      }

      const isSelected = option.value === currentSelectedOption?.value ?? false;
      const optionOnClickHandler = (): void => {
        const hasChanged = currentSelectedOption !== option;

        setCurrentSelectedOption(option);

        if (onChange && hasChanged) {
          onChange(currentSelectedOption);
        }
      };

      return (
        <SelectOptionComponent
          disabled={option.disabled}
          icon={option.icon}
          isCompact={isCompact}
          label={option.label}
          onClick={optionOnClickHandler}
          selected={isSelected}
        />
      );
    });

    return <Dropdown isOpen={isOpen}>{selectOptions}</Dropdown>;
  };

  const canShowMenu = showMenu && !disabled;

  const selectClassname = cx('ids-select', className, {
    'ids-select--active': canShowMenu,
    'ids-select--compact': isCompact,
    'ids-select--disabled': disabled,
    'ids-select--error': error,
  });

  return (
    <div
      ref={selectRef}
      className={selectClassname}
      data-test={dataTest}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      role="button"
      tabIndex={0}
      {...rest}
    >
      <SelectHeader isOpen={canShowMenu} disabled={disabled}>
        <SelectValue
          disabled={disabled}
          icon={currentSelectedOption?.icon}
          isCompact={isCompact}
          isPlaceholder={!currentSelectedOption}
          label={currentSelectedOption?.label || children}
        />
      </SelectHeader>
      {canShowMenu && generateOptions()}
    </div>
  );
};

export default Select;

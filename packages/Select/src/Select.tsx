import * as React from 'react';
import cx from 'classnames';

import Dropdown from './Dropdown';

import SelectInput from './SelectInput';
import SelectOptionComponent from './SelectOption';
import SelectValue from './SelectValue';

import './select.scss';

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
  /** Disable the Select so the user cannot click on it. */
  disabled?: boolean;
  /** The Select is in an error state. */
  error?: boolean;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** True if the option list is displayed. */
  isOpen?: boolean;
  /** Callback when selected content changes. */
  onChange?: (option: SelectOption | undefined) => void;
  /** List of available options. */
  options: SelectOption[];
  /** The initial selected option. */
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
  const [previousSelectedOption, setPreviousSelectedOption] =
    React.useState(selectedOption);
  const [showMenu, setShowMenu] = React.useState(isOpen);

  React.useEffect(() => {
    const hasChanged = currentSelectedOption !== previousSelectedOption;
    const skipOnChangeLogic = !hasChanged || showMenu;

    if (skipOnChangeLogic) {
      return;
    }

    setPreviousSelectedOption(currentSelectedOption);

    if (onChange) {
      onChange(currentSelectedOption);
    }
  }, [onChange, currentSelectedOption, previousSelectedOption, showMenu]);

  const SelectFirstOption = (): void => {
    const firstValidOption = options.find((option) => option.disabled !== true);

    if (firstValidOption) {
      setCurrentSelectedOption(firstValidOption);
    }
  };

  const SelectNextOption = (): void => {
    if (!currentSelectedOption) {
      SelectFirstOption();
      return;
    }

    const currentOptionIndex = options.indexOf(currentSelectedOption);

    if (currentOptionIndex >= options.length - 1) {
      return;
    }

    const nextValidOption = options.find(
      (option, index) => option.disabled !== true && index > currentOptionIndex
    );

    if (nextValidOption) {
      setCurrentSelectedOption(nextValidOption);
    }
  };

  const SelectPreviousOption = (): void => {
    if (!currentSelectedOption) {
      SelectFirstOption();
      return;
    }

    const currentOptionIndex = options.indexOf(currentSelectedOption);

    if (currentOptionIndex === 0) {
      return;
    }

    const previousValidOption = [...options]
      .reverse()
      .find(
        (option, index) =>
          option.disabled !== true &&
          index > options.length - currentOptionIndex - 1
      );

    if (previousValidOption) {
      setCurrentSelectedOption(previousValidOption);
    }
  };

  const handleOnKeyDown = (
    keyboardEvent: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    if (keyboardEvent.key === 'Escape' || keyboardEvent.key === 'Esc') {
      if (showMenu) {
        setShowMenu(false);
      }
    }

    if (keyboardEvent.code === 'Space' || keyboardEvent.key === 'Enter') {
      keyboardEvent.preventDefault();
      keyboardEvent.stopPropagation();

      const keepFocus = showMenu;

      setShowMenu(!showMenu);
      if (keepFocus) {
        if (selectRef && selectRef.current) {
          selectRef.current.focus();
        }
      }
    }

    if (keyboardEvent.code === 'ArrowUp') {
      keyboardEvent.preventDefault();
      keyboardEvent.stopPropagation();

      SelectPreviousOption();
    }
    if (keyboardEvent.code === 'ArrowDown') {
      keyboardEvent.preventDefault();
      keyboardEvent.stopPropagation();

      SelectNextOption();
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
      return <Dropdown key="selectDropdown" />;
    }

    const selectOptions = options.map((option: SelectOption) => {
      if (!option) {
        return null;
      }

      const isSelected = option.value === currentSelectedOption?.value ?? false;

      const optionHandleOnClick = (): void => {
        if (option.disabled) {
          return;
        }

        setCurrentSelectedOption(option);
      };

      return (
        <SelectOptionComponent
          disabled={option.disabled}
          icon={option.icon}
          isCompact={isCompact}
          label={option.label}
          onClick={optionHandleOnClick}
          selected={isSelected}
          key={option.value}
        />
      );
    });

    return (
      <Dropdown isOpen={showMenu} key="selectDropdown">
        {selectOptions}
      </Dropdown>
    );
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
      <SelectInput isOpen={canShowMenu}>
        <SelectValue
          disabled={disabled}
          icon={currentSelectedOption?.icon}
          isCompact={isCompact}
          isPlaceholder={!currentSelectedOption}
          label={currentSelectedOption?.label || children}
        />
      </SelectInput>
      {canShowMenu && generateOptions()}
    </div>
  );
};

export default Select;

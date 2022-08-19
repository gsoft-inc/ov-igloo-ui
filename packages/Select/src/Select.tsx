import * as React from 'react';
import cx from 'classnames';

import './select.scss';

import { KeyboardEventHandler } from 'react';
import SelectHeader from './SelectHeader';
import SelectOption from './SelectOption';
import SelectValue from './SelectValue';
import Dropdown from './Dropdown';

export interface SelectOptionProps {
  /** The option label. */
  label: React.ReactNode;
  /** The option value. */
  value: string | number;
  /** True if the current option can't be selected. */
  disabled?: boolean;
  /** Icon displayed at the front of the option label. */
  icon?: React.ReactNode;
}

export interface SelectProps {
  /** Default value displayed in the Select. */
  children?: React.ReactNode;
  /** Add a specific class to the Select. */
  className?: string;
  /** Disabled the Select, the user cannot click on it. */
  disabled?: boolean;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** The Select is in an error state. */
  error?: boolean;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** Callback when selected content change. */
  onChange?: (option: SelectOptionProps | any) => void;
  /** List of available options. */
  options: SelectOptionProps[];
  /** The selected option at the initialisation. */
  selectedOption?: SelectOptionProps;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const Select: React.FunctionComponent<SelectProps> = (props: SelectProps) => {
  const {
    children,
    className,
    error = false,
    disabled = false,
    dataTest,
    isCompact = false,
    onChange,
    options,
    selectedOption,
    isOpen = false,
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
      if (!showMenu) {
        setShowMenu(true);
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

    const selectOptions = options.map(
      (option: SelectOptionProps, index: number) => {
        if (!option) {
          return null;
        }

        const isSelected =
          option.value === currentSelectedOption?.value ?? false;
        const optionOnClickHandler = (): void => {
          const hasChanged = currentSelectedOption !== option;

          setCurrentSelectedOption(option);

          if (onChange && hasChanged) {
            onChange(currentSelectedOption);
          }
        };

        return (
          <SelectOption
            index={index}
            label={option.label}
            onClick={optionOnClickHandler}
            selected={isSelected}
            icon={option.icon}
            disabled={option.disabled}
          />
        );
      }
    );

    return <Dropdown isOpen={isOpen}>{selectOptions}</Dropdown>;
  };

  const canShowMenu = showMenu && !disabled;

  const selectClassname = cx('ids-select', className, {
    'ids-select--compact': isCompact,
    'ids-select--active': canShowMenu,
    'ids-select--disabled': disabled,
  });

  return (
    <div
      ref={selectRef}
      className={selectClassname}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      role="button"
      tabIndex={0}
      data-test={dataTest}
      {...rest}
    >
      <SelectHeader isOpen={canShowMenu} disabled={disabled}>
        <SelectValue
          label={currentSelectedOption?.label || children}
          icon={currentSelectedOption?.icon}
          isPlaceholder={!currentSelectedOption}
          disabled={disabled}
        />
      </SelectHeader>
      {canShowMenu && generateOptions()}
    </div>
  );
};

export default Select;

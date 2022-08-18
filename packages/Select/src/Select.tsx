import * as React from 'react';
import cx from 'classnames';

import './select.scss';

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

  const onEscapeKey = (): void => {
    if (selectRef && selectRef.current) {
      selectRef.current.blur();
    }
  };

  const handleOnClick = (): void => {
    if (disabled) {
      return;
    }

    setShowMenu(!showMenu);

    window?.addEventListener('keydown', onEscapeKey);
  };

  const handleFocusLost = (): void => {
    // Need to delay for the option click event to run
    setTimeout(() => {
      if (!showMenu) {
        return;
      }

      setShowMenu(false);

      window?.removeEventListener('keydown', onEscapeKey);
    }, 175);
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

  const selectClassname = cx('ids-select', className, {
    'ids-select-compact': isCompact,
  });

  const canShowMenu = showMenu && !disabled;

  return (
    <div
      ref={selectRef}
      className={selectClassname}
      onClick={handleOnClick}
      onBlur={handleFocusLost}
      role="button"
      tabIndex={0}
      data-test={dataTest}
      {...rest}
    >
      <SelectHeader isOpen={canShowMenu}>
        <SelectValue
          label={currentSelectedOption?.label || children}
          icon={currentSelectedOption?.icon}
          isPlaceholder={!currentSelectedOption}
        />
      </SelectHeader>
      {canShowMenu && generateOptions()}
    </div>
  );
};

export default Select;

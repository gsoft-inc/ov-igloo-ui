import * as React from 'react';
import cx from 'classnames';

import './my-select.scss';

import SelectHeader from './SelectHeader';
import Dropdown from './Dropdown';
import SelectOption from './SelectOption';

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

export interface MySelectProps {
  /** Default value displayed in the select. */
  children?: React.ReactNode;
  /** Add a specific class to the button. */
  className?: string;
  /** Disabled the select, the user cannot click on them. */
  disabled?: boolean;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** The selection is in an error state. */
  error?: boolean;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** Callback when selected content change. */
  onChange?: (option: SelectOptionProps | any) => void;
  /** List of available options. */
  options: SelectOptionProps[];
  /** The selected option. */
  selectedOption?: SelectOptionProps;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const MySelect: React.FunctionComponent<MySelectProps> = (
  props: MySelectProps
) => {
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
    return; // TODO remove this line
    if (!showMenu) {
      return;
    }

    setShowMenu(false);

    window?.removeEventListener('keydown', onEscapeKey);
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
          setCurrentSelectedOption(option);
        };

        return (
          <SelectOption
            index={index}
            label={option.label}
            onClick={optionOnClickHandler}
            selected={isSelected}
            icon={option.icon}
          />
        );
      }
    );

    return <Dropdown>{selectOptions}</Dropdown>;
  };

  const selectClassname = cx('ids-my-select', className, {
    'ids-my-select-compact': isCompact,
  });

  return (
    <div
      ref={selectRef}
      className={selectClassname}
      {...rest}
      onClick={handleOnClick}
      onBlur={handleFocusLost}
      role="button"
      tabIndex={0}
    >
      <SelectHeader isOpen={showMenu}>
        {currentSelectedOption?.icon}
        {currentSelectedOption?.label || children}
      </SelectHeader>
      {showMenu && generateOptions()}
    </div>
  );
};

export default MySelect;

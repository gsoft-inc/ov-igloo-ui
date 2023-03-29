import * as React from 'react';
import cx from 'classnames';
import useResizeObserver from '@react-hook/resize-observer';

import Dropdown from '@igloo-ui/dropdown';
import List, { OptionType, Option } from '@igloo-ui/list';

import SelectInput from './SelectInput';
import SelectValue from './SelectValue';

import './select.scss';

export enum Keys {
  Enter = 'Enter',
  Space = ' ',
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Escape = 'Escape',
  Tab = 'Tab',
}

export type FocusDirection = 'first' | 'last' | 'up' | 'down';

export type SelectOptiontype = Omit<Option, 'type'>;

export interface SelectProps {
  /** Set this to true and the dropdown will take the width of its content,
   * not the width of the select */
  autoWidth?: boolean;
  /** Default value displayed in the Select */
  children?: React.ReactNode;
  /** Add a specific class to the Select */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Disable the Select so the user cannot click on it */
  disabled?: boolean;
  /** The Select is in an error state */
  error?: boolean;
  /** True for a compact appearance */
  isCompact?: boolean;
  /** True if the option list is displayed */
  isOpen?: boolean;
  /** Callback when selected content changes */
  onChange?: (option: OptionType | undefined) => void;
  /** List of available options */
  options: SelectOptiontype[];
  /** The initial selected option */
  selectedOption?: OptionType;
}

const Select: React.FunctionComponent<SelectProps> = ({
  autoWidth = false,
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
}: SelectProps) => {
  const selectOptions = options.map((option): OptionType => {
    return {
      ...option,
      type: 'list',
    };
  });

  const selectRef = React.useRef<HTMLDivElement>(null);
  const [currentFocusedOption, setCurrentFocusedOption] =
    React.useState(selectedOption);
  const [currentSelectedOption, setCurrentSelectedOption] =
    React.useState(selectedOption);
  const [showMenu, setShowMenu] = React.useState(isOpen);
  const [results, setResults] = React.useState<OptionType[]>(selectOptions);

  const [selectRect, setSelectRect] = React.useState<DOMRectReadOnly>();
  useResizeObserver(selectRef, (entry) => {
    setSelectRect(entry.contentRect);
  });

  const optionText = (option: OptionType | undefined): string | undefined => {
    if (option?.type === 'member') {
      return option?.member;
    }
    return option?.label;
  };

  const isOptionDisabled = (option: OptionType | undefined): boolean => {
    if (option?.type === 'list') {
      return option?.disabled ?? false;
    }
    return false;
  };

  const toggleMenu = (isOpen: boolean, keepFocus = false): void => {
    const DROPDOWN_ANIMATION_DURATION = 150;
    if (isOpen) {
      if (keepFocus && selectRef && selectRef.current) {
        selectRef.current.focus();
      }

      setTimeout(() => setResults(selectOptions), DROPDOWN_ANIMATION_DURATION);
    } else if (currentFocusedOption !== currentSelectedOption) {
      // This happens when the user doesn't select an option by keyboard.
      setCurrentFocusedOption(currentSelectedOption);
    }

    setShowMenu(!isOpen);
  };

  const selectOption = (option: OptionType): void => {
    const hasChanged = option !== currentSelectedOption;

    toggleMenu(true, true);

    if (!hasChanged || isOptionDisabled(option)) {
      return;
    }

    setCurrentSelectedOption(option);

    if (onChange) {
      onChange(option);
    }
  };

  const hoverOption = (option: OptionType): void => {
    setCurrentFocusedOption(option);
  };

  const focusOption = (direction: FocusDirection = 'first'): void => {
    const options = results.filter(
      (option) => isOptionDisabled(option) !== true
    );
    if (!options.length) return;

    let currentFocusedIndex = -1;
    if (currentFocusedOption) {
      currentFocusedIndex = options.indexOf(currentFocusedOption);
    } else if (currentSelectedOption) {
      currentFocusedIndex = options.indexOf(currentSelectedOption);
    }

    switch (direction) {
      case 'up':
        setCurrentFocusedOption(
          options[
            currentFocusedIndex > 0
              ? currentFocusedIndex - 1
              : options.length - 1
          ]
        );
        break;
      case 'down':
        setCurrentFocusedOption(
          options[(currentFocusedIndex + 1) % options.length]
        );
        break;
      case 'last':
        setCurrentFocusedOption(options[options.length - 1]);
        break;
      default:
        setCurrentFocusedOption(options[0]);
        break;
    }
  };

  const targetIsClearBtn = (element: HTMLElement): boolean => {
    return !!element.closest('.ids-select__input-clear');
  };

  const handleOnKeyDown = (
    keyboardEvent: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    const { target } = keyboardEvent;
    switch (keyboardEvent.key) {
      case Keys.Escape:
        if (showMenu) {
          toggleMenu(showMenu);
        }
        break;
      case Keys.Enter:
        if (!targetIsClearBtn(target as HTMLElement)) {
          keyboardEvent.preventDefault();
          keyboardEvent.stopPropagation();
          if (currentFocusedOption) {
            selectOption(currentFocusedOption);
          }
          if ((!currentFocusedOption && showMenu) || !showMenu) {
            toggleMenu(showMenu, true);
          }
        }
        break;
      case Keys.Space:
        if (!showMenu && !targetIsClearBtn(target as HTMLElement)) {
          toggleMenu(false);
        }
        break;
      case Keys.ArrowUp:
        keyboardEvent.preventDefault();
        keyboardEvent.stopPropagation();

        focusOption('up');
        break;
      case Keys.ArrowDown:
        keyboardEvent.preventDefault();
        keyboardEvent.stopPropagation();

        focusOption('down');
        break;
      case Keys.Tab:
        if (showMenu) {
          toggleMenu(showMenu);
        }

        break;
      default:
        break;
    }
  };
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { target } = e;
    if (disabled || targetIsClearBtn(target as HTMLDivElement)) {
      return;
    }

    const keepFocus = showMenu;

    toggleMenu(showMenu, keepFocus);
  };

  const canShowMenu = showMenu && !disabled;

  const selectClassname = cx('ids-select', className, {
    'ids-select--active': canShowMenu,
    'ids-select--compact': isCompact,
    'ids-select--disabled': disabled,
    'ids-select--error': error,
  });

  const selectDropdownClassname = cx(
    'ids-select__dropdown',
    `${className}__dropdown`,
    {
      'ids-select__dropdown--compact': isCompact,
    }
  );

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
      <Dropdown
        key="selectDropdown"
        content={
          <List
            options={results}
            isCompact
            onOptionFocus={hoverOption}
            onOptionChange={selectOption}
            selectedOption={currentSelectedOption}
            focusedOption={currentFocusedOption}
          />
        }
        isOpen={canShowMenu}
        style={{ width: autoWidth ? '' : selectRect?.width }}
        className={selectDropdownClassname}
        onClose={() => toggleMenu(true)}
      >
        <SelectInput isOpen={canShowMenu}>
          <SelectValue
            disabled={disabled}
            icon={currentSelectedOption?.icon}
            isCompact={isCompact}
            isPlaceholder={!currentSelectedOption}
            label={optionText(currentSelectedOption) || children}
            src={currentSelectedOption?.src}
            color={currentSelectedOption?.color}
          />
        </SelectInput>
      </Dropdown>
    </div>
  );
};

export default Select;

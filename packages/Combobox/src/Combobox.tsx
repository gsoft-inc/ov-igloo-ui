import * as React from 'react';
import cx from 'classnames';
import useResizeObserver from '@react-hook/resize-observer';

import Dropdown from '@igloo-ui/dropdown';
import List, { OptionType, Option } from '@igloo-ui/list';

import ComboboxInput from './ComboboxInput';

import './combobox.scss';

export enum Keys {
  Enter = 'Enter',
  Space = ' ',
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Escape = 'Escape',
  Tab = 'Tab',
}

export type FocusDirection = 'first' | 'last' | 'up' | 'down';

export type ComboboxOption = Omit<Option, 'type'>;

export interface ComboboxProps {
  /** Set this to true and the dropdown will take the width of its content,
   * not the width of the select. */
  autoWidth?: boolean;
  /** Default value displayed in the Select. */
  children?: React.ReactNode;
  /** Add a specific class to the Select. */
  className?: string;
  /** If true, it clears any selected option */
  clear?: boolean;
  /** The tooltip text for the clear button */
  clearTooltipText?: string;
  /** Whether or not the combobox should close after an item is selected */
  closeOnSelect?: boolean;
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
  /** The Combobox gains checkboxes beside each option
   * to be able to select multiple options */
  multiple?: boolean;
  /** Specify the text to display when there are no results found */
  noResultsText?: string;
  /** Callback when selected content changes. */
  onChange?: (option: OptionType | undefined) => void;
  /** List of available options. */
  options: ComboboxOption[];
  /** Whether or not to display a search box when open */
  search?: boolean;
  /** The initial selected option or a list of selected options. */
  selectedOption?: OptionType | OptionType[];
}

const Combobox: React.FunctionComponent<ComboboxProps> = (
  props: ComboboxProps
) => {
  const {
    autoWidth = false,
    children,
    className,
    clear,
    clearTooltipText,
    closeOnSelect = true,
    dataTest,
    disabled = false,
    error,
    isCompact = false,
    isOpen = false,
    multiple = false,
    noResultsText = 'No Results',
    onChange,
    options,
    search,
    selectedOption,
    ...rest
  } = props;

  const comboboxOptions = options.map((option): OptionType => {
    return {
      ...option,
      type: 'list',
    };
  });

  const comboboxRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [currentFocusedOption, setCurrentFocusedOption] = React.useState(
    !Array.isArray(selectedOption) ? selectedOption : undefined
  );
  const [currentSelectedOption, setCurrentSelectedOption] = React.useState(
    !Array.isArray(selectedOption) ? selectedOption : undefined
  );
  const [showMenu, setShowMenu] = React.useState(isOpen);
  const [results, setResults] = React.useState<OptionType[]>(comboboxOptions);

  const [comboboxRect, setComboboxRect] = React.useState<DOMRectReadOnly>();
  useResizeObserver(comboboxRef, (entry) => {
    setComboboxRect(entry.contentRect);
  });

  const keepOpen = !closeOnSelect || multiple;

  // Setting state is asynchronous so these actions
  // absolutely need to happen when the menu is either fully closed or open.
  React.useEffect(() => {
    if (showMenu) {
      // Opening menu actions
      if (searchInputRef && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }, [options, showMenu]);

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
      // Closing menu actions
      if (searchInputRef && searchInputRef.current) {
        searchInputRef.current.value = '';
      }

      if (keepFocus && comboboxRef && comboboxRef.current) {
        comboboxRef.current.focus();
      }

      setTimeout(
        () => setResults(comboboxOptions),
        DROPDOWN_ANIMATION_DURATION
      );
    } else if (currentFocusedOption !== currentSelectedOption) {
      // This happens when the user doesn't select an option by keyboard.
      setCurrentFocusedOption(currentSelectedOption);
    }

    setShowMenu(!isOpen);
  };

  const updateOption = (option: OptionType): void => {
    const hasChanged = option !== currentSelectedOption;

    if (!keepOpen) {
      toggleMenu(true, true);
    }

    if ((!multiple && !hasChanged) || isOptionDisabled(option)) {
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
    return !!element.closest('.ids-combobox-input__clear');
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
            updateOption(currentFocusedOption);
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

  const handleSearch = (searchTerm: string): void => {
    const filteredOptions = comboboxOptions.filter((option: OptionType) => {
      return optionText(option)
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setResults(filteredOptions);

    if (currentFocusedOption) {
      const isFocusedVisible =
        filteredOptions.indexOf(currentFocusedOption) >= 0;
      if (!isFocusedVisible) {
        setCurrentFocusedOption(undefined);
      }
    }
  };

  const handleClear = (): void => {
    if (showMenu) {
      toggleMenu(showMenu);
    }
    setCurrentSelectedOption(undefined);
    setCurrentFocusedOption(undefined);
  };

  const canShowMenu = showMenu && !disabled;

  const comboboxClassname = cx('ids-combobox', className, {
    'ids-combobox--active': canShowMenu,
    'ids-combobox--compact': isCompact,
    'ids-combobox--disabled': disabled,
    'ids-combobox--error': error,
  });

  const comboboxDropdownClassname = cx(
    'ids-combobox__dropdown',
    `${className}__dropdown`,
    {
      'ids-combobox__dropdown--compact': isCompact,
    }
  );

  return (
    <div
      ref={comboboxRef}
      className={comboboxClassname}
      data-test={dataTest}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      role="button"
      tabIndex={0}
      {...rest}
    >
      <Dropdown
        key="comboboxDropdown"
        content={
          <List
            options={results}
            noResultsText={noResultsText}
            isCompact
            onOptionFocus={hoverOption}
            onOptionChange={updateOption}
            selectedOption={multiple ? selectedOption : currentSelectedOption}
            focusedOption={currentFocusedOption}
            multiple={multiple}
          />
        }
        isOpen={canShowMenu}
        style={{ width: autoWidth ? '' : comboboxRect?.width }}
        className={comboboxDropdownClassname}
        onClose={() => toggleMenu(true)}
      >
        {multiple ? (
          <ComboboxInput
            isOpen={canShowMenu}
            search={search}
            onSearch={handleSearch}
            searchRef={searchInputRef}
            clear={clear}
            onClear={handleClear}
            clearTooltipText={clearTooltipText}
            disabled={disabled}
            isPlaceholder
            label={children}
          />
        ) : (
          <ComboboxInput
            isOpen={canShowMenu}
            search={search}
            onSearch={handleSearch}
            searchRef={searchInputRef}
            clear={clear}
            onClear={handleClear}
            clearTooltipText={clearTooltipText}
            disabled={disabled}
            icon={currentSelectedOption?.icon}
            isPlaceholder={!currentSelectedOption}
            label={optionText(currentSelectedOption) || children}
            src={currentSelectedOption?.src}
            color={currentSelectedOption?.color}
          />
        )}
      </Dropdown>
    </div>
  );
};

export default Combobox;

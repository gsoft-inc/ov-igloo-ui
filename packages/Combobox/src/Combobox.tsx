import * as React from 'react';
import cx from 'classnames';

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

export interface ComboboxProps
  extends Omit<React.ComponentProps<'div'>, 'onChange' | 'onInput'> {
  /** Set this to true and the dropdown will take the width of its content,
   * not the width of the select */
  autoWidth?: boolean;
  /** Default value displayed in the Select */
  children?: React.ReactNode;
  /** Add a specific class to the Select */
  className?: string;
  /** If true, it clears any selected option */
  clear?: boolean;
  /** The tooltip text for the clear button */
  clearTooltipText?: string;
  /** Whether or not the combobox should close after an item is selected */
  closeOnSelect?: boolean;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Disable the Select so the user cannot click on it */
  disabled?: boolean;
  /** The Select is in an error state */
  error?: boolean;
  /** The footer content of the combobox */
  footer?: React.ReactNode;
  /** True for a compact appearance */
  isCompact?: boolean;
  /** True if the option list is displayed */
  isOpen?: boolean;
  /** Whether or not the list is loading */
  loading?: boolean;
  /** The Combobox gains checkboxes beside each option
   * to be able to select multiple options */
  multiple?: boolean;
  /** Specify the text to display when there are no results found */
  noResultsText?: string;
  /** Callback when the dropdown is closed and animations are done */
  onAfterClose?: () => void;
  /** Callback when selected content changes */
  onChange?: (option: OptionType | undefined) => void;
  /** Callback called when selected is cleared */
  onClear?: () => void;
  /** Callback when the dropdown is closed */
  onClose?: () => void;
  /** Callback when the user types in the search box */
  onInput?: (value: string) => void;
  /** Callback when the dropdown is opened */
  onOpen?: () => void;
  /** Callback when the user scrolls to the end of the dropdown */
  onScrollEnd?: () => void;
  /** List of available options. */
  options?: ComboboxOption[];
  /** The threshold in pixels from the bottom of the dropdown
   * to trigger the onScrollEnd callback */
  scrollEndThreshold?: number;
  /** Whether or not to display a search box when open */
  search?: boolean;
  /** The initial selected option or a list of selected options */
  selectedOption?: OptionType | OptionType[];
  /** Whether or not to display the search icon */
  showSearchIcon?: boolean;
}

const Combobox: React.FunctionComponent<ComboboxProps> = ({
  autoWidth = false,
  children,
  className,
  clear,
  clearTooltipText,
  closeOnSelect = true,
  dataTest,
  disabled = false,
  error,
  footer,
  isCompact = false,
  isOpen = false,
  loading,
  multiple = false,
  noResultsText = 'No Results',
  onAfterClose,
  onChange,
  onClear,
  onClose,
  onInput,
  onOpen,
  onScrollEnd,
  options,
  scrollEndThreshold,
  search,
  selectedOption,
  showSearchIcon = true,
  ...rest
}: ComboboxProps) => {
  const comboboxOptions = React.useMemo(
    () =>
      options?.map((option): OptionType => {
        return {
          ...option,
          type: 'list',
        };
      }),
    [options]
  );

  const comboboxRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [currentFocusedOption, setCurrentFocusedOption] = React.useState(
    !Array.isArray(selectedOption) ? selectedOption : undefined
  );
  const [currentSelectedOption, setCurrentSelectedOption] = React.useState(
    !Array.isArray(selectedOption) ? selectedOption : undefined
  );
  const [showMenu, setShowMenu] = React.useState(isOpen);
  const [results, setResults] = React.useState<OptionType[]>(
    comboboxOptions || []
  );

  const keepOpen = !closeOnSelect || multiple;

  // Setting state is asynchronous so these actions
  // absolutely need to happen when the menu is either fully closed or open.
  React.useEffect(() => {
    if (showMenu) {
      // Opening menu actions
      if (searchInputRef && searchInputRef.current) {
        searchInputRef.current.focus({ preventScroll: true });
      }
    }
  }, [options, showMenu]);

  React.useEffect(() => {
    if (comboboxOptions) {
      setResults(comboboxOptions);
    }
  }, [comboboxOptions]);

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
    if (isOpen) {
      // Closing menu actions
      if (searchInputRef && searchInputRef.current) {
        setInputValue('');
      }

      if (keepFocus && comboboxRef && comboboxRef.current) {
        comboboxRef.current.focus();
      }

      if (onClose) {
        onClose();
      }
    } else if (currentFocusedOption !== currentSelectedOption) {
      // This happens when the user doesn't select an option by keyboard.
      setCurrentFocusedOption(currentSelectedOption);
    }

    if (!isOpen && onOpen) {
      onOpen();
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
    const options = results.filter((option) => !isOptionDisabled(option));
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

  const targetIsActionBtn = (element: HTMLElement): boolean => {
    return !!element.closest('.ids-list-item__text-action');
  };

  const targetIsFooter = (element: HTMLElement): boolean => {
    return !!element.closest('.ids-combobox__footer');
  };

  const resetComboboxFocus = (): void => {
    if (search && searchInputRef && searchInputRef.current) {
      if (document.activeElement !== searchInputRef.current) {
        searchInputRef.current.focus();
      }
    } else if (comboboxRef && comboboxRef.current) {
      if (document.activeElement !== comboboxRef.current) {
        comboboxRef.current.focus();
      }
    }
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
        if (
          !targetIsClearBtn(target as HTMLElement) &&
          !targetIsActionBtn(target as HTMLElement)
        ) {
          keyboardEvent.preventDefault();
          keyboardEvent.stopPropagation();
          if (currentFocusedOption && showMenu) {
            updateOption(currentFocusedOption);
          }
          if ((!currentFocusedOption && showMenu) || !showMenu) {
            toggleMenu(showMenu, true);
          }
        }
        break;
      case Keys.Space:
        if (!showMenu && !targetIsClearBtn(target as HTMLElement)) {
          keyboardEvent.preventDefault();
          keyboardEvent.stopPropagation();
          toggleMenu(false);
        }
        break;
      case Keys.ArrowUp:
        if (showMenu) {
          keyboardEvent.preventDefault();
          keyboardEvent.stopPropagation();

          resetComboboxFocus();
          focusOption('up');
        }
        break;
      case Keys.ArrowDown:
        if (showMenu) {
          keyboardEvent.preventDefault();
          keyboardEvent.stopPropagation();

          resetComboboxFocus();
          focusOption('down');
        }
        break;
      default:
        break;
    }
  };
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { target } = e;
    if (
      disabled ||
      targetIsClearBtn(target as HTMLDivElement) ||
      targetIsFooter(target as HTMLDivElement)
    ) {
      return;
    }
    toggleMenu(showMenu, true);
  };

  const handleSearch = (searchTerm: string): void => {
    if (onInput) {
      onInput(searchTerm);
    }

    setInputValue(searchTerm);
  };

  const handleClear = (): void => {
    if (showMenu) {
      toggleMenu(showMenu);
    }
    if (multiple && onClear) {
      onClear();
    }
    setCurrentSelectedOption(undefined);
    setCurrentFocusedOption(undefined);
  };

  React.useEffect(() => {
    if (showMenu !== isOpen) {
      toggleMenu(!isOpen);
    }
    // Adding toggleMenu to the dependency array causes unwanted affects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  React.useEffect(() => {
    if (currentFocusedOption && results.length) {
      const isFocusedVisible = results.indexOf(currentFocusedOption) >= 0;
      if (!isFocusedVisible) {
        setCurrentFocusedOption(undefined);
      }
    }
  }, [currentFocusedOption, results]);

  const canShowMenu = showMenu && !disabled;

  const comboboxClassname = cx('ids-combobox', className, {
    'ids-combobox--active': canShowMenu,
    'ids-combobox--compact': isCompact,
    'ids-combobox--disabled': disabled,
    'ids-combobox--error': error,
  });

  const comboboxDropdownClassname = cx('ids-combobox__dropdown', {
    [`${className}__dropdown`]: !!className,
    'ids-combobox__dropdown--compact': isCompact,
    'ids-combobox__dropdown--has-footer': !!footer,
  });

  const noResultsOrLoading = loading ? (
    <List
      isCompact
      loading
      multiple={multiple}
      className="ids-combobox__list"
    />
  ) : (
    <div className="ids-combobox__no-results">{noResultsText}</div>
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
          results && results.length ? (
            <List
              options={results}
              isCompact
              onOptionFocus={hoverOption}
              onOptionChange={updateOption}
              onOptionBlur={() => setCurrentFocusedOption(undefined)}
              selectedOption={multiple ? selectedOption : currentSelectedOption}
              focusedOption={currentFocusedOption}
              multiple={multiple}
              disableTabbing
              className="ids-combobox__list"
            />
          ) : (
            noResultsOrLoading
          )
        }
        footer={footer}
        isScrollable
        isOpen={canShowMenu}
        className={comboboxDropdownClassname}
        isReferenceWidth={!autoWidth}
        onClose={() => {
          toggleMenu(true, true);
        }}
        onAfterClose={onAfterClose}
        onScrollEnd={onScrollEnd}
        scrollEndThreshold={scrollEndThreshold}
      >
        {multiple ? (
          <ComboboxInput
            isOpen={canShowMenu}
            search={search}
            onSearch={handleSearch}
            searchRef={searchInputRef}
            clear={
              selectedOption &&
              Array.isArray(selectedOption) &&
              selectedOption.length
                ? clear
                : undefined
            }
            onClear={handleClear}
            clearTooltipText={clearTooltipText}
            disabled={disabled}
            isPlaceholder
            label={children}
            showSearchIcon={showSearchIcon}
          />
        ) : (
          <ComboboxInput
            isOpen={canShowMenu}
            search={search}
            onSearch={handleSearch}
            searchRef={searchInputRef}
            clear={currentSelectedOption ? clear : undefined}
            onClear={handleClear}
            clearTooltipText={clearTooltipText}
            disabled={disabled}
            icon={currentSelectedOption?.icon}
            isPlaceholder={!currentSelectedOption}
            label={optionText(currentSelectedOption) || children}
            src={currentSelectedOption?.src}
            color={currentSelectedOption?.color}
            showSearchIcon={showSearchIcon}
            value={inputValue}
          />
        )}
      </Dropdown>
    </div>
  );
};

export default Combobox;

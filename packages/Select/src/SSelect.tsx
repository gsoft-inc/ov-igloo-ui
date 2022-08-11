import * as React from 'react';
import cx from 'classnames';

import ChevronUp from '@igloo-ui/icons/dist/ChevronUp';
import ChevronDown from '@igloo-ui/icons/dist/ChevronDown';

const MaxOptionDisplayDefault = 4;

export interface SelectOption {
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
  onChange?: (option: SelectOption | any) => void;
  /** List of available options. */
  options: SelectOption[];
  /** The selected option. */
  selectedOption?: SelectOption;
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

    const overlayRef = React.useRef(null);
    const selectedOptionRef = React.useRef(null);
    const [isCurrentlyOpen, setIsCurrentlyOpen] = React.useState(isOpen);

    const selectClasses = cx('ids-select_select', className);

    React.useEffect(() => {
      if (isCurrentlyOpen) {
        if (selectedOptionRef.current && overlayRef?.current) {
          overlayRef.current.scrollTop = selectedOptionRef.current.offsetTop;
        }
      }
    }, [isCurrentlyOpen]);

    const handleToggle = (): void => {
      setIsCurrentlyOpen(!isOpen);
    };

    const handleClose = (): void => {
      if (isCurrentlyOpen) {
        setIsCurrentlyOpen(false);
      }
    };

    const handleSelection = (option: SelectOption): void => {
      setIsCurrentlyOpen(false);

      if (onChange) {
        onChange(option);
      }
    };

    const renderOptions = (options: SelectOption[]): React.ReactNode => {
      return options.map((option: SelectOption, index: number) => (
        <div
          role="button"
          tabIndex={index}
          key={option.value}
          className={cx('simple-select__option', {
            'simple-select__option--selected':
              selectedOption?.value === option.value,
          })}
          onClick={() => handleSelection(option)}
          ref={
            selectedOption?.value === option.value ? selectedOptionRef : null
          }
        >
          {option.label}
        </div>
      ));
    };

    return (
      <div className={selectClasses}>
        <div
          role="button"
          tabIndex={-1}
          className="simple-select__header"
          onClick={() => !disabled && handleToggle()}
        >
          <div className="simple-select__header-value">
            {selectedOption?.label}
          </div>
          {isOpen ? (
            <ChevronUp className="simple-select__header-arrow" size="small" />
          ) : (
            <ChevronDown className="simple-select__header-arrow" size="small" />
          )}
        </div>
        {!disabled && isOpen && (
          <div className="simple-select__overlay" ref={overlayRef}>
            {renderOptions(options)}
          </div>
        )}
      </div>
    );
  }
);

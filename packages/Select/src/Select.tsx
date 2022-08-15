import * as React from 'react';
import cx from 'classnames';

import SelectHeader from './SelectHeader';
import SelectOption from './SelectOption';
import UseCombinedRefs from './UseCombinedRefs';

import './select.scss';

const MaxDropdownHeight = '36rem';
const MaxDropdownWidth = '42rem';

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
  /** Default value displayed in the select. */
  placeholder: React.ReactNode;
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
      placeholder,
      selectedOption,
      isOpen = false,
      ...rest
    } = props;

    const dropdownButtonRef = React.useRef(null);
    const scrollingListContainer = React.useRef(null);
    const dropdownButtonCombinedRefs = UseCombinedRefs(ref, dropdownButtonRef);
    const selectedOptionRef = React.useRef(null);
    const [dropdownHeight, setDropdownHeight] =
      React.useState(MaxDropdownHeight);
    const dropdownWidth =
      dropdownButtonCombinedRefs.current?.getBoundingClientRect().width ??
      MaxDropdownWidth;

    const selectClasses = cx('ids-select_select', className);

    const innerDropdownStyles = {
      width: 100,
      minWidth: dropdownWidth,
      maxHeight: dropdownHeight,
    };

    const onOptionSelected = (option: SelectOptionProps): void => {
      if (onChange) {
        onChange(option);
      }
    };

    const defaultOptionRenderer = (
      option: SelectOptionProps,
      index: number,
      onSelect: (option: SelectOptionProps) => void
    ): React.ReactNode => {
      return (
        <SelectOption
          disabled={option.disabled}
          icon={option.icon}
          index={index}
          label={option.label}
          onClick={() => onSelect(option)}
          selected={option.value === selectedOption?.value}
        />
      );
    };

    // useLayoutEffect(() => {
    //
    // };

    const Dropdown = (): React.JSXElementConstructor<HTMLDivElement> => {
      const selectOptions = options?.map(
        (o: SelectOptionProps, index: number) => {
          const isSelected = o.value === selectedOption?.value ?? false;
          const node = defaultOptionRenderer(o, index, () => {
            onOptionSelected(o);
          });

          return (
            node && (
              <div key={o.value} ref={isSelected ? selectedOptionRef : null}>
                {node}
              </div>
            )
          );
        }
      );

      return (
        <div
          ref={scrollingListContainer}
          className="select__list"
          style={innerDropdownStyles}
        >
          {selectOptions}
        </div>
      );
    };

    const generatePlaceHolder = (): React.ReactNode => {
      if (placeholder) {
        return placeholder;
      }

      if (selectedOption) {
        return selectedOption.label;
      }

      return options[0].label;
    };

    const header: React.ReactNode = (
      <SelectHeader
        className="select__header"
        disabled={disabled}
        icon={selectedOption?.icon}
        label={selectedOption?.label}
        placeHolder={generatePlaceHolder}
        error={error}
        isOpen={isOpen}
      />
    );

    return (
      <CollapsibleDropdown
        {...props}
        ref={dropdownButtonCombinedRefs}
        id={id}
        disabled={disabled}
        className={classnames}
        isOpen={isOpen}
        dropdown={<Dropdown />}
        position={position}
      >
        {header}
      </CollapsibleDropdown>
    );

    // const selectRenderer = (
    //   <select
    //     ref={ref}
    //     className={selectClasses}
    //     disabled={disabled}
    //     onChange={onChange}
    //     data-test={dataTest}
    //     {...rest}
    //   />
    // );
    //
    // return (
    //   <span
    //     className={cx('ids-select', {
    //       'ids-select--compact': isCompact,
    //       'ids-select--error': error,
    //     })}
    //   >
    //     {selectRenderer}
    //   </span>
    // );
  }
);

export default Select;

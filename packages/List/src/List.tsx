import * as React from 'react';
import cx from 'classnames';

import ListItem, { Option, Member, OptionType } from './ListItem';

import './list.scss';

export interface ListProps extends React.ComponentProps<'ul'> {
  /** Add a specific class to the Select. */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The option that is currently being focused or hovered */
  focusedOption?: OptionType | null;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** The List gains checkboxes beside each option
   * to be able to select multiple options */
  multiple?: boolean;
  /** Specify the text to display when there are no results found */
  noResultsText?: string;
  /** Called when an option becomes focused or hovered */
  onOptionFocus?: (option: OptionType) => void;
  /** Called when an option is selected */
  onOptionChange?: (option: OptionType) => void;
  /** A list of options */
  options: OptionType[];
  /** The initial selected option or a list of selected options. */
  selectedOption?: OptionType | OptionType[] | null;
}

const List: React.FunctionComponent<ListProps> = (props: ListProps) => {
  const {
    className,
    dataTest,
    focusedOption,
    isCompact = true,
    multiple,
    noResultsText = 'No Results',
    onOptionFocus,
    onOptionChange,
    options,
    selectedOption,
    ...rest
  } = props;

  const listClasses = cx('ids-list', className, {
    'ids-list--compact': isCompact,
  });

  return (
    <ul
      className={listClasses}
      data-test={dataTest}
      tabIndex={0}
      role="listbox"
      {...rest}
    >
      {options && options.length ? (
        options.map((option: OptionType) => {
          let selected = false;

          if (multiple) {
            if (Array.isArray(selectedOption)) {
              const selectedItem = selectedOption.filter((o) => {
                return o.value === option.value;
              });
              selected = !!selectedItem && selectedItem.length > 0;
            }
          } else if (selectedOption && !Array.isArray(selectedOption)) {
            selected = selectedOption.value === option.value;
          }

          let isFocused = false;
          if (focusedOption) {
            isFocused = focusedOption.value === option.value;
          }

          return (
            <ListItem
              key={option.value}
              option={option}
              onOptionChange={onOptionChange}
              onOptionFocus={onOptionFocus}
              isCompact={isCompact}
              isFocused={isFocused}
              isSelected={selected}
              useCheckbox={multiple}
            />
          );
        })
      ) : (
        <div className="ids-list__no-results">{noResultsText}</div>
      )}
    </ul>
  );
};

export default List;
export type { Option, Member, OptionType };

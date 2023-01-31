import * as React from 'react';
import cx from 'classnames';

import Checkmark from '@igloo-ui/icons/dist/Checkmark';
import { VisualIdentifier } from '../../../shared/components';

import './list.scss';

interface ListItem {
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** Icon displayed in front of the option label. */
  icon?: React.ReactElement;
  /** Specifies the url for the image to show */
  src?: string;
  /** The option value. */
  value: string;
}

export interface Option extends ListItem {
  /** Descriptive text to display below the label */
  description?: string;
  /** Whether or not the option is disabled */
  disabled?: boolean;
  /** The option label. */
  label: string;
  /** Display an icon to indicate it's a premium option */
  premium?: boolean;
  /** The option type */
  type: 'list';
}

export interface Member extends ListItem {
  /** Displays an icon that shows the member is a manager */
  manager?: boolean;
  /** The name of the member */
  member: string;
  /** The name of the role display below the member name */
  role?: string;
  /** The option type */
  type: 'member';
}

export type OptionType = Option | Member;

export interface ListProps extends React.ComponentProps<'ul'> {
  /** Add a specific class to the Select. */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The option that is currently being focused or hovered */
  hoveredOption?: OptionType | null;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** Specify the text to display when there are no results found */
  noResultsText?: string;
  /** Called when an option becomes focused or hovered */
  onOptionHover?: (option: OptionType) => void;
  /** Called when an option is selected */
  onOptionSelect?: (option: OptionType) => void;
  /** A list of options */
  options: OptionType[];
  /** The option that is currently selected */
  selectedOption?: OptionType | null;
}

const List: React.FunctionComponent<ListProps> = (props: ListProps) => {
  const {
    className,
    dataTest,
    hoveredOption,
    isCompact,
    noResultsText = 'No Results',
    onOptionHover,
    onOptionSelect,
    options,
    selectedOption,
  } = props;

  const listItems = options.map((option: OptionType) => {
    function isSelected(option: OptionType): boolean {
      if (!selectedOption) {
        return false;
      }

      return selectedOption.value === option.value;
    }

    function isFocused(option: OptionType): boolean {
      if (!hoveredOption) {
        return false;
      }

      return hoveredOption.value === option.value;
    }

    const listItemClasses = cx('ids-list__item', className, {
      'ids-list__item--compact': isCompact,
      'ids-list__item--selected': isSelected(option),
      'ids-list__item--focused': isFocused(option),
      'ids-list__item--disabled':
        option.type === 'list' ? option.disabled : false,
    });

    const onListItemFocus = (): void => {
      if (
        (option.type === 'list' && !option.disabled && onOptionHover) ||
        (option.type === 'member' && onOptionHover)
      ) {
        onOptionHover(option);
      }
    };

    const shouldShowVisualIdentifier =
      option.src || option.color || option.icon;

    if (option.type === 'member') {
      return (
        <li
          className={listItemClasses}
          onClick={() => {
            if (onOptionSelect) {
              onOptionSelect(option);
            }
          }}
          onMouseOver={onListItemFocus}
          onFocus={onListItemFocus}
          role="option"
          aria-selected={isSelected(option)}
          tabIndex={-1}
          key={option.value}
        >
          {shouldShowVisualIdentifier && (
            <div className="ids-list__item-visual-identifier-container">
              <VisualIdentifier
                className="ids-list__item-visual"
                icon={option.icon}
                color={option.color}
                src={option.src}
              />
            </div>
          )}
          <span className="ids-list__item-text">
            <span className="ids-list__item-text-member">{option.member}</span>
            <span className="ids-list__item-text-role">{option.role}</span>
          </span>
          {isSelected(option) && (
            <Checkmark size="small" className="ids-list__item-checkmark" />
          )}
        </li>
      );
    }

    return (
      <li
        className={listItemClasses}
        onClick={() => {
          if (!option.disabled && onOptionSelect) {
            onOptionSelect(option);
          }
        }}
        onMouseOver={onListItemFocus}
        onFocus={onListItemFocus}
        role="option"
        aria-selected={isSelected(option)}
        tabIndex={-1}
        key={option.value}
      >
        {shouldShowVisualIdentifier && (
          <div className="ids-list__item-visual-identifier-container">
            <VisualIdentifier
              className="ids-list__item-visual"
              icon={option.icon}
              color={option.color}
              src={option.src}
            />
          </div>
        )}
        <span className="ids-list__item-text">
          <span className="ids-list__item-text-label">{option.label}</span>
          <span className="ids-list__item-text-description">
            {option.description}
          </span>
        </span>
        {isSelected(option) && (
          <Checkmark size="small" className="ids-list__item-checkmark" />
        )}
      </li>
    );
  });

  const listClasses = cx('ids-list', className, {
    'ids-list--compact': isCompact,
  });

  return (
    <ul
      className={listClasses}
      data-test={dataTest}
      tabIndex={0}
      role="listbox"
    >
      {options && options.length ? (
        listItems
      ) : (
        <div className="ids-list__no-results">{noResultsText}</div>
      )}
    </ul>
  );
};

export default List;

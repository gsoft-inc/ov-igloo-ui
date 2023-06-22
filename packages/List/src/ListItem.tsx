import * as React from 'react';
import cx from 'classnames';

import UserSolid from '@igloo-ui/icons/dist/UserSolid';

// eslint-disable-next-line import/no-extraneous-dependencies
import { VisualIdentifier } from '@shared/components';

import './list-item.scss';

interface ListItem {
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** Icon displayed in front of the option label */
  icon?: React.ReactElement;
  /** Unique id used in Intercom to link a components to a Product Tour step */
  intercomTarget?: string;
  /** Specifies the url for the image to show */
  src?: string;
  /** The option value */
  value: string | number;
}

export interface Option extends ListItem {
  /** The option action element that will be displayed on hover */
  action?: React.ReactElement;
  /** Descriptive text to display below the label */
  description?: React.ReactNode;
  /** Whether or not the option is disabled */
  disabled?: boolean;
  /** The option label */
  label: string;
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

export interface ListItemProps extends React.ComponentProps<'li'> {
  /** Add a specific class to the Select */
  className?: string;
  /** Whether or not to disable tabbing of list items */
  disableTabbing?: boolean;
  /** True for a compact appearance */
  isCompact?: boolean;
  /** If the option is focused/hovered */
  isFocused?: boolean;
  /** If the option is selected */
  isSelected?: boolean;
  /** Whether or not the list is loading */
  loading?: boolean;
  /** Called when an option becomes focused or hovered */
  onOptionFocus?: (option: OptionType) => void;
  /** Called when an option is selected */
  onOptionChange?: (option: OptionType) => void;
  /** Called when the mouse moves outside of the option
   * or the option loses focus */
  onOptionBlur?: (option: OptionType) => void;
  /** A list of options */
  option?: OptionType;
  /** The option key that should be set when an option is not set */
  optionKey?: string;
  /** Whether or not to show the icon if it's available */
  showIcon?: boolean;
  /** Use a checkbox to show selected state */
  useCheckbox?: boolean;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({
  className,
  disableTabbing = false,
  isCompact = true,
  isFocused = false,
  isSelected = false,
  loading,
  onOptionFocus,
  onOptionChange,
  onOptionBlur,
  option,
  optionKey,
  showIcon = true,
  useCheckbox,
  ...rest
}: ListItemProps) => {
  const isOptionDisabled = (): boolean => {
    if (option?.type === 'list') {
      return option?.disabled ?? false;
    }
    return false;
  };

  const onListItemFocus = (option: OptionType): void => {
    if (
      (option.type === 'list' && !option.disabled && onOptionFocus) ||
      (option.type === 'member' && onOptionFocus)
    ) {
      onOptionFocus(option);
    }
  };

  const onListItemBlur = (option: OptionType): void => {
    if (
      (option.type === 'list' && !option.disabled && onOptionBlur) ||
      (option.type === 'member' && onOptionBlur)
    ) {
      onOptionBlur(option);
    }
  };

  const handleOptionChange = (option: OptionType): void => {
    if (!isOptionDisabled() && onOptionChange) {
      onOptionChange(option);
    }
  };

  const listItemClasses = cx('ids-list-item', className, {
    'ids-list-item--compact': isCompact,
    'ids-list-item--selectable': !isOptionDisabled() && onOptionChange,
    'ids-list-item--member': option?.type === 'member',
    'ids-list-item--selected': isSelected,
    'ids-list-item--focused': isFocused,
    'ids-list-item--disabled':
      option?.type === 'list' ? option?.disabled : false,
    'ids-list-item--loading': loading,
  });

  const shouldShowVisualIdentifier =
    (option?.src || option?.color || option?.icon) && showIcon;
  const visualIdentifierContainerClasses = cx(
    'ids-list-item__visual-identifier-container',
    {
      'ids-list-item__svg-container': option?.icon && showIcon,
    }
  );

  const visualIdentifierElement = shouldShowVisualIdentifier && option && (
    <div className={visualIdentifierContainerClasses}>
      <VisualIdentifier
        className="ids-list-item__visual"
        icon={option?.icon}
        color={option?.color}
        src={option?.src}
        size={option?.type === 'member' ? 'medium' : 'small'}
      />
    </div>
  );

  const listItemContent =
    option?.type === 'list' ? (
      <span className="ids-list-item__text-body">
        <span className="ids-list-item__text-content">
          <span className="ids-list-item__text-label">{option.label}</span>
          {option.description && (
            <span className="ids-list-item__text-description">
              {option.description}
            </span>
          )}
        </span>
        {option.action && (
          <span className="ids-list-item__text-action">{option.action}</span>
        )}
      </span>
    ) : (
      <>
        <span className="ids-list-item__text-member">
          {option?.member}
          {option?.manager && (
            <UserSolid size="small" className="ids-list-item__manager" />
          )}
        </span>
        {option?.role && (
          <span className="ids-list-item__text-role">{option.role}</span>
        )}
      </>
    );

  return (
    <li
      className={listItemClasses}
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        e.preventDefault();
        const { target } = e;
        if (
          !(target as HTMLElement).closest('a') &&
          !(target as HTMLElement).closest('button')
        ) {
          if (option) {
            handleOptionChange(option);
          }
        }
      }}
      onMouseOver={() => option && onListItemFocus(option)}
      onMouseOut={() => option && onListItemBlur(option)}
      onBlur={() => option && onListItemBlur(option)}
      onFocus={() => option && onListItemFocus(option)}
      role="option"
      aria-selected={isSelected}
      tabIndex={
        disableTabbing || isOptionDisabled() || !onOptionChange ? -1 : 0
      }
      key={option ? option?.value : `loading_${optionKey}`}
      data-intercom-target={option?.intercomTarget}
      {...rest}
    >
      <div className="ids-list-item__content">
        {useCheckbox && <span className="ids-list-item__checkbox" />}

        {loading ? (
          <span className="ids-list-item__thumbnail" />
        ) : (
          visualIdentifierElement
        )}
        <span className="ids-list-item__text">{option && listItemContent}</span>
      </div>
    </li>
  );
};

export default ListItem;

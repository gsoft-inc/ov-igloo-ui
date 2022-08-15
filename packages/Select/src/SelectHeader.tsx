import * as React from 'react';
import cx from 'classnames';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';

import SelectValue from './SelectValue';
import SelectPlaceholder from './SelectPlaceholder';

export interface SelectHeaderProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the SelectHeader. */
  className?: string;
  /** If the option is disables. */
  disabled?: boolean;
  /** If the select is an error state. */
  error?: boolean;
  /** Icon to display to the right of the option. */
  icon?: React.ReactNode;
  /** True if the option list is displayed. */
  isOpen?: boolean;
  /** Option title. */
  label: React.ReactNode;
  /** Callback when content is clicked. */
  onClick?: () => void;
  /** Will be displayed when no item are selected. */
  placeHolder?: React.ReactNode;
}

const SelectHeader: React.FunctionComponent<SelectHeaderProps> = (
  props: SelectHeaderProps
) => {
  const {
    className,
    disabled = false,
    error = false,
    icon,
    isOpen = false,
    label,
    onClick,
    placeHolder,
    ...rest
  } = props;

  const selectHeaderClasses = cx('select-header', className, {
    'select-header--active': isOpen,
    'select-header--disabled': disabled,
    'select-header--error': error,
  });

  return (
    <div className={selectHeaderClasses} {...rest}>
      {label ? (
        <SelectValue icon={icon} label={label} index={-1} onClick={onClick} />
      ) : (
        <SelectPlaceholder placeHolder={placeHolder} />
      )}
      {isOpen ? (
        <ChevronUp className="select-header__arrow" size="small" />
      ) : (
        <ChevronDown className="select-header__arrow" size="small" />
      )}
    </div>
  );
};

export default SelectHeader;

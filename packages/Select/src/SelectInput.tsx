import * as React from 'react';
import cx from 'classnames';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';

import './select-input.scss';

export interface SelectInputProps extends React.ComponentProps<'div'> {
  /** Default value displayed in the Select Input. */
  children?: React.ReactNode;
  /** True if the Select Input is disabled. */
  disabled?: boolean;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const SelectInput: React.FunctionComponent<SelectInputProps> = (
  props: SelectInputProps
) => {
  const { children, disabled = false, isOpen = false, ...rest } = props;

  const selectInputClasses = cx('ids-select__input', {
    'ids-select__input--disabled': disabled,
    'ids-select__input--active': isOpen,
  });

  return (
    <div className={selectInputClasses} {...rest}>
      {children}
      <div className="ids-select__input__chevron">
        {isOpen ? <ChevronUp size="small" /> : <ChevronDown size="small" />}
      </div>
    </div>
  );
};

export default SelectInput;

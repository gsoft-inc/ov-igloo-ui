import * as React from 'react';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';

import './select-input.scss';

export interface SelectInputProps extends React.ComponentProps<'div'> {
  /** Default value displayed in the Select Input. */
  children?: React.ReactNode;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const SelectInput: React.FunctionComponent<SelectInputProps> = (
  props: SelectInputProps
) => {
  const { children, isOpen = false, ...rest } = props;

  return (
    <div className="ids-select__input" {...rest}>
      {children}
      {isOpen ? (
        <ChevronUp className="ids-select__input__chevron" size="small" />
      ) : (
        <ChevronDown className="ids-select__input__chevron" size="small" />
      )}
    </div>
  );
};

export default SelectInput;

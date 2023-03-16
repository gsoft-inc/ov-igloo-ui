import * as React from 'react';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';

import './select-input.scss';

export interface SelectInputProps extends React.ComponentProps<'div'> {
  /** Default value displayed in the Select Input */
  children?: React.ReactNode;
  /** True if the option list is displayed */
  isOpen?: boolean;
  /** Callback for when the clear button is clicked */
}

const SelectInput: React.FunctionComponent<SelectInputProps> = ({
  children,
  isOpen = false,
  ...rest
}: SelectInputProps) => {
  return (
    <div className="ids-select__input" {...rest}>
      {children}
      <div className="ids-select__input-actions">
        {isOpen ? (
          <ChevronUp className="ids-select__input__chevron" size="small" />
        ) : (
          <ChevronDown className="ids-select__input__chevron" size="small" />
        )}
      </div>
    </div>
  );
};

export default SelectInput;

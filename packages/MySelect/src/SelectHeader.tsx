import * as React from 'react';

import './select-header.scss';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';

export interface SelectHeaderProps extends React.ComponentProps<'div'> {
  /** Default value displayed in the select. */
  children?: React.ReactNode;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const SelectHeader: React.FunctionComponent<SelectHeaderProps> = (
  props: SelectHeaderProps
) => {
  const { children, isOpen, ...rest } = props;

  return (
    <div className="ids-my-select--header" {...rest}>
      {children}
      <div className="ids-my-select--header-chevron">
        {isOpen ? <ChevronUp size="small" /> : <ChevronDown size="small" />}
      </div>
    </div>
  );
};

export default SelectHeader;

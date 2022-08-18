import * as React from 'react';

import './select-header.scss';

import ChevronUp from '@igloo-ui/icons/dist/TableChevronSelectedUp';
import ChevronDown from '@igloo-ui/icons/dist/TableChevronSelectedDown';

export interface SelectHeaderProps extends React.ComponentProps<'div'> {
  /** Default value displayed in the Select. */
  children?: React.ReactNode;
  /** True if the option list is displayed. */
  isOpen?: boolean;
}

const SelectHeader: React.FunctionComponent<SelectHeaderProps> = (
  props: SelectHeaderProps
) => {
  const { children, isOpen, ...rest } = props;

  return (
    <div className="ids-select-header" {...rest}>
      {children}
      <div className="ids-select-header__chevron">
        {isOpen ? <ChevronUp size="small" /> : <ChevronDown size="small" />}
      </div>
    </div>
  );
};

export default SelectHeader;

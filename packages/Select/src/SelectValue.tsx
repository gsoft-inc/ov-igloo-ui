import React from 'react';
import cx from 'classnames';

import './select-value.scss';

export interface SelectValueProps extends React.ComponentPropsWithRef<'div'> {
  /** If the option is disabled. */
  disabled?: boolean;
  /** Icon to display to the right of the option. */
  icon?: React.ReactNode;
  /** True for a compact appearance. */
  isCompact?: boolean;
  /** True if the value is a placeholder. */
  isPlaceholder?: boolean;
  /** Option title. */
  label: React.ReactNode;
}

const SelectValue: React.FunctionComponent<SelectValueProps> = (
  props: SelectValueProps
) => {
  const {
    disabled = false,
    icon,
    isCompact = false,
    isPlaceholder = false,
    label,
    ...rest
  } = props;

  const selectValueClasses = cx('ids-select__value', {
    'ids-select__value--disabled': disabled,
    'ids-select__value--compact': isCompact,
    'ids-select__value--placeholder': !disabled && isPlaceholder,
  });

  return (
    <div className={selectValueClasses} {...rest}>
      {icon}
      {label}
    </div>
  );
};

export default SelectValue;

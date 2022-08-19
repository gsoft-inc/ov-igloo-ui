import React from 'react';
import cx from 'classnames';

import './select-value.scss';

export interface SelectValueProps extends React.ComponentPropsWithRef<'div'> {
  /** If the option is disabled. */
  disabled?: boolean;
  /** Icon to display to the right of the option. */
  icon?: React.ReactNode;
  /** Option title. */
  label: React.ReactNode;
  /** True if the value is a placeholder. */
  isPlaceholder?: boolean;
}

const SelectValue: React.FunctionComponent<SelectValueProps> = (
  props: SelectValueProps
) => {
  const { disabled = false, icon, label, isPlaceholder, ...rest } = props;

  const selectValueClasses = cx('ids-select-value', {
    'ids-select-value--disabled': disabled,
    'ids-select-value--placeholder': !disabled && isPlaceholder,
  });

  return (
    <div className={selectValueClasses} {...rest}>
      {icon && <div className="ids-select-value__icon">{icon}</div>}
      <div className="ids-select-value__label">{label}</div>
    </div>
  );
};

export default SelectValue;

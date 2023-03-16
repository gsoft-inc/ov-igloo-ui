import React from 'react';
import cx from 'classnames';

// eslint-disable-next-line import/no-extraneous-dependencies
import { VisualIdentifier } from '@shared/components';

import './select-value.scss';

export interface SelectValueProps extends React.ComponentPropsWithRef<'div'> {
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** If the option is disabled */
  disabled?: boolean;
  /** Icon to display to the right of the option */
  icon?: React.ReactElement;
  /** True for a compact appearance */
  isCompact?: boolean;
  /** True if the value is a placeholder */
  isPlaceholder?: boolean;
  /** Option title */
  label: React.ReactNode;
  /** Specifies the url for the image to show */
  src?: string;
}

const SelectValue: React.FunctionComponent<SelectValueProps> = ({
  color,
  disabled = false,
  icon,
  isCompact = false,
  isPlaceholder = false,
  label,
  src,
  ...rest
}: SelectValueProps) => {
  const shouldShowVisualIdentifier = src || color || icon;

  const selectValueClasses = cx('ids-select__value', {
    'ids-select__value--disabled': disabled,
    'ids-select__value--compact': isCompact,
    'ids-select__value--placeholder': !disabled && isPlaceholder,
  });

  return (
    <div className={selectValueClasses} {...rest}>
      {shouldShowVisualIdentifier && (
        <div className="ids-select__value-visual-identifier-container">
          <VisualIdentifier
            className="ids-select__value-visual"
            color={color}
            src={src}
            icon={icon}
          />
        </div>
      )}
      {label}
    </div>
  );
};

export default SelectValue;

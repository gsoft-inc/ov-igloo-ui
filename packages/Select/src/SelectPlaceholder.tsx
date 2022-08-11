import * as React from 'react';
import cx from 'classnames';

export interface SelectPlaceholderProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the SelectPlaceholder. */
  className?: string;
  /** The select placeholder */
  placeHolder: React.ReactNode;
}

const SelectPlaceholder: React.FunctionComponent<SelectPlaceholderProps> = (
  props: SelectPlaceholderProps
) => {
  const { className, placeHolder, ...rest } = props;

  const selectPlaceholderClasses = cx('select-placeholder', className);

  return (
    <div
      className={selectPlaceholderClasses}
      role="button"
      tabIndex={-1}
      {...rest}
    >
      <div className="select-placeholder__placeholder">{placeHolder}</div>
    </div>
  );
};

export default SelectPlaceholder;

/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

export type Position =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';
export type Size = 'xsmall' | 'small' | 'medium' | 'large';
export type Role = 'listbox' | 'menu';

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** The target button, text, svg etc.. of the Dropdown. */
  children?: React.ReactElement;
  /** Add a specific class to the dropdown. */
  className?: string;
  /** Default value displayed in the Dropdown. */
  content: React.ReactNode;
  /** Position of the Dropdown. */
  position?: Position;
  /** Changes the size of the card, giving it more or less padding. */
  size?: Size;
  /** True if the Dropdown list is displayed. */
  isOpen?: boolean;
  /** Callback when the user clicks outside the Dropdown. */
  onClose?: () => void;
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** The role of the dropdown for aria purposes. */
  role?: Role;
  /** Render the reference element to be able to add the
   * reference props directly. This overrides children */
  renderReference?: (
    props: React.HTMLProps<HTMLButtonElement>
  ) => React.ReactElement;
}

const MockDropdown: React.FunctionComponent<DropdownProps> = ({
  children,
  className,
  content,
  size,
  onClose,
  dataTest,
  isOpen = true,
  position,
  role,
  renderReference,
  ...rest
}: DropdownProps) => {
  const { x, y, refs } = {
    x: 0,
    y: 0,
    refs: {
      setFloating: () => {},
      setReference: () => {},
    },
  };

  const { getReferenceProps } = {
    getReferenceProps: (): Record<string, unknown> => {
      return {};
    },
  };

  const dropdownClasses = [
    'ids-dropdown',
    className,
    size !== 'xsmall' && `ids-dropdown--${size}`,
    position !== 'bottom' && `ids-dropdown--${position}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {renderReference ? (
        renderReference({ ref: refs.setReference, ...getReferenceProps() })
      ) : (
        <div className="ids-dropdown__ref" ref={refs.setReference}>
          {children}
        </div>
      )}
      <div
        ref={refs.setFloating}
        className={dropdownClasses}
        data-test={dataTest}
        {...rest}
        data-show={isOpen}
        style={{
          position: 'fixed',
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {content}
      </div>
    </>
  );
};

export default MockDropdown;

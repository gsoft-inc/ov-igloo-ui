import * as React from 'react';
export declare type Position =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';
export declare type Size = 'xsmall' | 'small' | 'medium' | 'large';
export declare type Role = 'listbox' | 'menu';
export interface ReferenceProps {
  ref: React.RefCallback<Element>;
  getReferenceProps: () => void;
}
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
  renderReference?: (props: ReferenceProps) => React.ReactElement;
}
declare const MockDropdown: React.FunctionComponent<DropdownProps>;
export default MockDropdown;

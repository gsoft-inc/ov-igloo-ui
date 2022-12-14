import * as React from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';

import { usePopper } from 'react-popper';
import { useTransition, animated } from 'react-spring';

import useClickOutside from './hooks/useClickOutside';
import useMergeRefs from './hooks/useMergeRefs';

import './dropdown.scss';

export type Position =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';
export type Size = 'xsmall' | 'small' | 'medium' | 'large';

export enum Placement {
  top = 'top',
  topLeft = 'top-start',
  topRight = 'top-end',
  bottom = 'bottom',
  bottomLeft = 'bottom-start',
  bottomRight = 'bottom-end',
}

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {
  /** The target button, text, svg etc.. of the Dropdown. */
  children: React.ReactElement;
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
}

const Dropdown: React.FunctionComponent<DropdownProps> = React.forwardRef(
  (props: DropdownProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      content,
      size = 'xsmall',
      onClose,
      dataTest,
      isOpen = false,
      position = 'bottomLeft',
      ...rest
    } = props;

    const [referenceElement, setReferenceElement] =
      React.useState<HTMLElement | null>(null);
    const [dropdownElement, setDropdownElement] =
      React.useState<HTMLElement | null>(null);

    const refCallback = useMergeRefs([setDropdownElement, ref]);

    const { styles, attributes, update } = usePopper(
      referenceElement,
      dropdownElement,
      {
        placement: Placement[position],
        strategy: 'fixed',
        modifiers: [
          { name: 'offset', options: { offset: [0, 1] } },
          {
            name: 'flip',
          },
        ],
      }
    );

    const initialTransform = position === 'bottom' ? '-1rem' : '1rem';
    const transition = useTransition(isOpen, {
      from: {
        opacity: 0,
        y: initialTransform,
      },
      enter: {
        opacity: 1,
        y: '0rem',
      },
      leave: { opacity: 0, y: initialTransform },
      config: { duration: 150 },
    });

    const handleOnClose = (): void => {
      if (onClose) {
        onClose();
      }
    };

    const dropdownClasses = cx('ids-dropdown', {
      [`ids-dropdown--${size}`]: size !== 'xsmall',
      [`ids-dropdown--${position}`]: position !== 'bottom',
    });

    const dropdownHTML = ReactDom.createPortal(
      <>
        {transition(
          (animationStyles, item) =>
            item && (
              <animated.div
                style={{ ...animationStyles, ...styles.popper }}
                ref={refCallback}
                className={dropdownClasses}
                data-test={dataTest}
                {...attributes.popper}
                {...rest}
                data-show={isOpen}
              >
                {content}
              </animated.div>
            )
        )}
      </>,
      document.body
    );

    useClickOutside([referenceElement, dropdownElement], handleOnClose);

    React.useEffect(() => {
      if (update !== null && isOpen) {
        update();
      }
    }, [isOpen, update]);

    return (
      <>
        <div ref={setReferenceElement}>{children}</div>
        {dropdownHTML}
      </>
    );
  }
);

export default Dropdown;

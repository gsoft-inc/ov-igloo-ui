import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

import useCombinedRefs from './UseCombinedRefs';

import Dropdown from './Dropdown';

import './collapsible-dropdown.scss';

export interface CollapsibleDropdownProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the CollapsibleDropdown. */
  className?: string;
  /** If the option is disables. */
  disabled?: boolean;
  /** If the option is disables. */
  dropdown?: React.ReactNode;
  /** If the select is an error state. */
  error?: boolean;
  /** True if the option list is displayed. */
  isOpen?: boolean;
  /** Will be displayed when no item are selected. */
  placeHolder?: React.ReactNode;
}

const CollapsibleDropdown: React.FunctionComponent<CollapsibleDropdownProps> =
  React.forwardRef(
    (props: CollapsibleDropdownProps, ref: React.Ref<HTMLDivElement>) => {
      const {
        className,
        disabled = false,
        dropdown,
        error = false,
        isOpen = false,
        placeholder,
        ...rest
      } = props;

      //React.forwardRef(({ id, disabled, className, isOpen, dropdown, onOpen, onClose, tabIndex, children, position, dropdownClassName, openOnClick, openOnHover, spacing, intercomTarget, canHoverDropdownContent }, ref) => {
      const [state, setState] = React.useState(isOpen || false);
      const [dropdownWidth, setDropdownWidth] = React.useState(0);
      const dropdownButtonRef = React.useRef(null);
      const dropdownButtonCombinedRefs = useCombinedRefs(
        ref,
        dropdownButtonRef
      );
      const dropdownContainerRef = React.useRef(null);

      const handleOnOpen = () => {
        if (state || disabled) {
          return;
        }

        setState(true);
      };

      const handleOnClose = React.useCallback(() => {
        if (!state) {
          return;
        }

        setState(false);
      }, [state]);

      const handleToggleOpen = () => {
        if (state) {
          handleOnClose();
        } else {
          handleOnOpen();
        }
      };

      const handleToggleOpenClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        handleToggleOpen();
      };

      React.useLayoutEffect(() => {
        const width =
          dropdownContainerRef?.current?.getBoundingClientRect().width ?? 0;
        setDropdownWidth(width);
      }, [isOpen]);

      React.useEffect(() => {
        if (isOpen) {
          if (disabled) {
            return;
          }

          setState(true);
        } else {
          setState(false);
        }
      }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

      const classes = classNames('collapsible-dropdown', className, {
        'collapsible-dropdown--disabled': disabled,
      });

      const interactableRegionClasses = classNames(
        'collapsible-dropdown__interactable-region',
        {
          'collapsible-dropdown__interactable-region--clickable': openOnClick,
        }
      );

      const interactableRegion = (
        <div
          className={interactableRegionClasses}
          onClick={openOnClick ? handleToggleOpenClick : noop()}
          onMouseEnter={openOnHover ? handleOnOpen : noop()}
          ref={dropdownButtonCombinedRefs}
        >
          {children}
        </div>
      );

      const above = useMemo(
        () =>
          [Positions.TopLeft, Positions.TopCenter, Positions.TopRight].includes(
            position
          ),
        [position]
      );
      const spacingStyles = useMemo(() => {
        switch (position) {
          case Positions.TopLeft:
            return {
              transform: 'translate(0, -100%)',
              marginTop:
                -(
                  dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                    .height ?? 0
                ) - spacing,
            };

          case Positions.TopCenter:
            return {
              transform: 'translate(-50%, -100%)',
              marginTop:
                -(
                  dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                    .height ?? 0
                ) - spacing,
              marginLeft:
                (dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .width ?? 0) / 2,
            };

          case Positions.TopRight:
            return {
              transform: 'translate(-100%, -100%)',
              marginTop:
                -(
                  dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                    .height ?? 0
                ) - spacing,
              marginLeft:
                dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .width ?? 0,
            };

          case Positions.BottomCenter:
            return {
              transform: 'translateX(-50%)',
              marginLeft:
                (dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .width ?? 0) / 2,
              marginTop: spacing,
            };

          case Positions.BottomRight:
            return {
              transform: 'translateX(-100%)',
              marginLeft:
                dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .width ?? 0,
              marginTop: spacing,
            };

          case Positions.RightCenter:
            return {
              transform: 'translate(0, -50%)',
              marginTop:
                -(
                  dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                    .height ?? 0
                ) / 2,
              marginLeft:
                (dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .width ?? 0) + spacing,
              top:
                (dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .top ?? 0) +
                (dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .height ?? 0),
            };

          case Positions.RightTop:
            return {
              marginTop: -(
                dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .height ?? 0
              ),
              marginLeft:
                (dropdownButtonCombinedRefs?.current?.getBoundingClientRect()
                  .width ?? 0) + spacing,
            };

          default:
            return {
              marginTop: spacing,
            };
        }
      }, [
        position,
        ref,
        ref?.current?.getBoundingClientRect().width,
        dropdownButtonCombinedRefs,
        dropdownButtonCombinedRefs?.current?.getBoundingClientRect().width,
        dropdownWidth,
        isOpen,
      ]); // eslint-disable-line react-hooks/exhaustive-deps
      // ref?.current?.getBoundingClientRect().width is to adjust the position of the calendar when the width of the parent component changes

      const dropdownRegion = (
        <div
          className="collapsible-dropdown__dropdown"
          style={spacingStyles}
          ref={dropdownContainerRef}
        >
          <Dropdown
            className={dropdownClassName}
            isOpen={state}
            above={above}
            onTheRight={position === Positions.RightCenter}
          >
            {dropdown}
          </Dropdown>
        </div>
      );

      return (
        <div className={classes} data-intercom-target={intercomTarget}>
          <input
            id={id}
            className="collapsible-dropdown__check"
            type="checkbox"
            tabIndex={tabIndex}
            disabled={disabled}
          />
          <React.Fragment>
            {interactableRegion}
            {dropdownRegion}
          </React.Fragment>
        </div>
      );
    }
  );

CollapsibleDropdown.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  dropdown: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  tabIndex: PropTypes.string,
  children: PropTypes.node.isRequired,

  /**
   * Class names to add to the inner collapsible dropdown.
   */
  dropdownClassName: PropTypes.string,

  /**
   * The position and alignment of the dropdown in respect to its header
   */
  position: PropTypes.oneOf([
    Positions.TopRight,
    Positions.TopCenter,
    Positions.TopLeft,
    Positions.BottomRight,
    Positions.BottomCenter,
    Positions.BottomLeft,
    Positions.RightCenter,
    Positions.RightTop,
  ]),
  /**
   * Spacing between the dropdown and the header
   */
  spacing: PropTypes.number,
  openOnClick: PropTypes.bool,
  openOnHover: PropTypes.bool,
  intercomTarget: PropTypes.string,
  canHoverDropdownContent: PropTypes.bool,
};

CollapsibleDropdown.defaultProps = {
  tabIndex: '0',
  position: Positions.BottomLeft,
  openOnClick: true,
  openOnHover: false,
  spacing: 0,
  canHoverDropdownContent: false,
};

CollapsibleDropdown.Position = Positions;

export default CollapsibleDropdown;

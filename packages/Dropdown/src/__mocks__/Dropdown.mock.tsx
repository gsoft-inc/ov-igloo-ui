/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";

export type Position =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";
export type Size = "xsmall" | "small" | "medium" | "large";
export type Role = "listbox" | "menu";

export interface DropdownProps
    extends Omit<React.ComponentPropsWithRef<"div">, "content"> {
    /** The target button, text, svg etc.. of the Dropdown. */
    children?: React.ReactElement;
    /** Add a specific class to the dropdown. */
    className?: string;
    /** Default value displayed in the Dropdown. */
    content: React.ReactNode;
    /** Disables the component from appending the dropdown
   * to the end of the body using ReactPortal */
    disablePortal?: boolean;
    /** Position of the Dropdown. */
    position?: Position;
    /** Changes the size of the card, giving it more or less padding. */
    size?: Size;
    /** True if the Dropdown list is displayed. */
    isOpen?: boolean;
    /** Callback when the user clicks outside the Dropdown. */
    onClose?: () => void;
    /** Callback when the Dropdown is closed and animations are done */
    onAfterClose?: () => void;
    /** Add a data-test tag for automated tests. */
    dataTest?: string;
    /** The role of the dropdown for aria purposes. */
    role?: Role;
    /** Render the reference element to be able to add the
   * reference props directly. This overrides children */
    renderReference?: (
        props: React.HTMLProps<HTMLButtonElement>,
    ) => React.ReactElement;
    /** Whether or not the dropdown should take the
   * width of the reference element */
    isReferenceWidth?: boolean;
    /** Whether or not the dropdown should be scrollable */
    isScrollable?: boolean;
    /** The footer content of the dropdown */
    footer?: React.ReactNode;
    /** Callback when the user scrolls to the end of the Dropdown */
    onScrollEnd?: () => void;
    /** The threshold in pixels from the bottom of the dropdown
   * to trigger the onScrollEnd callback */
    scrollEndThreshold?: number;
    /** The offset of the dropdown from the reference */
    dropdownOffset?: number;
}

const MockDropdown: React.FunctionComponent<DropdownProps> = ({
    children,
    className,
    content,
    size = "xsmall",
    onClose,
    onAfterClose,
    dataTest,
    disablePortal = false,
    isOpen = false,
    position = "bottom-start",
    style,
    role = "listbox",
    renderReference,
    isReferenceWidth = false,
    isScrollable = false,
    footer,
    onScrollEnd,
    scrollEndThreshold = 30,
    dropdownOffset = 4,
    ...rest
}: DropdownProps) => {
    const { x, y, refs } = {
        x: 0,
        y: 0,
        refs: {
            setFloating: () => {},
            setReference: () => {}
        }
    };

    const { getReferenceProps } = {
        getReferenceProps: (): Record<string, unknown> => {
            return {};
        }
    };

    const [scrollEndTriggered, setScrollEndTriggered] = React.useState(false);

    const onDropdownScroll = (e: React.UIEvent<HTMLDivElement>): void => {
        const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
        const threshold = scrollEndThreshold || 1;

        if (scrollEndTriggered) {
            if (scrollHeight - scrollTop - clientHeight > threshold) {
                setScrollEndTriggered(false);
            }

            return;
        }

        if (scrollHeight - scrollTop - clientHeight <= threshold) {
            if (onScrollEnd) {
                setScrollEndTriggered(true);
                onScrollEnd();
            }
        }
    };

    const dropdownClasses = [
        "ids-dropdown",
        className,
        size !== "xsmall" && `ids-dropdown--${size}`,
        position !== "bottom" && `ids-dropdown--${position}`,
        isScrollable && "ids-dropdown--scrollable"
    ]
        .filter(Boolean)
        .join(" ");

        
    const dropdownScrollProps: React.HTMLAttributes<HTMLDivElement> = {
        className: "ids-dropdown__scroll-content"
    };
    if (onScrollEnd) {
        dropdownScrollProps.onScroll = onDropdownScroll;
    }

    return (
        <>
            {renderReference ? (
                renderReference({ ref: refs.setReference, ...getReferenceProps() })
            ) : (
                <div className="ids-dropdown__ref" ref={refs.setReference}>
                    {children}
                </div>
            )}
            {isOpen && (
                <div
                    ref={refs.setFloating}
                    className={dropdownClasses}
                    data-test={dataTest}
                    {...rest}
                    data-show={isOpen}
                    style={{
                        position: disablePortal ? "absolute" : "fixed",
                        top: y ?? 0,
                        left: x ?? 0,
                        ...style
                    }}
                >
                    <div {...dropdownScrollProps}>{content}</div>
                    {footer && <div className="ids-dropdown__footer">{footer}</div>}
                </div>
            )}
        </>
    );
};

export default MockDropdown;

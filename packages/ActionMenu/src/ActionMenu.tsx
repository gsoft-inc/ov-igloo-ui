import * as React from "react";
import cx from "classnames";

import List, { type OptionType, type Option } from "@igloo-ui/list";
import Dropdown, { type Position } from "@igloo-ui/dropdown";

import "./action-menu.scss";

export enum Keys {
    Enter = "Enter",
    Space = " ",
    ArrowDown = "ArrowDown",
    ArrowUp = "ArrowUp",
    Escape = "Escape",
    Tab = "Tab",
    Home = "Home",
    End = "End"
}

export type FocusDirection = "first" | "last" | "up" | "down";

export interface ActionMenuOption extends Omit<Option, "type"> {
    /** Whether or not the action menu should close when an option is selected */
    closeOnSelect?: boolean | ((option: OptionType) => boolean);
    /** Callback when an option is selected */
    onClick?: () => void;
}

export interface ActionMenuProps extends React.ComponentProps<"div"> {
    /** Add a specific class to the action menu */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Whether or not the menu should use ReactPortal
   * to append to the body */
    disablePortal?: boolean;
    /** Add a specific class to the dropdown */
    dropdownClassName?: string;
    /** Offset of the dropdown */
    dropdownOffset?: number;
    /** Whether or not the action menu should be open by default */
    isOpen?: boolean;
    /** Callback when the action menu is closed and animations are done */
    onAfterMenuClose?: () => void;
    /** Callback when the action menu is closed  */
    onMenuClose?: () => void;
    /** Callback when the action menu is opened  */
    onMenuOpen?: () => void;
    /** A list of options to display in the action menu */
    options: ActionMenuOption[];
    /** Position of the action menu */
    position?: Position;
    /** Render the reference element to be able to add the
     * reference props directly */
    renderReference: (
        props: React.HTMLProps<HTMLButtonElement>,
    ) => React.ReactElement;
    /** Footer to display helper text or other content below the options */
    footer?: React.ReactNode;
}

const ActionMenu: React.FunctionComponent<ActionMenuProps> = ({
    className,
    dataTest,
    disablePortal = false,
    dropdownClassName,
    dropdownOffset,
    isOpen = false,
    onAfterMenuClose,
    onMenuClose,
    onMenuOpen,
    options,
    position = "bottom-end",
    renderReference,
    footer,
    ...rest
}: ActionMenuProps) => {
    const actionMenuOptions = options.map((option): OptionType => {
        return {
            ...option,
            type: "list"
        };
    });

    const [showMenu, setShowMenu] = React.useState(isOpen);
    const [currentFocusedOption, setCurrentFocusedOption] =
        React.useState<OptionType>();

    const isOptionDisabled = (option: OptionType | undefined): boolean => {
        if (option?.type === "list") {
            return option?.disabled ?? false;
        }

        return false;
    };

    const toggleMenu = (open: boolean): void => {
        setShowMenu(open);

        if (!open) {
            setCurrentFocusedOption(undefined);
            if (onMenuClose) {
                onMenuClose();
            }
        } else if (onMenuOpen) {
            onMenuOpen();
        }
    };

    const closeMenuOnSelect = (option: OptionType): boolean => {
        const actionMenuOption = options.find(
            actionMenuOption => actionMenuOption.value === option.value
        );
        const closeOnSelect = actionMenuOption?.closeOnSelect ?? true;
        if (typeof closeOnSelect === "function") {
            return closeOnSelect(option);
        }

        return closeOnSelect;
    };

    const selectOption = (option: OptionType): void => {
        const actionMenuOption = options.find(
            actionMenuOption => actionMenuOption.value === option.value
        );
        const onOptionSelect = actionMenuOption?.onClick;
        if (onOptionSelect) {
            onOptionSelect();
        }

        if (closeMenuOnSelect(option)) {
            toggleMenu(false);
        }
    };

    const hoverOption = (option: OptionType): void => {
        setCurrentFocusedOption(option);
    };

    const focusOption = (direction: FocusDirection = "first"): void => {
        const enabledOptions = actionMenuOptions.filter(
            option => !isOptionDisabled(option)
        );
        if (!enabledOptions.length) { return; }

        let currentFocusedIndex = -1;
        if (currentFocusedOption) {
            currentFocusedIndex = enabledOptions.findIndex(
                enabledOption => enabledOption.value === currentFocusedOption.value
            );
        }

        switch (direction) {
            case "up":
                setCurrentFocusedOption(
                    enabledOptions[
                        currentFocusedIndex > 0
                            ? currentFocusedIndex - 1
                            : enabledOptions.length - 1
                    ]
                );
                break;
            case "down":
                setCurrentFocusedOption(
                    enabledOptions[(currentFocusedIndex + 1) % enabledOptions.length]
                );
                break;
            case "last":
                setCurrentFocusedOption(enabledOptions[enabledOptions.length - 1]);
                break;
            default:
                setCurrentFocusedOption(enabledOptions[0]);
                break;
        }
    };

    const handleOnKeyDown = (
        keyboardEvent: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
        switch (keyboardEvent.key) {
            case Keys.Escape:
                if (showMenu) {
                    toggleMenu(showMenu);
                }
                break;
            case Keys.Enter:
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                if (currentFocusedOption) {
                    selectOption(currentFocusedOption);
                }
                if ((!currentFocusedOption && showMenu) || !showMenu) {
                    toggleMenu(!showMenu);
                }
                break;
            case Keys.Space:
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                if (!showMenu) {
                    toggleMenu(true);
                }
                break;
            case Keys.ArrowUp:
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();

                focusOption("up");
                break;
            case Keys.ArrowDown:
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                focusOption("down");
                break;
            case Keys.Home:
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();

                focusOption("first");
                break;
            case Keys.End:
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();

                focusOption("last");
                break;
            case Keys.Tab:
                if (showMenu) {
                    toggleMenu(showMenu);
                }

                break;
            default:
                break;
        }
    };

    const actionMenuClassname = cx("ids-action-menu", className);

    return (
        <div className={actionMenuClassname} data-test={dataTest} {...rest}>
            <Dropdown
                key="selectDropdown"
                role="menu"
                disablePortal={disablePortal}
                content={
                    <List
                        options={actionMenuOptions}
                        onOptionFocus={hoverOption}
                        onOptionBlur={() => setCurrentFocusedOption(undefined)}
                        onOptionChange={selectOption}
                        focusedOption={currentFocusedOption}
                        disableTabbing
                    />
                }
                isOpen={showMenu}
                className={cx("ids-action-menu__dropdown", dropdownClassName)}
                dropdownOffset={dropdownOffset}
                position={position}
                onClose={() => toggleMenu(false)}
                onAfterClose={onAfterMenuClose}
                renderReference={(refProps: React.HTMLProps<HTMLButtonElement>) => {
                    return renderReference({
                        ...refProps,
                        onClick: () => toggleMenu(!showMenu),
                        onKeyDown: e => {
                            handleOnKeyDown(e);
                        },
                        className: "ids-action-menu__trigger"
                    });
                }}
                footer={footer}
            />
        </div>
    );
};

export default ActionMenu;

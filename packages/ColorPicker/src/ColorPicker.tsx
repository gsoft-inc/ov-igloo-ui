import * as React from "react";

import cx from "classnames";
import { Button, type ButtonProps, ListBox } from "react-aria-components";
import { mergeProps, FocusScope } from "react-aria";
import type { Selection } from "react-stately";

import Dropdown from "@igloo-ui/dropdown";
import Color from "@igloo-ui/color";
import Checkmark from "@igloo-ui/icons/dist/Checkmark";
import variables from "@igloo-ui/tokens/dist/base10/tokens.json";

import ColorPickerOption from "./ColorPickerOption";

import "./color-picker.scss";

export interface ColorNameItem {
    id: string;
    value: string;
    hoverColor: string;
    iconColor: string;
}

export const colorNamesIgloo = [
    { 
        id: "dandelion200", 
        value: variables.dandelion200, 
        hoverColor: variables.dandelion200, 
        iconColor: variables.samoyed 
    },
    { 
        id: "dandelion400", 
        value: variables.dandelion400, 
        hoverColor: variables.dandelion400, 
        iconColor: variables.samoyed 
    },
    { 
        id: "creamsicle150", 
        value: variables.creamsicle150, 
        hoverColor: variables.creamsicle150, 
        iconColor: variables.samoyed 
    },
    { 
        id: "creamsicle200", 
        value: variables.creamsicle200, 
        hoverColor: variables.creamsicle200, 
        iconColor: variables.samoyed 
    },
    { 
        id: "coral200", 
        value: variables.coral200, 
        hoverColor: variables.coral200, 
        iconColor: variables.samoyed 
    },
    { 
        id: "coral300", 
        value: variables.coral300, 
        hoverColor: variables.coral300, 
        iconColor: variables.samoyed 
    },
    { 
        id: "strawberryFields200", 
        value: variables.strawberryFields200, 
        hoverColor: variables.strawberryFields200, 
        iconColor: variables.samoyed 
    },
    { 
        id: "coral800", 
        value: variables.coral800, 
        hoverColor: variables.coral800, 
        iconColor: variables.samoyed 
    },
    { 
        id: "seaweed300", 
        value: variables.seaweed300, 
        hoverColor: variables.seaweed300, 
        iconColor: variables.samoyed 
    },
    { 
        id: "sky100", 
        value: variables.sky100, 
        hoverColor: variables.sky100, 
        iconColor: variables.samoyed 
    },
    { 
        id: "sky200", 
        value: variables.sky200, 
        hoverColor: variables.sky200, 
        iconColor: variables.samoyed 
    },
    { 
        id: "electricBlue200", 
        value: variables.electricBlue200, 
        hoverColor: variables.electricBlue200, 
        iconColor: variables.samoyed 
    },
    { 
        id: "electricBlue400", 
        value: variables.electricBlue400, 
        hoverColor: variables.electricBlue400, 
        iconColor: variables.samoyed 
    },
    { 
        id: "electricBlue700", 
        value: variables.electricBlue700, 
        hoverColor: variables.electricBlue700, 
        iconColor: variables.samoyed 
    }
] as const;

export const colorNamesWorkleap = [
    { 
        id: "decorativeOption3", 
        value: "var(--hop-decorative-option3-surface)", 
        hoverColor: "var(--hop-decorative-option3-surface-hover)", 
        iconColor: "var(--hop-decorative-option3-icon)" 
    },
    { 
        id: "decorativeOption6", 
        value: "var(--hop-decorative-option6-surface)", 
        hoverColor: "var(--hop-decorative-option6-surface-hover)", 
        iconColor: "var(--hop-decorative-option6-icon)" 
    },
    { 
        id: "decorativeOption1", 
        value: "var(--hop-decorative-option1-surface)", 
        hoverColor: "var(--hop-decorative-option1-surface-hover)", 
        iconColor: "var(--hop-decorative-option1-icon)" 
    },
    { 
        id: "decorativeOption8", 
        value: "var(--hop-decorative-option8-surface)", 
        hoverColor: "var(--hop-decorative-option8-surface-hover)", 
        iconColor: "var(--hop-decorative-option8-icon)" 
    },
    { 
        id: "decorativeOption5", 
        value: "var(--hop-decorative-option5-surface)", 
        hoverColor: "var(--hop-decorative-option5-surface-hover)", 
        iconColor: "var(--hop-decorative-option5-icon)" 
    },
    { 
        id: "decorativeOption4", 
        value: "var(--hop-decorative-option4-surface)", 
        hoverColor: "var(--hop-decorative-option4-surface-hover)", 
        iconColor: "var(--hop-decorative-option4-icon)" 
    },
    { 
        id: "decorativeOption2", 
        value: "var(--hop-decorative-option2-surface)", 
        hoverColor: "var(--hop-decorative-option2-surface-hover)", 
        iconColor: "var(--hop-decorative-option2-icon)" 
    },
    { 
        id: "decorativeOption7", 
        value: "var(--hop-decorative-option7-surface)", 
        hoverColor: "var(--hop-decorative-option7-surface-hover)", 
        iconColor: "var(--hop-decorative-option7-icon)" 
    }
] as const;

export type ColorNameIgloo = typeof colorNamesIgloo[number]["id"];
export type ColorNameWL = typeof colorNamesWorkleap[number]["id"];

export type ColorName = ColorNameWL | ColorNameIgloo;

export interface ColorPickerProps {
    /** Add a specific class to the color picker */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Disables the color picker */
    disabled?: boolean;
    /** Callback when a color is selected */
    onSelect?: (color: ColorName) => void;
    /** The selected color */
    selectedColor?: ColorName;
}

const ColorPicker: React.FunctionComponent<ColorPickerProps> = ({
    className,
    dataTest,
    disabled = false,
    onSelect,
    selectedColor: propSelectedColor
}: ColorPickerProps) => {
    const getBrand = (): string => {
        return document.documentElement.getAttribute("data-brand") ?? "igloo";
    };

    const brand = getBrand();

    const getDefaultColor = (): ColorName => {
        return brand === "workleap" ? "decorativeOption3" : "dandelion200";
    };

    const selectedColor = propSelectedColor ?? getDefaultColor();

    let colorNames: ReadonlyArray<Readonly<ColorNameItem>>;

    if (brand === "workleap") {
        colorNames = colorNamesWorkleap;
    } else {
        colorNames = colorNamesIgloo;
    }

    const buttonColorSize = brand === "workleap" ? "medium" : "large";
    const listColorSize = brand === "workleap" ? "large" : "xlarge";
    
    const classes = cx("ids-color-picker", className);
    const [showPicker, setShowPicker] = React.useState(false);
    const selectedColorObject = colorNames.find(color => color.id === selectedColor);
    const selectedColorValue = selectedColorObject?.value;
    const selectedHoverColor = selectedColorObject?.hoverColor;

    const handleSelectionChange = (keys: Selection): void => {
        const color = (keys as Set<ColorName>).keys().next().value;

        if (onSelect) {
            onSelect(color);
        }
        setShowPicker(false);
    };

    return <div className={classes} data-test={dataTest}>
        <Dropdown
            key="colorPickerDropdown"
            role="menu"
            content={
                <FocusScope restoreFocus autoFocus>
                    <div className="ids-color-picker__content">

                        <ListBox 
                            selectionMode="single"
                            selectedKeys={[selectedColor]} 
                            onSelectionChange={handleSelectionChange}
                            items={colorNames}
                            aria-label="Color Options"
                            orientation="horizontal"
                            className="ids-color-picker__list"
                            disallowEmptySelection
                            shouldFocusWrap
                        >
                            {item => {
                                return (
                                    <ColorPickerOption
                                        key={item.id}
                                        id={item.id}
                                        color={item.value}
                                        hoverColor={item.hoverColor}
                                        iconColor={item.iconColor}
                                        icon={<Checkmark size="small" />}
                                        size={listColorSize}
                                    />
                                );
                            }}
                        </ListBox>
                    </div>
                </FocusScope>
            }
            isOpen={showPicker}
            className="ids-action-menu__dropdown"
            onClose={() => setShowPicker(false)}
            renderReference={(
                refProps: React.HTMLProps<HTMLButtonElement>
            ) => {
                const mergedProps = mergeProps({ ...refProps,
                    "data-color": selectedColor }, {
                    onPress: () => {
                        setShowPicker(!showPicker);
                    },
                    className: "ids-color-picker__button",
                    isDisabled: disabled,
                    style: { "--ids-picker-selected-color-hover": selectedHoverColor } as React.CSSProperties
                }) as ButtonProps;

                return <Button
                    {...mergedProps}
                >
                    <Color color={selectedColorValue} size={buttonColorSize} />
                </Button>;
            }
            }
        />
    </div>;
};

export default ColorPicker;

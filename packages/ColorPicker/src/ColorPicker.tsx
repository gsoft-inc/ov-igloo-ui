import * as React from "react";

import cx from "classnames";
import { Button, type ButtonProps, ListBox } from "react-aria-components";
import { mergeProps, FocusScope } from "react-aria";
import type { Selection } from "react-stately";

import Dropdown from "@Igloo-ui/dropdown";
import Color from "@Igloo-ui/color";
import Checkmark from "@igloo-ui/icons/dist/Checkmark";
import variables from "@igloo-ui/tokens/dist/base10/tokens.json";

import ColorPickerOption from "./ColorPickerOption";

import "./color-picker.scss";

export const colorNames = [
    { id: "dandelion200", value: variables.dandelion200 },
    { id: "dandelion400", value: variables.dandelion400 },
    { id: "creamsicle150", value: variables.creamsicle150 },
    { id: "creamsicle200", value: variables.creamsicle200 },
    { id: "coral200", value: variables.coral200 },
    { id: "coral300", value: variables.coral300 },
    { id: "strawberryFields200", value: variables.strawberryFields200 },
    { id: "coral800", value: variables.coral800 },
    { id: "seaweed300", value: variables.seaweed300 },
    { id: "sky100", value: variables.sky100 },
    { id: "sky200", value: variables.sky200 },
    { id: "electricBlue200", value: variables.electricBlue200 },
    { id: "electricBlue400", value: variables.electricBlue400 },
    { id: "electricBlue700", value: variables.electricBlue700 }
] as const;

export type ColorName = typeof colorNames[number]["id"];

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
    selectedColor = "dandelion200"
}: ColorPickerProps) => {
    const classes = cx("ids-color-picker", className);
    const [showPicker, setShowPicker] = React.useState(false);
    const selectedColorValue = colorNames.find(color => color.id === selectedColor)?.value;

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
                                        icon={<Checkmark size="small" />}
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
                    isDisabled: disabled
                }) as ButtonProps;

                return <Button
                    {...mergedProps}
                >
                    <Color color={selectedColorValue} size="large" />
                </Button>;
            }
            }
        />
    </div>;
};

export default ColorPicker;

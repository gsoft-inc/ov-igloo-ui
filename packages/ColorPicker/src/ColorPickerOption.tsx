import * as React from "react";
import { Item } from "react-aria-components";

import Color, { type Size } from "@Igloo-ui/color";

import "./color-picker-option.scss";

export interface ColorPickerOptionProps {
    /** The background color */
    color: string;
    /** Add an icon in the center of the color */
    icon?: React.ReactElement;
    /** Add a specific id to the color picker option */
    id: string;
    /** Specify a size for the color */
    size?: Size;
}

function ColorPickerOption({ color, icon, id, size = "xlarge" }: ColorPickerOptionProps): JSX.Element {
    return (
        <Item id={id}
            textValue={color}
            className={({ isFocusVisible, isSelected, isHovered }) =>
                `ids-color-picker-option 
                ${isFocusVisible ? "ids-color-picker-option--focused" : ""} 
                ${isSelected ? "ids-color-picker-option--selected" : ""}
                ${isHovered ? "ids-color-picker-option--hovered" : ""}`}
            aria-label={color}
        >
            {({ isSelected }) => (
                <>
                    <Color color={color} size={size} className="ids-color-picker-option__color" />
                    {(isSelected && icon) && icon}
                </>
            )}
        </Item>
    );
}

export default ColorPickerOption;
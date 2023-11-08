import * as React from "react";
import cx from "classnames";
import { Item } from "react-aria-components";

import Color, { type Size } from "@igloo-ui/color";

import "./color-picker-option.scss";

export interface ColorPickerOptionProps {
    /** The background color */
    color: string;
    /** The background hover color of the Color component */
    hoverColor: string;
    /** Add an icon in the center of the color */
    icon?: React.ReactElement;
    /** The icon color */
    iconColor: string;
    /** Add a specific id to the color picker option */
    id: string;
    /** Specify a size for the color */
    size?: Size;
}

function ColorPickerOption({ 
    color, 
    hoverColor, 
    icon, 
    iconColor, 
    id, 
    size = "xlarge" 
}: ColorPickerOptionProps): JSX.Element {
    return (
        <Item id={id}
            textValue={color}
            className={({ isFocusVisible, isSelected, isHovered }) =>
                cx("ids-color-picker-option", {
                    "ids-color-picker-option--focused": isFocusVisible,
                    "ids-color-picker-option--selected": isSelected,
                    "ids-color-picker-option--hovered": isHovered
                })}
            aria-label={color}
            style={{ 
                "--ids-color-picker-option-color-hover": hoverColor, 
                "--ids-color-picker-option-icon-color": iconColor } as React.CSSProperties}
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
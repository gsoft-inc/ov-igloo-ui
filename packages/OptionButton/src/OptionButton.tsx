import * as React from "react";
import cx from "classnames";

import {
    LegacyTextIcon,
    LegacyOptionScaleIcon,
    LegacyMultipleChoiceIcon,
    LegacyLikertIcon,
    TextIcon,
    OptionScaleIcon,
    MultipleChoiceIcon,
    LikertIcon
} from "./svgs";

import "./option-button.scss";

export type ButtonType = "text" | "optionScale" | "multipleChoice" | "likert";

export interface OptionButtonProps extends React.ComponentProps<"input"> {
    /** Add a button type, which will come with its own icon.
   * If adding an icon, this will be overridden */
    buttonType?: ButtonType;
    /** True when the option button is selected */
    checked?: boolean;
    /** Add the main text to the option button */
    children: React.ReactNode;
    /** Add a specific class to the option button */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Add a description that is displayed below the text prop */
    description?: string;
    /** True if the option button should be disabled */
    disabled?: boolean;
    /** Add an htmlFor to the radio button of the option button.
   * This will also be used as the htmlFor attribute on the label */
    htmlFor: string;
    /** Add an icon to the beginning of the option button.
   * This overrides the icon that comes with buttonType */
    icon?: React.ReactNode;
    /** Add an onChange event to the option button */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** True if the option button should have an unchecked appearance */
    unchecked?: boolean;
}

const getBrand = (): string => {
    return document.documentElement.getAttribute("data-brand") ?? "igloo";
};

const OptionButton: React.FunctionComponent<OptionButtonProps> = ({
    buttonType = "text",
    checked,
    children,
    className,
    dataTest,
    description,
    disabled,
    htmlFor,
    icon,
    onChange,
    unchecked,
    ...rest
}: OptionButtonProps) => {
    const renderIcon = (): React.ReactNode => {
        if (icon) {
            return icon;
        }

        const isWorkleap = getBrand() === "workleap";
        let OptionScale = LegacyOptionScaleIcon;
        let MultipleChoice = LegacyMultipleChoiceIcon;
        let Likert = LegacyLikertIcon;
        let Text = LegacyTextIcon;
        if (isWorkleap) {
            OptionScale = OptionScaleIcon;
            MultipleChoice = MultipleChoiceIcon;
            Likert = LikertIcon;
            Text = TextIcon;
        }

        switch (buttonType) {
            case "optionScale":
                return (
                    <OptionScale
                        className={`ids-option-button__icon 
                        ids-option-button__option-scale-icon`}
                    />
                );
            case "multipleChoice":
                return (
                    <MultipleChoice
                        className={`ids-option-button__icon 
                        ids-option-button__multiple-choice-icon`}
                    />
                );
            case "likert":
                return (
                    <Likert
                        className={`ids-option-button__icon 
                        ids-option-button__likert-icon`}
                    />
                );
            default:
                return (
                    <Text
                        className={`ids-option-button__icon 
                        ids-option-button__text-icon`}
                    />
                );
        }
    };

    const classes = cx("ids-option-button", className, {
        "ids-option-button--unchecked": unchecked,
        "ids-option-button--checked": checked,
        "ids-option-button--disabled": disabled
    });

    return (
        <div className={classes} data-test={dataTest}>
            <input
                id={htmlFor}
                className="ids-option-button__radio"
                onChange={onChange}
                disabled={disabled}
                checked={checked}
                type="radio"
                {...rest}
            />
            <label htmlFor={htmlFor} className="ids-option-button__label">
                <span className="ids-option-button__icon-container">
                    {renderIcon()}
                </span>
                <span className="ids-option-button__text-container">
                    <span className="ids-option-button__text">{children}</span>
                    <span className="ids-option-button__desc">{description}</span>
                </span>
            </label>
        </div>
    );
};

export default OptionButton;

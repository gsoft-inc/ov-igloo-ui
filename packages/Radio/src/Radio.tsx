import * as React from "react";
import cx from "classnames";

import "./radio.scss";

export interface RadioProps extends React.ComponentPropsWithRef<"input"> {
    /** The content to display inside the label */
    children?: React.ReactNode;
    /** Add a specific class to the checkbox */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Indicates the ID of the element that is controlled by the checkbox */
    htmlFor: string;
    /** Changes the size of label  */
    small?: boolean;
    /** Modifies true/false value of the native checkbox */
    checked?: boolean;
    /** Modifies the native disabled state of the native checkbox */
    disabled?: boolean;
    /** The content to display to help users */
    helperText?: string;
    /** Function called when the value changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FunctionComponent<RadioProps> = React.forwardRef(
    (
        {
            children,
            className,
            dataTest,
            htmlFor,
            onChange,
            helperText,
            small,
            checked,
            disabled,
            ...rest
        }: RadioProps,
        ref: React.Ref<HTMLInputElement>
    ) => {
        const classes = cx("ids-radio", className, {
            "ids-radio--small": small
        });

        return (
            <span
                className={cx("ids-form-control", {
                    "has-description": helperText
                })}
            >
                <input
                    ref={ref}
                    id={htmlFor}
                    className={classes}
                    data-test={dataTest}
                    checked={checked}
                    disabled={disabled}
                    type="radio"
                    onChange={onChange}
                    {...rest}
                />
                {children && (
                    <label className="ids-radio__label" htmlFor={htmlFor}>
                        {children}
                        {helperText && (
                            <span className="ids-radio__description">{helperText}</span>
                        )}
                    </label>
                )}
            </span>
        );
    }
);

export default Radio;

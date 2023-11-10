import * as React from "react";

import cx from "classnames";
import "./filter.scss";

export interface FilterProps extends React.ComponentProps<"button"> {
    /** Add the main text/icon to the filter */
    children: React.ReactNode;
    /** Add class names to the filter */
    className?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** True if the filter should be disabled */
    disabled?: boolean;
    /** Add an event for when the filter is clicked */
    onClick?: () => void;
    /** True if the tag is selected */
    selected?: boolean;
}

const Filter: React.FunctionComponent<FilterProps> = ({
    children,
    className,
    dataTest,
    disabled,
    onClick,
    selected,
    ...rest
}: FilterProps) => {
    const classes = cx("ids-filter", className, {
        "ids-filter--selected": selected
    });

    return (
        <button
            type="button"
            className={classes}
            onClick={onClick}
            data-test={dataTest}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Filter;

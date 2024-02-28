import * as React from "react";
import cx from "classnames";

import "./progress-bar.scss";

export interface ProgressBarProps extends React.ComponentProps<"div"> {
    /** Sets the value of the progress bar, between 0 and 1 inclusive. */
    value: number;
    /** True for a compact appearance. */
    isCompact?: boolean;
    /** Add a specific class to the component. */
    className?: string;
    /** Add a data-test tag for automated tests. */
    dataTest?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
    value,
    isCompact,
    className,
    dataTest,
    ariaLabel,
    ...rest
}: ProgressBarProps) => {
    let progress = value * 100;
    if (value > 1) {
        progress = 100;
    }

    const isCompleted = progress === 100;

    const classes = cx("ids-progress-bar", className, {
        "ids-progress-bar--completed": isCompleted,
        "ids-progress-bar--compact": isCompact
    });

    return (
        <div
            role="progressbar"
            aria-label={ariaLabel}
            className={classes}
            data-test={dataTest}
            {...rest}
        >
            <span
                className="ids-progress-bar__status"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;

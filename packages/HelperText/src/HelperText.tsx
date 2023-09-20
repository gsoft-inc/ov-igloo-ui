import * as React from "react";
import cx from "classnames";
import Alert from "@igloo-ui/icons/dist/Alert";

import "./helper-text.scss";

export interface HelperTextProps extends React.ComponentProps<"div"> {
    /** Add a specific class to the `HelperText` */
    className?: string;
    /** The content to display inside the HelperText */
    children: React.ReactNode;
    /** Changes the appearance of component */
    error?: boolean;
}

const HelperText: React.FunctionComponent<HelperTextProps> = ({
        children,
        error,
        className,
        ...rest
    }: HelperTextProps) => {
        const classes = cx("ids-helperText", className, {
            [`ids-helperText--error`]: error
        });

        return (
            <span className={classes} {...rest}>
          {error && <Alert className="ids-helperText__icon" size="small" />}
                {children}
        </span>
    );
};

export default HelperText;

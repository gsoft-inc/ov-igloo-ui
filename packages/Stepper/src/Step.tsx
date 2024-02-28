import * as React from "react";
import cx from "classnames";
import { useButton, type AriaButtonProps, useFocusRing } from "react-aria";

import Checkmark from "@igloo-ui/icons/dist/Checkmark";

import Tooltip from "@igloo-ui/tooltip";

import "./step.scss";

export interface StepProps extends AriaButtonProps {
    /** Whether or not the step is disabled */
    disabled?: boolean;
    /** Whether or not the step is complete */
    isComplete?: boolean;
    /** Whether or not the step is the current step */
    isCurrent?: boolean;
    /** The title for the step */
    title: string;
}

const Stepper: React.FunctionComponent<StepProps> = ({
    disabled = false,
    isComplete,
    isCurrent,
    title,
    ...rest
}: StepProps) => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(
        { isDisabled: disabled, ...rest, "aria-label": title },
        ref
    );

    const { isFocusVisible, focusProps } = useFocusRing();

    const classes = cx("ids-step", {
        "ids-step--inactive": !isComplete && !isCurrent,
        "ids-step--complete": isComplete,
        "ids-step--current": isCurrent,
        "ids-step--clickable": !disabled && !isCurrent,
        "ids-step--focus-visible": isFocusVisible
    });

    const wrapperClasses = cx("ids-step__wrapper", {
        "ids-step__wrapper--inactive": !isComplete && !isCurrent,
        "ids-step__wrapper--complete": isComplete,
        "ids-step__wrapper--current": isCurrent
    });

    return (
        <Tooltip content={title} className={wrapperClasses}>
            <button
                {...buttonProps}
                {...focusProps}
                className={classes}
                tabIndex={isCurrent ? -1 : 0}
                ref={ref}
            >
                {isComplete && (
                    <Checkmark size="small" className="ids-step__checkmark" />
                )}
            </button>
        </Tooltip>
    );
};

export default Stepper;

import * as React from "react";
import cx from "classnames";
import type { PressEvent } from "react-aria";

import Step from "./Step";

import "./stepper.scss";

export interface Step {
    /** The callback function that is called when the step is clicked */
    onClick?: ((index: number, e?: PressEvent) => void);
    /** The title for the step */
    title: string;
}

export interface StepperProps extends React.ComponentProps<"div"> {
    /** The class name for the stepper */
    className?: string;
    /**
   * If true, the steps after the current step will be clickable
   * and the user will be able to
   * navigate to any step in the sequence
   */
    clickableNextSteps?: boolean;
    /** The current step in the sequence */
    currentStep?: number;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** The steps in the sequence */
    steps: Step[];
}

const Stepper: React.FunctionComponent<StepperProps> = ({
    className,
    clickableNextSteps = false,
    currentStep = 0,
    dataTest,
    steps,
    ...rest
}: StepperProps) => {
    const classes = cx("ids-stepper", className);

    return (
        <div className={classes} data-test={dataTest} {...rest}>
            {steps.map((step, index) => {
                const isCurrent = index === currentStep;
                const isComplete = index < currentStep;
                const disabled = !clickableNextSteps && index > currentStep;

                return (
                    <React.Fragment key={`frag_${index.toString()}`}>
                        <Step
                            key={`step_${index.toString()}`}
                            title={step.title}
                            isComplete={isComplete}
                            isCurrent={isCurrent}
                            disabled={disabled}
                            onPress={(e: PressEvent) => {
                                step.onClick?.(index, e);
                            }}
                        />
                        {index < steps.length - 1 && (
                            <div
                                key={`step-divider_${index.toString()}`}
                                className="ids-stepper__divider"
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Stepper;

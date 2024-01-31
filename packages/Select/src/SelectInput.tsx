import * as React from "react";

import ChevronUp from "@igloo-ui/icons/dist/TableChevronSelectedUp";
import ChevronDown from "@igloo-ui/icons/dist/TableChevronSelectedDown";
import { AngleDownIcon, AngleUpIcon } from "@hopper-ui/icons-react16";

import "./select-input.scss";

export interface SelectInputProps extends React.ComponentProps<"div"> {
    /** Default value displayed in the Select Input */
    children?: React.ReactNode;
    /** True if the option list is displayed */
    isOpen?: boolean;
    /** Callback for when the clear button is clicked */
}

const getBrand = (): string => {
    return document.documentElement.getAttribute("data-brand") ?? "igloo";
};

const SelectInput: React.FunctionComponent<SelectInputProps> = ({
    children,
    isOpen = false,
    ...rest
}: SelectInputProps) => {
    const isWorkleap = getBrand() === "workleap";
    const chevronClass = "ids-select__input__chevron";
    const chevronUpIcon = isWorkleap ?
        <AngleUpIcon className={chevronClass} size="sm" /> : 
        <ChevronUp className={chevronClass} size="small" />;
    const chevronDownIcon = isWorkleap ? 
        <AngleDownIcon className={chevronClass} size="sm" /> : 
        <ChevronDown className={chevronClass} size="small" />;

    return (
        <div className="ids-select__input" {...rest}>
            {children}
            <div className="ids-select__input-actions">
                {isOpen ? (
                    chevronUpIcon
                ) : (
                    chevronDownIcon
                )}
            </div>
        </div>
    );
};

export default SelectInput;

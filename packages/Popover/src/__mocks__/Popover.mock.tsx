import React, { useState } from "react";
import cx from "classnames";

import IconButton from "@igloo-ui/icon-button";
import Close from "@igloo-ui/icons/dist/Close";

import "../popover.scss";

interface PopoverProps {
    children: React.ReactNode;
    className?: string;
    content: React.ReactNode;
    disabled?: boolean;
    popoverClassName?: string;
    position?: "top" | "right" | "bottom" | "left" | "auto";
    maxWidth?: number;
    active?: boolean;
    title?: string;
    action?: React.ReactNode;
    isClosable?: boolean;
    dataTest?: string;
    triggerEvent?: "click" | "hover";
    interactive?: boolean;
}

const Popover: React.FC<PopoverProps> = ({
    children,
    className,
    content,
    disabled,
    popoverClassName,
    position = "auto",
    maxWidth = 320,
    active = false,
    title,
    action,
    isClosable = false,
    dataTest,
    triggerEvent = "click",
    interactive = true,
    ...rest
}) => {
    const classes = cx("ids-popover__container", className);
    const [show, setShow] = useState(active);
    

    const togglePopover = (): void => {
        if (!disabled) {
            setShow(!show);
        }
    };

    const onClose = (): void => {
        setShow(false);
    };

    const popoverContent = (
        <>
            {title && <div className="popover__title">{title}</div>}
            <div className="popover__content">{content}</div>
            {action && <div className="popover__action">{action}</div>}
        </>
    );

    const popoverClasses = cx("ids-popover", popoverClassName, {
        "popover--top": position === "top",
        "popover--right": position === "right",
        "popover--bottom": position === "bottom",
        "popover--left": position === "left",
        "popover--auto": position === "auto"
    });

    const fromPxToRem = (value: number, base = 10): string =>
        `${value / base}rem`;

    return (
        <>
            <span
                className={classes}
                onClick={triggerEvent === "click" ? togglePopover : undefined}
                onMouseEnter={
                    triggerEvent === "hover" && interactive ? togglePopover : undefined
                }
                onMouseLeave={
                    triggerEvent === "hover" && interactive ? togglePopover : undefined
                }
                role="button"
                tabIndex={0}
            >
                {children}
            </span>
            {show && (
                <div
                    className={popoverClasses}
                    style={{ maxWidth: fromPxToRem(maxWidth) }}
                    data-show={show}
                    data-test={dataTest}
                    {...rest}
                >
                    {isClosable && (
                        
                        <IconButton
                            size="xsmall"
                            className="ids-popover__close"
                            onClick={onClose}
                            appearance={{ type: "ghost", variant: "secondary" }}
                            aria-label="close"
                            icon={<Close size="small" />}
                        />
                    )}
                    {popoverContent}
                </div>
            )}
        </>
    );
};

export default Popover;
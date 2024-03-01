import * as React from "react";
import classNames from "classnames";

import Button, { type Appearance as ButtonAppearance } from "@igloo-ui/button";
import IconButton from "@igloo-ui/icon-button";
import { DismissIcon } from "@hopper-ui/icons-react16";
import {
    InfoIcon,
    CrownIcon,
    SuccessIcon,
    WarningIcon
} from "./svgs";
import {
    TadaIcon as LegacyTadaIcon,
    InfoIcon as LegacyInfoIcon,
    CrownIcon as LegacyCrownIcon,
    SuccessIcon as LegacySuccessIcon,
    WarningIcon as LegacyWarningIcon
} from "./legacy/svgs";
import { useLocalizedStringFormatter } from "@igloo-ui/provider";
import intlMessages from "./intl";

import "./alert.scss";

export type Type = "announcement" | "info" | "premium" | "success" | "warning";

export type Appearance = "card" | "inline" | "horizontal";

export interface AlertButton {
    label: string;
    onClick: () => void;
}

export interface AlertProps extends Omit<React.ComponentProps<"div">, "title"> {
    /** The title of the alert */
    title?: React.ReactNode;
    /** The content to display inside the Alert */
    message?: React.ReactNode;
    /** Additional text to display at the top right of the Alert */
    metadata?: React.ReactNode;
    /** Change the type of the Alert */
    type: Type;
    /** Change the Alert appearance */
    appearance?: Appearance;
    /** Add a specific class to the Alert */
    className?: string;
    /** Set if the Alert can be closed by the user */
    closable?: boolean;
    /** Custom icon for alert (Use 'null' to have no icon) */
    icon?: React.ReactElement | null;
    /** Action on Alert close button click */
    onClose?: () => void;
    /** Alert button */
    button?: AlertButton;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
}

const getBrand = (): string => {
    return document.documentElement.getAttribute("data-brand") ?? "igloo";
};

const renderIcon = (
    style: Appearance,
    hasButton: boolean,
    type: Type,
    icon?: React.ReactElement,
    isWorkleap?: boolean
): JSX.Element => {
    const classes = classNames("ids-alert__icon", `ids-alert__icon--${style}`, {
        "ids-alert__icon--small-top": hasButton,
        "ids-alert__icon--medium-centered": !hasButton
    });

    return (
        <div className={classes}>
            {icon || (
                <>
                    {type === "announcement" && (isWorkleap ? <InfoIcon /> : <LegacyTadaIcon />)}
                    {type === "info" && (isWorkleap ? <InfoIcon /> : <LegacyInfoIcon />)}
                    {type === "premium" && (isWorkleap ? <CrownIcon /> : <LegacyCrownIcon />)}
                    {type === "success" && (isWorkleap ? <SuccessIcon /> : <LegacySuccessIcon />)}
                    {type === "warning" && (isWorkleap ? <WarningIcon /> : <LegacyWarningIcon />)}
                </>
            )}
        </div>
    );
};

const renderDismissButton = (
    setShow: (show: boolean) => void,
    onDismissClick?: () => void,
    ariaLabel?: string
): JSX.Element => {
    const action = (): void => {
        if (onDismissClick) {
            onDismissClick();
        }

        setShow(false);
    };

    return (
        <IconButton
            appearance={{ type: "ghost", variant: "secondary" }}
            className="ids-alert__dismiss-btn"
            type="button"
            size="xsmall"
            icon={<DismissIcon size="sm" />}
            onClick={action}
            aria-label={ariaLabel}
        />
    );
};

const renderAlertActionButton = (
    style: Appearance,
    button?: AlertButton,
    isWorkleap?: boolean
): JSX.Element => {
    if (button == null || button.onClick == null || button.label == null) {
        return <></>;
    }

    const ghostAppearance = isWorkleap ? 
        { type: "ghost", variant: "secondary" } as ButtonAppearance : 
        "ghost";

    return (
        <Button
            appearance={style === "horizontal" ? ghostAppearance : "secondary"}
            size="small"
            onClick={button.onClick}
            className="ids-alert__action-btn"
        >
            {button.label}
        </Button>
    );
};

const Alert: React.FunctionComponent<AlertProps> = ({
    title,
    message,
    metadata,
    type,
    appearance = "card",
    className,
    closable = true,
    icon,
    onClose,
    button,
    dataTest,
    ...rest
}: AlertProps) => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);
    const classes = classNames(
        "ids-alert",
        `ids-alert--${appearance}`,
        `ids-alert--${type}`,
        className
    );

    const parentElement = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState(true);
    const hasButton = button !== undefined;
    const isHorizontal = appearance === "horizontal";
    const canBeClosed = closable && !isHorizontal;
    const isWorkleap = getBrand() === "workleap";

    if (show) {
        return (
            <div
                className={classes}
                ref={parentElement}
                data-test={dataTest}
                {...rest}
            >
                {icon !== null &&
          !isHorizontal &&
          renderIcon(appearance, hasButton, type, icon, isWorkleap)}

                <div className="ids-alert__body">
                    <div className="ids-alert__header">
                        <p className="ids-alert__title">{title}</p>
                        <p className="ids-alert__metadata">{metadata}</p>
                    </div>
                    {!isHorizontal && <div className="ids-alert__content">{message}</div>}
                    {hasButton && renderAlertActionButton(appearance, button, isWorkleap)}
                </div>

                {canBeClosed && renderDismissButton(setShow, onClose, stringFormatter.format("close"))}
            </div>
        );
    }

    return null;
};

export default Alert;

import * as React from "react";

import cx from "classnames";

// eslint-disable-next-line import/no-extraneous-dependencies
import { VisualIdentifier } from "@shared/components";
import IconButton from "@igloo-ui/icon-button";
import Ellipsis from "@igloo-ui/ellipsis";
import { DismissIcon } from "@hopper-ui/icons-react16";
import { useLocalizedStringFormatter } from "@igloo-ui/provider";
import intlMessages from "./intl";

import "./tag.scss";

export type Size = "medium" | "small" | "xsmall" | "micro";

export type AppearanceNew =
  | "default"
  | "primary"
  | "progress"
  | "inactive"
  | "positive"
  | "caution"
  | "negative"
  | "option1"
  | "option2"
  | "option3"
  | "option4"
  | "option5"
  | "option6"
  | "neutral"
  | "select";

/** @Deprecated This will be removed April. 1, 2024 */
export type AppearanceDep =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "secondary"
  | "grey";

export type Appearance = AppearanceNew | AppearanceDep;

export interface TagProps extends React.ComponentProps<"div"> {
    /** The different appearances of the Tag */
    appearance?: Appearance;
    /** The content of the Tag */
    children: React.ReactNode;
    /** Add a specific class to the Tag */
    className?: string;
    /** Add a colored square instead of an image or an icon */
    color?: string;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Render the close button */
    dismissible?: boolean;
    /** The icon used at the beginning of the Tag */
    icon?: React.ReactElement;
    /** The id of the tag to use when removing */
    id?: string;
    /** Add an error style to the tag */
    hasError?: boolean;
    /** Callback to execute on remove tag */
    onRemove?: (id: string) => void;
    /**
     * Render rounded corners
     * After rebrand this will be deprecated and rounded will be true by default
    */
    rounded?: boolean;
    /** The different sizes of the Tag */
    size?: Size;
    /** Specifies the image url to show */
    src?: string;
    /** Specifies if the tag is disabled */
    disabled?: boolean;
}

const Tag: React.FunctionComponent<TagProps> = ({
    children,
    className,
    color,
    dataTest,
    dismissible = false,
    appearance = "default",
    icon,
    id,
    hasError,
    onRemove,
    rounded = false,
    size = "medium",
    src,
    disabled
}) => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);
    const [show, setShow] = React.useState(true);

    const printDeprecationWarning = (oldValue: string, newValue: string): void => {
        console.warn(`Warning: Tag's '${oldValue}' appearance is deprecated and will be removed ` +
        `Nov. 1, 2023. Use '${newValue}' instead. `);
    };

    const mapDeprecatedAppearance = (appearanceValue: Appearance): AppearanceNew => {
        switch (appearanceValue) {
            case "info":
                printDeprecationWarning("info", "progress");

                return "progress";
            case "success":
                printDeprecationWarning("success", "positive");

                return "positive";
            case "warning":
                printDeprecationWarning("warning", "caution");

                return "caution";
            case "error":
                printDeprecationWarning("error", "negative");

                return "negative";
            case "grey":
                printDeprecationWarning("grey", "default");

                return "default";
            case "secondary":
                printDeprecationWarning("secondary", "neutral");

                return "neutral";
            default:
                return appearanceValue as AppearanceNew;
        }
    };

    const renderDismissButton = (): JSX.Element => {
        const action = (): void => {
            if (onRemove && id) {
                onRemove(id);
            }

            setShow(false);
        };

        return (
            <IconButton
                className="ids-tag__dismiss-btn"
                type="button"
                onClick={action}
                appearance={{ type: "ghost", variant: "secondary" }}
                size="xsmall"
                aria-label={stringFormatter.format("close")}
                icon={<DismissIcon size="sm" className="ids-tag__close" />}
            />
        );
    };

    const classes = cx(
        "ids-tag",
        `ids-tag--${mapDeprecatedAppearance(appearance)}`,
        `ids-tag--${size}`,
        {
            "ids-tag--rounded": rounded,
            "ids-tag--has-error": hasError,
            "ids-tag--disabled": disabled
        },
        className
    );

    if (show) {
        return (
            <div className={classes} data-test={dataTest}>
                <VisualIdentifier
                    className="ids-tag__visual"
                    color={color}
                    src={src}
                    icon={icon}
                />

                <div className="ids-tag__content">
                    <Ellipsis className="ids-tag__ellipsis">{children}</Ellipsis>
                </div>

                {dismissible && renderDismissButton()}
            </div>
        );
    }

    return null;
};

export default Tag;

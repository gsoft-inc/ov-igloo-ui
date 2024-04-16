import * as React from "react";
import cx from "classnames";

import ArrowUp from "@igloo-ui/icons/dist/ArrowUp";
import ArrowDown from "@igloo-ui/icons/dist/ArrowDown";
import { ArrowUpIcon, ArrowDownIcon } from "@hopper-ui/icons-react16";

import { useLocalizedStringFormatter, useLocale } from "@igloo-ui/provider";
import intlMessages from "./intl";

import "./score.scss";

export interface ScoreProps extends React.ComponentProps<"div"> {
    /** The size of the arrow */
    arrowSize?: "small" | "medium" | "large";
    /** Add a specific class to the metric */
    className?: string;
    /** Force the score to have a decimal */
    forceDecimal?: boolean;
    /** Whether or not the score should be hidden if it is zero */
    hideIfZero?: boolean;
    /** Whether or not the score should have a selected style */
    isSelected?: boolean;
    /** Whether or not the score is a variation */
    isVariation?: boolean;
    /** The value of the score */
    value?: number | null;
}

const Score: React.FunctionComponent<ScoreProps> = ({
    arrowSize = "small",
    className,
    forceDecimal = false,
    hideIfZero = false,
    isSelected = false,
    isVariation = false,
    value
}: ScoreProps) => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);
    const { locale } = useLocale();

    const getBrand = (): string => {
        return document.documentElement.getAttribute("data-brand") ?? "igloo";
    };

    const isWorkleap = getBrand() === "workleap";

    const sizeAdapter = (size: "small" | "medium" | "large"): "sm" | "md" | "lg" => {
        if (isWorkleap) {
            switch (size) {
                case "small":
                    return "sm";
                case "medium":
                    return "md";
                case "large":
                    return "lg";
                default:
                    return "sm";
            }
        } else {
            return size;
        }
    };

    if (!isVariation && (value === undefined || value === null)) {
        return <span
            className={cx("ids-score", className, {
                "ids-score--selected": isSelected
            })}
        >-</span>;
    }
    const initialValue = value ?? 0;
    const isNegative = initialValue < 0;
    const absoluteValue = Math.abs(initialValue);
    const isZero = initialValue === 0;
    const metricValue = isVariation ? Math.abs(initialValue) : initialValue;
    const hideValue = isZero && hideIfZero;
    let displayValue = metricValue.toString();
    if (forceDecimal) {
        displayValue = metricValue.toFixed(1);
    }

    const arrow = isNegative ? (
        isWorkleap ? (
            <ArrowDownIcon
                size={sizeAdapter(arrowSize)}
                className={cx("ids-score__arrow", "ids-score__arrow--negative", {
                    "ids-score__arrow--selected": isSelected
                })}
            />
        ) : (
            <ArrowDown
                size={arrowSize}
                className={cx("ids-score__arrow", "ids-score__arrow--negative", {
                    "ids-score__arrow--selected": isSelected
                })}
            />
        )
    ) : (
        isWorkleap ? (
            <ArrowUpIcon
                size={sizeAdapter(arrowSize)}
                className={cx("ids-score__arrow", "ids-score__arrow--positive", {
                    "ids-score__arrow--selected": isSelected
                })}
            />
        ) : (
            <ArrowUp
                size={arrowSize}
                className={cx("ids-score__arrow", "ids-score__arrow--positive", {
                    "ids-score__arrow--selected": isSelected
                })}
            />
        )
    );

    let postFix = absoluteValue === 1 ?
        ` ${stringFormatter.format("pt")}` :
        ` ${stringFormatter.format("pts")}`;

    if (locale === "fr-CA") {
        postFix = absoluteValue === 1 || absoluteValue === 0 ?
            ` ${stringFormatter.format("pt")}` :
            ` ${stringFormatter.format("pts")}`;
    }

    if (!hideValue) {
        return (
            <span
                className={cx("ids-score", className, {
                    "ids-score--negative": isNegative,
                    "ids-score--variation": isVariation,
                    "ids-score--selected": isSelected
                })}
            >
                {isVariation && !isZero && arrow}
                {displayValue}
                {isVariation && <span className="ids-score__postfix">{postFix}</span>}
            </span>
        );
    }

    return null;
};

export default Score;

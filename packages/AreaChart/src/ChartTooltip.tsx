import * as React from "react";
import cx from "classnames";
import type { TooltipProps } from "recharts";

import type {
    NameType,
    ValueType
} from "recharts/types/component/DefaultTooltipContent";

import "./chart-tooltip.scss";

export interface ChartTooltipProps extends TooltipProps<ValueType, NameType> {
    dateFormatter: (date: number) => string;
    scoreFormatter?: (score: number) => string;
    getDataScoreHue?: (score: number) => string;
    unavailableDataMessage?: string;
}

export interface TooltipScoreProps {
    score: number;
    text: string;
    isSecondary?: boolean;
    formatter?: (score: number) => string;
    dotColor?: string;
}

const ChartTooltip: React.FunctionComponent<ChartTooltipProps> = (
    props: ChartTooltipProps
) => {
    const {
        active,
        payload,
        label,
        dateFormatter,
        scoreFormatter,
        getDataScoreHue,
        unavailableDataMessage
    } = props;

    const isValidScore = (score: number): boolean => {
        return score !== undefined && score !== null;
    };

    const TooltipScore = (scoreProps: TooltipScoreProps): JSX.Element => {
        const { score, text, isSecondary, formatter, dotColor } = scoreProps;
        const formattedScore = formatter ? formatter(score) : score;

        return (
            <div className="ids-tooltip-score" 
                style={{
                    "--ids-tooltip-score-dot-color": dotColor ? dotColor : undefined
                } as React.CSSProperties}
            >
                <div
                    className={cx("ids-tooltip-score__circle", {
                        "ids-tooltip-score__circle--secondary": isSecondary
                    })}
                />
                <div className="ids-tooltip-score__value">{formattedScore}</div>
                <div className="ids-tooltip-score__text">{text}</div>
            </div>
        );
    };

    if (active && payload && payload[0]) {
        const isPrimaryScoreValid = isValidScore(payload[0].payload.score);
        const isSecondaryScoreValid = isValidScore(
            payload[0].payload.secondaryScore
        );

        return (
            <div className="ids-chart-tooltip">
                {isPrimaryScoreValid || isSecondaryScoreValid ? (
                    <div>
                        <div className="ids-chart-tooltip__date">
                            {dateFormatter(label)}
                        </div>
                        {isPrimaryScoreValid && (
                            <TooltipScore
                                score={Number(payload[0].payload.score)}
                                text={payload[0].payload.name || ""}
                                formatter={scoreFormatter}
                                dotColor={getDataScoreHue?.(payload[0].payload.score)}
                            />
                        )}
                        {isSecondaryScoreValid && (
                            <TooltipScore
                                score={Number(payload[0].payload.secondaryScore)}
                                text={payload[0].payload.secondaryName || ""}
                                formatter={scoreFormatter}
                                isSecondary
                            />
                        )}
                    </div>
                ) : (
                    <div className="ids-chart-tooltip__unavailable-score">
                        {unavailableDataMessage}
                    </div>
                )}
            </div>
        );
    }

    return null;
};

export default ChartTooltip;

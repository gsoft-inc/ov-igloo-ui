import * as React from "react";
import cx from "classnames";
import {
    BarChart,
    XAxis,
    YAxis,
    Bar,
    type XAxisProps,
    type YAxisProps,
    ResponsiveContainer,
    type LabelProps
} from "recharts";
// eslint-disable-next-line max-len
import type { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";

import Popover from "@igloo-ui/popover";

import "./stacked-bar.scss";
import StackedBarTooltip from "./StackedBarTooltip";

export interface StackedBarLabel extends LabelProps {
    dataKey?: string;
}

export type Pos = "first" | "last";

export type Strength = -2 | -1 | 0 | 1 | 2;

interface ValueRange {
    /** The min value of the x axis */
    min: number | "auto" | "dataMin";
    /** The min value of the x axis */
    max: number | "auto" | "dataMax";
}

export interface DataSet {
    /** Set a custom class on the bar */
    className?: string;
    /** Set a custom Hex or RGB color */
    color?: string;
    /** The key that represents the stack on the bar */
    key: string;
    /** The label that will be displayed on the tooltip */
    label: string;
    /** Set a number representing the value of the stack */
    value: number;
    /** This indicates the strength on the scale and
   * it will automatically set the color if not overridden */
    strength?: Strength;
}

export interface StackedBarProps extends React.ComponentProps<"div"> {
    /** Add a class name to the stacked bar */
    className?: string;
    /** Add a class name to the popover */
    popoverClassName?: string;
    /** Add a title to the popover */
    popoverTitle?: React.ReactNode;
    /** All the data needed to build the stacked bar. If empty, leave blank */
    dataSet?: DataSet[];
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** A function to format the value in the tooltip (Default: adds %) */
    formatValue?: (value: number) => string;
    /** Message to display when there is no data */
    noDataMessage?: string;
    /** Show the values on the bar */
    showValue?: boolean;
    /** Adjusts the height of the bar */
    size?: "small" | "medium";
    /** The range that the domain of the value should be based on */
    valueRange?: ValueRange;
}

const StackedBar: React.FunctionComponent<StackedBarProps> = ({
    className,
    popoverClassName,
    popoverTitle,
    dataSet,
    dataTest,
    formatValue = (value: number) => {
        return `${value}%`;
    },
    noDataMessage,
    showValue = false,
    size = "medium",
    valueRange = { min: 0, max: 100 },
    ...rest
}: StackedBarProps) => {
    const xAxisConfig: XAxisProps = {
        type: "number",
        hide: true,
        domain: [valueRange.min, valueRange.max]
    };

    const yAxisConfig: YAxisProps = {
        type: "category",
        hide: true
    };

    const barChartConfig: CategoricalChartProps = {
        layout: "vertical",
        barCategoryGap: "0%",
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    const barConfig = {
        stackId: "a",
        isAnimationActive: false
    };

    const getLabel = (dataKey: string): StackedBarLabel => ({
        dataKey,
        formatter: (value: number) =>
            showValue && value && size === "medium" ? value : null,
        className: "ids-stacked-bar__label"
    });

    const getRadius = (position?: Pos): [number, number, number, number] => {
        return [
            position === "first" ? 4 : 0,
            position === "last" ? 4 : 0,
            position === "last" ? 4 : 0,
            position === "first" ? 4 : 0
        ];
    };

    const getColor = (dataItem: DataSet): string => {
        if (dataItem.color) {
            return dataItem.color;
        }

        if (dataItem.strength !== undefined) {
            switch (dataItem.strength) {
                case -2:
                    return "var(--ids-stacked-bar-strength-minus-2)";
                case -1:
                    return "var(--ids-stacked-bar-strength-minus-1)";
                case 1:
                    return "var(--ids-stacked-bar-strength-1)";
                case 2:
                    return "var(--ids-stacked-bar-strength-2)";
                default:
                    return "var(--ids-stacked-bar-strength-0)";
            }
        }

        return "var(--ids-stacked-bar-no-color)";
    };

    const emptyBars = [
        <Bar
            key="empty-bar-1"
            {...barConfig}
            dataKey="firstBar"
            className="ids-stacked-bar__empty-bar--side"
            radius={[4, 0, 0, 4]}
            filter="url(#stackedBarInsetShadow)"
        />,
        <Bar
            key="empty-bar-2"
            {...barConfig}
            dataKey="secondBar"
            className="ids-stacked-bar__empty-bar--middle"
            filter="url(#stackedBarInsetShadow)"
        />,
        <Bar
            key="empty-bar-3"
            {...barConfig}
            dataKey="thirdBar"
            className="ids-stacked-bar__empty-bar--side"
            radius={[0, 4, 4, 0]}
            filter="url(#stackedBarInsetShadow)"
        />
    ];

    const barShadow = (
        <defs>
            <filter id="stackedBarInsetShadow">
                <feOffset dx="0" dy="2" />
                <feGaussianBlur stdDeviation="2" result="offset-blur" />
                <feComposite
                    operator="out"
                    in="SourceGraphic"
                    in2="offset-blur"
                    result="inverse"
                />
                <feFlood floodColor="#253346" floodOpacity=".10" result="color" />
                <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
        </defs>
    );

    const barDataObj: Record<string, unknown> = {};
    let bars = null;

    if (dataSet && dataSet.length) {
        bars = dataSet.map((barInfo, key) => {
            if (barInfo.value) {
                const dataKey = barInfo.key;
                let pos;

                if (key === 0) {
                    pos = "first" as Pos;
                }

                if (key === dataSet.length - 1) {
                    pos = "last" as Pos;
                }

                barDataObj[dataKey] = barInfo.value;

                return (
                    <Bar
                        {...barConfig}
                        key={`data-bar-${dataKey}`}
                        className={cx(
                            barInfo.className,
                            "ids-stacked-bar__bar",
                            `ids-stacked-bar__bar--${dataKey}`,
                            {
                                "ids-stacked-bar__bar--is-value-visible": showValue,
                                [`ids-stacked-bar__bar--strength-${barInfo.strength}`]:
                  barInfo.strength !== undefined,
                                "ids-stacked-bar__bar--no-color":
                  barInfo.strength === undefined && !barInfo.color
                            }
                        )}
                        dataKey={dataKey}
                        label={getLabel(dataKey)}
                        fill={getColor(barInfo)}
                        radius={getRadius(pos)}
                    />
                );
            }

            return null;
        });
    }

    const hasData = !!bars;

    const barChart = (() => {
        if (hasData) {
            return {
                data: [barDataObj],
                component: bars,
                tooltip: (
                    <StackedBarTooltip
                        title={popoverTitle}
                        hasData={hasData}
                        dataSet={dataSet}
                        formatValue={formatValue}
                    />
                )
            };
        }

        return {
            data: [
                {
                    firstBar: 33,
                    secondBar: 34,
                    thirdBar: 33
                }
            ],
            component: emptyBars,
            tooltip: (
                <StackedBarTooltip noDataMessage={noDataMessage} hasData={hasData} />
            )
        };
    })();

    const classes = cx("ids-stacked-bar", className, `ids-stacked-bar--${size}`);
    const popoverClasses = cx("ids-stacked-bar-tooltip", popoverClassName);

    return (
        <div className={classes} data-test={dataTest} {...rest}>
            <Popover
                content={barChart.tooltip}
                className="ids-stacked-bar-tooltip__container"
                popoverClassName={popoverClasses}
                disabled={!hasData && !noDataMessage}
                triggerEvent="hover"
                maxWidth={600}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={barChart.data}
                        className="ids-stacked-bar__chart"
                        {...barChartConfig}
                    >
                        {!hasData && barShadow}
                        <XAxis {...xAxisConfig} />
                        <YAxis {...yAxisConfig} />
                        {barChart.component}
                    </BarChart>
                </ResponsiveContainer>
            </Popover>
        </div>
    );
};

export default StackedBar;

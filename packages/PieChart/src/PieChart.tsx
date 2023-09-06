import * as React from "react";
import cx from "classnames";
import { PieChart as RPieChart, Cell, Label, Pie, type LabelProps } from "recharts";
import type { PolarViewBox } from "recharts/types/util/types";

import "./pie-chart.scss";

interface CustomLabelProps extends LabelProps {
    /** The rate of the chart in percentage */
    rate: number;
    /** The label displayed in the center of the chart */
    label: React.ReactNode;
    /** The width of the chart */
    width: number;
}

export interface DataProps {
    /** The class name of the data element in the chart */
    className?: string;
    /** The color of the data element */
    color?: string;
    /** The ID of the data element */
    id: string;
    /** The percentage value of the data element */
    percentage: number;
}

export interface PieChartProps extends React.ComponentProps<"div"> {
    /** The class name of the component */
    className?: string;
    /** The data to be displayed in the chart */
    data?: DataProps[];
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** The label displayed in the center of the chart
   * (This is not displayed if the chart size is "regular")
   */
    label?: React.ReactNode;
    /** The rate of the chart in percentage
   * (This is not displayed if the chart size is "regular")
   */
    rate?: number;
    /** The size of the chart */
    size?: "regular" | "large";
}

const CustomLabel = (labelObj: CustomLabelProps): React.ReactElement => {
    const { viewBox, rate, label, width } = labelObj;
    let { cx, cy } = viewBox as PolarViewBox;
    const halfOfSymbolFontSize = 8; // Seemed more centered with 8 than 9
    const labelOffset = 16;
    const labelHeight = 30; // Cannot be in rem to work on safari
    if (!cx) {
        cx = 0;
    }
    if (!cy) {
        cy = 0;
    }

    return (
        <>
            <text
                x={cx}
                y={cy - 5}
                fill="#3d405c"
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central"
                alignmentBaseline="middle"
            >
                <tspan
                    x={cx + halfOfSymbolFontSize}
                    alignmentBaseline="middle"
                    className="ids-pie-chart__rate"
                >
                    {rate}
                </tspan>
                <tspan
                    baselineShift="super"
                    alignmentBaseline="middle"
                    className="ids-pie-chart__symbol"
                >
          %
                </tspan>
            </text>
            <foreignObject
                x={0}
                y={cy + labelOffset}
                width={width}
                height={labelHeight}
            >
                <div className="ids-pie-chart__label">{label}</div>
            </foreignObject>
        </>
    );
};

const PieChart: React.FunctionComponent<PieChartProps> = ({
    className,
    data = [
        {
            id: "empty",
            percentage: 100,
            className: "ids-pie-chart__empty-data",
            color: "var(--ids-pie-chart-empty)"
        }
    ],
    dataTest,
    label,
    rate = 0,
    size = "large"
}: PieChartProps) => {
    const isEmpty = rate === 0;
    const isLarge = size === "large";
    const chartSize = size === "regular" ? 132 : 180;
    const classes = cx("ids-pie-chart", className, {
        "ids-pie-chart--empty": isEmpty,
        "ids-pie-chart--regular": !isLarge,
        "ids-pie-chart--large": isLarge
    });

    return (
        <div className={classes} data-test={dataTest}>
            <RPieChart
                width={chartSize}
                height={chartSize}
                margin={{ top: 2, left: 2, right: 2, bottom: 2 }}
            >
                <Pie
                    data={data}
                    dataKey="percentage"
                    nameKey="id"
                    innerRadius={isEmpty && isLarge ? "99%" : "85%"}
                    outerRadius="100%"
                    isAnimationActive={false}
                    startAngle={90}
                    endAngle={-270}
                >
                    {isLarge && (
                        <Label
                            position="center"
                            content={
                                <CustomLabel rate={rate} label={label} width={chartSize} />
                            }
                        />
                    )}
                    {data &&
            data.map(entry => (
                <Cell
                    key={entry.id}
                    className={`ids-pie-chart__${entry.id}`}
                    fill={entry.color}
                    stroke={entry.color}
                />
            ))}
                </Pie>
            </RPieChart>
        </div>
    );
};

export default PieChart;

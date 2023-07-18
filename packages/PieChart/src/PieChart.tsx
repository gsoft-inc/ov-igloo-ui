import * as React from 'react';
import cx from 'classnames';
import { PieChart as RPieChart, Cell, Label, Pie } from 'recharts';

import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

import './pie-chart.scss';

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

export interface PieChartProps extends React.ComponentProps<'div'> {
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
  size?: 'regular' | 'large';
}

const CustomLabel = (labelObj: any): React.ReactElement => {
  const { viewBox, rate, label } = labelObj;
  const { cx, cy } = viewBox;
  const halfOfSymbolFontSize = 9;
  const halfOfRateHeight = '2.8rem';

  return (
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
      <tspan x={cx} dy={halfOfRateHeight} className="ids-pie-chart__label">
        {label}
      </tspan>
    </text>
  );
};

const PieChart: React.FunctionComponent<PieChartProps> = ({
  className,
  data = [
    {
      id: 'empty',
      percentage: 100,
      className: 'ids-pie-chart__empty-data',
      color: tokens.grey300,
    },
  ],
  dataTest,
  label,
  rate = 0,
  size = 'large',
}: PieChartProps) => {
  const isEmpty = rate === 0;
  const isLarge = size === 'large';
  const chartSize = size === 'regular' ? 132 : 180;
  const classes = cx('ids-pie-chart', className, {
    'ids-pie-chart--empty': isEmpty,
    'ids-pie-chart--regular': !isLarge,
    'ids-pie-chart--large': isLarge,
  });

  return (
    <div className={classes} data-test={dataTest}>
      <RPieChart width={chartSize} height={chartSize}>
        <Pie
          data={data}
          dataKey="percentage"
          nameKey="id"
          innerRadius={isEmpty && isLarge ? '99%' : '85%'}
          outerRadius="100%"
          isAnimationActive={false}
          startAngle={90}
          endAngle={-270}
        >
          {isLarge && (
            <Label
              width={30}
              position="center"
              content={<CustomLabel rate={rate} label={label} />}
            />
          )}
          {data &&
            data.map((entry) => (
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

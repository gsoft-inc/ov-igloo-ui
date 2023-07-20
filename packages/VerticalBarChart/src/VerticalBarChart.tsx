import * as React from 'react';
import cx from 'classnames';
import {
  BarChart,
  Cell,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CellProps,
  XAxisProps,
  YAxisProps,
} from 'recharts';

import './vertical-bar-chart.scss';

export interface DataProps {
  /** Add a custom class name */
  className?: string;
  /** Add a custom color */
  color?: string;
  /** The score of the bar used for the x-axis */
  score: number;
  /** The value of the bar used for the y-axis */
  value: number;
}

export interface VerticalBarChartProps extends React.ComponentProps<'div'> {
  /** Add a custom class name */
  className?: string;
  /** The data to be displayed in the chart */
  data: DataProps[];
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The height of the chart */
  height?: number;
  /** Whether or not the chart bars should be animated */
  isAnimationActive?: boolean;
  /** The label to be displayed on the bottom right of the chart */
  maxLabel?: string;
  /** The label to be displayed on the bottom left of the chart */
  minLabel?: string;
}

const VerticalBarChart: React.FunctionComponent<VerticalBarChartProps> = ({
  className,
  data,
  dataTest,
  height = 200,
  isAnimationActive = true,
  maxLabel = '10',
  minLabel = '0',
  ...rest
}: VerticalBarChartProps) => {
  const classes = cx('ids-vertical-bar-chart', className);

  const tickProps: React.SVGProps<SVGTextElement> = {
    strokeWidth: 0,
  };
  const xAxisProps: XAxisProps = {
    dataKey: 'score',
    tickLine: false,
    strokeWidth: '1px',
    tick: tickProps,
  };
  const yAxisProps: YAxisProps = {
    type: 'number',
    domain: [0, 'dataMax'],
    hide: true,
  };

  return (
    <div className={classes} data-test={dataTest} {...rest}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          barCategoryGap="15%"
          margin={{ top: 2, left: 2, right: 2, bottom: 2 }}
          width={800}
          /* Width and height here are ignored because of ResponsiveContainer, 
          but are useful for tests. */
          height={height}
        >
          <XAxis {...xAxisProps} />
          <YAxis {...yAxisProps} />
          <Bar
            dataKey="value"
            radius={[5, 5, 0, 0]}
            isAnimationActive={isAnimationActive}
          >
            {data.map((entry, index) => {
              const cellProps: CellProps = {
                className: cx('ids-vertical-bar-chart__bar', entry.className),
                key: `cell-${index}`,
              };
              if (entry.color) {
                cellProps.fill = entry.color;
              }
              return <Cell {...cellProps} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="ids-vertical-bar-chart__labels">
        <span className="ids-vertical-bar-chart__min-label">{minLabel}</span>
        <span className="ids-vertical-bar-chart__max-label">{maxLabel}</span>
      </div>
    </div>
  );
};

export default VerticalBarChart;

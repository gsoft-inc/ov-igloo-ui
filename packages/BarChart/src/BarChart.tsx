import * as React from 'react';
import cx from 'classnames';

import { useTransition, animated, easings } from 'react-spring';

import './bar-chart.scss';

export interface DataSet {
  /** Add label text above the bar chart. */
  label: string;
  /** The value displayed beside the bar chart. */
  value: number;
  /** Add the color to the bar chart. */
  color?: string;
}

export interface BarChartProps extends React.ComponentProps<'li'> {
  /** The data object that will be used for the bar chart. */
  dataSet: DataSet[];
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** Add a specific class to the component. */
  className?: string;
}

const BarChart: React.FunctionComponent<BarChartProps> = (
  props: BarChartProps
) => {
  const { dataSet, className, dataTest, ...rest } = props;

  if (!dataSet) {
    return null;
  }

  const setWidth = (value: number): undefined | string => {
    if (!value || value === 0) {
      return undefined;
    }

    const values = dataSet.map((data) => data.value);
    const maxValue = Math.max(...values);

    const size = (value * 100) / maxValue;

    return `${size}%`;
  };

  const transitions = useTransition(dataSet, {
    from: { width: '0' },
    enter: (item: DataSet) => [
      {
        width: setWidth(item.value),
      },
    ],
    config: { duration: 500, easing: easings.easeInCubic },
  });

  const barChart = transitions(({ width }, item: DataSet) => {
    const { label, value, color } = item;

    const animateWidth = value > 0 ? width : undefined;

    return (
      <li key={`ids-bar-chart-${value}`} className="ids-bar-chart" {...rest}>
        <span className="ids-bar-chart__label">{label}</span>
        <div className="ids-bar-chart__content">
          <animated.div
            className="ids-bar-chart__graph"
            data-value={value}
            style={{
              width: animateWidth,
              backgroundColor: color,
            }}
          />
          <span className="ids-bar-chart__value">{value}</span>
        </div>
      </li>
    );
  });

  // const barChart = dataSet.map((data: DataSet) => {
  //   const { label, value, color } = data;
  //
  //   return (
  //     <li key={`ids-bar-chart-${value}`} className="ids-bar-chart" {...rest}>
  //       <span className="ids-bar-chart__label">{label}</span>
  //       <div className="ids-bar-chart__content">
  //         <div
  //           className="ids-bar-chart__graph"
  //           data-value={value}
  //           style={{
  //             width: setWidth(value),
  //             background: color,
  //           }}
  //         />
  //         <span className="ids-bar-chart__value">{value}</span>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <ul
      className={cx('ids-bar-chart__container', className)}
      data-test={dataTest}
    >
      {barChart}
    </ul>
  );
};

export default BarChart;

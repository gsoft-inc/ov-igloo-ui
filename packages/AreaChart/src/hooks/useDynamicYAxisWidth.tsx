import * as React from 'react';

// eslint-disable-next-line max-len
const AXIS_TICK_VALUE_SELECTOR = `.recharts-cartesian-axis-tick-value[orientation="left"],
.recharts-cartesian-axis-tick-value[orientation="right"]`;
const AXIS_TICK_VALUE_ANIMATION_SELECTOR = `.ids-area-chart-skeleton-animation.recharts-yAxis`;
const DEFAULT_WIDTH = 60;

type Props = {
  yAxisWidthModifier?: (width: number) => number;
  loading?: boolean;
  areaChartData?: unknown[];
};

type ReturnValues = {
  yAxisWidth: undefined | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setChartRef: (ref: any) => void;
};

const useDynamicYAxisWidth = (props: undefined | Props): ReturnValues => {
  const { yAxisWidthModifier, loading = false, areaChartData } = props || {};
  const [yAxisWidthState, setYAxisWidthState] = React.useState(DEFAULT_WIDTH);

  const setChartRef = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (chartRef: any) => {
      if (chartRef != null && chartRef.container != null) {
        const tickValueElements = chartRef.container.querySelectorAll(
          loading
            ? AXIS_TICK_VALUE_ANIMATION_SELECTOR
            : AXIS_TICK_VALUE_SELECTOR,
        );
        const highestWidth = [...tickValueElements]
          .map((el) => {
            const boundingRect = el.getBoundingClientRect();
            if (boundingRect != null && boundingRect.width != null) {
              return boundingRect.width;
            }
            return 0;
          })
          .reduce((accumulator, value) => {
            if (accumulator < value) {
              return value;
            }
            return accumulator;
          }, 0);
        setYAxisWidthState(highestWidth);
      }
    },
    // Disabled this because I want the width
    // to be recalculated when the chart data is updated
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setYAxisWidthState, loading, areaChartData],
  );

  const yAxisWidth = React.useMemo(() => {
    if (yAxisWidthModifier != null && yAxisWidthState != null) {
      return yAxisWidthModifier(yAxisWidthState);
    }
    return yAxisWidthState;
  }, [yAxisWidthModifier, yAxisWidthState]);

  return {
    yAxisWidth,
    setChartRef,
  };
};

export default useDynamicYAxisWidth;

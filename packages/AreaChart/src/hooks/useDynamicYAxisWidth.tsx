import * as React from 'react';

// eslint-disable-next-line max-len
const AXIS_TICK_VALUE_SELECTOR = `.recharts-cartesian-axis-tick-value[orientation="left"],
.recharts-cartesian-axis-tick-value[orientation="right"]`;

type Props = {
  yAxisWidthModifier?: (width: number) => number;
};

type ReturnValues = {
  yAxisWidth: undefined | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setChartRef: (ref: any) => void;
};

const useDynamicYAxisWidth = (props: undefined | Props): ReturnValues => {
  const { yAxisWidthModifier } = props || {};
  const [yAxisWidthState, setYAxisWidthState] = React.useState(undefined);

  const setChartRef = React.useCallback(
    (chartRef) => {
      if (chartRef != null && chartRef.container != null) {
        const tickValueElements = chartRef.container.querySelectorAll(
          AXIS_TICK_VALUE_SELECTOR
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
    [setYAxisWidthState]
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

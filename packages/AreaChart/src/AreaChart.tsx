import * as React from 'react';
import cx from 'classnames';
import { DateTime } from 'luxon';
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxisProps,
  YAxisProps,
  DotProps,
  ReferenceArea,
} from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

import * as variables from '@igloo-ui/tokens/dist/base10/tokens.json';

import ChartTooltip from './ChartTooltip';
import './area-chart.scss';
import useDynamicYAxisWidth from './hooks/useDynamicYAxisWidth';

interface DataSet {
  /** Date/time in ISO format */
  dateTimeStamp: string;
  /** The score displayed on the y axis */
  score: number | null;
  /** The secondary score that is displayed inside the tooltip */
  secondaryScore?: number;
  /** The text displayed beside the score in the tooltip */
  name?: string;
  /** The text displayed beside the secondary score in the tooltip */
  secondaryName?: string;
}

interface AreaChartData {
  /** Date/time displayed as a number */
  dateTimeStamp: number;
  /** The score displayed on the y axis */
  score: number | null;
  /** The secondary score that is displayed inside the tooltip */
  secondaryScore?: number;
  /** The text displayed beside the score in the tooltip */
  name?: string;
  /** The text displayed beside the secondary score in the tooltip */
  secondaryName?: string;
}

interface DataRange {
  /** The min value of the y axis score
   * (Possible values: number, 'auto', 'dataMin' or 'dataMax')
   */
  min: number | string;
  /** The min value of the y axis score
   * (Possible values: number, 'auto', 'dataMin' or 'dataMax')
   */
  max: number | string;
}

interface DateTimeRange {
  /** Start date/time in ISO format */
  start: string;
  /** End date/time in ISO format */
  end: string;
}

export interface AreaChartProps extends React.ComponentProps<'div'> {
  /** Add a specific class to the area chart component */
  className?: string;
  /** The data object that will be used for the area chart */
  dataSet: DataSet[];
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** The start date and end date for the x axis */
  dateRange: DateTimeRange;
  /** Whether or not the chart should resize */
  isResponsive?: boolean;
  /** The min and max value of the y axis
   * (Possible values: number, 'auto', 'dataMin' or 'dataMax')
   */
  range?: DataRange;
  /** The formatter function for the y axis */
  scoreFormatter?: (score: number) => string;
  /** The formatter function for the score on the tooltip */
  tooltipScoreFormatter?: (score: number) => string;
  /** The message that is displayed when data is unavailable */
  unavailableDataMessage?: string;
  /** Whether or not to show the colored area below the line */
  withColoredArea?: boolean;
  /** Replaces AreaChart label with a skeleton */
  loading?: boolean;
}

const AreaChart: React.FunctionComponent<AreaChartProps> = (
  props: AreaChartProps
) => {
  const {
    className,
    dataSet,
    dataTest,
    dateRange,
    loading = false,
    isResponsive = true,
    range = { max: 'auto', min: 0 },
    scoreFormatter,
    tooltipScoreFormatter,
    unavailableDataMessage,
    withColoredArea = true,
  } = props;

  const TICK_LIMIT = 7;
  const DEFAULT_SKELETON_WIDTH = 24;
  const DEFAULT_SKELETON_HEIGHT = 8;

  const SkeletonAxisTick = ({
    x,
    y,
    className,
    payload,
    skeletonWidth = DEFAULT_SKELETON_WIDTH,
    skeletonHeight = DEFAULT_SKELETON_HEIGHT,
  }: {
    x?: number;
    y?: number;
    className?: string;
    payload?: { offset: number };
    skeletonWidth?: number;
    skeletonHeight?: number;
  }) => {
    let positionX;
    let positionY;

    if (x && y && payload) {
      positionX = x - skeletonWidth / 2 + payload.offset / 2;
      positionY = y - skeletonHeight / 2 + payload.offset / 2;
    }

    return (
      <g>
        <rect
          x={positionX}
          y={positionY}
          className={cx('ids-area-chart-skeleton-animation', className)}
          width={skeletonWidth}
          height={skeletonHeight}
          rx="4"
        />
      </g>
    );
  };

  const classes = cx('ids-area-chart', className);

  const startDate = DateTime.fromISO(dateRange.start, { zone: 'utc' })
    .endOf('day')
    .toUTC();
  const endDate = DateTime.fromISO(dateRange.end, { zone: 'utc' })
    .endOf('day')
    .toUTC();

  const [areaChartData, setAreaChartData] = React.useState<AreaChartData[]>();

  const dateFormatter = (date: number): string => {
    return DateTime.fromMillis(date).toLocaleString({
      month: 'short',
      day: 'numeric',
    });
  };

  const tooltipDateFormatter = (date: number): string => {
    return DateTime.fromMillis(date).toLocaleString(DateTime.DATE_FULL);
  };

  const getNumberOfTicks = (linePoints: number, maxTicks: number): number => {
    let bestTick = 0;
    let bestScore = 0;

    for (let i = maxTicks; i > 2; i -= 1) {
      const score = ((linePoints - i) / (i - 1)) % 1;
      if (score === 0) {
        bestTick = i;
        break;
      }

      if (!bestScore || score > bestScore) {
        bestTick = i;
        bestScore = score;
      }
    }

    return bestTick;
  };

  const getTicks = (): number[] => {
    const numberOfDays = endDate.diff(startDate, ['days']).days + 1;
    const numberOfTicks = getNumberOfTicks(numberOfDays, TICK_LIMIT);
    const ticksArr = [];
    const daysBetween = Math.ceil(numberOfDays / numberOfTicks);
    let currentDate = endDate;

    ticksArr.push(endDate.valueOf());
    for (let i = numberOfTicks; i > 0; i -= 1) {
      currentDate = currentDate.minus({ days: daysBetween });
      if (currentDate.valueOf() <= startDate.valueOf()) {
        break;
      }
      ticksArr.push(currentDate.valueOf());
    }

    ticksArr.push(startDate.valueOf());

    return ticksArr;
  };

  const geYtTicks = (): number[] => {
    let ticks: number[] = [];
    if (
      range &&
      typeof range.min === 'number' &&
      typeof range.max === 'number'
    ) {
      ticks = Array.from(
        { length: range.max + 1 },
        (_, i) => i + (range.min as number)
      );
    }

    if (range && range.min === 'auto' && range.max === 'auto') {
      ticks = [1, 2, 3, 4, 5];
    }

    return ticks;
  };

  const { yAxisWidth, setChartRef } = useDynamicYAxisWidth({
    yAxisWidthModifier: (x) => {
      let width = x;
      if (loading) {
        width = DEFAULT_SKELETON_WIDTH;
      }
      return width + 20;
    },
  });

  const cartesianGridConfig = {
    stroke: variables.grey200,
    strokeOpacity: 1,
    vertical: false,
  };

  const tickStyle = {
    fill: variables.grey600,
    fontSize: variables.fontSize2,
    fillOpacity: 1,
  };

  const xAxisConfig: XAxisProps = {
    dataKey: 'dateTimeStamp',
    scale: 'time',
    tickFormatter: dateFormatter,
    type: 'number',
    domain: [startDate.valueOf(), endDate.valueOf()],
    interval: 'preserveStartEnd',
    ticks: getTicks(),
    tick: tickStyle,
    tickLine: false,
    minTickGap: 20,
    tickMargin: 10,
    allowDataOverflow: true,
    axisLine: {
      stroke: variables.grey400,
    },
  };

  const yAxisConfig: YAxisProps = {
    allowDecimals: true,
    type: 'number',
    tickFormatter: scoreFormatter,
    tickLine: false,
    tickMargin: 10,
    tick: tickStyle,
    domain: [range.min, range.max],
    axisLine: {
      stroke: variables.grey400,
    },
    width: yAxisWidth,
  };

  if (!dataSet.length) {
    yAxisConfig.ticks = geYtTicks();
  }

  if (loading) {
    yAxisConfig.ticks = geYtTicks();
    yAxisConfig.tick = <SkeletonAxisTick />;
    xAxisConfig.tick = <SkeletonAxisTick skeletonWidth={32} />;
  }

  const dotConfig: DotProps = {
    r: 4,
    strokeWidth: 1,
    stroke: '#FFF',
    fill: variables.electricBlue500,
  };

  const commonAreaConfig = {
    type: 'monotone' as CurveType,
    strokeWidth: 3,
    fill: withColoredArea ? 'url(#curveAreaFillGradient)' : 'none',
    fillOpacity: 1,
  };

  const areaConfig = {
    ...commonAreaConfig,
    dataKey: 'score',
    connectNulls: false,
    stroke: variables.electricBlue500,
    activeDot: {
      ...dotConfig,
    },
  };

  const unavailableDataConfig = {
    ...commonAreaConfig,
    dataKey: 'score',
    connectNulls: true,
    stroke: variables.grey400,
    strokeWidth: '6',
    strokeDasharray: '1,9',
    activeDot: false,
  };

  const onlyUnavailableDataConfig = {
    type: 'basis',
    stroke: 'none',
    fill: 'none',
  };

  const buildAreaDefs = (): JSX.Element => {
    return (
      <defs>
        <linearGradient id="curveAreaFillGradient" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={variables.electricBlue50} />
          <stop offset="78%" stopColor="#EDF6FF" />
          <stop offset="96%" stopColor={variables.samoyed} />
        </linearGradient>
      </defs>
    );
  };

  React.useEffect(() => {
    let updatedAreaChartData = [];

    if (dataSet.length) {
      updatedAreaChartData = dataSet.map((dataSet) => {
        const currentScore: number | null = dataSet.score;

        return {
          dateTimeStamp: DateTime.fromISO(dataSet.dateTimeStamp)
            .toUTC()
            .endOf('day')
            .valueOf(),
          score: currentScore,
          secondaryScore: dataSet.secondaryScore,
          name: dataSet.name,
          secondaryName: dataSet.secondaryName,
        };
      });
    } else {
      const dates = getTicks();
      updatedAreaChartData = dates.map((date) => {
        return {
          dateTimeStamp: date,
          score: 0,
        };
      });
    }

    setAreaChartData(updatedAreaChartData);
    // If getTicks() is added to dependency array, it creates an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSet]);

  const areaChart = (
    <RechartsAreaChart
      data={areaChartData}
      margin={{ right: 26, top: 10, bottom: 10, left: 0 }}
      ref={setChartRef}
    >
      {withColoredArea && buildAreaDefs()}
      <CartesianGrid {...cartesianGridConfig} />
      <XAxis {...xAxisConfig} />
      <YAxis {...yAxisConfig} />
      {dataSet.length && !loading ? (
        <Area {...areaConfig} />
      ) : (
        <>
          <ReferenceArea
            x1={startDate.valueOf()}
            x2={endDate.valueOf()}
            {...onlyUnavailableDataConfig}
            label={unavailableDataMessage}
          />
          {!loading && (
            <Area {...unavailableDataConfig} strokeLinecap="round" />
          )}
        </>
      )}
      {dataSet.length ? (
        <Tooltip
          filterNull={false}
          cursor={false}
          content={
            <ChartTooltip
              dateFormatter={tooltipDateFormatter}
              scoreFormatter={tooltipScoreFormatter}
              unavailableDataMessage={unavailableDataMessage}
            />
          }
        />
      ) : (
        ''
      )}
    </RechartsAreaChart>
  );

  return (
    <div className={classes} data-test={dataTest}>
      {isResponsive ? (
        <ResponsiveContainer width="100%" height={220}>
          {areaChart}
        </ResponsiveContainer>
      ) : (
        areaChart
      )}
    </div>
  );
};

export default AreaChart;

import * as React from 'react';

import { getWeeksInMonth } from '@internationalized/date';
import { useCalendarGrid, useLocale } from 'react-aria';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';

import CalendarCell from './CalendarCell';

type State = CalendarState | RangeCalendarState;

interface CalendarGridProps {
  state: State;
  highlightToday?: boolean;
}

const CalendarGrid = ({
  state,
  highlightToday,
  ...props
}: CalendarGridProps): JSX.Element => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps} className="ids-datepicker__table">
      <thead {...headerProps} className="ids-datepicker__thead">
        <tr>
          {weekDays.map((day, index) => (
            <th
              className="ids-datepicker__head"
              key={`ids-th-${index.toString()}`}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={`ids-cell-${i.toString()}`}
                    state={state}
                    date={date}
                    highlightToday={highlightToday}
                  />
                ) : (
                  <td key={`ids-td-${i.toString()}`} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarGrid;

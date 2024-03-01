import * as React from "react";
import cx from "classnames";

import { useCalendarCell } from "@igloo-ui/provider";
import type { CalendarState, RangeCalendarState } from "@react-stately/calendar";
import {
    type CalendarDate,
    getLocalTimeZone,
    now,
    isEqualDay
} from "@internationalized/date";

interface CalendarCellProps {
    state: CalendarState | RangeCalendarState;
    date: CalendarDate;
    highlightToday?: boolean;
}

const CalendarCell = (props: CalendarCellProps): JSX.Element => {
    const { state, date, highlightToday } = props;
    const ref = React.useRef<HTMLDivElement>(null);
    const {
        cellProps,
        buttonProps,
        isSelected,
        isOutsideVisibleRange,
        isDisabled,
        isUnavailable,
        formattedDate
    } = useCalendarCell({ date }, state, ref);

    const today = now(getLocalTimeZone());
    const isToday = isEqualDay(date, today);

    const classes = cx("ids-datepicker__content", {
        "ids-datepicker__content--today": isToday && highlightToday,
        "ids-datepicker__content--selected": isSelected,
        "ids-datepicker__content--disabled": isDisabled,
        "ids-datepicker__content--unavailable": isUnavailable
    });

    return (
        <td {...cellProps} className="ids-datepicker__cell">
            <div
                {...buttonProps}
                ref={ref}
                hidden={isOutsideVisibleRange}
                className={classes}
            >
                {formattedDate}
            </div>
        </td>
    );
};

export default CalendarCell;

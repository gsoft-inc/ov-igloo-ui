import * as React from "react";
import cx from "classnames";

import { useLocale, type DateValue, I18nProvider } from "react-aria";

import {
    getLocalTimeZone,
    isWeekend,
    now,
    parseAbsolute,
    parseAbsoluteToLocal,
    ZonedDateTime
} from "@internationalized/date";
import Dropdown from "@igloo-ui/dropdown";
import Input, { type InputProps } from "@igloo-ui/input";
import Button from "@igloo-ui/button";
import IconCalendar from "@igloo-ui/icons/dist/Calendar";
import { DateTime } from "luxon";

import Calendar from "./components/Calendar";

import "./datepicker.scss";

interface Date { utc: string; local: string }

export interface DatepickerProps {
    /** Selected value for the date picker.
     * These props represent the local date of the user
     * */
    selectedDay?: string;
    /** Specifies the value inside the input. */
    value?: string;
    /** Text that appears in the form control when it has no value set. */
    placeholder?: string;
    /** Defines a string value that labels the current element. */
    ariaLabel?: string;
    /** True if the date picker should be disabled. */
    disabled?: boolean;
    /** Form.ValidatedField state. True if it has an error. */
    error?: boolean;
    /** True if the Dropdown list is displayed. */
    isOpen?: boolean;
    /** Callback function that will be called when the user types something. */
    onChange?: (date: Date | null) => void;
    /** Callback when the user clicks outside the Dropdown. */
    onClose?: () => void;
    /** Function called when the element receives focus. */
    onFocus?: () => void;
    /** Callback when they clear the date */
    onClear?: () => void;
    /** Callback when the user selects a date that is unavailable through the input */
    onDateUnavailable?: (date: Date | null) => void;
    /** Add a data-test tag for automated tests. */
    dataTest?: string;
    /** True if the control's value can be cleared. */
    isClearable?: boolean;
    /** Label for the clear button. Required if clearable is set to True */
    clearLabel?: string;
    /** Highlights today's date if true */
    highlightToday?: boolean;
    /** Disabled weekend date */
    weekendUnavailable?: boolean;
    /** The minimum allowed date that a user may select */
    minDate?: string;
    /** The maximum allowed date that a user may select */
    maxDate?: string;
    /** True if the input is readonly */
    readOnly?: boolean;
    /** The locale to use for formatting/parsing. If not specified, the default locale will be used. */
    locale?: string;
    /** If true, the date picker will manage everything in UTC. */
    manageEverythingInUtc?: boolean;
}

const Datepicker: React.FunctionComponent<DatepickerProps> = ({
    selectedDay,
    value,
    minDate,
    maxDate,
    placeholder,
    ariaLabel,
    disabled = false,
    isOpen = false,
    error = false,
    isClearable = false,
    clearLabel,
    onChange,
    onClose,
    onClear,
    onDateUnavailable,
    onFocus,
    dataTest,
    highlightToday = true,
    weekendUnavailable = false,
    readOnly = false,
    manageEverythingInUtc = false,
    locale,
    ...rest
}: DatepickerProps) => {
    const { locale: ariaLocale } = useLocale();
    const internalLocale = locale || ariaLocale;
    const timeZone = manageEverythingInUtc ? "utc" : getLocalTimeZone();
    const dateTimeOfDay = now(timeZone);

    const formatDate = (date: string | undefined): ZonedDateTime | undefined => {
        if (date && manageEverythingInUtc) {
            return parseAbsolute(date, 'utc');
        }

        if (date) {
            return parseAbsoluteToLocal(date);
        }

        return undefined;
    };

    const createZonedDateTime = (date: DateValue | DateTime): ZonedDateTime => {
        const { year, month, day } = date;
        const { hour, minute, second, millisecond, offset, timeZone } =
            dateTimeOfDay;

        return new ZonedDateTime(
            year,
            month,
            day,
            timeZone,
            offset,
            hour,
            minute,
            second,
            millisecond
        );
    };

    const handleChange = (date: DateValue | DateTime): void => {
        const zonedDateTime = createZonedDateTime(date);
        const local = DateTime.fromJSDate(zonedDateTime.toDate()).toISO();
        // the calendar return an object with utc and local
        if (onChange) {
            onChange({
                utc: zonedDateTime.toAbsoluteString(),
                local: local
            });
        }
    };

    const handleClear = (): void => {
        if (onClear) {
            onClear();
        }

        if (onChange) {
            onChange(null);
        }
    };

    const isDateUnavailable = (date: DateValue): boolean => {
        if(weekendUnavailable && manageEverythingInUtc) {
            return isWeekend(date, 'utc');
        }

        if (weekendUnavailable && internalLocale) {
            return isWeekend(date, internalLocale);
        }

        return false;
    };

    const isDateSelectable = (date: DateTime): boolean => {
        let isMinDateSelectable = true;
        let isMaxDateSelectable = true;
        if (minDate) {
            isMinDateSelectable =
                date.startOf("day").toMillis() >= DateTime.fromISO(minDate).startOf("day").toMillis();
        }
        if (maxDate) {
            isMaxDateSelectable =
                date.startOf("day").toMillis() <= DateTime.fromISO(maxDate).startOf("day").toMillis();
        }

        const zonedDateTime = createZonedDateTime(date);

        return !isDateUnavailable(zonedDateTime) && isMinDateSelectable && isMaxDateSelectable;
    };

    const handleDateUnavailable = (date: DateValue | DateTime): void => {
        const zonedDateTime = createZonedDateTime(date);
        const local = DateTime.fromJSDate(zonedDateTime.toDate()).toISO();
        if (onDateUnavailable) {
            onDateUnavailable({
                utc: zonedDateTime.toAbsoluteString(),
                local: local
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value: inputValue } = e.target

        const dateRegEx = /^(?:\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4})$/;
        const isValidInputDate = dateRegEx.test(inputValue);
        const isFormatYYYYMMDD = inputValue.indexOf('-') === 4 || inputValue.indexOf('/') === 4

        const date = isFormatYYYYMMDD ?
            inputValue.split(/[/-]/).join('-') :
            inputValue.split(/[/-]/).reverse().join('-');

        if(isValidInputDate ) {
            const isoDate = DateTime.fromISO(date);
            if (isoDate.isValid) {
                if (isDateSelectable(isoDate)) {
                    handleChange(isoDate);
                } else {
                    handleDateUnavailable(isoDate);
                }
            }
        }
    };

    const formattedMinDate = formatDate(minDate);
    const formattedMaxDate = formatDate(maxDate);
    const formattedSelectedDay = formatDate(selectedDay);
    const minDateIsGreaterThanMaxDate = formattedMinDate && formattedMaxDate ? formattedMinDate > formattedMaxDate : false;

    minDateIsGreaterThanMaxDate && console.warn("The minDate is greater than maxDate for the Datepicker. For this reason, the minDate and maxDate are set to the selectedDay.");

    const classes = cx("ids-datepicker", {
        "ids-datepicker--disabled": disabled
    });

    const calendar = (
        <>
            <Calendar
                aria-label={ariaLabel}
                className={classes}
                value={formattedSelectedDay || null}
                onChange={handleChange}
                isDisabled={disabled}
                highlightToday={highlightToday}
                isDateUnavailable={isDateUnavailable}
                minValue={minDateIsGreaterThanMaxDate ? formattedSelectedDay : formattedMinDate}
                maxValue={minDateIsGreaterThanMaxDate ? formattedSelectedDay : formattedMaxDate}
            />
            {isClearable && clearLabel && (
                <Button
                    onClick={handleClear}
                    className="ids-datepicker__action"
                    appearance={{ type: "ghost", variant: "danger" }}
                >
                    {clearLabel}
                </Button>
            )}
        </>
    );

    const inputProps: InputProps = {
        placeholder,
        disabled,
        error,
        value,
        prefixIcon: <IconCalendar />,
        type: "text",
        onFocus,
        onChange: handleInputChange,
        className: 'ids-datepicker__input'
    };

    if (readOnly) {
        inputProps.readOnly = readOnly;
    }

    return (
        <I18nProvider locale={locale}>
            <Dropdown
                isOpen={!disabled && isOpen}
                onClose={onClose}
                content={calendar}
                size="medium"
                className="ids-datepicker__dropdown"
                dataTest={dataTest}
                {...rest}
            >
                <Input {...inputProps}  />
            </Dropdown>
        </I18nProvider>
    );
};

export default Datepicker;

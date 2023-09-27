import React, { useState } from 'react';

import { DateTime } from 'luxon';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Datepicker from './Datepicker';

import readme from '../README.md';

export default {
    title: 'Components/Datepicker',
    component: Datepicker,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        selectedDay: {
            control: {
                type: 'date',
            },
        },
    },
} as Meta<typeof Datepicker>;

type Story = StoryObj<typeof Datepicker>;
type Date = string | undefined;

const formattedStorybookDate = (date: Date) => {
    if (!date) {
        return undefined;
    }
    return DateTime.fromMillis(Number(date)).toISO();
};

const formattedDate = (date: Date) => {
    if (!date) {
        return '';
    }
    return DateTime.fromISO(date).toLocaleString();
};

const Template: StoryFn<typeof Datepicker> = (args) => {
    const initialDate = args.selectedDay ? args.selectedDay : '';
    const initialRangeDate = {
        minDate: args.minDate ? args.minDate : '',
        maxDate: args.maxDate ? args.maxDate : '',
    };

    const [showDatepicker, setShowDatepicker] = useState(false);
    const [date, setDate] = useState<string | undefined>(initialDate);
    const [rangeDate, setRangeDate] = useState<{
        minDate: string | undefined;
        maxDate: string | undefined;
    }>(initialRangeDate);

    React.useEffect(() => {
        if (date !== args.selectedDay) {
            setDate(formattedStorybookDate(args.selectedDay));
        }

        if (rangeDate.maxDate !== args.maxDate) {
            setRangeDate({
                ...rangeDate,
                maxDate: formattedStorybookDate(args.maxDate),
            });
        }

        if (rangeDate.minDate !== args.minDate) {
            setRangeDate({
                ...rangeDate,
                minDate: formattedStorybookDate(args.minDate),
            });
        }
    }, [args]);

    React.useEffect(() => {
        setShowDatepicker(false);
    }, [date]);

    const handleChange = (date: { utc: string } | null) => {
        date ? setDate(date.utc) : setDate('');
    };

    return (
        <>
            <Datepicker
                {...args}
                isOpen={showDatepicker}
                selectedDay={date}
                value={formattedDate(date)}
                minDate={rangeDate.minDate}
                maxDate={rangeDate.maxDate}
                onFocus={() => setShowDatepicker(true)}
                onClose={() => setShowDatepicker(false)}
                onChange={handleChange}
            />
        </>
    );
};

const local = DateTime.local().plus({ days: 2 });
const apiDate = local.setZone('utc');

export const Overview: Story = {
    render: Template,

    args: {
        ...Template.args,
        selectedDay: apiDate.toString(),
        dataTest: 'ids-datepicker',
        placeholder: 'Select date',
        ariaLabel: 'goal start date',
    },

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const Disabled: Story = {
    render: Template,

    args: {
        placeholder: 'Select date',
        disabled: true,
    },
};

export const ReadOnly: Story = {
    render: Template,

    args: {
        placeholder: 'Select date',
        readOnly: true,
    },
};

export const French: Story = {
    render: Template,

    args: {
        placeholder: 'Select date',
        locale: 'fr-CA',
        weekendUnavailable: true
    },
};

export const Error = {
    render: Template,

    args: {
        error: true,
    },
};

export const Clearable: Story = {
    render: Template,

    args: {
        ...Overview.args,
        isClearable: true,
        clearLabel: 'Clear',
    },

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const MinValue: Story = {
    render: Template,

    args: {
        ...Overview.args,
        minDate: apiDate.toString(),
    },

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const MaxValue: Story = {
    render: Template,

    args: {
        ...Overview.args,
        maxDate: apiDate.toString(),
    },

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const UnavailableWeekend: Story = {
    render: Template,

    args: {
        ...Overview.args,
        weekendUnavailable: true,
    },

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

const DATE = DateTime.fromISO('2022-11-14');

export const Interaction: Story = {
    render: Template,

    args: {
        ...Overview.args,
        selectedDay: DATE.toString(),
        dataTest: 'ids-date-picker-interaction',
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByPlaceholderText(/Select date/));

        await expect(
            canvas.getByDisplayValue(DATE.toLocaleString())
        ).toBeInTheDocument();
    },
};

export const ManageEverythingInUtc: Story = {
    render: Template,
    args: {
        ...Overview.args,
        manageEverythingInUtc: true,
    }
}
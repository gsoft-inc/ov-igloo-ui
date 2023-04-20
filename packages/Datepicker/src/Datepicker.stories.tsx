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
      }
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '35rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Datepicker>;

const Template: StoryFn<typeof Datepicker> = (args) => {
  const [showDatepicker, setShowDatepicker] = useState(args.isOpen);
  const [date, setDate] = useState(args.selectedDay);

  React.useEffect(() => {
    setShowDatepicker(false);
  }, [date]);

  const formattedDate = date ? DateTime.fromISO(date).toLocaleString() : '';

  const handleChange = (date: { utc: string } | null) => {
    if (!date) {
      setDate('');
    } else {
      setDate(date.utc);
    }
  };

  return (
    <Datepicker
      disabled={args.disabled}
      ariaLabel="goal start date"
      placeholder="Select date"
      selectedDay={date}
      value={formattedDate}
      isOpen={showDatepicker}
      onClose={() => setShowDatepicker(false)}
      onChange={handleChange}
      onFocus={() => setShowDatepicker(!showDatepicker)}
      error={args.error}
      isClearable={args.isClearable}
      clearLabel={args.clearLabel}
      onClear={args.onClear}
      weekendUnavailable={args.weekendUnavailable}
      minDate={args.minDate}
    />
  );
};

const local = DateTime.local().plus({ days: 2 });
const apiDate = local.setZone('utc');

type Story = StoryObj<typeof Datepicker>;

export const Overview: Story = {
  render: Template,

  args: {
    selectedDay: apiDate.toString(),
    disabled: false,
    dataTest: 'ids-datepicker',
    error: false,
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Disabled: Story = {
  render: Template,

  args: {
    disabled: true,
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
    minDate: apiDate.toString(),
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const UnavailableWeekend: Story = {
  render: Template,

  args: {
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

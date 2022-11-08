import React, { useState } from 'react';

import { DateTime } from 'luxon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Datepicker from './Datepicker';

import readme from '../README.md';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  parameters: {
    description: readme,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '35rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => {
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
    />
  );
};

export const Overview = Template.bind({});

const local = DateTime.local().plus({ days: 2 });
const apiDate = local.setZone('utc');

Overview.args = {
  selectedDay: apiDate.toString(),
  disabled: false,
  dataTest: 'ids-datepicker',
  error: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

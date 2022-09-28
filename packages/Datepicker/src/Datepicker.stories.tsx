import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import readme from '../README.md';

import Datepicker from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => {
  const [date, setDate] = useState(args.selectedDay);

  const handleChange = (date: { utc: string }) => {
    setDate(date.utc);
  };

  return <Datepicker {...args} selectedDay={date} onChange={handleChange} />;
};

export const Overview = Template.bind({});

const local = DateTime.local().plus({ days: 2 });
const apiDate = local.setZone('utc');

Overview.args = {
  selectedDay: apiDate.toString(),
  disabled: false,
  dataTest: 'ids-datepicker',
};

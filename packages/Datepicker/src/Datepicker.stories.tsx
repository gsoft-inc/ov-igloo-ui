import React, { useState } from 'react';
import Input from '@igloo-ui/input';
import Dropdown from '@igloo-ui/dropdown';

import Calendar from '@igloo-ui/icons/dist/Calendar';
import { DateTime } from 'luxon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import readme from '../README.md';

// @ts-ignore
import example from './goal-date.png';

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

export const Goal = () => {
  const [show, setShow] = useState(true);
  const [date, setDate] = useState('');

  const handleChange = (date: { utc: string }) => {
    setDate(date.utc);
  };

  const dt = date !== '' ? DateTime.fromISO(date).toLocaleString() : date;

  return (
    <>
      <img
        src={example}
        alt="demo image"
        style={{ maxWidth: '100%', width: 'auto' }}
      />
      <div style={{ position: 'relative' }}>
        <Dropdown
          isOpen={show}
          size="medium"
          position="bottom"
          content={<Datepicker onChange={handleChange} selectedDay={date} />}
        >
          <Input
            prefixIcon={<Calendar />}
            placeholder="Select date"
            onClick={() => setShow(true)}
            onBlur={() => setShow(false)}
            value={dt}
          />
        </Dropdown>
      </div>
    </>
  );
};

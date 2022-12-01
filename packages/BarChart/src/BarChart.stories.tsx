import React, { PointerEvent } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

import readme from '../README.md';

import BarChart from './BarChart';

export default {
  title: 'Components/BarChart',
  component: BarChart,
  parameters: {
    description: readme,
    chromatic: { delay: 600 },
  },
} as ComponentMeta<typeof BarChart>;

const mockData = [
  {
    id: '1',
    label: 'Good vibes',
    value: 48,
    color: tokens.dandelion400,
  },
  {
    id: '2',
    label: 'Excellence',
    value: 46,
    color: tokens.electricBlue500,
  },
  {
    id: '3',
    label: 'Radical candor',
    value: 24,
    color: tokens.strawberryFields200,
  },
  {
    id: '4',
    label: 'Custom cards by members',
    value: 0,
    color: tokens.sky100,
  },
];

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  dataSet: mockData,
};

export const Debug = () => {
  const uniqueRow = {
    id: '1',
    label: 'Rerender animation',
    value: 32,
    color: '#2a91de',
  };

  const [debugData, setDebugData] = React.useState(uniqueRow);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setDebugData((prev) => ({ ...prev, value }));
  };

  return (
    <>
      <input type="number" value={debugData.value} onChange={handleChange} />
      <BarChart dataSet={[debugData]} />
    </>
  );
};

import React from 'react';
import BarChart from '@igloo-ui/bar-chart';

const Example = () => {
  const data = [
    {
      label: 'Good vibes',
      value: 48,
      color: '#FBC73B',
    },
    {
      label: 'Excellence',
      value: 46,
      color: '#1053FF',
    },
    {
      label: 'Radical candor',
      value: 24,
      color: '#E7919A',
    },
    {
      label: 'Custom cards by members',
      value: 0,
      color: '#B2DDF2',
    },
  ];
  return (
    <div className="example example--max-with">
      <BarChart dataSet={data} />
    </div>
  );
};

export default Example;

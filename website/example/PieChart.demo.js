import React from 'react';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';
import PieChart from '@igloo-ui/pie-chart';

const Example = () => {
  const mockData = [
    { id: 'positive', percentage: 25, color: tokens.seaweed400 },
    { id: 'negative', percentage: 10, color: tokens.coral400 },
    { id: 'skipped', percentage: 40, color: tokens.creamsicle100 },
    { id: 'unanswered', percentage: 25, color: tokens.grey300 },
  ];

  return (
    <div className="example example--truncate">
      <PieChart data={mockData} label="Poll Completion" size="large" rate={35} />
    </div>
  );
};

export default Example;

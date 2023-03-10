import React from 'react';
import StackedBar from '@igloo-ui/stacked-bar';

const Example = () => {
  return (
    <div className="example" style={{ padding: '0 2rem' }}>
      <StackedBar
        dataSet={[
          {
            key: 'stronglyUnfavorable',
            label: 'Strongly Unfavorable',
            value: 30,
            strength: -2,
          },
          {
            key: 'unfavorable',
            label: 'Unfavorable',
            value: 10,
            strength: -1,
          },
          {
            key: 'neutral',
            label: 'Neutral',
            value: 20,
            strength: 0,
          },
          {
            key: 'favorable',
            label: 'Favorable',
            value: 15,
            strength: 1,
          },
          {
            key: 'stronglyFavorable',
            label: 'Strongly Favorable',
            value: 25,
            strength: 2,
          },
        ]}
        showValue
      />
    </div>
  );
};

export default Example;

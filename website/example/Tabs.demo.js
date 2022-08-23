import React from 'react';
import Tabs from '@igloo-ui/tabs';

const Example = () => {
  return (
    <div className="example">
      <Tabs
        tabs={[
          {
            label: 'Premium Tab',
            premium: true,
            children: 'Content of premium tab',
          },
          {
            label: 'Notification Tab',
            notification: true,
            children: 'Content of notification tab',
          },
          {
            label: 'Premium Notification Tab',
            notification: true,
            premium: true,
            children: 'Content of premium notification tab',
          },
        ]}
      />
    </div>
  );
};

export default Example;

import React from 'react';
import Tabs from '@igloo-ui/tabs';

const Example = () => {
  const [selected, setSelected] = React.useState(0);
  const handleTabChange = React.useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  return (
    <div className="example">
      <Tabs
        selected={selected}
        onSelectTab={handleTabChange}
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

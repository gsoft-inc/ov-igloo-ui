import React from 'react';
import Alert from '@igloo-ui/alert';

export default function Example() {
  const handleClick = (event) => {
    console.log('Go to integration event', event);
  };

  return (
    <div className="example">
      <Alert
        type="info"
        title="Your members are currently synced"
        message="To use the bulk import function, you must first disactivate your integration."
        button={{
          label: 'Go to integrations',
          onClick: handleClick,
        }}
      />
    </div>
  );
}

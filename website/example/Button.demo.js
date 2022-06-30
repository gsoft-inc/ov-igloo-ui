import React from 'react';
import Button from '@igloo-ui/button';

const Example = () => {
  return (
    <div className="example">
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="premium">Premium</Button>
      <Button appearance="danger">Danger</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button appearance={{ type: 'ghost', variant: 'danger' }}>
        Ghost Danger
      </Button>
    </div>
  );
};

export default Example;

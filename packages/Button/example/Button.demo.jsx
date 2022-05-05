import React from 'react';
import Button from '@igloo-ui/button';

export default function ButtonDemo() {
  return (
    <div className="example">
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="premium">Premium</Button>
      <Button appearance="danger">Danger</Button>
      <Button appearance="ghost">Ghost</Button>
    </div>
  );
}

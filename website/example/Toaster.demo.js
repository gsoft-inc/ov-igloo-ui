import React from 'react';
import Toaster, { toaster } from '@igloo-ui/toaster';
import Button from '@igloo-ui/button';

const Example = () => {
  const notify = () => toaster.success('Your reminder is on the way!');

  return (
    <div className="example">
      <Button appearance="secondary" onClick={notify}>
        Make me a toast
      </Button>
      <Toaster />
    </div>
  );
};

export default Example;

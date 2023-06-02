import React from 'react';
import Button from '@igloo-ui/button';
import Toaster, { toast } from '@igloo-ui/toaster';

const Example = () => {
  return (
    <div className="example">

      <Button onClick={() => {
        toast.success('Successfully toasted!');
      }}>
        Success
      </Button>
      
      <Toaster />
    </div>
  );
};

export default Example;

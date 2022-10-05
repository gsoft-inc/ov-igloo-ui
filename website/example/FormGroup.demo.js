import React from 'react';
import FormGroup from '@igloo-ui/form-group';
import Input from '@igloo-ui/input';

const Example = () => {
  return (
    <div className="example example--truncate">
      <FormGroup label="Name" errorMsg="Name is required" showError={true}>
        <Input type="text" placeholder="John Doe" error={true} />
      </FormGroup>
    </div>
  );
};

export default Example;

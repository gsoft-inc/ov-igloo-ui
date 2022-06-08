import React from 'react';
import HelperText from '@igloo-ui/helper-text';

const Example = () => {
  return (
    <div className="example">
      <HelperText>Try to add details, give concrete examples.</HelperText>
      <HelperText error>Organization name is required</HelperText>
    </div>
  );
};

export default Example;

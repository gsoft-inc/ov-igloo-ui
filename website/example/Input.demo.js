import React, { useState } from 'react';
import Input from '@igloo-ui/input';

const Example = () => {
  const [name, setName] = useState('');

  return (
    <div className="example example--truncate">
      <Input
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="First name"
      />
    </div>
  );
};

export default Example;

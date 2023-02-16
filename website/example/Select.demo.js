import React from 'react';
import Select from '@igloo-ui/select';
import Ellipsis from '@igloo-ui/ellipsis';

import Audio from '@igloo-ui/icons/dist/Audio';
import Feedback from '@igloo-ui/icons/dist/Feedback';
import Email from '@igloo-ui/icons/dist/Email';

const Example = () => {
  const options = [
    {
      label: 'Telephone',
      value: 'Telephone',
      icon: <Audio size="small" />,
    },
    {
      label: 'SMS',
      value: 'SMS',
      icon: <Feedback size="small" />,
    },
    {
      label: 'Email',
      value: 'Email',
      icon: <Email size="small" />,
    },
  ];

  return (
    <div className="example example--truncate">
      <Select options={options}>
        <Ellipsis>Select you favorite communication media</Ellipsis>
      </Select>
    </div>
  );
};

export default Example;

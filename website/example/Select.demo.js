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
      icon: Audio,
    },
    {
      label: 'SMS',
      value: 'SMS',
      icon: Feedback,
    },
    {
      label: 'Email',
      value: 'Email',
      icon: Email,
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

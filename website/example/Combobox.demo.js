import React from 'react';

import Combobox from '@igloo-ui/combobox';

const optionList = [
  {
    label: 'Text 1',
    value: '1',
  },
  {
    label: 'Text 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    label:
      'Text 3. I will put a lot of text here to see how it behaves. Hopefully it looks good!',
    value: '3',
    color: '#74DCC9',
  },
];

const Example = () => {
  return (
    <div className="example">
      <Combobox
        options={optionList}
        search
        clear
        clearTooltipText="Remove Mapping"
        style={{ width: '30rem' }}
      >
        Place holder text
      </Combobox>
    </div>
  );
};

export default Example;

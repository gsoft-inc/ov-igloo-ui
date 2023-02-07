import React from 'react';

import List from '@igloo-ui/list';

const optionList = [
  {
    type: 'list',
    label: 'Item 1',
    value: '1',
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 2 (disabled)',
    value: '2',
    disabled: true,
  },
  {
    type: 'list',
    label: 'Item 3 (focused)',
    value: '3',
    description: 'just adding some description',
  },
  {
    type: 'list',
    label: 'Item 4 (selected)',
    value: '4',
  },
  {
    type: 'list',
    label: 'Item 5',
    value: '5',
    color: '#74DCC9',
  },
];

const Example = () => {
  const [selectedOption, setSeletedOption] = React.useState(optionList[3]);
  const [focusedOption, setFocusedOption] = React.useState(optionList[2]);

  function handleOptionSelect(option) {
    setSeletedOption(option);
  }

  function handleOptionFocus(option) {
    setFocusedOption(option);
  }

  return (
    <div className="example">
      <List
        options={optionList}
        onOptionChange={handleOptionSelect}
        onOptionFocus={handleOptionFocus}
        selectedOption={selectedOption}
        focusedOption={focusedOption}
      />
    </div>
  );
};

export default Example;

import React, { useState } from 'react';
import Radio from '@igloo-ui/radio';

const Example = () => {
  const [activeOption, setActiveOption] = useState('');

  return (
    <div className="example">
      <div className="example__block">
        <div className="example__form">
          <Radio
            onChange={() => setActiveOption('optionA')}
            checked={activeOption === 'optionA'}
            htmlFor="radio-example-id1"
          >
            Create profile and invite members
          </Radio>
          <Radio
            onChange={() => setActiveOption('optionB')}
            checked={activeOption === 'optionB'}
            htmlFor="radio-example-id2"
          >
            Create profile, but invite members later
          </Radio>
        </div>
      </div>
    </div>
  );
};

export default Example;

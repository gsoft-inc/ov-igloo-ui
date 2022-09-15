import React from 'react';
import OptionButton from '@igloo-ui/option-button';

const Example = () => {
  return (
    <div className="example example--truncate">
      <OptionButton
        className="isb-option-button__item"
        id="MultipleChoiceBtn"
        name="buttonType"
        buttonType="MultipleChoice"
        text="Multiple Choice"
      />
    </div>
  );
};

export default Example;

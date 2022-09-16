import React from 'react';
import OptionButton from '@igloo-ui/option-button';

const Example = () => {
  return (
    <div className="example example--truncate">
      <OptionButton
        className="isb-option-button__item"
        htmlFor="MultipleChoiceBtn"
        name="buttonType"
        buttonType="MultipleChoice"
      >
        Multiple Choice
      </OptionButton>
    </div>
  );
};

export default Example;

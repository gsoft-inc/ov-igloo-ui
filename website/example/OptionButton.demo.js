import React from 'react';
import OptionButton from '@igloo-ui/option-button';

const Example = () => {
  return (
    <div className="example example--truncate">
      <OptionButton
        className="isb-option-button__item"
        htmlFor="MultipleChoiceBtn"
        name="buttonType"
        buttonType="multipleChoice"
      >
        Multiple Choice
      </OptionButton>
    </div>
  );
};

export default Example;

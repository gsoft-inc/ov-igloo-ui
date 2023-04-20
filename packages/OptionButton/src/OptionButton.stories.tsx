import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import OptionButton from './OptionButton';
import Sparkles from '@igloo-ui/icons/dist/Sparkles';

export default {
  title: 'Components/OptionButton',
  component: OptionButton,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof OptionButton>;

const Template: StoryFn<typeof OptionButton> = (args) => (
  <OptionButton className="isb-option-button__item" {...args} />
);

export const Overview = {
  render: Template,

  args: {
    children: 'some text',
    buttonType: 'multipleChoice',
    htmlFor: 'optionButton1',
  },
};

export const ButtonType = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="textBtn"
      name="buttonType"
      buttonType="text"
    >
      Text
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="optionScaleBtn"
      name="buttonType"
      buttonType="optionScale"
    >
      Option Scale
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="MultipleChoiceBtn"
      name="buttonType"
      buttonType="multipleChoice"
    >
      Multiple Choice
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="LikertBtn"
      name="buttonType"
      buttonType="likert"
    >
      Likert
    </OptionButton>
  </Section>
);

export const States = {
  render: () => (
    <Section>
      <OptionButton
        className="isb-option-button__item"
        htmlFor="focusBtn"
        name="state"
        buttonType="text"
      >
        Focus
      </OptionButton>
      <OptionButton
        className="isb-option-button__item"
        htmlFor="disabledBtn"
        name="state"
        buttonType="optionScale"
        disabled
      >
        Disabled
      </OptionButton>
      <OptionButton
        className="isb-option-button__item"
        htmlFor="hoverBtn"
        name="state"
        buttonType="optionScale"
      >
        Hover
      </OptionButton>
    </Section>
  ),

  parameters: {
    pseudo: {
      hover: ['#hoverBtn'],
      focus: ['#focusBtn'],
    },
  },
};

export const CheckedStates = () => {
  const [checkedId, setCheckedId] = React.useState('radio2');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedId(event.target.id);
  };

  return (
    <Section>
      <OptionButton
        className="isb-option-button__item"
        htmlFor="radio1"
        name="checkedState"
        buttonType="multipleChoice"
        title="Unchecked Button"
        onChange={handleOnChange}
        checked={checkedId == 'radio1'}
        unchecked={checkedId != 'radio1'}
      >
        Unchecked Button
      </OptionButton>
      <OptionButton
        className="isb-option-button__item"
        htmlFor="radio2"
        name="checkedState"
        buttonType="likert"
        onChange={handleOnChange}
        checked={checkedId == 'radio2'}
        unchecked={checkedId != 'radio2'}
      >
        Checked
      </OptionButton>
    </Section>
  );
};

export const Description = () => (
  <Section>
    <span title="Description with a lot of text to be cut off">
      <OptionButton
        className="isb-option-button__item"
        htmlFor="descBtn"
        name="description"
        buttonType="text"
        description="Description with a lot of text to be cut off"
      >
        Text
      </OptionButton>
    </span>
  </Section>
);

export const Icon = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="iconBtn"
      name="icon"
      icon={<Sparkles size="large" />}
    >
      Custom Icon
    </OptionButton>
  </Section>
);

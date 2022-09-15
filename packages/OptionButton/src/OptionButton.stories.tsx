import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import OptionButton from './OptionButton';
import Sparkles from '@igloo-ui/icons/dist/Sparkles';

export default {
  title: 'Components/OptionButton',
  component: OptionButton,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof OptionButton>;

const Template: ComponentStory<typeof OptionButton> = (args) => (
  <OptionButton className="isb-option-button__item" {...args} />
);
export const Overview = Template.bind({});
Overview.args = {
  text: 'some text',
  buttonType: 'MultipleChoice',
  id: 'optionButton1',
};

export const ButtonType = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      id="textBtn"
      name="buttonType"
      buttonType="Text"
      text="Text"
    />
    <OptionButton
      className="isb-option-button__item"
      id="optionScaleBtn"
      name="buttonType"
      buttonType="OptionScale"
      text="Option Scale"
    />
    <OptionButton
      className="isb-option-button__item"
      id="MultipleChoiceBtn"
      name="buttonType"
      buttonType="MultipleChoice"
      text="Multiple Choice"
    />
    <OptionButton
      className="isb-option-button__item"
      id="LikertBtn"
      name="buttonType"
      buttonType="Likert"
      text="Likert"
    />
  </Section>
);

export const States = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      id="focusBtn"
      name="state"
      buttonType="Text"
      text="Focus"
    />
    <OptionButton
      className="isb-option-button__item"
      id="disabledBtn"
      name="state"
      buttonType="OptionScale"
      text="Disabled"
      disabled
    />
    <OptionButton
      className="isb-option-button__item"
      id="hoverBtn"
      name="state"
      buttonType="OptionScale"
      text="Hover"
    />
  </Section>
);

States.parameters = {
  pseudo: {
    hover: ['#hoverBtn'],
    focus: ['#focusBtn'],
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
        id="radio1"
        name="checkedState"
        buttonType="MultipleChoice"
        text="Unchecked Button"
        title="Unchecked Button"
        onChange={handleOnChange}
        checked={checkedId == 'radio1'}
        unchecked={checkedId != 'radio1'}
      />
      <OptionButton
        className="isb-option-button__item"
        id="radio2"
        name="checkedState"
        buttonType="Likert"
        text="Checked"
        onChange={handleOnChange}
        checked={checkedId == 'radio2'}
        unchecked={checkedId != 'radio2'}
      />
    </Section>
  );
};

export const Description = () => (
  <Section>
    <span title="Description with a lot of text to be cut off">
      <OptionButton
        className="isb-option-button__item"
        id="descBtn"
        name="description"
        buttonType="Text"
        text="Text"
        description="Description with a lot of text to be cut off"
      />
    </span>
  </Section>
);

export const Icon = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      id="iconBtn"
      name="icon"
      text="Custom Icon"
      icon={<Sparkles size="large" />}
    />
  </Section>
);

export const NoIcon = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      id="noIconBtn"
      name="noIcon"
      text="No Icon"
    />
  </Section>
);

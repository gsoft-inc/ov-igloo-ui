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
  children: 'some text',
  buttonType: 'MultipleChoice',
  htmlFor: 'optionButton1',
};

export const ButtonType = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="textBtn"
      name="buttonType"
      buttonType="Text"
    >
      Text
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="optionScaleBtn"
      name="buttonType"
      buttonType="OptionScale"
    >
      Option Scale
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="MultipleChoiceBtn"
      name="buttonType"
      buttonType="MultipleChoice"
    >
      Multiple Choice
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="LikertBtn"
      name="buttonType"
      buttonType="Likert"
    >
      Likert
    </OptionButton>
  </Section>
);

export const States = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="focusBtn"
      name="state"
      buttonType="Text"
    >
      Focus
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="disabledBtn"
      name="state"
      buttonType="OptionScale"
      disabled
    >
      Disabled
    </OptionButton>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="hoverBtn"
      name="state"
      buttonType="OptionScale"
    >
      Hover
    </OptionButton>
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
        htmlFor="radio1"
        name="checkedState"
        buttonType="MultipleChoice"
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
        buttonType="Likert"
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
        buttonType="Text"
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

export const NoIcon = () => (
  <Section>
    <OptionButton
      className="isb-option-button__item"
      htmlFor="noIconBtn"
      name="noIcon"
    >
      No Icon
    </OptionButton>
  </Section>
);

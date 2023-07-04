import React from 'react';

  import { Meta, StoryObj } from '@storybook/react';

  import Wellness from '@igloo-ui/icons/dist/Wellness';
  import WellnessSolid from '@igloo-ui/icons/dist/WellnessSolid';

  import Section from '@components/section';
  import readme from '../README.md';

  import Metric from './Metric';

  export default {
    title: 'Components/Metric',
    component: Metric,
    parameters: {
      docs: {
        description: {
          component: readme,
        }
      }
    },
    argTypes: {        
      icon: { control: { type: null } },
    }
  } as Meta<typeof Metric>;
  
  type Story = StoryObj<typeof Metric>;

  export const Overview: Story = {
    render: (props) => {
      const [selected, setSelected] = React.useState(false);
      const handleOnPress = () => {
        setSelected(!selected);
      };

      return (
          <Metric
            {...props}
            onPress={handleOnPress}
            appearance={selected ? 'selected' : 'positive'}
          />
      );
    },
    args: {
      value: 20,
      variation: 3,
      label: 'Metric name',
      icon: <Wellness size="medium" />,
    },
  };

  export const Tooltip: Story = {
    args: {
      value: 20,
      variation: 3,
      label: 'Metric name',
      appearance: 'positive',
      icon: <Wellness size="medium" />,
      tooltip: 'This is a tooltip',
    },
  };

  export const Empty: Story = {
    render: () => {
      return (
        <Section>
          <Metric
            value={0}
            variation={0}
            label="Empty"
            icon={<Wellness size="medium" />}
          />
          <Metric
            variation={0}
            label="Fluctuate Zero"
            type="fluctuate"
            icon={<Wellness size="medium" />}
          />
        </Section>
      );
    }
  };

  export const Score: Story = {
    render: () => {
      return (
        <Section>
          <Metric
            value={20}
            variation={3}
            label="Positive"
            appearance="positive"
            icon={<Wellness size="medium" />}
            type="score"
          />
          <Metric
            value={20}
            variation={-20}
            label="Negative"
            appearance="negative"
            icon={<Wellness size="medium" />}
            type="score"
          />
          <Metric
            value={20}
            variation={3}
            label="Selected"
            appearance="selected"
            icon={<WellnessSolid size="medium" />}
            type="score"
          />
        </Section>
      );
    },
  };

  export const SubMetric: Story = {
    render: () => {
      return (
        <Section>
          <Metric
            value={20}
            variation={3}
            label="Positive"
            appearance="positive"
            type="subMetric"
          />
          <Metric
            value={20}
            variation={-20}
            label="Negative"
            appearance="negative"
            type="subMetric"
          />
          <Metric
            value={20}
            variation={3}
            label="Selected"
            appearance="selected"
            type="subMetric"
          />
        </Section>
      );
    },
  };

  export const Fluctuate: Story = {
    render: () => {
      return (
        <Section>
          <Metric
            value={20}
            variation={3}
            label="Positive"
            appearance="positive"
            type="fluctuate"
          />
          <Metric
            value={20}
            variation={-20}
            label="Negative"
            appearance="negative"
            type="fluctuate"
          />
        </Section>
      );
    },
  };

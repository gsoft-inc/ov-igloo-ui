import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Button from '@igloo-ui/button';

import TextEditor from './TextEditor';

export default {
  title: 'Components/TextEditor',
  component: TextEditor,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof TextEditor>;

type Story = StoryObj<typeof TextEditor>;

export const Overview: Story = {
  args: {
    onChange: (editorState: string) => {
      console.log(editorState);
    },
    placeholder: 'Enter text here'
  },
};

export const PreLoadedContent: Story = {
  args: {
    initialState: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Pre loaded content here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Ordered list option 1","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Ordered list bold option 2","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":1,"tag":"ol"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'
  }
};

export const Disabled: Story = {
  render: (args) => {
    const [disabled, setDisabled] = React.useState(true);
    args.disabled = disabled;

    return <Section column>
      <TextEditor {...args} />
      <Button onClick={() => {
        setDisabled(!disabled);
      }}>{disabled ? 'Enable' : 'Disable'}</Button>
    </Section>
  }
};

export const Error: Story = {
  args: {
    error: true
  }
};

export const Private: Story = {
  args: {
    isPrivate: true
  }
};

export const MaxLength: Story = {
  args: {
    maxLength: 20
  }
};

export const WithButton: Story = {
  args: {
    isPrivate: true,
    maxLength: 20,
    primaryBtn: <Button size="small" onClick={() => {
      alert("Saved!")
    }}>Save</Button>
  }
};

export const ShowToolbarOnFocus: Story = {
  args: {
    showToolbarOnFocus: true
  }
};

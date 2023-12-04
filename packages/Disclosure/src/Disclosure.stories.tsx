import React from 'react';

import { Meta } from '@storybook/react';

import Substract from '@igloo-ui/icons/dist/Substract';
import ArrowUp from '@igloo-ui/icons/dist/ArrowUp';
import Settings from '@igloo-ui/icons/dist/Settings';
import Button from '@igloo-ui/button';
import Tag from '@igloo-ui/tag';

import readme from '../README.md';

import Disclosure from './Disclosure';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    }
  },
} as Meta<typeof Disclosure>;

export const Overview = {
  args: {
    children: (
      <div style={{ background: '#F7F9FA', padding: '2.4rem' }}>
        Our organization values diversity.
      </div>
    ),
    title: 'Diversity',
    icon: <Substract size="large" />,
    description: (
      <div className="isb-disclosure__desc">
        <Tag
          className="isb-disclosure__desc-tag"
          appearance="positive"
          size="xsmall"
          icon={<ArrowUp size="small" />}
        >
          0.8pt
        </Tag>
        In the last 30 days
      </div>
    ),
  },
};

export const Expanded = {
  render: (args: any) => {
    const [isExpanded, setIsExpanded] = React.useState(true);
    return (
      <>
        <Button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Close me' : 'Open me'}</Button>
        <br />
        <Disclosure {...args} isExpanded={isExpanded} />
      </>
    );
  },
  args: {
    children: (
      <div style={{ background: "#FFFFFF", padding: '2.4rem' }}>
        This disclosure has the default position set to expanded.
      </div>
    ),
    title: 'Expanded',
    icon: <Substract size="large" />,
    onOpen: () => console.log('onOpen'),
    onClose: () => console.log('onClose'),
  },
};


export const LowContrast = {
  args: {
    isExpanded: true,
    isLowContrast: true,
    children: (
      <div style={{ padding: '0.8rem 0 0' }}>
        <p>Allow participant to select multiple answers</p>
        <p>Ask participant a follow-up question</p>
      </div>
    ),
    title: 'Advanced settings',
    icon: <Settings size="small" />,
  },
};


const data = [
    {
        id: 1,
        title: "Send Good Vibes",
        description:
            "Celebrate a team member with a thoughtful card ht makes their day",
    },
    {
        id: 2,
        title: "Send Good Vibes 2",
        description:
            "Celebrate a team member with a thoughtful card ht makes their day",
    },
];

export const VerticallyStacked  = {
    render: (args: any) => {
        const [selected, setSelected] = React.useState<number | null>(null);

        const handleDisclosureOpen = (id: number) => {
            // console.log("handleDisclosureOpen", id);
        };

        const handleDisclosureClose = (id: number) => {
            // console.log("handleDisclosureClose", id);
        };


        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {data.map((item, index) => {
                    return (
                        <Disclosure
                            key={item.id}
                            title={item.title}
                            isExpanded={selected === index}
                            description={item.description}
                            onOpen={() => handleDisclosureOpen(index)}
                            onClose={() => handleDisclosureClose(index)}
                        >
                            <div style={{ padding: "1.6rem" }}>
                                <Button appearance="secondary">Send Good Vibes</Button>
                            </div>
                        </Disclosure>
                    );
                })}
            </div>
        )
    }
}

import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Happiness from '@igloo-ui/icons/dist/Happiness';
import Lock from '@igloo-ui/icons/dist/Lock';
import SharedSolid from '@igloo-ui/icons/dist/SharedSolid';
import { OptionType } from '@igloo-ui/list';

import Section from '@components/section';
import readme from '../../Select/README.md';

import Select, { SelectOptiontype } from './Select';

export default {
    title: 'Components/Select',
    component: Select,
    parameters: {
        docs: {
            description: {
                component: readme,
            }
        }
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    minHeight: '34rem',
                }}
            >
                {Story()}
            </div>
        ),
    ],
} as Meta<typeof Select>;

const selectPlaceholder = 'ex: Lorem ipsum dolor';

const handleOnChange = (option: OptionType | undefined): void => {
    const item = option as SelectOptiontype;
    alert(`Option: ${item?.label}`);
};

const smallOptionList: SelectOptiontype[] = [
    {
        label: 'Text option',
        value: 'text',
    },
    {
        label: 'Disabled option',
        value: 'disabled',
        disabled: true,
    },
    {
        label: 'Text option with icon',
        value: 'icon',
        icon: <Happiness size="small" />,
    },
];

const largeOptionList: SelectOptiontype[] = [
    {
        label: 'Text 1',
        value: '1',
    },
    {
        label: 'Text 2 (disabled)',
        value: '2',
        disabled: true,
    },
    {
        label: 'Text 3',
        value: '3',
        color: '#74DCC9',
    },
    {
        label: 'Text 4',
        value: '4',
    },
    {
        label: 'Text 5',
        value: '5',
        src: 'https://i.pravatar.cc/100',
    },
    {
        label: 'Text 6',
        value: '6',
        icon: <Happiness size="small" />,
    },
];

const listWithIcons: SelectOptiontype[] = [
    {
        label: 'Restricted',
        value: 'restricted',
        description: 'Only visible to you and executive managers',
        icon: <Lock size="small" />,
    },
    {
        label: 'Shared with team',
        value: 'shared',
        description: 'Visible to your team on Team Hub and Survey Report',
        icon: <SharedSolid size="small" />,
    },
];

type Story = StoryObj<typeof Select>;

export const Overview: Story = {
    args: {
        children: selectPlaceholder,
        options: smallOptionList,
    },

    play: async ({ canvasElement }) => {
        const body = canvasElement.ownerDocument.body;
        const canvas = within(body);

        await userEvent.click(canvas.getByRole('button'));
        const firstOption = await canvas.findByText('Text option');

        await expect(firstOption).toBeInTheDocument();
    },
};

export const Sizes: Story = {
    render: () => (
        <Section column>
            <Select options={smallOptionList} onChange={handleOnChange}>
                Default
            </Select>
            <Select
                options={smallOptionList}
                onChange={handleOnChange}
                isCompact={true}
            >
                Compact
            </Select>
        </Section>
    ),

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const States = () => (
    <Section column>
        <Select options={smallOptionList} onChange={handleOnChange} disabled={true}>
            Disabled
        </Select>
        <Select
            options={smallOptionList}
            onChange={handleOnChange}
            className={'active'}
        >
            Active
        </Select>
        <Select
            options={smallOptionList}
            onChange={handleOnChange}
            className={'focus'}
        >
            Focus
        </Select>
        <Select options={smallOptionList} onChange={handleOnChange} error={true}>
            Error
        </Select>
    </Section>
);

export const LargeOptionNumber: Story = {
    render: () => (
        <Section>
            <Select options={largeOptionList} onChange={handleOnChange}>
                Place holder text
            </Select>
        </Section>
    ),

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const AutoWidth: Story = {
    render: () => (
        <Section>
            <Select options={largeOptionList} onChange={handleOnChange} autoWidth>
                Place holder text
            </Select>
        </Section>
    ),

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const HideListIcon: Story = {
    render: () => (
        <Section>
            <Select options={listWithIcons} showListIcon={false}>
                Place holder text
            </Select>
        </Section>
    ),

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

export const Loading: Story = {
    render: () => (
        <Section>
            <Select loading>
                Place holder text
            </Select>
        </Section>
    ),

    parameters: {
        chromatic: { disableSnapshot: true },
    },
};

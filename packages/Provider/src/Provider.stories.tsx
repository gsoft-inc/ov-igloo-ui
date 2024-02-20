import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import readme from '../README.md';

import IglooProvider, { useLocale } from './Provider';

const meta: Meta<typeof IglooProvider> = {
    title: 'Components/Provider',
    component: IglooProvider,
    parameters: {
        docs: {
            description: {
                component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
            }
        }
    },
    argTypes: {
        locale: {
            control: 'select',
            options: ['en-US', 'fr-CA'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof IglooProvider>;

const TestComponent = () => {
    const { locale } = useLocale();
    return <h3>The current locale is: {locale}</h3>;
};

export const Overview: Story = {
    render: (args) => {
        return (
            <IglooProvider {...args}/>
        );
    },
    args: {
        children: <TestComponent />,
        locale: "en-US"
    }
};

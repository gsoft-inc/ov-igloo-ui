import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const { children } = args;
  return <Tabs {...args} />;
};
export const Overview = Template.bind({});

Overview.args = {
  tabs: [
    {
      label: 'Tab 1',
      children: 'Tab 1 Content',
    },
    {
      label: 'Tab 2',
      children: 'Tab 2 Content',
    },
    {
      label: 'Tab 3',
      children: 'Tab 2 Content',
    },
  ],
};

export const Appearance = () => (
  <Section column>
    <Tabs
      isInline
      tabs={[
        {
          label: 'Inline Tab 1',
          children: 'Content of tab 1',
        },
        {
          label: 'Inline Tab 2',
          children: 'Content of tab 2',
        },
      ]}
    />

    <Tabs
      isInline={false}
      tabs={[
        {
          label: 'Heading Tab 1',
          children: 'Content of tab 1',
        },
        {
          label: 'Heading Tab 2',
          children: 'Content of tab 2',
        },
      ]}
    />
  </Section>
);

export const TabTypes = () => (
  <Section column>
    <Tabs
      tabs={[
        {
          label: 'Premium Tab',
          premium: true,
          children: 'Content of premium tab',
        },
        {
          label: 'Notification Tab',
          notification: true,
          children: 'Content of notification tab',
        },
        {
          label: 'Premium Notification Tab',
          notification: true,
          premium: true,
          children: 'Content of premium notification tab',
        },
      ]}
    />
  </Section>
);

export const DefaultTabIndex = () => (
  <Section column>
    <Tabs
      defaultIndex={1}
      tabs={[
        {
          label: 'Tab index 0',
          children: 'Content of tab index 0',
        },
        {
          label: 'Tab Index 1',
          children: 'Content of tab index 1',
        },
        {
          label: 'Tab index 2',
          children: 'Content of tab index 2',
        },
      ]}
    />
  </Section>
);

export const RedirectTab = () => (
  <Section>
    <BrowserRouter>
      <Tabs
        tabs={[
          {
            label: 'Home',
            to: '/home',
            children: (
              <Routes>
                <Route path="*" element={<div>Home page</div>} />
              </Routes>
            ),
          },
          {
            label: 'About',
            to: '/about',
            children: (
              <Routes>
                <Route path="/about" element={<div>About page</div>} />
              </Routes>
            ),
          },
        ]}
      />
    </BrowserRouter>
  </Section>
);

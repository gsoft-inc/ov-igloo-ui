import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Tabs
      {...args}
      onSelectTab={(index) => setSelected(index)}
      selected={selected}
    />
  );
};

export const Overview = {
  render: Template,

  args: {
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
        children: 'Tab 3 Content',
      },
    ],
  },
};

export const Appearance = () => {
  const [selected, setSelected] = React.useState(0);
  const handleTabChange = React.useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );
  const [selected2, setSelected2] = React.useState(0);
  const handleTabChange2 = React.useCallback(
    (selectedTabIndex: number) => setSelected2(selectedTabIndex),
    []
  );
  return (
    <Section column>
      <Tabs
        isInline
        selected={selected}
        onSelectTab={handleTabChange}
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
        selected={selected2}
        onSelectTab={handleTabChange2}
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
};

export const TabTypes = () => {
  const [selected, setSelected] = React.useState(0);
  const handleTabChange = React.useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );
  return (
    <Section column>
      <Tabs
        selected={selected}
        onSelectTab={handleTabChange}
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
};

export const DefaultTabIndex = () => {
  const [selected, setSelected] = React.useState(1);
  const handleTabChange = React.useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );
  return (
    <Section column>
      <Tabs
        selected={selected}
        onSelectTab={handleTabChange}
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
};

export const RedirectTab = () => {
  const [selected, setSelected] = React.useState(0);
  const handleTabChange = React.useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  return (
    <Section>
      <BrowserRouter>
        <Tabs
          selected={selected}
          tabs={[
            {
              label: (
                <NavLink to={'/home'} onClick={() => handleTabChange(0)}>
                  Home
                </NavLink>
              ),
              premium: true,
              children: (
                <Routes>
                  <Route path="*" element={<div>Home page</div>} />
                </Routes>
              ),
            },
            {
              label: (
                <NavLink to={'/about'} onClick={() => handleTabChange(1)}>
                  About
                </NavLink>
              ),
              notification: true,
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
};

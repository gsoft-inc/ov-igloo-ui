import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Section from '@components/section';
import readme from '../README.md';

import Breadcrumb from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof Breadcrumb>;

export const Overview = {
  args: {
    items: [
      {
        label: 'Home',
        link: '#',
      },
      {
        label: 'Careers',
        link: '#',
      },
      {
        label: 'Developer',
      },
    ],
  },
};

export const Back = () => (
  <Section>
    <Breadcrumb
      items={[
        {
          label: 'Back to Main page',
          link: '#',
        },
      ]}
    />
  </Section>
);

export const RouterBreadcrumb = () => {
  return (
    <Section>
      <BrowserRouter>
        <Breadcrumb
          items={[
            {
              label: <NavLink to={'/home'}>Home</NavLink>,
            },
            {
              label: <NavLink to={'/career'}>Career</NavLink>,
            },
            {
              label: 'Developer',
            },
          ]}
        />
      </BrowserRouter>
    </Section>
  );
};

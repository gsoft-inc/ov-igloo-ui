import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import Section from '@components/section';
import readme from '../README.md';

import Pager from './Pager';

const meta = {
  title: 'Components/Pager',
  component: Pager,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    }
  },
} as Meta<typeof Pager>;
export default meta;

type PagerStory = StoryObj<typeof meta>;

export const Overview: PagerStory  = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Pager
        {...args}
        onPageChange={(page) => updateArgs({ currentPage: page })}
      />
    );
  },
  args: {
    pageSize: 10,
    totalCount: 200,
    currentPage: 1
  },
};

export const ManyPages = () => {
  const [currentPage, setCurrentPage] = React.useState(100);
  return (
    <Section>
      <Pager
        pageSize={2}
        totalCount={300}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Section>
  );
};

export const FewPages = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Section>
      <Pager
        pageSize={50}
        totalCount={100}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Section>
  );
};

export const LargeSiblingCount = () => {
  const [currentPage, setCurrentPage] = React.useState(30);
  return (
    <Section>
      <Pager
        pageSize={10}
        totalCount={500}
        currentPage={currentPage}
        siblingCount={3}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Section>
  );
};

export const NoSiblingCount = () => {
  const [currentPage, setCurrentPage] = React.useState(30);
  return (
    <Section>
      <Pager
        pageSize={10}
        totalCount={500}
        currentPage={currentPage}
        siblingCount={0}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Section>
  );
};

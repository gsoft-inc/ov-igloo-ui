import React from 'react';

import { Meta } from '@storybook/react';

import readme from '../README.md';

import Link, { LinkProps, Theme } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    description: readme,
  },
} as Meta;

interface Templates {
  payload: TemplateProperties[];
}

interface TemplateProperties {
  title: string;
  linkProperties: LinkProps;
}

const Template = ({ payload }: Templates): React.ReactElement => {
  return <Link to="#"></Link>;
};

const linkFakeDestination = '#';

const linkStyles = (theme: Theme): TemplateProperties[] => {
  return [
    {
      title: 'Default',
      linkProperties: {
        theme,
        to: linkFakeDestination,
      },
    },
  ];
};

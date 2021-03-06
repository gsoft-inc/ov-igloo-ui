import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  DocsContext,
} from '@storybook/addon-docs';

import './styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
    },
    canvas: { title: 'Playground' },
  },
  docs: {
    page: () => {
      const context = React.useContext(DocsContext);
      return (
        <>
          <Description markdown={context.parameters.description} />
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      );
    },
  },
};

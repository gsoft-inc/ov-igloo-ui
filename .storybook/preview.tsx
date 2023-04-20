import React from 'react';
import { Preview } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';

import './styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    previewTabs: {
      canvas: { title: 'Playground' },
    },
    docs: {
      source: {
        excludeDecorators: true,
      },
      page: () => {
        return (
          <>
            <Description />
            <Title />
            <Subtitle />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />
          </>
        );
      },
    },
  }
};

export default preview;

import {
    Controls,
    Description,
    Primary,
    Stories,
    Subtitle,
    Title,
} from '@storybook/blocks';
import { Preview } from '@storybook/react';
import React from 'react';
import IglooProvider from "@igloo-ui/provider";

import './styles.css';
import { withBrandDecorator } from './withBrandDecorator';

const preview: Preview = {
  decorators: [withBrandDecorator,
    (StoryFn, context) => {
      return (
              <IglooProvider locale={context.globals.locale}>
                  {StoryFn()}
              </IglooProvider>
      );
  }],
  globalTypes: {
    brand: {
      description: 'Global brand for components',
      defaultValue: 'igloo',
      toolbar: {
        title: 'Brand',
        icon: 'circlehollow',
        items: [{
          value: 'igloo',
          title: 'Igloo',
        }, {
          value: 'workleap',
          title: 'Workleap',
        }],
        dynamicTitle: true,
      },
    },
    locale: {
        description: "Internationalization locale",
        defaultValue: "en-US",
        toolbar: {
            title: "Locale",
            icon: "globe",
            items: [
                { value: "en-US", right: "US", title: "English" },
                { value: "fr-CA", right: "FR", title: "Français" }
            ],
            dynamicTitle: true
        }
    }
  },
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

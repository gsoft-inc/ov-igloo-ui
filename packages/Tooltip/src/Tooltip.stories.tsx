import React from 'react';

import { Meta } from '@storybook/react';

import Tooltip, { TooltipProps } from './Tooltip';

const tooltipContent = 'Lorem ipsum dolor';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: 'text',
      defaultValue: tooltipContent,
    },
  },
} as Meta;

export const Playground: React.VFC<TooltipProps> = (args) => {
  const displayContainerStyle = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 50,
    paddingLeft: 60,
    fontSize: '18px',
  };

  return (
    <div style={displayContainerStyle} key="0">
      <Tooltip {...args}>Playground tooltip</Tooltip>
    </div>
  );
};

interface TemplateProps {
  payload: { dark: TooltipProps[]; light: TooltipProps[] };
}

const Template = ({ payload }: TemplateProps): React.ReactElement => {
  const componentState = Object.keys(payload);
  const { dark, light } = payload;

  const component = componentState.map((state, index) => {
    const isDark = state === 'dark';
    const components = isDark ? dark : light;

    const list = components.map((tooltipProps, i) => {
      const displayContainerStyle = {
        order: i,
        padding: 20,
        fontSize: '18px',
      };

      return (
        <div style={displayContainerStyle} key={i.toString()}>
          <Tooltip
            appearance={isDark ? 'dark' : 'light'}
            key={i.toString()}
            {...tooltipProps}
          >
            {tooltipProps.children}
          </Tooltip>
        </div>
      );
    });

    const title = state.charAt(0).toUpperCase() + state.slice(1);

    return (
      <section className="isb-section" key={index.toString()}>
        <h2>{title}</h2>
        <div className="isb-section__content">{list}</div>
      </section>
    );
  });

  return <>{component}</>;
};

const demoReactComponent = (
  <div>
    <span
      style={{ color: '#30C9AD', fontSize: 12, textTransform: 'uppercase' }}
    >
      Strongly Favorable
    </span>
    <br />
    <span style={{ fontWeight: 'bold', fontSize: 32 }}>
      100,0<sup style={{ fontSize: 14 }}>%</sup>
    </span>
  </div>
);

const tooltipStates: TooltipProps[] = [
  {
    children: 'Default',
    content: tooltipContent,
  },
  {
    children: 'On Top',
    content: tooltipContent,
    position: 'top',
  },
  {
    children: 'On the right',
    content: tooltipContent,
    position: 'right',
  },
  {
    children: 'Underneath',
    content: tooltipContent,
    position: 'bottom',
  },
  {
    children: 'On the left',
    content: tooltipContent,
    position: 'left',
  },
  {
    children: 'No Arrow',
    content: tooltipContent,
    arrowVisible: false,
  },
  {
    children: 'With ReactComponent',
    content: demoReactComponent,
    position: 'bottom',
  },
];

export const Standard = (): React.ReactElement => (
  <Template payload={{ dark: tooltipStates, light: tooltipStates }} />
);

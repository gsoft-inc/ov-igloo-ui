import React from 'react';

import { Meta } from '@storybook/react';

import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

interface TemplateProps {
  payload: { dark: TooltipProps[]; light: TooltipProps[] };
}

const Template = ({ payload }: TemplateProps): React.ReactElement => {
  const componentState = Object.keys(payload);
  const { dark, light } = payload;

  const component = componentState.map((state, index) => {
    const isDark = state === 'dark';
    const components = isDark ? dark : light;

    const list = components.map((p, i) => {
      const displayContainerStyle = {
        order: i,
        padding: 82,
        border: `1px solid ${isDark ? '#422539' : '#fff6ec'}`,
        fontSize: '14px',
        maxWidth: 60,
        backgroundColor: `${isDark ? '#fff6ec' : '#422539'}`,
        color: `${isDark ? '#422539' : '#fff6ec'}`,
        borderRadius: '8px',
      };

      return (
        <div style={displayContainerStyle} key={i.toString()}>
          <Tooltip
            appearance={isDark ? 'dark' : 'light'}
            key={i.toString()}
            {...p}
          >
            {p.children}
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

const tooltipStates: TooltipProps[] = [
  {
    children: 'Default',
    content: 'lorem ipsum dolor',
  },
  {
    children: 'Top',
    content: 'lorem ipsum dolor',
    position: 'top',
  },
  {
    children: 'Right',
    content: 'lorem ipsum dolor',
    position: 'right',
  },
  {
    children: 'Bottom',
    content: 'lorem ipsum dolor',
    position: 'bottom',
  },
  {
    children: 'Left',
    content: 'lorem ipsum dolor',
    position: 'left',
  },
  {
    children: 'No Arrow',
    content: 'lorem ipsum dolor',
    arrowVisible: false,
  },
];

export const Tooltips = (): React.ReactElement => (
  <Template payload={{ dark: tooltipStates, light: tooltipStates }} />
);

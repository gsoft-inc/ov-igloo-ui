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
        padding: 20,
        fontSize: '18px',
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
    content: 'lorem ipsum dolor',
  },
  {
    children: 'On Top',
    content: 'lorem ipsum dolor',
    position: 'top',
  },
  {
    children: 'On the right',
    content: 'lorem ipsum dolor',
    position: 'right',
  },
  {
    children: 'Underneath',
    content: 'lorem ipsum dolor',
    position: 'bottom',
  },
  {
    children: 'On the left',
    content: 'lorem ipsum dolor',
    position: 'left',
  },
  {
    children: 'No Arrow',
    content: 'lorem ipsum dolor',
    arrowVisible: false,
  },
  {
    children: 'With ReactComponent',
    content: demoReactComponent,
    position: 'bottom',
  },
];

export const Tooltips = (): React.ReactElement => (
  <Template payload={{ dark: tooltipStates, light: tooltipStates }} />
);

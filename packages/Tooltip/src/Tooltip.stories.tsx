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
    const datas = isDark ? dark : light;

    const list = datas.map((p, i) => {
      return (
        <Tooltip
          appearance={state === 'dark' ? 'dark' : 'light'}
          key={i.toString()}
          {...p}
        >
          {p.children}
        </Tooltip>
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
  // {
  //   children: 'Top',
  //   content: 'Topier',
  //   position: 'top',
  // },
  {
    children: 'Right',
    content: 'Rightier jkrnkjgn jkdrhjg kjrdhjkgh jkdrhkj',
    position: 'right',
  },
  // {
  //   children: 'Bottom',
  //   content: 'Bottomier',
  //   position: 'bottom',
  // },
  // {
  //   children: 'Left',
  //   content: 'Leftier',
  //   position: 'left',
  // },
  // {
  //   children: 'No Arrow',
  //   content: 'No Arrowier',
  //   arrowVisible: false,
  // },
];

export const Tooltips = (): React.ReactElement => (
  <Template payload={{ dark: tooltipStates, light: tooltipStates }} />
);

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

const demoDivComponent = (): React.ReactElement => {
  const style: React.CSSProperties = {
    height: 30,
    width: 70,
    lineHeight: '30px',
    backgroundColor: '#333',
    color: '#eee',
    textAlign: 'center',
  };

  return <div style={style}>&lt;div&gt;</div>;
};

const demoSvgComponent = (
  <svg width="79" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.457 1.068h3.57v17.796h-3.57V1.068ZM44.575 5.186v11.39c0 2.509-.565 4.373-1.697 5.593C41.748 23.39 40.095 24 37.92 24c-1.146 0-2.233-.161-3.262-.483-1.028-.322-1.88-.788-2.556-1.398l1.366-2.848c.5.475 1.131.848 1.895 1.119a6.454 6.454 0 0 0 2.292.432c1.19 0 2.065-.313 2.623-.94.573-.61.86-1.543.86-2.797V16.5c-.897 1.136-2.146 1.703-3.747 1.703a5.75 5.75 0 0 1-2.997-.813c-.897-.56-1.61-1.34-2.138-2.34-.53-1-.794-2.152-.794-3.457 0-1.305.265-2.457.794-3.457s1.241-1.772 2.138-2.314c.91-.56 1.91-.839 2.997-.839 1.719 0 3.026.653 3.923 1.958V5.186h3.261Zm-6.5 9.763c.91 0 1.652-.305 2.225-.915.588-.627.882-1.44.882-2.44s-.294-1.806-.882-2.416c-.573-.627-1.315-.94-2.226-.94-.91 0-1.66.313-2.248.94-.588.61-.882 1.415-.882 2.415s.294 1.814.882 2.44c.588.611 1.337.916 2.248.916ZM46.673 0h3.438v18.864h-3.438V0ZM57.842 19.068c-1.249 0-2.373-.297-3.372-.89-.984-.61-1.755-1.45-2.314-2.517-.558-1.068-.837-2.28-.837-3.636 0-1.356.279-2.567.837-3.635.559-1.068 1.33-1.898 2.314-2.492 1-.61 2.123-.915 3.372-.915 1.25 0 2.366.305 3.35.915.985.594 1.756 1.424 2.314 2.492.559 1.068.838 2.28.838 3.635 0 1.356-.28 2.568-.838 3.636-.558 1.068-1.33 1.907-2.314 2.517-.984.593-2.1.89-3.35.89Zm0-3.254c.882 0 1.602-.34 2.16-1.017.573-.695.86-1.619.86-2.772 0-1.152-.287-2.067-.86-2.745-.558-.695-1.278-1.043-2.16-1.043-.881 0-1.608.348-2.181 1.043-.574.678-.86 1.593-.86 2.745 0 1.153.286 2.077.86 2.772.572.678 1.3 1.017 2.181 1.017ZM71.946 19.068c-1.248 0-2.373-.297-3.372-.89-.984-.61-1.755-1.45-2.314-2.517-.558-1.068-.837-2.28-.837-3.636 0-1.356.279-2.567.837-3.635.559-1.068 1.33-1.898 2.314-2.492 1-.61 2.124-.915 3.372-.915 1.25 0 2.366.305 3.35.915.985.594 1.756 1.424 2.314 2.492.559 1.068.838 2.28.838 3.635 0 1.356-.28 2.568-.838 3.636-.558 1.068-1.33 1.907-2.314 2.517-.984.593-2.1.89-3.35.89Zm0-3.254c.882 0 1.602-.34 2.16-1.017.573-.695.86-1.619.86-2.772 0-1.152-.287-2.067-.86-2.745-.558-.695-1.278-1.043-2.16-1.043-.881 0-1.608.348-2.181 1.043-.573.678-.86 1.593-.86 2.745 0 1.153.287 2.077.86 2.772.573.678 1.3 1.017 2.181 1.017Z"
      fill="#080412"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.885 1.226c-.655 0-1.186.531-1.186 1.186v5.725L4.606 4.043A1.186 1.186 0 1 0 2.928 5.72l4.047 4.047H1.186a1.186 1.186 0 1 0 0 2.373H6.91l-4.093 4.094a1.187 1.187 0 0 0 1.678 1.678l4.205-4.206v5.948a1.186 1.186 0 1 0 2.372 0v-5.79l4.047 4.048a1.186 1.186 0 1 0 1.678-1.678l-4.093-4.094h5.723a1.186 1.186 0 1 0 0-2.373h-5.79l4.048-4.048a1.186 1.186 0 0 0-1.678-1.677l-3.935 3.935V2.412c0-.655-.53-1.186-1.186-1.186Z"
      fill="#178ADD"
    />
  </svg>
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
    children: 'With ReactComponent',
    content: demoReactComponent,
    position: 'bottom',
  },
  {
    children: demoDivComponent(),
    content: 'On a <div> child',
  },
  {
    children: demoSvgComponent,
    content: 'On a <svg> child',
  },
];

export const Standard = (): React.ReactElement => (
  <Template payload={{ dark: tooltipStates, light: tooltipStates }} />
);

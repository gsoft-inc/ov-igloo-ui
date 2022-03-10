import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton, { IconButtonProps } from './IconButton';
// import { Appearance } from '@igloo-ui/button';

import Plus from '@igloo-ui/icons/dist/Plus';
import Settings from '@igloo-ui/icons/dist/Settings';

import readme from '../README.md';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  appearance: 'primary',
  icon: <Plus />,
};

export const Appearances = () => (
  <section className="isb-section__content">
    <IconButton appearance="primary" icon={<Plus size="small" />} />
    <IconButton appearance="secondary" icon={<Plus size="small" />} />
    <IconButton appearance="premium" icon={<Plus size="small" />} />
    <IconButton appearance="ghost" icon={<Plus size="small" />} />
    <IconButton appearance="danger" icon={<Plus size="small" />} />
  </section>
);

export const Sizes = () => (
  <section className="isb-section__content">
    <IconButton size="xsmall" icon={<Plus size="small" />} />
    <IconButton size="small" icon={<Plus size="small" />} />
    <IconButton size="medium" icon={<Plus size="small" />} />
    <IconButton size="large" icon={<Plus size="small" />} />
  </section>
);

// interface TemplateProps {
//   appearance?: Appearance;
//   payload: {
//     base: IconButtonProps[];
//     disabled: IconButtonProps[];
//     active?: IconButtonProps[];
//     focus: IconButtonProps[];
//   };
// }

// const Template = ({
//   appearance,
//   payload,
// }: TemplateProps): React.ReactElement => {
//   const componentState = Object.keys(payload);
//   const { base, disabled } = payload;

//   const component = componentState.map((state, index) => {
//     const isDisabled = state === 'disabled';
//     const isFocus = state === 'focus';
//     const iconButtonProps = isDisabled ? disabled : base;

//     const list = iconButtonProps.map((p, i) => {
//       return (
//         <IconButton
//           active={state === 'active'}
//           appearance={appearance}
//           disabled={isDisabled}
//           key={i.toString()}
//           className={isFocus ? 'focus ' + p.className : p.className}
//           {...p}
//         />
//       );
//     });

//     const title =
//       state === 'base'
//         ? 'Default'
//         : state.charAt(0).toUpperCase() + state.slice(1);

//     return (
//       <section className="isb-section" key={index.toString()}>
//         <h2>{title}</h2>
//         <div className="isb-section__content">{list}</div>
//       </section>
//     );
//   });

//   return <>{component}</>;
// };

// const buttonState: IconButtonProps[] = [
//   {
//     size: 'xsmall',
//     icon: <Plus size="small" />,
//   },
//   {
//     size: 'small',
//     icon: <Plus size="small" />,
//   },
//   {
//     size: 'medium',
//     icon: <Plus size="small" />,
//   },
//   {
//     size: 'large',
//     icon: <Plus size="small" />,
//   },
//   {
//     size: 'small',
//     icon: <Settings size="small" />,
//     rounded: true,
//   },
//   {
//     size: 'medium',
//     icon: <Settings size="small" />,
//     rounded: true,
//   },
// ];

// export const Primary = (): React.ReactElement => (
//   <Template
//     payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
//   />
// );

// export const Secondary = (): React.ReactElement => (
//   <Template
//     appearance="secondary"
//     payload={{
//       base: buttonState,
//       disabled: buttonState,
//       active: buttonState,
//       focus: buttonState,
//     }}
//   />
// );

// export const Premium = (): React.ReactElement => (
//   <Template
//     appearance="premium"
//     payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
//   />
// );

// export const Danger = (): React.ReactElement => (
//   <Template
//     appearance="danger"
//     payload={{ base: buttonState, disabled: buttonState, focus: buttonState }}
//   />
// );

// export const Ghost = (): React.ReactElement => (
//   <Template
//     appearance="ghost"
//     payload={{
//       base: buttonState,
//       disabled: buttonState,
//       active: buttonState,
//       focus: buttonState,
//     }}
//   />
// );

import React from 'react';
import Banner from './Banner';

export default { title: 'Example/Banner', component: Banner };
export const Info = () => (
  <Banner variant="info">
    {' '}
    <p>
      {' '}
      This is an example of an info banner to display important information.{' '}
    </p>{' '}
  </Banner>
);
export const Danger = () => (
  <Banner variant="danger">
    {' '}
    <p>This is an example of a danger banner to display warnings.</p>{' '}
  </Banner>
);
export const Congrats = () => (
  <Banner variant="congrats">
    {' '}
    <p>This is an example a congrats banner to celebrate a win!</p>{' '}
  </Banner>
);
export const Documentation = () => (
  <Banner variant="documentation">
    {' '}
    <p>
      {' '}
      This is an example a documentation banner to highlight relevant reading
      materials and documentation.{' '}
    </p>{' '}
  </Banner>
);

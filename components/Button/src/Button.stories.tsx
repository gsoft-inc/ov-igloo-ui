import * as React from 'react';
import { Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

// eslint-disable-next-line react/prop-types
const Grid: React.FunctionComponent = ({ children }): JSX.Element => (
  <div className="isb-grid">{children}</div>
);

export const BasicUsage = (): React.ReactElement => (
  <>
    <h1>Buttons</h1>
    <section className="isb-section">
      <h2 className="isb-section__title">Primary</h2>
      <Grid>
        <h3 className="isb-section__subtitle">Default</h3>
        <Button dataTest="test" size="small">
          Click me
        </Button>
        <Button>Click me</Button>
        <h3 className="isb-section__subtitle">Disabled</h3>
        <Button disabled size="small">
          Click me
        </Button>
        <Button disabled>Click me</Button>
      </Grid>
    </section>

    <section className="isb-section">
      <h2 className="isb-section__title">Secondary</h2>
      <Grid>
        <h3 className="isb-section__subtitle">Default</h3>
        <Button appearance="secondary" size="small">
          Click me
        </Button>
        <Button appearance="secondary">Click me</Button>
        <h3 className="isb-section__subtitle">Disabled</h3>
        <Button appearance="secondary" disabled size="small">
          Click me
        </Button>
        <Button appearance="secondary" disabled>
          Click me
        </Button>
        <h3 className="isb-section__subtitle">Actived</h3>
        <Button appearance="secondary" active size="small">
          Click me
        </Button>
        <Button appearance="secondary" active>
          Click me
        </Button>
      </Grid>
    </section>

    <section className="isb-section">
      <h2 className="isb-section__title">Danger</h2>
      <Grid>
        <h3 className="isb-section__subtitle">Default</h3>
        <Button appearance="danger" size="small">
          Click me
        </Button>
        <Button appearance="danger">Click me</Button>
        <h3 className="isb-section__subtitle">Disabled</h3>
        <Button appearance="danger" disabled size="small">
          Click me
        </Button>
        <Button appearance="danger" disabled>
          Click me
        </Button>
      </Grid>
    </section>

    <section className="isb-section">
      <h2 className="isb-section__title">Ghost</h2>
      <Grid>
        <h3 className="isb-section__subtitle">Default</h3>
        <Button appearance="ghost" size="small">
          Click me
        </Button>
        <Button appearance="ghost">Click me</Button>
        <h3 className="isb-section__subtitle">Disabled</h3>
        <Button appearance="ghost" disabled size="small">
          Click me
        </Button>
        <Button appearance="ghost" disabled>
          Click me
        </Button>
      </Grid>
    </section>
  </>
);

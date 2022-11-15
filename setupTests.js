// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

const { configure: configureTL } = require('@testing-library/react');

configureTL({ testIdAttribute: 'data-test' });

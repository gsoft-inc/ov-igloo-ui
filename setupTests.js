/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import * as ResizeObserverModule from 'resize-observer-polyfill';

const { configure: configureTL } = require('@testing-library/react');

configureTL({ testIdAttribute: 'data-test' });

global.ResizeObserver = ResizeObserverModule.default;

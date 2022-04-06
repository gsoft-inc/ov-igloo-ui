// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

const Adapter = require('enzyme-adapter-react-16');
const { configure } = require('enzyme');
const { configure: configureTL } = require('@testing-library/react');

configure({ adapter: new Adapter() });
configureTL({ testIdAttribute: 'data-test' });

// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

const Adapter = require('enzyme-adapter-react-16');
const { configure } = require('enzyme');

configure({ adapter: new Adapter() });

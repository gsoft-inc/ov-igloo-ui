// eslint-disable-next-line @typescript-eslint/no-var-requires
const { configure: configureTL } = require("@testing-library/react");

configureTL({ testIdAttribute: "data-test" });

global.ResizeObserver = require("resize-observer-polyfill");

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
Range.prototype.getBoundingClientRect = () => ({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0
});

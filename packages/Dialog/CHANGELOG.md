# @igloo-ui/dialog

## 0.4.0

### Minor Changes

- c7273b3: Update Dialog prop, subTitle, to be a ReactNode.

## 0.3.2

### Patch Changes

- 0e3cc82: added troubleshooting section in the readme for workaround about Closing Dialog on top of Modal will close both
- Updated dependencies [0e3cc82]
  - @igloo-ui/modal@1.2.3

## 0.3.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/button@0.4.1
  - @igloo-ui/modal@1.2.2

## 0.3.0

### Minor Changes

- bf0342e: Refactor: Replaced react spring and react popper with framer motion and/or floating-ui

### Patch Changes

- Updated dependencies [bf0342e]
  - @igloo-ui/modal@1.2.0

## 0.2.0

### Minor Changes

- 386e7cd: Reduced the padding for the modal and dialog components. Also added steps and buttons to the modal. The carousel just had a minor style update on the secondary button.

### Patch Changes

- Updated dependencies [386e7cd]
  - @igloo-ui/modal@1.1.0

## 0.1.4

### Patch Changes

- d1ee42f: Fix: Added an if statement on the dialog demo page so that the dialog code doesn't stick around. This will need to be updated once react-spring fixes the javascript error.

## 0.1.3

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/button@0.3.7
  - @igloo-ui/modal@1.0.3

## 0.1.2

### Patch Changes

- a1a4642: Add danger props for render a desctructive actions

## 0.1.1

### Patch Changes

- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/button@0.3.6
  - @igloo-ui/modal@1.0.2

## 0.1.0

### Minor Changes

- b734729: Initial release of the dialog component

### Patch Changes

- Updated dependencies [b734729]
  - @igloo-ui/modal@1.0.0

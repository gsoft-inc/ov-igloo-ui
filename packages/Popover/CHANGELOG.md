# @igloo-ui/popover

## 0.4.0

### Minor Changes

- 4096378: Added the rebrand. Added disabled prop to Popover to work with StackedBar.

### Patch Changes

- Updated dependencies [4096378]
  - @igloo-ui/icon-button@1.1.2

## 0.3.4

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/icon-button@1.0.4
  - @igloo-ui/tooltip@3.1.6

## 0.3.3

### Patch Changes

- 8baa499: Updated floating-ui version and also updated tooltip's onOpenChange function so that it does not use the event.
- Updated dependencies [8baa499]
  - @igloo-ui/tooltip@3.1.5

## 0.3.2

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3

## 0.3.1

### Patch Changes

- 9d9d72a: Updated floating-ui so that each component uses the same version.
- Updated dependencies [9d9d72a]
  - @igloo-ui/tooltip@3.1.4

## 0.3.0

### Minor Changes

- da2c3dd: Added two new props: triggerEvent and interactive. This is to allow the popover to show on hover.

## 0.2.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/icon-button@1.0.1
  - @igloo-ui/tooltip@3.1.3

## 0.2.1

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/tooltip@3.1.2

## 0.2.0

### Minor Changes

- bf0342e: Refactor: Replaced react spring and react popper with framer motion and/or floating-ui

### Patch Changes

- 9ed10b2: Updated jest and updated snapshots for popover and tooltip components
- Updated dependencies [bf0342e]
- Updated dependencies [9ed10b2]
  - @igloo-ui/tooltip@3.1.0

## 0.1.6

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.
- Updated dependencies [4230499]
  - @igloo-ui/tooltip@3.0.3

## 0.1.5

### Patch Changes

- Updated dependencies [e47ae88]
  - @igloo-ui/icon-button@1.0.0

## 0.1.4

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/icon-button@0.2.13
  - @igloo-ui/tooltip@3.0.1

## 0.1.3

### Patch Changes

- Updated dependencies [ff6db5c]
  - @igloo-ui/tooltip@3.0.0

## 0.1.2

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/icon-button@0.2.12
  - @igloo-ui/tooltip@2.0.2

## 0.1.1

### Patch Changes

- Updated dependencies [17def56]
  - @igloo-ui/tooltip@2.0.0

## 0.1.0

### Minor Changes

- 1a3322f: Initial release

### Patch Changes

- 1a3322f: fix issues with css and package

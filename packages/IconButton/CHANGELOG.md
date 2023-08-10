# @igloo-ui/icon-button

## 1.0.4

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/button@0.5.2

## 1.0.3

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/button@0.5.1

## 1.0.2

### Patch Changes

- Updated dependencies [357133d]
  - @igloo-ui/button@0.5.0

## 1.0.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/button@0.4.1

## 1.0.0

### Major Changes

- e47ae88: A secondary ghost appearance was added to the icon button.

  ## BREAKING CHANGE

  Since the ghost icon button was already grey, we needed to set the default back to blue and add the secondary variant, which is grey.

### Patch Changes

- Updated dependencies [d2e08a0]
- Updated dependencies [d5c91f5]
  - @igloo-ui/button@0.4.0

## 0.2.13

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/button@0.3.7

## 0.2.12

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/button@0.3.6

## 0.2.11

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme
- Updated dependencies [d971143]
  - @igloo-ui/button@0.3.5

## 0.2.10

### Patch Changes

- 9842a0d: add forwardRef

## 0.2.9

### Patch Changes

- 38a4994: Update dependency on @igloo-ui/icons and other @igloo libs
- Updated dependencies [4de58ec]
- Updated dependencies [38a4994]
  - @igloo-ui/button@0.3.0

## 0.2.8

### Patch Changes

- 0a86f13: Update content of README
- Updated dependencies [0a86f13]
  - @igloo-ui/button@0.2.2

## 0.2.7

### Patch Changes

- Updated dependencies [f019f88]
  - @igloo-ui/button@0.2.0

## 0.2.6

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files
- Updated dependencies [8c8686e]
  - @igloo-ui/button@0.1.11

## 0.2.5

### Patch Changes

- e8f201c: Rename the output file for css

## 0.2.4

### Patch Changes

- eceb176: Fix the size of icon-button when a button is on the project

## 0.2.3

### Patch Changes

- 4a256e3: IE11 compatibility
- Updated dependencies [4a256e3]
  - @igloo-ui/button@0.1.9

## 0.2.2

### Patch Changes

- 1e1c6e5: Chore Update packages
- Updated dependencies [1e1c6e5]
  - @igloo-ui/button@0.1.8

## 0.2.1

### Patch Changes

- 0d8e80e: Remove useless background property already specified in button

## 0.2.0

### Minor Changes

- bd0ece1: Change IconButtonProps extends to use ButtonProps

## 0.1.2

### Patch Changes

- ec6cef7: Component IconButton: Fix styles naming in package and adjust README

## 0.1.1

### Patch Changes

- 2da8010: Fix render of elements with the css var --grey-{...}
- Updated dependencies [2da8010]
  - @igloo-ui/button@0.1.4

## 0.1.0

### Minor Changes

- 3af2f78: ## IconButton component

  Add IconButton component to create buttons with an SVG icon inside it.

  ### Component API

  | name      | description                                                                                     |
  | --------- | ----------------------------------------------------------------------------------------------- |
  | className | Add class names to the surrounding DOM container.                                               |
  | icon      | Icon React node to represent the value of the button                                            |
  | onClick   | Callback function that will be called when the user clicks on the button.                       |
  | disabled  | True if the control is disabled and shows a disabled state. The user cannot click on the button |
  | size      | Button size                                                                                     |
  | rounded   | True for rounded corners                                                                        |
  | dataTest  | Add a data-test tag for automated tests                                                         |

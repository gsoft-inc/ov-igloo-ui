# @igloo-ui/icon-button

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

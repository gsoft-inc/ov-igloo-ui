# @igloo-ui/icon-button

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

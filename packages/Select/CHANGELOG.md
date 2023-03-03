# @igloo-ui/select

## 1.0.2

### Patch Changes

- 3f50827: Made dropdown portal to the end of the document so that it works in Modals. Removed unused line in Modal.
- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2

## 1.0.1

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [e47ae88]
- Updated dependencies [d5c91f5]
  - @igloo-ui/icon-button@1.0.0
  - @igloo-ui/list@0.1.1

## 1.0.0

### Major Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

  ## BREAKING CHANGE

  Select types were updated. List component is used inside Select so SelectOption.tsx was removed. Some functionality was changed. When selecting an element in the select using the keyboard, it now just focuses the element, you need to actually hit enter to select it.

### Patch Changes

- Updated dependencies [7dcba93]
  - @igloo-ui/list@0.1.0
  - @igloo-ui/dropdown@1.1.1

## 0.1.4

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.3

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2

## 0.1.2

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.1

### Patch Changes

- 9842a0d: Add dataTest for the Dropdown

## 0.1.0

### Minor Changes

- 39bc518: Feat: Initial release of the select component

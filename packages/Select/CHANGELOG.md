# @igloo-ui/select

## 1.1.1

### Patch Changes

- 08a062e: update packages
- Updated dependencies [08a062e]
  - @igloo-ui/list@0.2.1

## 1.1.0

### Minor Changes

- 4ff1942: Added new optional props to List called 'disableTabbing' and 'onOptionBlur'. Also fixed some styling for the List component.

### Patch Changes

- Updated dependencies [4ff1942]
- Updated dependencies [0b8a62f]
  - @igloo-ui/list@0.2.0
  - @igloo-ui/dropdown@1.2.0

## 1.0.7

### Patch Changes

- 84e2d78: Adding a hover effect
- Updated dependencies [84e2d78]
  - @igloo-ui/input@2.0.5

## 1.0.6

### Patch Changes

- 412dbd5: Added the missing onClose event for the Dropdown component inside the Select.

## 1.0.5

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/icon-button@1.0.1
  - @igloo-ui/input@2.0.4
  - @igloo-ui/list@0.1.3

## 1.0.4

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 1.0.3

### Patch Changes

- 55d12e3: fix error with empty package @shared/components
- Updated dependencies [55d12e3]
  - @igloo-ui/list@0.1.2

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

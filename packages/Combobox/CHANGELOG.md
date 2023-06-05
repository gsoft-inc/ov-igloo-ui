# @igloo-ui/combobox

## 0.2.0

### Minor Changes

- 4ff1942: Added new optional props to List called 'disableTabbing' and 'onOptionBlur'. Also fixed some styling for the List component.

### Patch Changes

- Updated dependencies [4ff1942]
- Updated dependencies [0b8a62f]
  - @igloo-ui/list@0.2.0
  - @igloo-ui/dropdown@1.2.0

## 0.1.7

### Patch Changes

- 84e2d78: Adding a hover effect
- Updated dependencies [84e2d78]
  - @igloo-ui/input@2.0.5

## 0.1.6

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/icon-button@1.0.1
  - @igloo-ui/input@2.0.4
  - @igloo-ui/list@0.1.3
  - @igloo-ui/tooltip@3.1.3

## 0.1.5

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3
  - @igloo-ui/tooltip@3.1.2

## 0.1.4

### Patch Changes

- 55d12e3: fix error with empty package @shared/components
- Updated dependencies [55d12e3]
- Updated dependencies [49d3c6b]
  - @igloo-ui/list@0.1.2
  - @igloo-ui/tooltip@3.1.1

## 0.1.3

### Patch Changes

- 3f50827: Made dropdown portal to the end of the document so that it works in Modals. Removed unused line in Modal.
- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2

## 0.1.2

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.
- Updated dependencies [4230499]
  - @igloo-ui/tooltip@3.0.3

## 0.1.1

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [e47ae88]
- Updated dependencies [d5c91f5]
  - @igloo-ui/icon-button@1.0.0
  - @igloo-ui/list@0.1.1

## 0.1.0

### Minor Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

### Patch Changes

- Updated dependencies [7dcba93]
  - @igloo-ui/list@0.1.0
  - @igloo-ui/dropdown@1.1.1

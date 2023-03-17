# @igloo-ui/stacked-bar

## 0.1.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/tooltip@3.1.3

## 0.1.1

### Patch Changes

- 00fdb02: Updated tooltip class and hid the arrow on the stacked bar tooltip.
- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/tooltip@3.1.2

## 0.1.0

### Minor Changes

- 49d3c6b: The initial release of the stacked bar component

### Patch Changes

- Updated dependencies [49d3c6b]
  - @igloo-ui/tooltip@3.1.1

# @igloo-ui/action-menu

## 0.1.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/list@0.1.3

## 0.1.1

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 0.1.0

### Minor Changes

- 3f50827: Feat: The initial release of the action menu component

### Patch Changes

- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2

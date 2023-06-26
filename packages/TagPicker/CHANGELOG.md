# @igloo-ui/tag-picker

## 0.3.0

### Minor Changes

- 9b707d1: Added a loading feature to List, Combobox, Select and Tagpicker components.

## 0.2.1

### Patch Changes

- 3ce5df5: Removed the reference to the `@shared/components` package to fix the error during installation

## 0.2.0

### Minor Changes

- d0d54c9: TagPicker: Added search icon with 'showSearchIcon' prop, added error prop, and fixed issue where the tag picker was being auto focused.

## 0.1.4

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/input@2.0.4
  - @igloo-ui/tag@1.0.6

## 0.1.3

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 0.1.2

### Patch Changes

- 55d12e3: fix error with empty package @shared/components
- Updated dependencies [55d12e3]
  - @igloo-ui/tag@1.0.5

## 0.1.1

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [d5c91f5]
  - @igloo-ui/tag@1.0.3

## 0.1.0

### Minor Changes

- 9b9ec61: Initial release of the tag picker and a small color change for the dismiss button in the tag component.

### Patch Changes

- Updated dependencies [9b9ec61]
- Updated dependencies [9b9ec61]
  - @igloo-ui/tag@1.0.2
  - @igloo-ui/dropdown@1.0.0

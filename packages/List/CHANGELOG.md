# @igloo-ui/list

## 0.4.0

### Minor Changes

- 9b707d1: Added a loading feature to List, Combobox, Select and Tagpicker components.

## 0.3.1

### Patch Changes

- Updated dependencies [e5b4c2e]
  - @igloo-ui/checkbox@0.2.0

## 0.3.0

### Minor Changes

- 0482ec6: Added action prop and updated description type to ReactNode for ListItem. Added footer and a way for the user to open and close the combobox through props.

## 0.2.1

### Patch Changes

- 08a062e: update packages

## 0.2.0

### Minor Changes

- 4ff1942: Added new optional props to List called 'disableTabbing' and 'onOptionBlur'. Also fixed some styling for the List component.

## 0.1.3

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/checkbox@0.1.9

## 0.1.2

### Patch Changes

- 55d12e3: fix error with empty package @shared/components

## 0.1.1

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [d5c91f5]
  - @igloo-ui/checkbox@0.1.8

## 0.1.0

### Minor Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

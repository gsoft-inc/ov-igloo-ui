# @igloo-ui/list

## 0.6.4

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/checkbox@0.4.1

## 0.6.3

### Patch Changes

- e2cc8b8: Fixed the checkbox inside the list as well as adjusments to the visual identifier.

## 0.6.2

### Patch Changes

- Updated dependencies [9fbfa6f]
  - @igloo-ui/checkbox@0.4.0

## 0.6.1

### Patch Changes

- 0c419dc: Fix an issue where classNames were not passed to children when cloned

## 0.6.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/checkbox@0.3.0

## 0.5.5

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/checkbox@0.2.7

## 0.5.4

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/checkbox@0.2.5

## 0.5.3

### Patch Changes

- 456a3ce: Adjusted the height of list item in compact mode

## 0.5.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/checkbox@0.2.4

## 0.5.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/checkbox@0.2.3

## 0.5.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

## 0.4.3

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/checkbox@0.2.1

## 0.4.2

### Patch Changes

- 1a5bb05: Made sure either the label of description of the list item will wrap if the wor is too long and added a left margin to the action.

## 0.4.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.

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

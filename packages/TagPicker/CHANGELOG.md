# @igloo-ui/tag-picker

## 0.12.4

### Patch Changes

- e934837: UI fix for focused state
- e934837: Added focus border color
- Updated dependencies [e934837]
  - @igloo-ui/input@2.2.5

## 0.12.3

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/dropdown@1.8.2
  - @igloo-ui/input@2.2.4
  - @igloo-ui/tag@1.7.2

## 0.12.2

### Patch Changes

- 8281f80: Dependency of dependency
- Updated dependencies [8281f80]
  - @igloo-ui/tag@1.7.1

## 0.12.1

### Patch Changes

- af9d178: Add a disabled state to the Tag component
- Updated dependencies [f2f6d49]
- Updated dependencies [af9d178]
- Updated dependencies [f2f6d49]
  - @igloo-ui/tag@1.7.0

## 0.12.0

### Minor Changes

- aca4fc9: Added new appearances
- aca4fc9: Added an Inactive apperarance to Tag / Centered text in Tag

### Patch Changes

- Updated dependencies [aca4fc9]
- Updated dependencies [aca4fc9]
  - @igloo-ui/tag@1.6.0

## 0.11.0

### Minor Changes

- 538873b: TagPicker now uses the List component internally. Added props isManager and type to TagItem. Added listSize and dropdownClassName to TagPickerProps. Added support for a member list.

## 0.10.0

### Minor Changes

- bea2c50: Added the "select" appearence for the Tag that is used inside TagPicker. Fixed height and spacing of TagPicker.

### Patch Changes

- bea2c50: Fixed issue where scrollbar wasn't working in tagPicker.
- Updated dependencies [bea2c50]
  - @igloo-ui/tag@1.5.0

## 0.9.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/dropdown@1.8.1
  - @igloo-ui/input@2.2.2
  - @igloo-ui/tag@1.4.1

## 0.9.0

### Minor Changes

- e2cc8b8: Added the "select" appearence for the Tag that is used inside TagPicker. Fixed height and spacing of TagPicker.

### Patch Changes

- Updated dependencies [e2cc8b8]
  - @igloo-ui/tag@1.4.0

## 0.8.1

### Patch Changes

- 0c419dc: Fix an issue where classNames were not passed to children when cloned
- Updated dependencies [0c419dc]
  - @igloo-ui/tag@1.3.1

## 0.8.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/dropdown@1.8.0
  - @igloo-ui/input@2.2.0
  - @igloo-ui/tag@1.3.0

## 0.7.0

### Minor Changes

- de2a2e3: Added ref and inputValue props to be able to edit the input in TagPicker.

## 0.6.7

### Patch Changes

- 1f6d0b3: Added a border to the dropdown component and removed the outline from the date picker since it was no longer needed.
- Updated dependencies [1f6d0b3]
  - @igloo-ui/dropdown@1.7.1

## 0.6.6

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/dropdown@1.6.6
  - @igloo-ui/input@2.1.8
  - @igloo-ui/tag@1.2.5

## 0.6.5

### Patch Changes

- 58143b5: Fixed the error styles for TagPicker.

## 0.6.4

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
- Updated dependencies [7d36815]
  - @igloo-ui/dropdown@1.6.5
  - @igloo-ui/tag@1.2.4
  - @igloo-ui/input@2.1.7

## 0.6.3

### Patch Changes

- 39a1d18: Fix for minor issues
- Updated dependencies [39a1d18]
  - @igloo-ui/input@2.1.6

## 0.6.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/dropdown@1.6.4
  - @igloo-ui/input@2.1.5
  - @igloo-ui/tag@1.2.2

## 0.6.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/dropdown@1.6.3
  - @igloo-ui/input@2.1.4
  - @igloo-ui/tag@1.2.1

## 0.6.0

### Minor Changes

- 9d570e7: Update dependency
- d1adbf4: Rebrand of TagPicker and bugfix

## 0.5.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

### Patch Changes

- 08de993: Updated react-aria packages
- Updated dependencies [5402bcc]
  - @igloo-ui/tag@1.1.0

## 0.4.1

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/dropdown@1.6.1
  - @igloo-ui/input@2.1.2
  - @igloo-ui/tag@1.0.8

## 0.4.0

### Minor Changes

- 9bfc1ae: Added an autoFocus prop to the tag picker.

### Patch Changes

- Updated dependencies [5ed6021]
  - @igloo-ui/dropdown@1.5.0

## 0.3.3

### Patch Changes

- 7c1e286: Fixed the way TagPicker handles the count of selected results. Now it includes results selected on load.

## 0.3.2

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/input@2.1.1
  - @igloo-ui/tag@1.0.7

## 0.3.1

### Patch Changes

- 8812669: Tags in TagPicker were not receiving the hasError prop so it was added to fix this.

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

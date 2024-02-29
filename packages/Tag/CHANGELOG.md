# @igloo-ui/tag

## 1.5.2

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 1.5.1

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/icon-button@1.2.3

## 1.5.0

### Minor Changes

- bea2c50: Added the "select" appearence for the Tag that is used inside TagPicker. Fixed height and spacing of TagPicker.

## 1.4.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/ellipsis@0.3.1
  - @igloo-ui/icon-button@1.2.2

## 1.4.0

### Minor Changes

- e2cc8b8: Added the "select" appearence for the Tag that is used inside TagPicker. Fixed height and spacing of TagPicker.

## 1.3.2

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 1.3.1

### Patch Changes

- 0c419dc: Fix an issue where classNames were not passed to children when cloned

## 1.3.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/ellipsis@0.3.0
  - @igloo-ui/icon-button@1.2.0

## 1.2.5

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/ellipsis@0.2.4
  - @igloo-ui/icon-button@1.1.7

## 1.2.4

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/ellipsis@0.2.3
  - @igloo-ui/icon-button@1.1.6

## 1.2.3

### Patch Changes

- 5082846: added space between icon and border for round tags small, xsmall and micro

## 1.2.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/ellipsis@0.2.2
  - @igloo-ui/icon-button@1.1.5

## 1.2.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/ellipsis@0.2.1
  - @igloo-ui/icon-button@1.1.4

## 1.2.0

### Minor Changes

- 09c0000: update tag to change border-radius to match new brand

## 1.1.1

### Patch Changes

- Updated dependencies [36fbdcc]
  - @igloo-ui/ellipsis@0.2.0
  - @igloo-ui/icon-button@1.1.3

## 1.1.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/icon-button@1.1.0

## 1.0.8

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/ellipsis@0.1.11
  - @igloo-ui/icon-button@1.0.4

## 1.0.7

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3

## 1.0.6

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/ellipsis@0.1.10
  - @igloo-ui/icon-button@1.0.1

## 1.0.5

### Patch Changes

- 55d12e3: fix error with empty package @shared/components

## 1.0.4

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.

## 1.0.3

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [e47ae88]
  - @igloo-ui/icon-button@1.0.0

## 1.0.2

### Patch Changes

- 9b9ec61: Initial release of the tag picker and a small color change for the dismiss button in the tag component.

## 1.0.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/ellipsis@0.1.8
  - @igloo-ui/icon-button@0.2.13

## 1.0.0

### Major Changes

- 2a6d8e5: Extracted the Color and Avatar components from the Tag component

  ## BREAKING CHANGE

  Restructuring HTML in the tag component as well as renaming onClose to OnRemove since it made more sense. onRemove also gains an id as a parameter.

## 0.2.0

### Minor Changes

- 8d0b6ed: Added new features such as an ellipsis when too long, a color icon option, an image icon option, a warning icon option, and an error look

## 0.1.2

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/icon-button@0.2.12

## 0.1.1

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme
- Updated dependencies [d971143]
  - @igloo-ui/icon-button@0.2.11

## 0.1.0

### Minor Changes

- 5eeb191: Initial release of tag component

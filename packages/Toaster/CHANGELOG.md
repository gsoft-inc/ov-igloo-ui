# @igloo-ui/toaster

## 2.3.0

### Minor Changes

- a7761cd: Updated typings

### Patch Changes

- Updated dependencies [a7761cd]
  - @igloo-ui/icon-button@1.4.0

## 2.2.2

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens
- Updated dependencies [2afe0d0]
  - @igloo-ui/icon-button@1.3.4

## 2.2.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies
- Updated dependencies [d8dc4ea]
  - @igloo-ui/icon-button@1.3.3

## 2.2.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

### Patch Changes

- Updated dependencies [7c83d3d]
  - @igloo-ui/icon-button@1.3.0

## 2.1.9

### Patch Changes

- 81723d0: Updated Hopper depedency
- Updated dependencies [81723d0]
  - @igloo-ui/icon-button@1.2.9

## 2.1.8

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/icon-button@1.2.8

## 2.1.7

### Patch Changes

- 8281f80: Bumped dependency

## 2.1.6

### Patch Changes

- f2f6d49: Version bump to acknowledge button patch version
- f2f6d49: Version bump for button 0.8.5
- Updated dependencies [f2f6d49]
  - @igloo-ui/icon-button@1.2.7

## 2.1.5

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.
- Updated dependencies [a00a83f]
  - @igloo-ui/icon-button@1.2.5

## 2.1.4

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 2.1.3

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/icon-button@1.2.3

## 2.1.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/icon-button@1.2.2

## 2.1.1

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 2.1.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/icon-button@1.2.0

## 2.0.6

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/icon-button@1.1.7

## 2.0.5

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/icon-button@1.1.6

## 2.0.4

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/icon-button@1.1.5

## 2.0.3

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/icon-button@1.1.4

## 2.0.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/icon-button@1.0.4

## 2.0.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3

## 2.0.0

### Major Changes

- a5622f7: Changed the way the toaster is used. Also added a close button.

## 1.0.5

### Patch Changes

- 345005f: Toasts in list being overridden

## 1.0.4

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 1.0.3

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.

## 1.0.2

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 1.0.1

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2

## 1.0.0

### Major Changes

- 4f5b3c1: Rework the code of component and update UI

  BRAKING CHANGE

  - The `react-hot-toast` has been removed, we have rewritten the code of the toaster.
  - A custom Hook is now available to display several toasts one after the other.
  - It is also possible to display a single toast

## 0.1.7

### Patch Changes

- 1a3322f: Upgrade igloo icons package from `1.1.0` to `1.3.0`

## 0.1.6

### Patch Changes

- 29e77d3: fix import of `Toaster`
- 38a4994: Update dependency on @igloo-ui/icons and other @igloo libs
- Updated dependencies [38a4994]
  - @igloo-ui/icon-button@0.2.9

## 0.1.5

### Patch Changes

- 0a86f13: Update content of README
- Updated dependencies [0a86f13]
  - @igloo-ui/icon-button@0.2.8

## 0.1.4

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files
- Updated dependencies [8c8686e]
  - @igloo-ui/icon-button@0.2.6

## 0.1.3

### Patch Changes

- 4a256e3: IE11 compatibility
- Updated dependencies [4a256e3]
  - @igloo-ui/icon-button@0.2.3

## 0.1.2

### Patch Changes

- 1e1c6e5: Chore Update packages
- Updated dependencies [1e1c6e5]
  - @igloo-ui/icon-button@0.2.2

## 0.1.1

### Patch Changes

- 699d989: Position the toaster above the others with z-index

## 0.1.0

### Minor Changes

- f241a98: Toaster component

  The Toaster component is a non-disruptive message that appears at the top of the interface to provide quick, at-a-glance feedback on the outcome of an action.

  ### Component API

  | name                                  | description                   |
  | ------------------------------------- | ----------------------------- |
  | `toaster.success(message, duration)`  | render a success notification |
  | `toaster.success(message, duration)`  | render a error notification   |

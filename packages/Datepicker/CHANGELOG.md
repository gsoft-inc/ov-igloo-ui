# @igloo-ui/datepicker

## 0.6.12

### Patch Changes

- 4b5c9bd: Updated dependencies

## 0.6.11

### Patch Changes

- e934837: UI fix for focused state

## 0.6.10

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/button@0.8.6
  - @igloo-ui/dropdown@1.8.2
  - @igloo-ui/icon-button@1.2.8
  - @igloo-ui/provider@0.1.2

## 0.6.9

### Patch Changes

- 8281f80: Bumped dependency

## 0.6.8

### Patch Changes

- f2f6d49: Version bump to acknowledge button patch version
- Updated dependencies [f2f6d49]
  - @igloo-ui/icon-button@1.2.7

## 0.6.7

### Patch Changes

- 2beb214: - Spacing in Button with Icon is now always shown even with non Hopper icons.
- Updated dependencies [2beb214]
  - @igloo-ui/button@0.8.5
  - @igloo-ui/icon-button@1.2.6

## 0.6.6

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.
- Updated dependencies [a00a83f]
  - @igloo-ui/button@0.8.4
  - @igloo-ui/icon-button@1.2.5

## 0.6.5

### Patch Changes

- 4a2812e: Added locale support using Igloo's provider.
- Updated dependencies [4a2812e]
  - @igloo-ui/provider@0.1.1

## 0.6.4

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 0.6.3

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/button@0.8.3
  - @igloo-ui/icon-button@1.2.3

## 0.6.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/button@0.8.2
  - @igloo-ui/dropdown@1.8.1
  - @igloo-ui/icon-button@1.2.2

## 0.6.1

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 0.6.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/button@0.8.0
  - @igloo-ui/dropdown@1.8.0
  - @igloo-ui/icon-button@1.2.0

## 0.5.6

### Patch Changes

- 1f6d0b3: Added a border to the dropdown component and removed the outline from the date picker since it was no longer needed.
- Updated dependencies [1f6d0b3]
  - @igloo-ui/dropdown@1.7.1

## 0.5.5

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
- Updated dependencies [cfb5619]
  - @igloo-ui/button@0.7.7
  - @igloo-ui/dropdown@1.6.6
  - @igloo-ui/icon-button@1.1.7

## 0.5.4

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/button@0.7.4
  - @igloo-ui/dropdown@1.6.5
  - @igloo-ui/icon-button@1.1.6

## 0.5.3

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/button@0.7.3
  - @igloo-ui/dropdown@1.6.4
  - @igloo-ui/icon-button@1.1.5

## 0.5.2

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/button@0.7.1
  - @igloo-ui/dropdown@1.6.3
  - @igloo-ui/icon-button@1.1.4

## 0.5.1

### Patch Changes

- e54678d: Changes cursor to not-allowed when input is disabled

## 0.5.0

### Minor Changes

- 2ad953e: - add a property to prevent local date formatting
  - set calendar update when a user enters a date in input
  - add pointer when user hovers input

## 0.4.0

### Minor Changes

- 4b2b39b: Rebrand of Datepicker

## 0.3.2

### Patch Changes

- Updated dependencies [8eeac98]
  - @igloo-ui/button@0.7.0
  - @igloo-ui/icon-button@1.1.3

## 0.3.1

### Patch Changes

- 6823fc8: Fixes the problem caused by a minDate value that is greater than maxDate

## 0.3.0

### Minor Changes

- b67ee3d: Fixed the datepicker style when the selected date is unavailable and today's date. Also made sure that unavailable dates cannot be selected through the input field and added onDateUnavailable callback.

### Patch Changes

- 08de993: Removed duplicate react-stately from Datepicker and updated packages to fix build error.
- Updated dependencies [5402bcc]
  - @igloo-ui/button@0.6.0
  - @igloo-ui/icon-button@1.1.0

## 0.2.0

### Minor Changes

- e602abb: Updated the Datepicker to return a luxon local ISO time in the onChange without the timezone at the end. Added an option to change the locale as well as capitalizing the months for any language. Fixed the time sent in the onChange. Added readOnly option and also the ability to update the datePicker via the input. (First Draft)

## 0.1.5

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/button@0.5.2
  - @igloo-ui/dropdown@1.6.1
  - @igloo-ui/icon-button@1.0.4

## 0.1.4

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/button@0.5.1
  - @igloo-ui/icon-button@1.0.3

## 0.1.3

### Patch Changes

- Updated dependencies [357133d]
  - @igloo-ui/button@0.5.0
  - @igloo-ui/icon-button@1.0.2

## 0.1.2

### Patch Changes

- b4fb540: cursor display on hover of an inactive date

## 0.1.1

### Patch Changes

- d4754a9: Fixing a release problem

## 0.1.0

### Minor Changes

- 6be3b59: Add `maxDate` props: The maximum allowed date that a user may select

## 0.0.8

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/button@0.4.1
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/icon-button@1.0.1

## 0.0.7

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 0.0.6

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.

## 0.0.5

### Patch Changes

- Updated dependencies [e47ae88]
- Updated dependencies [d2e08a0]
- Updated dependencies [d5c91f5]
  - @igloo-ui/icon-button@1.0.0
  - @igloo-ui/button@0.4.0

## 0.0.4

### Patch Changes

- Updated dependencies [9b9ec61]
  - @igloo-ui/dropdown@1.0.0

## 0.0.3

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/button@0.3.7
  - @igloo-ui/dropdown@0.2.1
  - @igloo-ui/icon-button@0.2.13

## 0.0.2

### Patch Changes

- Updated dependencies [64ca515]
  - @igloo-ui/dropdown@0.2.0

## 0.0.1

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: Update packages

  - "react-aria": "^3.21.0",
  - "@react-aria/link": "^3.35",
  - "react-stately": "^3.19.0"

- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/button@0.3.6
  - @igloo-ui/icon-button@0.2.12
  - @igloo-ui/dropdown@0.1.1

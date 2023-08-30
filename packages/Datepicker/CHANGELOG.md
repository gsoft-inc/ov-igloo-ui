# @igloo-ui/datepicker

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

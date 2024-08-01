# @igloo-ui/tooltip

## 3.5.5

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 3.5.4

### Patch Changes

- 81723d0: Updated Hopper depedency

## 3.5.3

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 3.5.2

### Patch Changes

- 95cd203: Fixed the base font size for Workleap brand inside Tooltip so that the max width works properly.

## 3.5.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 3.5.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 3.4.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 3.4.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 3.4.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 3.4.1

### Patch Changes

- 13e1cb4: mask the arrow in the Workleap brand

## 3.4.0

### Minor Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 3.3.0

### Minor Changes

- 4096378: Applied the workleep rebrand to Alert, Hyeprlink and Tooltips. Fixed an override css issue in Iconbutton.

## 3.2.0

### Minor Changes

- 723fbee: Applied the workleep rebrand to Alert, Hyeprlink and Tooltips. Fixed an override css issue in Iconbutton.

## 3.1.6

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 3.1.5

### Patch Changes

- 8baa499: Updated floating-ui version and also updated tooltip's onOpenChange function so that it does not use the event.

## 3.1.4

### Patch Changes

- 9d9d72a: Updated floating-ui so that each component uses the same version.

## 3.1.3

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 3.1.2

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.

## 3.1.1

### Patch Changes

- 49d3c6b: Added a mock for testing

## 3.1.0

### Minor Changes

- bf0342e: Refactor: Replaced react spring and react popper with framer motion and/or floating-ui

### Patch Changes

- 9ed10b2: Updated jest and updated snapshots for popover and tooltip components

## 3.0.3

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.

## 3.0.2

### Patch Changes

- a3e8f88: Updated the variables used for the light theme of the tooltip

## 3.0.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 3.0.0

### Major Changes

- ff6db5c: change of behavior for the tooltip when scrolling and displaying in the mobile version.

  ## BREAKING CHANGE

  - disabling the tooltip in mobile devices. It is however possible to display it by passing the props `showOnMobile`

## 2.0.2

### Patch Changes

- 0640409: udpate classnames to 2.3.2

## 2.0.1

### Patch Changes

- 7cf9a4c: Adjusted container display to make sure it works for block elements

## 2.0.0

### Major Changes

- 17def56: Added animation to tooltip

  ## BREAKING CHANGE

  Changed the default positioning to 'top' instead of 'auto'

## 1.0.5

### Patch Changes

- 088f9fd: Fix: Changed the mouseleave event to use native js so it works with disabled elements as children.

## 1.0.4

### Patch Changes

- 4092ee6: center text when the position is `top` or `bottom`

## 1.0.3

### Patch Changes

- d15162f: Change position of Tooltip from absolut to fixed

## 1.0.2

### Patch Changes

- 9eab44f: Fix the maxWidth

## 1.0.1

### Patch Changes

- 0a86f13: Update content of README

## 1.0.0

### Major Changes

- 9fc50a4: Use popper for the postion of the tooltip

  ## BREAKING CHANGE

  removing the `forwardref`

## 0.0.9

### Patch Changes

- 01fbda0: add posibility to forward a `ref`

## 0.0.8

### Patch Changes

- 8ceb764: fix error with calc() on the transition of arrow

## 0.0.7

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.0.6

### Patch Changes

- 81f7d46: show tooltip on overflow content

## 0.0.5

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.0.4

### Patch Changes

- 56816b9: Replace the background color by `--electric-blue-900`

## 0.0.3

### Patch Changes

- 67f63b7: Fix Tooltip position for children other then text

## 0.0.2

### Patch Changes

- 2da8010: Fix render of elements with the css var --grey-{...}

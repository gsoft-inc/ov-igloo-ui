# @igloo-ui/dialog

## 0.8.4

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/modal@1.6.5

## 0.8.3

### Patch Changes

- 6b00f08: Updated dependencies
  - @igloo-ui/modal@1.6.4

## 0.8.2

### Patch Changes

- 33ecc10: Updated the width behavior of the buttons in Dialog.
- Updated dependencies [40eb117]
  - @igloo-ui/modal@1.6.2

## 0.8.1

### Patch Changes

- 37822b2: Fixed the style of the modal and Dialog headers and the spacing of the close button.
- Updated dependencies [37822b2]
  - @igloo-ui/modal@1.6.1

## 0.8.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/button@0.8.0
  - @igloo-ui/modal@1.6.0

## 0.7.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
- Updated dependencies [cfb5619]
  - @igloo-ui/button@0.7.7
  - @igloo-ui/modal@1.5.4

## 0.7.3

### Patch Changes

- 26614d0: Fixed the spacing for titles and buttons inside the Modal and Dialog components to match figma.
- Updated dependencies [26614d0]
  - @igloo-ui/modal@1.5.3

## 0.7.2

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/button@0.7.4
  - @igloo-ui/modal@1.5.2

## 0.7.1

### Patch Changes

- 0dda883: dismissOnEscape is now optional. 'contain' was removed from FocusScope inside Modal. This was causing errors in OV when dialog displayed above modal.
- Updated dependencies [0dda883]
  - @igloo-ui/modal@1.5.1

## 0.7.0

### Minor Changes

- 636004c: Added dismissOnEscape to Modal and Dialog. Also fixed the issue where the modal didn't gain focus after opening.

### Patch Changes

- Updated dependencies [636004c]
  - @igloo-ui/modal@1.5.0

## 0.6.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/button@0.7.3
  - @igloo-ui/modal@1.4.3

## 0.6.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/button@0.7.1
  - @igloo-ui/modal@1.4.2

## 0.6.0

### Minor Changes

- 8eeac98: Rebrand of dialog and modal / media query fix in rems

### Patch Changes

- Updated dependencies [8eeac98]
  - @igloo-ui/button@0.7.0
  - @igloo-ui/modal@1.4.0

## 0.5.1

### Patch Changes

- cfdea66: Fixed Dialog's button width so that they are equal. Also fixed dialog header's styling. It was using a no longer used class.

## 0.5.0

### Minor Changes

- 522d3cf: Added a loading feature to the Dialog when the validate button is clicked.

## 0.4.1

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/button@0.5.2
  - @igloo-ui/modal@1.3.3

## 0.4.0

### Minor Changes

- c7273b3: Update Dialog prop, subTitle, to be a ReactNode.

## 0.3.2

### Patch Changes

- 0e3cc82: added troubleshooting section in the readme for workaround about Closing Dialog on top of Modal will close both
- Updated dependencies [0e3cc82]
  - @igloo-ui/modal@1.2.3

## 0.3.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/button@0.4.1
  - @igloo-ui/modal@1.2.2

## 0.3.0

### Minor Changes

- bf0342e: Refactor: Replaced react spring and react popper with framer motion and/or floating-ui

### Patch Changes

- Updated dependencies [bf0342e]
  - @igloo-ui/modal@1.2.0

## 0.2.0

### Minor Changes

- 386e7cd: Reduced the padding for the modal and dialog components. Also added steps and buttons to the modal. The carousel just had a minor style update on the secondary button.

### Patch Changes

- Updated dependencies [386e7cd]
  - @igloo-ui/modal@1.1.0

## 0.1.4

### Patch Changes

- d1ee42f: Fix: Added an if statement on the dialog demo page so that the dialog code doesn't stick around. This will need to be updated once react-spring fixes the javascript error.

## 0.1.3

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/button@0.3.7
  - @igloo-ui/modal@1.0.3

## 0.1.2

### Patch Changes

- a1a4642: Add danger props for render a desctructive actions

## 0.1.1

### Patch Changes

- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/button@0.3.6
  - @igloo-ui/modal@1.0.2

## 0.1.0

### Minor Changes

- b734729: Initial release of the dialog component

### Patch Changes

- Updated dependencies [b734729]
  - @igloo-ui/modal@1.0.0

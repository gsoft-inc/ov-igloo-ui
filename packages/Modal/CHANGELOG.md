# @igloo-ui/modal

## 1.5.2

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/carousel@0.2.3
  - @igloo-ui/icon-button@1.1.6

## 1.5.1

### Patch Changes

- 0dda883: dismissOnEscape is now optional. 'contain' was removed from FocusScope inside Modal. This was causing errors in OV when dialog displayed above modal.

## 1.5.0

### Minor Changes

- 636004c: Added dismissOnEscape to Modal and Dialog. Also fixed the issue where the modal didn't gain focus after opening.

## 1.4.3

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/carousel@0.2.2
  - @igloo-ui/icon-button@1.1.5

## 1.4.2

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/carousel@0.2.1
  - @igloo-ui/icon-button@1.1.4

## 1.4.1

### Patch Changes

- 3ff3107: - Updated the Close button position in the Modal component to prevent it from overlapping with Modal content.

## 1.4.0

### Minor Changes

- 8eeac98: Rebrand of dialog and modal / media query fix in rems

### Patch Changes

- Updated dependencies [88a777e]
  - @igloo-ui/carousel@0.2.0
  - @igloo-ui/icon-button@1.1.3

## 1.3.3

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/carousel@0.1.3
  - @igloo-ui/icon-button@1.0.4

## 1.3.2

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3

## 1.3.1

### Patch Changes

- 02adf09: Center modal using flex instructions

## 1.3.0

### Minor Changes

- 36f2566: Added stories to the Modal to illustrate the usage of keys. Also removed the initial prop on AnimatePresence to allow the animation to work when opened if the parent had a key change. In addition, the keyValue prop was added.

## 1.2.3

### Patch Changes

- 0e3cc82: added troubleshooting section in the readme for workaround about Closing Dialog on top of Modal will close both

## 1.2.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/carousel@0.1.2
  - @igloo-ui/icon-button@1.0.1

## 1.2.1

### Patch Changes

- 3f50827: Made dropdown portal to the end of the document so that it works in Modals. Removed unused line in Modal.

## 1.2.0

### Minor Changes

- bf0342e: Refactor: Replaced react spring and react popper with framer motion and/or floating-ui

## 1.1.2

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.

## 1.1.1

### Patch Changes

- d5c91f5: link shared components with aliases
- 2770c73: Made sure the close button displays only when it should in the modal component.
- Updated dependencies [e47ae88]
  - @igloo-ui/icon-button@1.0.0

## 1.1.0

### Minor Changes

- 386e7cd: Reduced the padding for the modal and dialog components. Also added steps and buttons to the modal. The carousel just had a minor style update on the secondary button.

### Patch Changes

- Updated dependencies [386e7cd]
  - @igloo-ui/carousel@0.1.1

## 1.0.3

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console
- Updated dependencies [6ee9c45]
  - @igloo-ui/icon-button@0.2.13

## 1.0.2

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: Update packages

  - "@react-aria/dialog": "^3.4.1",
  - "@react-aria/overlays": "^3.12.0",
  - "@react-types/dialog": "3.4.5",

- 0640409: udpate classnames to 2.3.2
- Updated dependencies [0640409]
- Updated dependencies [0640409]
  - @igloo-ui/icon-button@0.2.12

## 1.0.1

### Patch Changes

- 7cf9a4c: Adjusted the z-index to make sure tooltips show above modals

## 1.0.0

### Major Changes

- b734729: Updated title style as well as restructured some html

  ## BREAKING CHANGE

  Restructured some HTML and removed what was no longer needed. There is no longer an .ids-modal\_\_container.

## 0.2.0

### Minor Changes

- 8f7d7c7: An animation was added to the modal component when opening and closing. The way to call it was changed, but it wasn't a breaking change; you just won't have the closing animation. Also, the outline on the modal was removed.

## 0.1.1

### Patch Changes

- 1a3322f: fix issues with css and package
- 1a3322f: Upgrade igloo icons package from `1.1.0` to `1.3.0`

## 0.1.0

### Minor Changes

- 13f46fb: Initial release

# @igloo-ui/modal

## 1.8.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

### Patch Changes

- Updated dependencies [7c83d3d]
  - @igloo-ui/icon-button@1.3.0

## 1.7.7

### Patch Changes

- 81723d0: Updated Hopper depedency
- Updated dependencies [81723d0]
  - @igloo-ui/carousel@0.3.5
  - @igloo-ui/icon-button@1.2.9
  - @igloo-ui/provider@0.1.3

## 1.7.6

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/carousel@0.3.4
  - @igloo-ui/icon-button@1.2.8
  - @igloo-ui/provider@0.1.2

## 1.7.5

### Patch Changes

- 1e7eb00: Fixed a margin issue with footer action buttons

## 1.7.4

### Patch Changes

- 8281f80: Bumped dependency

## 1.7.3

### Patch Changes

- f2f6d49: Version bump to acknowledge button patch version
- f2f6d49: Version bump for button 0.8.5
- Updated dependencies [f2f6d49]
- Updated dependencies [f2f6d49]
  - @igloo-ui/icon-button@1.2.7
  - @igloo-ui/carousel@0.3.3

## 1.7.2

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.
- Updated dependencies [a00a83f]
  - @igloo-ui/icon-button@1.2.5

## 1.7.1

### Patch Changes

- 4a2812e: Added locale support using Igloo's provider.
- Updated dependencies [4a2812e]
  - @igloo-ui/provider@0.1.1

## 1.7.0

### Minor Changes

- 29247f0: Added tertiaryAction to the Modal component.

## 1.6.10

### Patch Changes

- a91a24d: Updated the ghost secondary color of the icon button since it differs from the ghost secondary button color.
- Updated dependencies [a91a24d]
  - @igloo-ui/icon-button@1.2.4

## 1.6.9

### Patch Changes

- ee51218: Modal no longer closes when using an Igloo component that uses a dropdown. Also did small css fix for old brand's modal title not being centered on desktop when no close button was visible.

## 1.6.8

### Patch Changes

- 78c7724: Action buttons in Modal are now at the bottom when in mobile

## 1.6.7

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.
- Updated dependencies [97edb0e]
  - @igloo-ui/icon-button@1.2.3

## 1.6.6

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/carousel@0.3.2
  - @igloo-ui/icon-button@1.2.2

## 1.6.5

### Patch Changes

- 8bf2e79: Version bump to acknowledge button patch version
- Updated dependencies [8bf2e79]
  - @igloo-ui/icon-button@1.2.1

## 1.6.4

### Patch Changes

- 73f52dd: Fix Close icon position for modal

## 1.6.3

### Patch Changes

- 42efe0b: Fix issue where classNames were not passed to children when cloned
- Updated dependencies [42efe0b]
  - @igloo-ui/carousel@0.3.1

## 1.6.2

### Patch Changes

- 40eb117: Updated the hopper icons version

## 1.6.1

### Patch Changes

- 37822b2: Fixed the style of the modal and Dialog headers and the spacing of the close button.

## 1.6.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/carousel@0.3.0
  - @igloo-ui/icon-button@1.2.0

## 1.5.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/carousel@0.2.4
  - @igloo-ui/icon-button@1.1.7

## 1.5.3

### Patch Changes

- 26614d0: Fixed the spacing for titles and buttons inside the Modal and Dialog components to match figma.

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

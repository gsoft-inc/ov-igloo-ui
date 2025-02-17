# Change Log

## 0.10.0

### Minor Changes

- a7761cd: Updated typings

## 0.9.4

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 0.9.3

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 0.9.2

### Patch Changes

- 9b2c48b: UI sync with Hopper

## 0.9.1

### Patch Changes

- 20d9170: Fixed disabled press state appearance / fixed active state in workleap theme for button

## 0.9.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

## 0.8.7

### Patch Changes

- 81723d0: Updated Hopper depedency

## 0.8.6

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.8.5

### Patch Changes

- 2beb214: - Spacing in Button with Icon is now always shown even with non Hopper icons.

## 0.8.4

### Patch Changes

- a00a83f: Added and fixed the active styles for the buttons.

## 0.8.3

### Patch Changes

- 97edb0e: The button is now square when there's only an icon showing on mobile.

## 0.8.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.8.1

### Patch Changes

- f30fe4b: Color adjustments for ghost buttons

## 0.8.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.7.7

### Patch Changes

- cfb5619: Fixed button padding. Also removed styles on loader buttons so they don't show up on focus.
- cfb5619: Updated hopper token versions and button versions.

## 0.7.6

### Patch Changes

- 5c12940: Fixed button padding. Also removed styles on loader buttons so they don't show up on focus.

## 0.7.5

### Patch Changes

- 37260f9: Updated Button to use :focus-visible and not :focus. The old method isn't needed anymore since we no longer support IE. Also added missing line-height a ensured box-sixing is applied to all children of button.

## 0.7.4

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.7.3

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.7.2

### Patch Changes

- 592afb0: change the border value to render on base 10 and 16.

## 0.7.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.7.0

### Minor Changes

- 8eeac98: Rebrand of dialog and modal / media query fix in rems

## 0.6.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

## 0.5.3

### Patch Changes

- 7662390: Removed the :active styles for Button since they were not needed or wanted. .ids-btn--active remains the same.

## 0.5.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.5.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.

## 0.5.0

### Minor Changes

- 357133d: Add new props for reset the size to the default on mobile

## 0.4.2

### Patch Changes

- 949db42: Added a display name to the Button so that it displays properly in storybook's code snippet.

## 0.4.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.4.0

### Minor Changes

- d2e08a0: Feat: Added the ghost secondary appearance of the button.

### Patch Changes

- d5c91f5: link shared components with aliases

## 0.3.7

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.3.6

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2

## 0.3.5

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.3.4

### Patch Changes

- 4bd97f4: fix the hover state rendering of the disabled secondary button

## 0.3.3

### Patch Changes

- 8bc7f2c: add not-allowed cursor on disabled state

## 0.3.2

### Patch Changes

- f1611fd: Temporary quick fix on ghost danger button by adding `.ids-btn` prefix

## 0.3.1

### Patch Changes

- 4f79069: enforce button ghost danger ui

## 0.3.0

### Minor Changes

- 4de58ec: Add new appearance Ghost Danger in `Button`

### Patch Changes

- 38a4994: Update dependency on @igloo-ui/icons and other @igloo libs

## 0.2.3

### Patch Changes

- c89877e: Fix render of ghost button in ie11

## 0.2.2

### Patch Changes

- 0a86f13: Update content of README

## 0.2.1

### Patch Changes

- 3eb651d: fix the width of the button as link

## 0.2.0

### Minor Changes

- f019f88: Add the ability to display a link by an `a` tag

## 0.1.12

### Patch Changes

- ac5d81a: add forwardRef

## 0.1.11

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.1.10

### Patch Changes

- 6d91ab6: Fix secondary button empty background on hover state

## 0.1.9

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.1.8

### Patch Changes

- 1e1c6e5: Chore Update packages

## 0.1.7

### Patch Changes

- ae0a0a5: Fixed the case where the content of the Button is not text, but that we tried to display the object in the title property.

## 0.1.6

### Patch Changes

- 0df8530: Rename Props to ButtonProps

## 0.1.5

### Patch Changes

- 8450a04: Fix resizing effect when loading is complete

## 0.1.4

### Patch Changes

- 2da8010: Fix render of elements with the css var --grey-{...}

## 0.1.3

### Patch Changes

- 31593ad: Change Premium button color and focus, how buttons handle overflow, how active button handle hover and some tweaks to the dev tooling on Windows.

## 0.1.2

### Patch Changes

- c290c9a: remove `src` folder from the package

## 0.1.1

### Patch Changes

- 4ed4836: Add prepublish-ci script for build lib

## 0.1.0

### Minor Changes

- 76a63cb: - **button:** add loading effect ([2a8d84f](https://github.com/workleap/ov-igloo-ui/commit/2a8d84fa8739f170e0189d053ec4f5136ad3c4d4))
  - **button:** add of the responsive view ([364a926](https://github.com/workleap/ov-igloo-ui/commit/364a92611aae51ab555feaa6e503933ca80f1433))
  - **button:** classname for OV standard compoliance ([8ed7afb](https://github.com/workleap/ov-igloo-ui/commit/8ed7afb047f552f52fd151ef2da04be49f9908f1))
  - **button:** change the css variables name ([68f710d](https://github.com/workleap/ov-igloo-ui/commit/68f710d16e653681ff90e9124ebbafd759dfe057))
  - add declaration for `renderContent`  ([5827120](https://github.com/workleap/ov-igloo-ui/commit/58271200d14a3372dc81fd1d9189e5dfade87143))
  - add focus state ([31910e4](https://github.com/workleap/ov-igloo-ui/commit/31910e48ff15d197323666bae376116d6fe97c56))
  - remove focus when the button is clicked ([caa6d45](https://github.com/workleap/ov-igloo-ui/commit/caa6d4544979d605794b23b64fdd838af3c61a23))
  - update stylelint for OV standard compliance ([184d006](https://github.com/workleap/ov-igloo-ui/commit/184d006ecb10d8b0a19a2303f7399b54b895e992))
  - configure stylelint ([d27df67](https://github.com/workleap/ov-igloo-ui/commit/d27df672a99145eb3a134cab4549b0e0998a6d0f))

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.1.0-alpha.0 (2021-10-29)

### Bug Fixes

- add declaration for `renderContent`  ([5827120](https://github.com/workleap/ov-igloo-ui/commit/58271200d14a3372dc81fd1d9189e5dfade87143))
- **button:** classname for OV standard compoliance ([8ed7afb](https://github.com/workleap/ov-igloo-ui/commit/8ed7afb047f552f52fd151ef2da04be49f9908f1))
- remove focus when the button is clicked ([caa6d45](https://github.com/workleap/ov-igloo-ui/commit/caa6d4544979d605794b23b64fdd838af3c61a23))
- configure stylelint ([d27df67](https://github.com/workleap/ov-igloo-ui/commit/d27df672a99145eb3a134cab4549b0e0998a6d0f))
- update stylelint for OV standard compliance ([184d006](https://github.com/workleap/ov-igloo-ui/commit/184d006ecb10d8b0a19a2303f7399b54b895e992))

### Features

- add focus state ([31910e4](https://github.com/workleap/ov-igloo-ui/commit/31910e48ff15d197323666bae376116d6fe97c56))
- **button:** add loading effect ([2a8d84f](https://github.com/workleap/ov-igloo-ui/commit/2a8d84fa8739f170e0189d053ec4f5136ad3c4d4))
- **button:** add of the responsive view ([364a926](https://github.com/workleap/ov-igloo-ui/commit/364a92611aae51ab555feaa6e503933ca80f1433))
- **button:** change the css variables name ([68f710d](https://github.com/workleap/ov-igloo-ui/commit/68f710d16e653681ff90e9124ebbafd759dfe057))

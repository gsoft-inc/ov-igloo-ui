# @igloo-ui/checkbox

## 0.4.5

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.4.4

### Patch Changes

- 319f367: Internal changes

## 0.4.3

### Patch Changes

- 7ffde7b: Fixed conflicting css between checkbox and radio. Also fixed cursor styles for checkbox and radio.

## 0.4.2

### Patch Changes

- bdc38d5: Fixed the styling of the checkbox of the older brand.

## 0.4.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.4.0

### Minor Changes

- 9fbfa6f: Updated the checkbox component to use svg icons for the check. This will also fix the centering of the checkmark.

## 0.3.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.2.7

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.2.6

### Patch Changes

- 736a1b5: Fixed checkbox and radio by ensuring the box-sizing is set on the container and all its children. Also fixed line-height and positioning.

## 0.2.5

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.2.4

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.2.3

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.2.2

### Patch Changes

- c226be8: Applied the new style to the component.

## 0.2.1

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.2.0

### Minor Changes

- e5b4c2e: Added a new appearance called 'completion' to the checkbox component.

## 0.1.9

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.8

### Patch Changes

- d5c91f5: link shared components with aliases

## 0.1.7

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.6

### Patch Changes

- 0640409: udpate classnames to 2.3.2

## 0.1.5

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.4

### Patch Changes

- 0a86f13: Update content of README

## 0.1.3

### Patch Changes

- cb767c6: fix controlled state, position of checkbox with long content and the size in small space

## 0.1.2

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.1.1

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.1.0

### Minor Changes

- a903b97: Initial release

  Component API

  | name          | description                                                        |
  | ------------- | ------------------------------------------------------------------ |
  | children      | The content to display inside the label                            |
  | className     | Add a specific class to the checkbox                               |
  | dataTest      | Add a data-test tag for automated tests                            |
  | htmlFor       | Indicates the ID of the element that is controlled by the checkbox |
  | checked       | Modifies true/false value of the native checkbox                   |
  | disabled      | Modifies the native disabled state of the native checkbox          |
  | indeterminate | Applies an indeterminate state to the checkbox                     |
  | onChange      | Function called when the value changes.                            |

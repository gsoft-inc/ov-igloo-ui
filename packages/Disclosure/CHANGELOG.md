# @igloo-ui/disclosure

## 1.1.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 1.0.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 1.0.3

### Patch Changes

- 3944b5f: Fixed Disclosure styles including font sizes, aligment and focus styles.

## 1.0.2

### Patch Changes

- 7d36815: Fixed the disclosure icon alignment.

## 1.0.1

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 1.0.0

### Major Changes

- c981a8b: Separated the controlled and uncontrolled expanded props.

  ## BREAKING CHANGE

  The defaultExpanded prop was added, which means isExpanded may need to be exchanged for this new prop.
  If you use isExpanded to make the disclosure expanded by default, rename it to defaultExpanded.
  If you use isExpanded to open/close the disclosure programmatically, keep isExpanded.
  Rule of thumb: If isExpanded was used without onOpen and onClose, it most likely has to be renamed to defaultExpanded.

## 0.3.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.3.0

### Minor Changes

- a66541c: Gave the Disclosure component the new Brand

## 0.2.3

### Patch Changes

- 08de993: Updated react-aria packages

## 0.2.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.2.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.

## 0.2.0

### Minor Changes

- 210d1a8: Added isLowContrast, onClose and onOpen props. isExpended will now update the open and close state whenever updated.

## 0.1.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.0

### Minor Changes

- d6f1db8: Initial release of disclosure component

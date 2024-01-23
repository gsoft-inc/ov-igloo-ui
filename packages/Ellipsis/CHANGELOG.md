# @igloo-ui/ellipsis

## 0.3.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.2.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.2.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.2.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.2.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.2.0

### Minor Changes

- 36fbdcc: Rebrand of Ellipsis

## 0.1.11

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.10

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.9

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.

## 0.1.8

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.7

### Patch Changes

- 0640409: udpate classnames to 2.3.2

## 0.1.6

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.5

### Patch Changes

- 0a86f13: Update content of README

## 0.1.4

### Patch Changes

- 01fbda0: add posibility to forward a `ref`

## 0.1.3

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.1.2

### Patch Changes

- afdaa6b: Fix a lib import error with capital cases

## 0.1.1

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.1.0

### Minor Changes

- e90774d: ## Ellipsis component

  Add Ellipsis component to allow text truncation in a div.

  ### Component API

  | name     | description                                                    |
  | -------- | -------------------------------------------------------------- |
  | children | The content to display inside the component                    |
  | title    | The title to display when hovering the mouse over the ellipsis |

# @igloo-ui/dropdown

## 1.9.3

### Patch Changes

- bcb9f75: - Updated @floating-ui/react to latest to fix issues with FloatingPortal
  - Updated Dropdown, Popover, FloatingLinkEditorPlugin, and Tooltip to render portals only when open

## 1.9.2

### Patch Changes

- 0790ab4: Updated packages.

## 1.9.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 1.9.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

## 1.8.3

### Patch Changes

- 81723d0: Updated Hopper depedency

## 1.8.2

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 1.8.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 1.8.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 1.7.1

### Patch Changes

- 1f6d0b3: Added a border to the dropdown component and removed the outline from the date picker since it was no longer needed.

## 1.7.0

### Minor Changes

- c19aa7e: Added dropdownOffset to ActionMenu and Dropdown components. Also added dropdownClassName to ActionMenu.

## 1.6.6

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 1.6.5

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 1.6.4

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 1.6.3

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 1.6.2

### Patch Changes

- 87f9161: Gave the Dropdown component the new Worleap style.

## 1.6.1

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 1.6.0

### Minor Changes

- 1a5bb05: Added onScrollEnd and scrollEndTheshold props to the Dropdown.

## 1.5.0

### Minor Changes

- 5ed6021: Added the onAfterMenuClose callback to the action menu and dropdown components.

## 1.4.2

### Patch Changes

- 8baa499: Updated floating-ui version and also updated tooltip's onOpenChange function so that it does not use the event.

## 1.4.1

### Patch Changes

- 89d10c5: Updated recharts version and fixed dropdown mock

## 1.4.0

### Minor Changes

- 9d9d72a: Allow Combobox, Select, TagPicker and Dropdown components to scroll if it's too long and runs out of room in the viewport. New properties added to Dropdown are: isReferenceWidth, isScrollable and footer. The display of the footer was moved to the dropdown instead of leaving it in combobox because the dropdown handles the scroll styles and the footer is sticky.

## 1.3.0

### Minor Changes

- 6e2e96a: Added the disablePortal prop for when you don't want the dropdown to be appended to the end of the body. False by default so it won't break the current behavior.
- 6e2e96a: The dropdown will now follow the reference element if it changes positions without screen resize or scoll.

## 1.2.0

### Minor Changes

- 0b8a62f: The dropdown will now follow the reference element if it changes positions without screen resize or scoll.

## 1.1.4

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 1.1.3

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.

## 1.1.2

### Patch Changes

- 3f50827: Made dropdown portal to the end of the document so that it works in Modals. Removed unused line in Modal.

## 1.1.1

### Patch Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

## 1.1.0

### Minor Changes

- 6b869be: Updated jsPopper to floating-ui and Fixed the weird positiong behavior of the dropdown

## 1.0.0

### Major Changes

- 9b9ec61: Updated the way the dropdown list displays. It is appended to the body.

  ## BREAKING CHANGE

  The dropdown uses the usePopper hook from react popper to allow the dropdown to be appended to the body. This prevents many potential bugs such as creating a scrollbar in a div when the dropdown should display outside the div.
  Default position looks the same, but was updated to bottomLeft. Position 'bottom' used to look like 'bottomLeft'. It was pointless to have two positions do the same thing so now 'bottom' is horizontally positioned in the center to be aligned with js popper positioning.

## 0.2.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.2.0

### Minor Changes

- 64ca515: add new position: `topLeft`, `topRight`, `bottomLeft`, `bottomRight`

## 0.1.1

### Patch Changes

- 0640409: Update packages

  - "react-aria": "^3.21.0",
  - "@react-aria/link": "^3.35",
  - "react-stately": "^3.19.0"

## 0.1.0

### Minor Changes

- 9842a0d: Initial release of the Dropdown component

# @igloo-ui/action-menu

## 1.5.4

### Patch Changes

- f2f6d49: Version bump for button 0.8.5
- Updated dependencies [f2f6d49]
  - @igloo-ui/list@0.7.1

## 1.5.3

### Patch Changes

- Updated dependencies [538873b]
  - @igloo-ui/list@0.7.0

## 1.5.2

### Patch Changes

- e83ee46: Stopped icons from shrinking when in a list component
- Updated dependencies [e83ee46]
  - @igloo-ui/list@0.6.7

## 1.5.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper
- Updated dependencies [6ea531f]
  - @igloo-ui/dropdown@1.8.1
  - @igloo-ui/list@0.6.4

## 1.5.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

### Patch Changes

- Updated dependencies [4846c59]
  - @igloo-ui/dropdown@1.8.0
  - @igloo-ui/list@0.6.0

## 1.4.1

### Patch Changes

- 1f6d0b3: Added a border to the dropdown component and removed the outline from the date picker since it was no longer needed.
- Updated dependencies [1f6d0b3]
  - @igloo-ui/dropdown@1.7.1

## 1.4.0

### Minor Changes

- c19aa7e: Added dropdownOffset to ActionMenu and Dropdown components. Also added dropdownClassName to ActionMenu.

### Patch Changes

- Updated dependencies [c19aa7e]
  - @igloo-ui/dropdown@1.7.0

## 1.3.5

### Patch Changes

- ed3dc67: Added optional helper text prop to be passed to dropdown

## 1.3.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.
- Updated dependencies [cfb5619]
  - @igloo-ui/dropdown@1.6.6
  - @igloo-ui/list@0.5.5

## 1.3.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
  - @igloo-ui/dropdown@1.6.5
  - @igloo-ui/list@0.5.4

## 1.3.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/dropdown@1.6.4
  - @igloo-ui/list@0.5.2

## 1.3.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/dropdown@1.6.3
  - @igloo-ui/list@0.5.1

## 1.3.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/list@0.5.0

## 1.2.1

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/dropdown@1.6.1
  - @igloo-ui/list@0.4.3

## 1.2.0

### Minor Changes

- 5ed6021: Added the onAfterMenuClose callback to the action menu and dropdown components.

### Patch Changes

- Updated dependencies [5ed6021]
  - @igloo-ui/dropdown@1.5.0

## 1.1.4

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/list@0.4.1

## 1.1.3

### Patch Changes

- 9d9d72a: Fixed WithinContainer story to show two cards and address z-index issues.
- Updated dependencies [9d9d72a]
  - @igloo-ui/dropdown@1.4.0

## 1.1.2

### Patch Changes

- Updated dependencies [9b707d1]
  - @igloo-ui/list@0.4.0

## 1.1.1

### Patch Changes

- 957387b: Other props for the action menu reference were overriding the onKeyDown event. Rearranged the order to fix this.
- Updated dependencies [0482ec6]
  - @igloo-ui/list@0.3.0

## 1.1.0

### Minor Changes

- 6e2e96a: Added the disablePortal prop for when you don't want the dropdown to be appended to the end of the body. False by default so it won't break the current behavior.

### Patch Changes

- Updated dependencies [6e2e96a]
- Updated dependencies [08a062e]
- Updated dependencies [6e2e96a]
  - @igloo-ui/dropdown@1.3.0
  - @igloo-ui/list@0.2.1

## 1.0.0

### Major Changes

- 4ff1942: Fixed some styling issues with the Action Menu. Moved two callbacks in action menu from ActionMenuProps to the props of the option.

  ## BREAKING CHANGE

  ActionMenu is called differently when using the callbacks for when an option is clicked or determining if the menu is closed on select. They were removed from ActionMenuProps and added to the option props instead.

### Patch Changes

- Updated dependencies [4ff1942]
- Updated dependencies [0b8a62f]
  - @igloo-ui/list@0.2.0
  - @igloo-ui/dropdown@1.2.0

## 0.1.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/list@0.1.3

## 0.1.1

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 0.1.0

### Minor Changes

- 3f50827: Feat: The initial release of the action menu component

### Patch Changes

- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2

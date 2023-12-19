# @igloo-ui/combobox

## 2.1.5

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.
- Updated dependencies [7d36815]
- Updated dependencies [7d36815]
  - @igloo-ui/dropdown@1.6.5
  - @igloo-ui/icon-button@1.1.6
  - @igloo-ui/list@0.5.4
  - @igloo-ui/tooltip@3.4.3
  - @igloo-ui/input@2.1.7

## 2.1.4

### Patch Changes

- 39a1d18: Fix for minor issues
- Updated dependencies [39a1d18]
  - @igloo-ui/input@2.1.6

## 2.1.3

### Patch Changes

- 5a9444f: Fix for focus state made to be on par with Orbiter/Hopper

## 2.1.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency
- Updated dependencies [a2df55d]
  - @igloo-ui/dropdown@1.6.4
  - @igloo-ui/icon-button@1.1.5
  - @igloo-ui/input@2.1.5
  - @igloo-ui/list@0.5.2
  - @igloo-ui/tooltip@3.4.2

## 2.1.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.
- Updated dependencies [9739155]
  - @igloo-ui/tooltip@3.4.0
  - @igloo-ui/dropdown@1.6.3
  - @igloo-ui/icon-button@1.1.4
  - @igloo-ui/input@2.1.4
  - @igloo-ui/list@0.5.1

## 2.1.0

### Minor Changes

- d9f9f12: Gave the Combobox component the new Brand

### Patch Changes

- @igloo-ui/icon-button@1.1.3

## 2.0.3

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/icon-button@1.1.0
  - @igloo-ui/list@0.5.0

## 2.0.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.
- Updated dependencies [bf4ddef]
  - @igloo-ui/dropdown@1.6.1
  - @igloo-ui/icon-button@1.0.4
  - @igloo-ui/input@2.1.2
  - @igloo-ui/list@0.4.3
  - @igloo-ui/tooltip@3.1.6

## 2.0.1

### Patch Changes

- 1a85f2a: Fixed the Combobox so that the loading shows up if it's true, even if there are results.

## 2.0.0

### Major Changes

- 1a5bb05: Added onAfterClose, onInput, onScrollEnd and scrollEndThreshold props to the Combobox.

  ## BREAKING CHANGE

  The search no longer does the filtering itself. The user must use the onInput callback to filter the results as well as add any debouncing needed. Since it is the user filtering the results, they must also reset the results in the onAfterClose callback.

### Patch Changes

- Updated dependencies [1a5bb05]
- Updated dependencies [1a5bb05]
  - @igloo-ui/dropdown@1.6.0
  - @igloo-ui/list@0.4.2

## 1.2.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.
- Updated dependencies [c3efaf5]
  - @igloo-ui/icon-button@1.0.3
  - @igloo-ui/input@2.1.1
  - @igloo-ui/list@0.4.1

## 1.2.0

### Minor Changes

- 9d9d72a: Allow Combobox, Select, TagPicker and Dropdown components to scroll if it's too long and runs out of room in the viewport. New properties added to Dropdown are: isReferenceWidth, isScrollable and footer. The display of the footer was moved to the dropdown instead of leaving it in combobox because the dropdown handles the scroll styles and the footer is sticky.

### Patch Changes

- Updated dependencies [9d9d72a]
- Updated dependencies [9d9d72a]
  - @igloo-ui/tooltip@3.1.4
  - @igloo-ui/dropdown@1.4.0

## 1.1.0

### Minor Changes

- 9b707d1: Added a loading feature to List, Combobox, Select and Tagpicker components.

### Patch Changes

- Updated dependencies [9b707d1]
  - @igloo-ui/list@0.4.0

## 1.0.0

### Major Changes

- ffeaeb7: Added a search icon with the showSearchIcon prop to the combobox. Also fixed keyboard navigation when searchbox is visible.

  ## BREAKING CHANGE

  The search icon is displayed by default beside the search field. To hide it, the user must add showSearch="false".

### Patch Changes

- @igloo-ui/list@0.3.1

## 0.3.0

### Minor Changes

- 0482ec6: Added action prop and updated description type to ReactNode for ListItem. Added footer and a way for the user to open and close the combobox through props.

### Patch Changes

- Updated dependencies [0482ec6]
  - @igloo-ui/list@0.3.0

## 0.2.1

### Patch Changes

- 08a062e: update packages
- Updated dependencies [6e2e96a]
- Updated dependencies [08a062e]
- Updated dependencies [6e2e96a]
- Updated dependencies [08a062e]
  - @igloo-ui/dropdown@1.3.0
  - @igloo-ui/list@0.2.1

## 0.2.0

### Minor Changes

- 4ff1942: Added new optional props to List called 'disableTabbing' and 'onOptionBlur'. Also fixed some styling for the List component.

### Patch Changes

- Updated dependencies [4ff1942]
- Updated dependencies [0b8a62f]
  - @igloo-ui/list@0.2.0
  - @igloo-ui/dropdown@1.2.0

## 0.1.7

### Patch Changes

- 84e2d78: Adding a hover effect
- Updated dependencies [84e2d78]
  - @igloo-ui/input@2.0.5

## 0.1.6

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/icon-button@1.0.1
  - @igloo-ui/input@2.0.4
  - @igloo-ui/list@0.1.3
  - @igloo-ui/tooltip@3.1.3

## 0.1.5

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3
  - @igloo-ui/tooltip@3.1.2

## 0.1.4

### Patch Changes

- 55d12e3: fix error with empty package @shared/components
- Updated dependencies [55d12e3]
- Updated dependencies [49d3c6b]
  - @igloo-ui/list@0.1.2
  - @igloo-ui/tooltip@3.1.1

## 0.1.3

### Patch Changes

- 3f50827: Made dropdown portal to the end of the document so that it works in Modals. Removed unused line in Modal.
- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2

## 0.1.2

### Patch Changes

- 4230499: Fix: updated components to use the IconButton with appearance ghost, variant secondary so that they are grey like they used to be.
- Updated dependencies [4230499]
  - @igloo-ui/tooltip@3.0.3

## 0.1.1

### Patch Changes

- d5c91f5: link shared components with aliases
- Updated dependencies [e47ae88]
- Updated dependencies [d5c91f5]
  - @igloo-ui/icon-button@1.0.0
  - @igloo-ui/list@0.1.1

## 0.1.0

### Minor Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

### Patch Changes

- Updated dependencies [7dcba93]
  - @igloo-ui/list@0.1.0
  - @igloo-ui/dropdown@1.1.1

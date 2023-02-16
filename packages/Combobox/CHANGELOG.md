# @igloo-ui/combobox

## 0.1.0

### Minor Changes

- 7dcba93: Initial release of List and Combobox components. Select was updated to use the Dropdown component that was created previously as well as the new List component.

  ## BREAKING CHANGE

  Select types were updated. List component is used inside Select so SelectOption.tsx was removed. Some functionality was changed. When selecting an element int he select using the keyboard, it now just focuses the element, you need to actually hit enter to select it.

### Patch Changes

- Updated dependencies [7dcba93]
  - @igloo-ui/list@0.1.0
  - @igloo-ui/dropdown@1.1.1

# @igloo-ui/input

## 1.0.0

### Major Changes

- ef50a1b: BRAKING CHANGE

  - Replace `readOnly` props by `disabled`

  New Features

  - Add options for passing a Icon on the input

  Update

  - Upgrade tokens version

## 0.1.0

### Minor Changes

- 8e6a4ec: ## Input component

  The Input component specifies an input field where the user can enter data.

  ### Component API

  | name      | description                                          |
  | --------- | ---------------------------------------------------- |
  | type      | Specifies the type to display                        |
  | isCompact | True for a compact appearance.                       |
  | value     | Specifies the value inside the input.                |
  | autoFocus | True if you need the input to be focus on page load. |
  | readOnly  | True if you need the input to be readonly.           |
  | onChange  | Function called when a key is pressed.               |
  | dataTest  | Add a data-test tag for automated tests              |

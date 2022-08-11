# @igloo-ui/input

## 1.1.0

### Minor Changes

- 4a388ae: Add Postfix icon position in Input component

## 1.0.7

### Patch Changes

- 8bc7f2c: remove focus border on disabled state

## 1.0.6

### Patch Changes

- 38a4994: Update dependency on @igloo-ui/icons and other @igloo libs

## 1.0.5

### Patch Changes

- 0a86f13: Update content of README

## 1.0.4

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 1.0.3

### Patch Changes

- 4a256e3: IE11 compatibility

## 1.0.2

### Patch Changes

- 519f009: Uncontrolled input bugfix

## 1.0.1

### Patch Changes

- 2da8010: Fix render of elements with the css var --grey-{...}

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

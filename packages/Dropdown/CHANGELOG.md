# @igloo-ui/dropdown

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

# @igloo-ui/toaster

## 1.0.0

### Major Changes

- 4f5b3c1: Rework the code of component and update UI

  BRAKING CHANGE

  - The `react-hot-toast` has been removed, we have rewritten the code of the toaster.
  - A custom Hook is now available to display several toasts one after the other.
  - It is also possible to display a single toast

## 0.1.7

### Patch Changes

- 1a3322f: Upgrade igloo icons package from `1.1.0` to `1.3.0`

## 0.1.6

### Patch Changes

- 29e77d3: fix import of `Toaster`
- 38a4994: Update dependency on @igloo-ui/icons and other @igloo libs
- Updated dependencies [38a4994]
  - @igloo-ui/icon-button@0.2.9

## 0.1.5

### Patch Changes

- 0a86f13: Update content of README
- Updated dependencies [0a86f13]
  - @igloo-ui/icon-button@0.2.8

## 0.1.4

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files
- Updated dependencies [8c8686e]
  - @igloo-ui/icon-button@0.2.6

## 0.1.3

### Patch Changes

- 4a256e3: IE11 compatibility
- Updated dependencies [4a256e3]
  - @igloo-ui/icon-button@0.2.3

## 0.1.2

### Patch Changes

- 1e1c6e5: Chore Update packages
- Updated dependencies [1e1c6e5]
  - @igloo-ui/icon-button@0.2.2

## 0.1.1

### Patch Changes

- 699d989: Position the toaster above the others with z-index

## 0.1.0

### Minor Changes

- f241a98: Toaster component

  The Toaster component is a non-disruptive message that appears at the top of the interface to provide quick, at-a-glance feedback on the outcome of an action.

  ### Component API

  | name                                  | description                   |
  | ------------------------------------- | ----------------------------- |
  | `toaster.success(message, duration)`  | render a success notification |
  | `toaster.success(message, duration)`  | render a error notification   |

# @shared/components

## 0.1.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.0

### Minor Changes

- 7dcba93: Updated VisualIdentifier so that the size is customizable. Default is still size small.

## 0.0.1

### Patch Changes

- fec4bb0: initial release of `Shared/components`
- Updated dependencies [2a6d8e5]
  - @igloo-ui/avatar@0.1.0
  - @igloo-ui/color@0.1.0

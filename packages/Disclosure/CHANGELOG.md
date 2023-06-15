# @igloo-ui/disclosure

## 0.2.0

### Minor Changes

- 210d1a8: Added isLowContrast, onClose and onOpen props. isExpended will now update the open and close state whenever updated.

## 0.1.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.0

### Minor Changes

- d6f1db8: Initial release of disclosure component

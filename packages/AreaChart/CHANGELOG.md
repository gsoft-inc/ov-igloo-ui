# @igloo-ui/area-chart

## 0.6.0

### Minor Changes

- a1bcd80: Add dotted line area for null values

## 0.5.2

### Patch Changes

- 56c75d0: Fixed the y-axis width calculation hook to work properly when usign the loading prop.

## 0.5.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.5.0

### Minor Changes

- 589b6ea: displays in the x-axis + tooltip the utc date instead of the local date

## 0.4.0

### Minor Changes

- 77e4f12: Added special month formatting for May, June, July for English locale only in function formatSpecialMonth
  Added new props for setting the maximum elements of the x-axis

## 0.3.0

### Minor Changes

- 1b4cf68: Added a locale prop to be able to change languages

## 0.2.1

### Patch Changes

- 93dd0cb: fix(AreaChart): Issues with loading and empty state
  - rename the css animation to avoid conflicts
  - update y-axis size when the loading state disappeared
  - change the orientation of animation for empty state

## 0.2.0

### Minor Changes

- c4eb19a: add a loading state

## 0.1.2

### Patch Changes

- 0855a3c: The extra space ont he left of the area chart was removed

## 0.1.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.0

### Minor Changes

- 83a9e99: Feat: initial release of the area chart component

# @igloo-ui/hyperlink

## 0.1.15

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.14

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.13

### Patch Changes

- d5c91f5: link shared components with aliases

## 0.1.12

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.11

### Patch Changes

- 0640409: Update packages

  - "react-aria": "^3.21.0",
  - "@react-aria/link": "^3.35",
  - "react-stately": "^3.19.0"

- 0640409: udpate classnames to 2.3.2

## 0.1.10

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.9

### Patch Changes

- cd04a2e: Fix hyperlink secondary + danger color on focus

## 0.1.8

### Patch Changes

- 0a86f13: Update content of README

## 0.1.7

### Patch Changes

- f019f88: fix position of icon with content warp

## 0.1.6

### Patch Changes

- ac5d81a: fix position of icon with content warp

## 0.1.5

### Patch Changes

- ba32c70: fix position of icon with content warp

## 0.1.4

### Patch Changes

- f83c8b4: fix position of icon with content warp

## 0.1.3

### Patch Changes

- 574c7d8: Fix display of translation content

## 0.1.2

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.1.1

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.1.0

### Minor Changes

- 2e23826: Initial release

  Component API

  | name           | description                                                                           |
  | -------------- | ------------------------------------------------------------------------------------- |
  | appearance     | link appearance `primary, secondary, premium, ghost, danger`                          |
  | size           | Changes the size of link, giving more or less padding <br/> `small, medium`           |
  | iconLeading    | Icon to display to the left of link content                                           |
  | iconTrailing   | Icon to display to the right of link content                                          |
  | children       | the content to display inside the link                                                |
  | underline      | add a underline on link                                                               |
  | dataTest       | add a data-test tag for automated tests                                               |
  | className      | add a specific class to the link                                                      |
  | intercomTarget | add a data-intercom-target with unique id to link a components to a Product Tour step |

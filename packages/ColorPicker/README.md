# ColorPicker

Color pickers allow users to assign a color to a given element.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/color-picker` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/color-picker
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/color-picker
```

## Usage

Then to use the component in your code just import it!

```jsx
import ColorPicker from '@igloo-ui/color-picker';

const [selectedColor, setSelectedColor] = React.useState("dandelion200");

<ColorPicker 
    onSelect={
        (color) => {
            setSelectedColor(color);
        }          
    } 
    selectedColor={selectedColor} 
/>
```

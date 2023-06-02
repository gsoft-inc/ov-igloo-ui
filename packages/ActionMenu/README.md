# ActionMenu

This component is used to display a menu that will contain a list of menu options. The menu is dismissible if you click outside the dropdown.

<Example is="custom" />
<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/action-menu` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/action-menu
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/action-menu
```

## Usage

Then to use the component in your code just import it!

### Displaying an action menu

```jsx
import ActionMenu from '@igloo-ui/action-menu';
import Button from '@igloo-ui/button';

<ActionMenu
  options={[
    {
      label: 'Add Item',
      value: 'add',
    },
    {
      label: 'Delete Item',
      value: 'delete',
      disabled: true,
    },
    {
      label: 'Copy Item',
      value: 'copy',
    },
  ]}
  renderReference={(refProps) => {
    return (
      <Button appearance="secondary" {...refProps}>
        Button
      </Button>
    );
  }}
/>;
```

### Calling option events

```jsx
import ActionMenu from '@igloo-ui/action-menu';
import Button from '@igloo-ui/button';

<ActionMenu
  options={[
    {
      label: 'Add Item',
      value: 'add',
      icon: <AddSolid size="medium" />,
      onClick: () => {
        alert('"Add Item" was clicked');
      },
    },
    {
      label: 'Delete Item',
      value: 'delete',
      icon: <Delete size="medium" />,
      onClick: () => {
        alert('"Delete Item" was clicked');
      },
      closeOnSelect: () => {
        // Put some condition here
        // It can also just be a boolean and not a function
        return false;
      },
    },
    {
      label: 'Copy Item',
      value: 'copy',
      icon: <Copy size="medium" />,
      onClick: () => {
        alert('"Copy Item" was clicked');
      },
    },
  ]}
  renderReference={(refProps) => {
    return (
      <Button appearance="secondary" {...refProps}>
        Button
      </Button>
    );
  }}
/>;
```

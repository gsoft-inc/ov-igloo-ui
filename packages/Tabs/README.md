# Tabs

Use to alternate among related views within the same context.

<Example is="custom" />

<ReferenceLinks is="custom" />

## Installation

To install `@igloo-ui/tabs` in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @igloo-ui/tabs
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```bash
yarn add @igloo-ui/tabs
```

## Usage

Then to use the component in your code just import it!

```jsx
import Tabs from '@igloo-ui/tabs';

<Tabs
  tabs={[
    {
      label: 'Premium Tab',
      premium: true,
      children: 'Content of premium tab',
    },
    {
      label: 'Notification Tab',
      notification: true,
      children: 'Content of notification tab',
    },
    {
      label: 'Premium Notification Tab',
      notification: true,
      premium: true,
      children: 'Content of premium notification tab',
    },
  ]}
/>;
```

## Variation

Pass the onClick with the navlink when using react router

```jsx
<BrowserRouter>
  <Tabs
    selected={selected}
    tabs={[
      {
        label: (
          <NavLink to={'/home'} onClick={() => handleTabChange(0)}>
            Home
          </NavLink>
        ),
        children: (
          <Routes>
            <Route path="/home" element={<div>Home page</div>} />
          </Routes>
        ),
      },
      {
        label: (
          <NavLink to={'/about'} onClick={() => handleTabChange(1)}>
            About
          </NavLink>
        ),
        children: (
          <Routes>
            <Route path="/about" element={<div>About page</div>} />
          </Routes>
        ),
      },
    ]}
  />
</BrowserRouter>
```

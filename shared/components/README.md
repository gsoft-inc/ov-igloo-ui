# Shared components

For using the shared component in `packages` add in `tsconfig.json`

```json
{
  //...
  "references": [
    {
      "path": "../../shared/components"
    }
  ]
}
```

and import the component

```typescript jsx
import { SHARED_COMPONENT } from '../../../shared/components';
```

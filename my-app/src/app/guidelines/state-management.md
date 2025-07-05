# State Management Guidelines

This project uses **Zustand** for global state. Stores are organized per domain in `src/app/stores` and use middleware wrappers defined in `storeConfig.ts`.

## Slice Pattern

Each store defines an initial state object and action methods then combines them using Zustand's `combine` middleware. Persistent stores use the custom `withPersist` helper.

```
const initial = { value: 0 }
export const useExample = create(
  withDevtools(
    withPersist('example')(
      withCombine(initial, (set) => ({ increment: () => set(s => ({ value: s.value + 1 })) }))
    )
  )
)
```

## Selectors

Selectors in `hooks.ts` provide optimized access to store slices. Example:

```ts
const user = useCurrentUser();
```

## Testing

Utilities in `testUtils.ts` reset all stores and clear `localStorage`. Jest tests reside beside the stores under `__tests__` and verify actions and persistence.

## Usage

Import stores or selectors from `@app/stores`:

```tsx
import { useAuthStore, useCartTotal } from '@app/stores';
```

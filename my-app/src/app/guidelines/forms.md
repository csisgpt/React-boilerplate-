# Forms & Data Layer

This document outlines patterns for building forms in this project.

1. **Schemas** live in `src/app/forms/schemas.ts` using Zod. Types are inferred via `z.infer`.
2. **Components** like `Input`, `Select`, `Checkbox` wrap React Hook Form bindings and render Tailwind styled controls.
3. **Hooks** such as `useFormWithSchema` simplify integrating Zod schemas. `useFormAutosave` persists draft values and `useServerValidation` merges server errors.
4. **Pages** demonstrate usage in `LoginPage`, `ProfilePage`, `WizardPage`, `DocumentsPage`, and `DataTablePage`.

Accessibility and performance are considered by using semantic elements, proper labels and minimal re-renders.

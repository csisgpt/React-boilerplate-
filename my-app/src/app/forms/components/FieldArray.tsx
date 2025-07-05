import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

interface FieldArrayProps {
  name: string;
  render: (fieldName: string, index: number) => React.ReactNode;
}

export function FieldArray({ name, render }: FieldArrayProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-2 flex items-center">
          {render(`${name}.${index}`, index)}
          <button
            type="button"
            onClick={() => remove(index)}
            className="ml-2 text-sm text-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({})}
        className="text-sm text-blue-600"
      >
        Add
      </button>
    </div>
  );
}

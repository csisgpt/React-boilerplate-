import React, { useState } from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface AutocompleteOption {
  label: string;
  value: string;
}

export interface AutocompleteProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      name,
      label,
      placeholder,
      options,
      value,
      defaultValue,
      onChange,
      onBlur,
      errorMessage,
      rules,
      control,
      className,
      ...rest
    },
    ref,
  ) => {
    const { field } = useController({ name, control, rules, defaultValue });
    const [open, setOpen] = useState(false);

    const handleChange = (val: string) => {
      field.onChange(val);
      onChange?.(val);
    };

    const filtered = options.filter((o) =>
      o.label.toLowerCase().includes((value ?? field.value ?? '').toLowerCase()),
    );

    return (
      <div className={clsx('relative space-y-1', className)} {...rest}>
        {label && <label htmlFor={name}>{label}</label>}
        <motion.input
          id={name}
          ref={ref}
          {...field}
          value={value ?? field.value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            setTimeout(() => setOpen(false), 100);
            field.onBlur();
            onBlur?.();
          }}
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={`${name}-list`}
          className="w-full border rounded px-3 py-2"
        />
        {open && filtered.length > 0 && (
          <ul
            id={`${name}-list`}
            className="absolute z-10 bg-white border w-full mt-1 rounded shadow"
          >
            {filtered.map((o) => (
              <li key={o.value}>
                <button
                  type="button"
                  className="w-full text-left px-3 py-1 hover:bg-gray-100"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleChange(o.value)}
                >
                  {o.label}
                </button>
              </li>
            ))}
          </ul>
        )}
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
Autocomplete.displayName = 'Autocomplete';

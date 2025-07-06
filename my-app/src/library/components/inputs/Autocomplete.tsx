import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { useDebounce } from './useDebounce';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  optionsFetcher: string | ((query: string) => Promise<any[]>);
  debounce?: number;
  minChars?: number;
  value?: string;
  onChange: (val: string) => void;
  className?: string;
}

export const Autocomplete = React.forwardRef<HTMLInputElement, Props>(function Autocomplete(
  {
    optionsFetcher,
    debounce = 300,
    minChars = 1,
    value,
    onChange,
    className,
    ...rest
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(value ?? '');
  const [options, setOptions] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(-1);
  const cache = useRef<Record<string, any[]>>({});

  const debounced = useDebounce(query, debounce);

  useEffect(() => {
    setQuery(value ?? '');
  }, [value]);

  useEffect(() => {
    const fetchOptions = async (q: string) => {
      if (cache.current[q]) {
        setOptions(cache.current[q]);
        return;
      }
      setLoading(true);
      try {
        let result: any[] = [];
        if (typeof optionsFetcher === 'string') {
          const res = await fetch(`${optionsFetcher}?q=${encodeURIComponent(q)}`);
          result = await res.json();
        } else {
          result = await optionsFetcher(q);
        }
        cache.current[q] = result;
        setOptions(result);
      } finally {
        setLoading(false);
      }
    };

    if (debounced.length >= minChars) {
      fetchOptions(debounced);
      setOpen(true);
    } else {
      setOpen(false);
      setOptions([]);
    }
  }, [debounced, minChars, optionsFetcher]);

  const selectOption = (val: string) => {
    setQuery(val);
    onChange(val);
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((prev) => (prev + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((prev) => (prev - 1 + options.length) % options.length);
    } else if (e.key === 'Enter') {
      if (active >= 0 && options[active]) {
        e.preventDefault();
        selectOption(String(options[active]));
      }
    }
  };

  return (
    <div className={clsx('relative', className)}>
      <input
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => query.length >= minChars && setOpen(true)}
        role="combobox"
        aria-expanded={open}
        aria-activedescendant={active >= 0 ? `ac-item-${active}` : undefined}
        className="w-full rounded border p-2 focus:outline-none"
        {...rest}
      />
      {loading && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 animate-spin" data-testid="loading">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" className="opacity-75" />
          </svg>
        </div>
      )}
      <AnimatePresence>
        {open && options.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-10 mt-1 w-full rounded border bg-white shadow"
          >
            {options.map((opt, idx) => (
              <li
                key={idx}
                id={`ac-item-${idx}`}
                role="option"
                aria-selected={idx === active}
                className={clsx('cursor-pointer p-2', idx === active && 'bg-gray-200')}
                onMouseDown={() => selectOption(String(opt))}
                onMouseEnter={() => setActive(idx)}
              >
                {String(opt)}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Autocomplete;

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { useDebounce } from './useDebounce';

export interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  optionsFetcher: string | ((q: string) => Promise<string[]>);
  debounce?: number;
  minChars?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  function Autocomplete(
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
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [query, setQuery] = useState(value ?? '');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);
    const cache = useRef<Record<string, string[]>>({});

    const debouncedQuery = useDebounce(query, debounce);

    useEffect(() => setQuery(value ?? ''), [value]);

    useEffect(() => {
      const fetchOptions = async (q: string) => {
        if (cache.current[q]) {
          setSuggestions(cache.current[q]);
          return;
        }
        setLoading(true);
        try {
          let opts: string[] = [];
          if (typeof optionsFetcher === 'string') {
            const res = await fetch(`${optionsFetcher}?q=${encodeURIComponent(q)}`);
            opts = await res.json();
          } else {
            opts = await optionsFetcher(q);
          }
          cache.current[q] = opts;
          setSuggestions(opts);
        } finally {
          setLoading(false);
        }
      };

      if (debouncedQuery.length >= minChars) {
        fetchOptions(debouncedQuery);
        setOpen(true);
      } else {
        setOpen(false);
        setSuggestions([]);
      }
    }, [debouncedQuery, minChars, optionsFetcher]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      onChange?.(e.target.value);
    };

    const selectOption = (option: string) => {
      setQuery(option);
      onChange?.(option);
      setOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!open) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((a) => (a + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((a) => (a - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === 'Enter') {
        if (active >= 0 && suggestions[active]) {
          e.preventDefault();
          selectOption(suggestions[active]);
        }
      }
    };

    return (
      <div className={clsx('relative', className)}>
        <input
          ref={inputRef}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= minChars && setOpen(true)}
          role="combobox"
          aria-expanded={open}
          aria-activedescendant={active >= 0 ? `ac-item-${active}` : undefined}
          className="w-full border rounded p-2"
          {...rest}
        />
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 animate-spin" data-testid="loading">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75" />
            </svg>
          </div>
        )}
        <AnimatePresence>
          {open && suggestions.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute z-10 mt-1 w-full rounded border bg-white shadow"
            >
              {suggestions.map((opt, idx) => (
                <li
                  id={`ac-item-${idx}`}
                  key={opt}
                  role="option"
                  aria-selected={idx === active}
                  className={clsx('cursor-pointer p-2', idx === active && 'bg-gray-200')}
                  onMouseDown={() => selectOption(opt)}
                  onMouseEnter={() => setActive(idx)}
                >
                  {opt}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

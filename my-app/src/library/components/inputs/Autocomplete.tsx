import React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const handle = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handle);
  }, [value, delay]);
  return debounced;
}

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  optionsFetcher: string | ((query: string) => Promise<string[]>);
  debounce?: number;
  minChars?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Autocomplete = React.forwardRef<HTMLInputElement, Props>(function Autocomplete(
  {
    optionsFetcher,
    debounce = 300,
    minChars = 2,
    value: valueProp,
    onChange,
    className,
    ...rest
  },
  ref,
) {
  const [query, setQuery] = React.useState(valueProp ?? '');
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const cache = React.useRef<Record<string, string[]>>({});
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  React.useEffect(() => {
    setQuery(valueProp ?? '');
  }, [valueProp]);

  const debouncedQuery = useDebounce(query, debounce);

  React.useEffect(() => {
    if (debouncedQuery.length < minChars) {
      setSuggestions([]);
      return;
    }
    if (cache.current[debouncedQuery]) {
      setSuggestions(cache.current[debouncedQuery]);
      return;
    }
    let ignore = false;
    setLoading(true);
    const fetcher =
      typeof optionsFetcher === 'string'
        ? (q: string) =>
            fetch(`${optionsFetcher}?q=${encodeURIComponent(q)}`).then(res => res.json())
        : optionsFetcher;
    fetcher(debouncedQuery)
      .then(res => {
        if (ignore) return;
        cache.current[debouncedQuery] = res;
        setSuggestions(res);
      })
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, [debouncedQuery, optionsFetcher, minChars]);

  const select = (val: string) => {
    onChange?.(val);
    if (valueProp === undefined) setQuery(val);
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (valueProp === undefined) setQuery(val);
    onChange?.(val);
    setOpen(true);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      select(suggestions[activeIndex]);
    }
  };

  const value = valueProp !== undefined ? valueProp : query;

  return (
    <div className="relative">
      <input
        ref={inputRef}
        className={clsx('w-full', className)}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setOpen(true)}
        role="combobox"
        aria-expanded={open}
        aria-activedescendant={activeIndex >= 0 ? `option-${activeIndex}` : undefined}
        {...rest}
      />
      {loading && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 animate-spin border-2 border-gray-300 border-t-gray-600 rounded-full w-4 h-4" />
      )}
      <AnimatePresence>
        {open && suggestions.length > 0 && (
          <motion.ul
            className="absolute z-10 mt-1 w-full bg-white border rounded shadow"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {suggestions.map((s, i) => (
              <li
                key={s}
                id={`option-${i}`}
                className={clsx(
                  'p-2 cursor-pointer hover:bg-gray-200',
                  activeIndex === i && 'bg-gray-200',
                )}
                onMouseDown={e => e.preventDefault()}
                onClick={() => select(s)}
                role="option"
                aria-selected={activeIndex === i}
              >
                {s}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
});

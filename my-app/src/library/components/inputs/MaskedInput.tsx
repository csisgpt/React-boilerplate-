import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  maskPattern: string;
  maskChar?: string;
  value?: string;
  defaultValue?: string;
  onChange: (val: string) => void;
  className?: string;
}

function applyMask(pattern: string, char: string, value: string) {
  const digits = value.replace(/[^\w]/g, '');
  let result = '';
  let di = 0;
  for (const p of pattern) {
    if (p === '#') {
      result += digits[di] ?? char;
      di += 1;
    } else {
      result += p;
    }
  }
  return result;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, Props>(function MaskedInput(
  {
    maskPattern,
    maskChar = '_',
    value,
    defaultValue = '',
    onChange,
    className,
    ...rest
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);

  useEffect(() => {
    if (!isControlled) setInternal(defaultValue);
  }, [defaultValue, isControlled]);

  const rawValue = isControlled ? value! : internal;
  const masked = applyMask(maskPattern, maskChar, rawValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\w]/g, '');
    if (!isControlled) setInternal(raw);
    onChange(raw);
  };

  const clear = () => {
    if (!isControlled) setInternal('');
    onChange('');
  };

  return (
    <div className={clsx('relative inline-flex items-center', className)}>
      <input
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }}
        value={masked}
        onChange={handleChange}
        aria-label={rest['aria-label']}
        aria-invalid={rest['aria-invalid']}
        className="w-full rounded border p-2 pr-6 focus:outline-none"
        {...rest}
      />
      {rawValue && (
        <button
          type="button"
          onClick={clear}
          tabIndex={-1}
          className="absolute right-1 text-gray-500"
          aria-label="Clear"
        >
          ×
        </button>
      )}
    </div>
  );
});

export default MaskedInput;

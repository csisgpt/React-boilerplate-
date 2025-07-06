import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export interface MaskedInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  maskPattern: string;
  maskChar?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  className?: string;
}

function applyMask(pattern: string, maskChar: string, value: string) {
  const digits = value.replace(/[^\w]/g, '');
  let result = '';
  let di = 0;
  for (const ch of pattern) {
    if (ch === '#') {
      result += digits[di] ?? maskChar;
      di += 1;
    } else {
      result += ch;
    }
  }
  return result;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  function MaskedInput(
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
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const isControlled = value !== undefined;
    const [internal, setInternal] = useState(defaultValue);
    const val = isControlled ? value! : internal;

    const masked = applyMask(maskPattern, maskChar, val);

    useEffect(() => {
      if (!isControlled) setInternal(defaultValue);
    }, [defaultValue, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^\w]/g, '');
      if (!isControlled) setInternal(raw);
      onChange?.(raw);
    };

    const clear = () => {
      if (!isControlled) setInternal('');
      onChange?.('');
    };

    return (
      <div className={clsx('relative inline-flex items-center', className)}>
        <input
          ref={inputRef}
          value={masked}
          onChange={handleChange}
          aria-label={rest['aria-label']}
          aria-invalid={rest['aria-invalid']}
          className="border rounded p-2 pr-6"
          {...rest}
        />
        {val && (
          <button
            type="button"
            onClick={clear}
            className="absolute right-1 text-gray-500"
            tabIndex={-1}
            aria-label="Clear"
          >
            ×
          </button>
        )}
      </div>
    );
  },
);

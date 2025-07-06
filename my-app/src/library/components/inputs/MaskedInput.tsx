import React from 'react';
import clsx from 'clsx';

function applyMask(value: string, pattern: string, maskChar: string) {
  const digits = value.replace(/\D/g, '');
  let result = '';
  let di = 0;
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    if (p === '#') {
      result += digits[di] ?? maskChar;
      di += 1;
    } else {
      result += p;
    }
  }
  return result;
}

function unmask(masked: string) {
  return masked.replace(/\D/g, '');
}

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  maskPattern: string;
  maskChar?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, Props>(function MaskedInput(
  { maskPattern, maskChar = '_', value: valueProp, defaultValue, onChange, className, ...rest },
  ref,
) {
  const [raw, setRaw] = React.useState(() => unmask(valueProp ?? defaultValue ?? ''));
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setRaw(unmask(valueProp));
    }
  }, [valueProp]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextRaw = unmask(e.target.value);
    if (valueProp === undefined) setRaw(nextRaw);
    onChange?.(applyMask(nextRaw, maskPattern, maskChar));
  };

  const clear = () => {
    if (valueProp === undefined) setRaw('');
    onChange?.('');
  };

  const masked = applyMask(raw, maskPattern, maskChar);

  return (
    <div className="relative inline-block">
      <input
        ref={inputRef}
        className={clsx(className, 'pr-6')}
        value={valueProp !== undefined ? valueProp : masked}
        onChange={handleChange}
        aria-label={rest['aria-label']}
        aria-invalid={rest['aria-invalid']}
        {...rest}
      />
      {masked && (
        <button
          type="button"
          className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500"
          onClick={clear}
        >
          ×
        </button>
      )}
    </div>
  );
});

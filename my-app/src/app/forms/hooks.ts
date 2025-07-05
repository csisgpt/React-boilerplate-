import { useEffect } from 'react';
import {
  useForm,
  UseFormProps,
  SubmitHandler,
  FieldValues,
  Resolver,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';

/** Wrap useForm with Zod schema */
export function useFormWithSchema<T extends FieldValues>(
  schema: ZodType<T>,
  options?: UseFormProps<T>
) {
  return useForm<T>({ resolver: zodResolver(schema), ...options });
}

/** Simple multi-step form manager */
export function useMultiStepForm<T>(steps: number) {
  const { handleSubmit, ...form } = useForm<T>();
  let current = 0;

  const next = () => {
    if (current < steps - 1) current += 1;
  };

  const back = () => {
    if (current > 0) current -= 1;
  };

  const onSubmit: SubmitHandler<T> = data => {
    console.log('submit', data);
  };

  return { ...form, handleSubmit: handleSubmit(onSubmit), next, back, current };
}

/** Autosave form values to localStorage */
export function useFormAutosave<T extends FieldValues>(key: string, values: T) {
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.assign(values, parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [key, values]);
}

/** Merge server side errors into form */
export function useServerValidation(errors: Record<string, string>, setError: any) {
  useEffect(() => {
    Object.entries(errors).forEach(([k, v]) => setError(k, { message: v }));
  }, [errors, setError]);
}

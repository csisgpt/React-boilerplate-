import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@app/components/forms';
import { Button } from '../Button';
import clsx from 'clsx';

export interface SearchFormData {
  query: string;
}

export interface SearchFormProps {
  onSearch?: (data: SearchFormData) => void;
  className?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, className }) => {
  const { control, handleSubmit } = useForm<SearchFormData>({ defaultValues: { query: '' } });

  const submit = handleSubmit((data) => onSearch?.(data));

  return (
    <form onSubmit={submit} className={clsx('flex gap-2', className)}>
      <Input name="query" placeholder="Search" control={control} className="flex-1" />
      <Button type="submit">Go</Button>
    </form>
  );
};

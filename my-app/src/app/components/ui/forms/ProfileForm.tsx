import React from 'react';
import { useFormWithSchema } from '@app/forms/hooks';
import { ProfileFormSchema, ProfileFormData } from '@app/forms/schemas';
import { Input, Textarea } from '@app/components/forms';
import { Button } from '../Button';
import clsx from 'clsx';

export interface ProfileFormProps {
  onSubmit?: (data: ProfileFormData) => void;
  className?: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit, className }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormWithSchema<ProfileFormData>(ProfileFormSchema);

  const submit = handleSubmit((data) => onSubmit?.(data));

  return (
    <form onSubmit={submit} className={clsx('space-y-4', className)}>
      <Input name="name" label="Name" control={control} errorMessage={errors.name?.message} />
      <Textarea name="bio" label="Bio" control={control} errorMessage={errors.bio?.message} />
      <Button type="submit" className="w-full">
        Save
      </Button>
    </form>
  );
};

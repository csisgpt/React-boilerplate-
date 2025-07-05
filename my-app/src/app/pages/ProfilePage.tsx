import React from 'react';
import { PageTemplate } from '@/app/components/layout';
import {
  FormProvider,
  Input,
  Textarea,
  FileUpload,
  FieldArray,
  ConditionalField,
} from '@/app/forms/components';
import { useFormWithSchema, useFormAutosave } from '@/app/forms/hooks';
import { ProfileFormSchema, ProfileFormData } from '@/app/forms/schemas';

export function ProfilePage() {
  const form = useFormWithSchema<ProfileFormData>(ProfileFormSchema, {
    defaultValues: { name: '', bio: '' },
  });

  useFormAutosave('profile', form.watch());

  const onSubmit = (data: ProfileFormData) => {
    console.log('profile', data);
  };

  return (
    <PageTemplate title="Profile">
      <FormProvider form={form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Input name="name" label="Name" />
          <Textarea name="bio" label="Bio" />
          <FileUpload name="avatarFile" />
          <FieldArray
            name="phones"
            render={(fieldName, index) => <Input name={`${fieldName}`} label={`Phone ${index + 1}`} />}
          />
          <ConditionalField name="bio" when={v => !!v}>
            <p className="text-sm text-gray-500">Thanks for adding a bio!</p>
          </ConditionalField>
          <button type="submit" className="btn btn-primary mt-4">
            Save
          </button>
        </form>
      </FormProvider>
    </PageTemplate>
  );
}

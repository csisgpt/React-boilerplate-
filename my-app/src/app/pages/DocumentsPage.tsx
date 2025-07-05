import React from 'react';
import { PageTemplate } from '@/app/components/layout';
import { FormProvider, FileUpload } from '@/app/forms/components';
import { useForm } from 'react-hook-form';

export function DocumentsPage() {
  const form = useForm<{ files: File[] }>({ defaultValues: { files: [] } });

  const onSubmit = (data: { files: File[] }) => {
    console.log('files', data);
  };

  return (
    <PageTemplate title="Documents">
      <FormProvider form={form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FileUpload name="files" multiple />
          <button type="submit" className="btn btn-primary mt-4">
            Upload
          </button>
        </form>
      </FormProvider>
    </PageTemplate>
  );
}

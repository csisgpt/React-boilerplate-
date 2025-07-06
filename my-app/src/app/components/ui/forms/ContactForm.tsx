import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Textarea } from '@app/components/forms';
import { Button } from '../Button';
import clsx from 'clsx';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Required'),
});

export type ContactFormData = z.infer<typeof schema>;

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const submit = handleSubmit((data) => onSubmit?.(data));

  return (
    <form onSubmit={submit} className={clsx('space-y-4', className)}>
      <Input name="name" label="Name" control={control} errorMessage={errors.name?.message} />
      <Input
        name="email"
        label="Email"
        type="email"
        control={control}
        errorMessage={errors.email?.message}
      />
      <Textarea
        name="message"
        label="Message"
        control={control}
        errorMessage={errors.message?.message}
      />
      <Button type="submit" className="w-full">
        Send
      </Button>
    </form>
  );
};

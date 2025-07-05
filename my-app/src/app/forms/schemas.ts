import { z } from 'zod';

/** Login form schema */
export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type LoginFormData = z.infer<typeof LoginFormSchema>;

/** Profile form schema */
export const ProfileFormSchema = z.object({
  name: z.string().min(1),
  bio: z.string().optional(),
  avatarFile: z.any().optional(),
});
export type ProfileFormData = z.infer<typeof ProfileFormSchema>;

/** Wizard step schemas */
export const WizardStep1Schema = z.object({
  firstName: z.string().min(1),
});
export type WizardStep1Data = z.infer<typeof WizardStep1Schema>;

export const WizardStep2Schema = z.object({
  age: z.number().min(0),
});
export type WizardStep2Data = z.infer<typeof WizardStep2Schema>;

export const WizardStep3Schema = z.object({
  confirm: z.boolean(),
});
export type WizardStep3Data = z.infer<typeof WizardStep3Schema>;

// You can use Yup by swapping zod schemas with yup.object().shape({...})

import { devtools, persist, combine } from 'zustand/middleware';

export const withDevtools = devtools;
export const withPersist = (name: string) => (config: any) => persist(config, { name });
export const withCombine = combine;

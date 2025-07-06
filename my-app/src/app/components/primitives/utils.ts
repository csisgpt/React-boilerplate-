export type ResponsiveProp = string | Record<string, string>;

export const breakpoints: Record<string, string> = {
  base: '',
  sm: 'sm:',
  md: 'md:',
  lg: 'lg:',
  xl: 'xl:',
  '2xl': '2xl:',
};

export function buildClasses(value: ResponsiveProp | undefined, prefix: string) {
  if (!value) return [] as string[];
  if (typeof value === 'string') return [`${prefix}${value}`];
  return Object.entries(value).map(([bp, val]) => `${breakpoints[bp] ?? ''}${prefix}${val}`);
}

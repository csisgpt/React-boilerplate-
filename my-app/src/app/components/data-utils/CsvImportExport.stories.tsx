import type { Meta, StoryObj } from '@storybook/react';
import { CsvImportExport } from './CsvImportExport';

const meta: Meta<typeof CsvImportExport> = {
  title: 'data-utils/CsvImportExport',
  component: CsvImportExport,
  args: { children: 'CsvImportExport' },
};
export default meta;
export const Default: StoryObj<typeof CsvImportExport> = {};

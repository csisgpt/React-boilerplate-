import type { Meta, StoryObj } from '@storybook/react';
import { CsvImportExport, CsvImportExportProps } from './CsvImportExport';

const meta: Meta<CsvImportExportProps<any>> = {
  title: 'data-utils/CsvImportExport',
  component: CsvImportExport,
  args: {
    data: [],
    onData: () => {},
  },
};
export default meta;

type Story = StoryObj<CsvImportExportProps<any>>;

export const Default: Story = {};

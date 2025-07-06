import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { StatsCard } from '@/app/components/data/StatsCard';
import { ChartWrapper } from '@/app/components/data-utils/ChartWrapper';
import { Table } from '@/app/components/data/Table';

const chartData = Array.from({ length: 7 }, (_, i) => ({ label: `Day ${i + 1}`, value: Math.random() * 100 }));

const tableData = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  status: ['Active', 'Pending'][i % 2],
}));

const columns = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
];

export const DashboardPage: React.FC = () => (
  <PageTemplate title="Dashboard" breadcrumbItems={[{ label: 'Dashboard' }]}>
    <Helmet>
      <title>Dashboard – MyApp</title>
    </Helmet>
    <div className="grid gap-4 sm:grid-cols-3">
      <StatsCard title="Users" value="1,245" />
      <StatsCard title="Revenue" value="$9,876" />
      <StatsCard title="Uptime" value="99.9%" />
    </div>
    <ChartWrapper data={chartData} type="line" className="mt-6" />
    <Table data={tableData} columns={columns} sortable className="mt-6" />
  </PageTemplate>
);

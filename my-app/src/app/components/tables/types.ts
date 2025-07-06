export interface Column {
  key: string;
  title: string;
  sortable?: boolean;
}

export interface TableProps {
  columns: Column[];
  data: any[];
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  expandable?: boolean;
  virtualized?: boolean;
  responsive?: boolean;
  exportable?: boolean;
  onRowClick?: (rowData: any) => void;
  onEditSave?: (newData: any) => void;
  onSortChange?: (newOrder: any[]) => void;
}

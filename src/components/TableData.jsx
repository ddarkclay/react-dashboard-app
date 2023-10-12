import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import rows from '../mockData/table';

const columns = [
  { field: 'Campaigns', headerName: 'Campaigns', width: 130 },
  { field: 'Clicks', headerName: 'Clicks',type: 'number', width: 130 },
  { field: 'Cost', headerName: 'Cost',type: 'number', width: 130 },
  { field: 'Conversions',headerName: 'Conversions',type: 'number',width: 90},
  { field: 'Revenue',headerName: 'Revenue',type: 'number', width: 160},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%',marginTop: '100px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
      />
    </div>
  );
}

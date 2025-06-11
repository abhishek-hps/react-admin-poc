
import {
  List,
  Datagrid,
  TextField,
  TextInput,
  TopToolbar,
  CreateButton,
  ExportButton,
  Pagination,
} from 'react-admin';
import { Box, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

const SparkmeterFilter = [
  <TextInput label="Search here..." source="q" alwaysOn />,
];

const SparkmeterActions = () => (
  <TopToolbar>
    <CreateButton label="Add" />
    <ExportButton />
  </TopToolbar>
);

const SparkmeterPagination = () => (
  <Pagination rowsPerPageOptions={[10, 20, 50]} />
);

export const SparkmeterV2Details = () => (
  <Box sx={{ bgcolor: 'background.default', p: 3, minHeight: '100vh', }}>
    <Typography variant="h5" color="text.primary" gutterBottom>
      SparkmeterV2 Details
    </Typography>

    <List
      filters={SparkmeterFilter}
      actions={<SparkmeterActions />}
      pagination={<SparkmeterPagination />}
      
    >
      <Datagrid
        bulkActionButtons={false}
        sx={{
          '& .RaDatagrid-headerCell': {
            backgroundColor: '#1e2633',
            color: '#00ff66',
            fontWeight: 'bold',
          },
          '& .RaDatagrid-rowCell': {
            backgroundColor: '#1e2633',
            color: 'white',
          },
          '& .RaDatagrid-row:hover': {
            backgroundColor: '#2a3344',
          },
          '& .MuiSvgIcon-root': {
            color: '#00ff66',
          },
        }}
      >
        <TextField source="meterSerial" label="Meter Serial" />
        <TextField source="meterGUID" label="MeterGUID" />
        <TextField source="meterState" label="MeterState" />
        <TextField source="poleId" label="PoleId" />
        <TextField source="customerId" label="CustomerId" />
        <Edit />
      </Datagrid>
    </List>
  </Box>
);

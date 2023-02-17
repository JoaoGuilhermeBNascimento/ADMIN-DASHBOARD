import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedicon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';
import { palette } from '@mui/system';

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      flex: 1,
    },
    {
      field: 'acess',
      headerName: 'Acess Level',
      flex: 1,
      renderCell: ({ row: { acess } }) => {
        return (
          <Box
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={
              acess === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius='4px'
          >
            {acess === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {acess === 'manager' && <SecurityOutlinedIcon />}
            {acess === 'user' && <LockOpenOutlinedicon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {acess}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m='20px' >
      <Header title='TEAM' subtitle='Managing the Team Members' />
      <Box 
        m='40px 0 0 0 '
        height='75vh'
        
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

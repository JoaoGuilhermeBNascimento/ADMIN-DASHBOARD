import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import GeopraphyChart from '../../components/GeopraphyChart';
import { tokens } from '../../theme';

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb='20px'>
      <Header title='Map' subtitle='' />
      <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeopraphyChart />
      </Box>
    </Box>
  );
}
